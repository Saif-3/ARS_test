"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import {
    BarChart3,
    LayoutDashboard,
    ClipboardList,
    Wallet,
    Users,
    LineChart,
    Settings,
    LogOut,
    HelpCircle
} from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const navItems = [
        { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
        { label: "Surveys", href: "/dashboard/surveys", icon: ClipboardList },
        { label: "Earnings", href: "/dashboard/earnings", icon: Wallet },
        { label: "Referrals", href: "/dashboard/referrals", icon: Users },
        { label: "Analytics", href: "/dashboard/analytics", icon: LineChart },
        { label: "Support", href: "/dashboard/support", icon: HelpCircle },
    ];

    return (
        <div className="flex h-[calc(100vh-64px)] w-full overflow-hidden mt-[-64px]">
            {/* Sidebar */}
            <aside className="hidden w-72 flex-col sidebar-gradient border-r border-forest-light lg:flex z-20">
                <div className="flex flex-col h-full p-6">

                    <div className="flex items-center gap-3 mb-10 pt-2">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/20 text-primary">
                            <BarChart3 className="w-6 h-6" />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-white text-lg font-bold tracking-tight">ARS Surveys</h1>
                            <p className="text-secondary text-xs">Fintech Dashboard</p>
                        </div>
                    </div>

                    <nav className="flex-1 flex flex-col gap-2">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${isActive
                                        ? "bg-primary/20 border border-primary/20 text-white"
                                        : "text-secondary hover:bg-white/5 hover:text-white"
                                        }`}
                                >
                                    <Icon className={`w-5 h-5 transition-colors ${isActive ? "text-primary text-white" : "group-hover:text-white"}`} />
                                    <span className="text-sm font-medium">{item.label}</span>
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Bottom Actions */}
                    <div className="mt-auto pt-6 border-t border-forest-light flex flex-col gap-4">
                        <Link href="/dashboard/settings" className="flex items-center gap-3 px-4 py-2 rounded-lg text-secondary hover:bg-white/5 hover:text-white transition-all duration-200">
                            <Settings className="w-5 h-5" />
                            <span className="text-sm font-medium">Settings</span>
                        </Link>
                        <div className="p-4 rounded-xl bg-forest-light/50 border border-forest-light">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-full bg-primary/30 border-2 border-primary/30 flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">AM</span>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-white">Alex Morgan</p>
                                    <p className="text-xs text-secondary">Premium User</p>
                                </div>
                            </div>
                            <button
                                onClick={() => signOut()}
                                className="w-full py-2 px-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                            >
                                <LogOut className="w-4 h-4" />
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col h-[100vh] relative overflow-y-auto bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center">
                <div className="absolute inset-0 bg-background-dark/90 pointer-events-none z-0"></div>
                <div className="relative z-10 flex flex-col flex-1 p-6 md:p-10 max-w-7xl mx-auto w-full">
                    {children}
                </div>
            </main>
        </div>
    );
}
