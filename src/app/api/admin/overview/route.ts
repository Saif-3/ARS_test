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

        // Get total users
        const totalUsers = await prisma.user.count();

        // Get all users for table and stats
        const users = await prisma.user.findMany({
            orderBy: { createdAt: "desc" },
            take: 100, // Limit for simplicity
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                balance: true,
                createdAt: true,
            }
        });

        // Mock statuses since we don't have a specific explicit "Status" field on User yet, we can base it on something or just say everyone is active for now.
        // Or if we want, we can add a 'status' to User. For now, active = 100%, banned = 0
        const activeUsersCount = totalUsers;
        const bannedUsersCount = 0;

        // Total USD Processed (sum of all users earnings or sum of all subscriptions or withdrawals).
        // For now, let's sum all total earnings + balance.
        const allUsers = await prisma.user.findMany({ select: { earnings: true } });
        const totalUSDProcessed = allUsers.reduce((sum: number, u: { earnings: number }) => sum + u.earnings, 0);

        return NextResponse.json({
            overview: {
                totalUsers,
                activeUsersCount,
                bannedUsersCount,
                totalUSDProcessed
            },
            users: users.map((u: any) => ({
                id: u.id,
                name: u.name,
                email: u.email,
                role: u.role,
                balance: u.balance,
                joinedDate: u.createdAt,
                status: "ACTIVE"
            }))
        });
    } catch (error) {
        console.error("Admin Dashboard API Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
