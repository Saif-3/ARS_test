import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";



export async function PATCH(req: Request, context: { params: Promise<{ id: string }> }) {
    try {
        const { id: withdrawalId } = await context.params;
        const session = await getServerSession(authOptions);

        if (!session || !session.user || !session.user.email) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const admin = await prisma.user.findUnique({
            where: { email: session.user.email }
        });

        if (!admin || admin.role !== "ADMIN") {
            return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        }

        const body = await req.json();
        const { action } = body; // 'APPROVE' or 'REJECT' or 'FLAG'

        const withdrawal = await prisma.withdrawalRequest.findUnique({
            where: { id: withdrawalId },
            include: { user: true }
        });

        if (!withdrawal) {
            return NextResponse.json({ error: "Withdrawal request not found" }, { status: 404 });
        }

        let newStatus = withdrawal.status;

        if (action === "APPROVE") {
            newStatus = "APPROVED";

            // Deduct from pending balance if we want. Currently, balance is tracked as single field in User.
            // If they requested withdrawal, their balance should be reduced. We already reduced it on request, 
            // so approving just changes status.
        } else if (action === "REJECT") {
            newStatus = "REJECTED";

            // Refund balance because it was rejected
            await prisma.user.update({
                where: { id: withdrawal.userId },
                data: { balance: { increment: withdrawal.amount } }
            });
        } else if (action === "FLAG") {
            newStatus = "FLAGGED";
        } else {
            return NextResponse.json({ error: "Invalid action" }, { status: 400 });
        }

        const updatedWithdrawal = await prisma.withdrawalRequest.update({
            where: { id: withdrawalId },
            data: { status: newStatus }
        });

        return NextResponse.json({ success: true, withdrawal: updatedWithdrawal });
    } catch (error) {
        console.error("Admin Withdrawal Update Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
