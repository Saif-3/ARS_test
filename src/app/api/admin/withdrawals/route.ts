import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";



export async function GET() {
    try {
        const session = await getServerSession(authOptions);

        if (!session || !session.user || !session.user.email) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const user = await prisma.user.findUnique({
            where: { email: session.user.email }
        });

        if (!user || user.role !== "ADMIN") {
            return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        }

        const withdrawals = await prisma.withdrawalRequest.findMany({
            include: { user: { select: { name: true, id: true, email: true } } },
            orderBy: { createdAt: "desc" }
        });

        const pendingCount = withdrawals.filter((w: any) => w.status === "PENDING").length;
        const flaggedCount = withdrawals.filter((w: any) => w.status === "FLAGGED" || w.status === "REJECTED").length;

        // Total payouts today:
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const payoutsToday = withdrawals
            .filter((w: any) => w.status === "APPROVED" && w.updatedAt >= today)
            .reduce((sum: number, w: any) => sum + w.amount, 0);

        return NextResponse.json({
            stats: {
                pendingRequests: pendingCount,
                payoutsToday: payoutsToday,
                flaggedLinks: flaggedCount
            },
            requests: withdrawals.map((w: any) => ({
                id: w.id,
                user: {
                    name: w.user.name || "Unknown",
                    id: w.user.id,
                    email: w.user.email
                },
                amount: w.amount,
                method: w.method,
                status: w.status,
                createdAt: w.createdAt
            }))
        });
    } catch (error) {
        console.error("Admin Withdrawals API Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
