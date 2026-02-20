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
            where: { email: session.user.email },
            include: {
                servers: true,
                withdrawals: {
                    orderBy: { createdAt: "desc" },
                    take: 5
                }
            }
        });

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        // Calculate pending withdrawals
        const pendingWithdrawal = user.withdrawals
            .filter((w: any) => w.status === "PENDING")
            .reduce((sum: number, w: any) => sum + w.amount, 0);

        // Calculate VPS status (if user has any active server)
        const hasActiveServer = user.servers.some((s: any) => s.status === "ACTIVE");
        const vpsUptime = hasActiveServer ? "99.9%" : "N/A";

        return NextResponse.json({
            overview: {
                totalEarnings: user.earnings,
                balance: user.balance,
                pendingWithdrawal,
                vpsUptime,
                hasActiveServer
            },
            recentActivity: user.withdrawals.map((w: any) => ({
                id: w.id,
                type: "Withdrawal",
                status: w.status,
                amount: w.amount,
                date: w.createdAt,
                method: w.method
            }))
        });
    } catch (error) {
        console.error("Dashboard API Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
