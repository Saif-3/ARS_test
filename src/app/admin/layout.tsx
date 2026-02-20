"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import {
    BarChart3,
    LayoutDashboard,
    Users,
    CircleDollarSign,
    Settings,
    History,
    LogOut,
    Search,
    Bell
} from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const navItems = [
        { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
        { label: "User Management", href: "/admin/users", icon: Users },
        { label: "Financials", href: "/admin/financials", icon: CircleDollarSign },
        { label: "Survey Config", href: "/admin/surveys", icon: Settings },
        { label: "Audit Logs", href: "/admin/logs", icon: History },
    ];

    return (
        <div className="flex bg-background-dark min-h-screen w-full overflow-hidden mt-[-64px]">
            {/* Sidebar */}
            <aside className="w-64 flex-shrink-0 border-r border-forest-light bg-background-dark flex flex-col justify-between p-4 z-20 h-[100vh]">
                <div className="flex flex-col gap-8 pt-4">

                    {/* Branding */}
                    <div className="flex items-center gap-3 px-2">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-dark shadow-lg shadow-primary/20 text-white">
                            <BarChart3 className="w-5 h-5" />
                        </div>
                        <div>
                            <h1 className="text-white text-lg font-bold tracking-tight">ARS Surveys</h1>
                            <p className="text-secondary text-xs font-medium">Admin Portal</p>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex flex-col gap-1">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${isActive
                                        ? "bg-primary/20 text-primary"
                                        : "text-secondary hover:text-white hover:bg-forest-light"
                                        }`}
                                >
                                    <Icon className={`w-5 h-5 ${isActive ? "" : "group-hover:text-white"}`} />
                                    <span className={`text-sm ${isActive ? "font-semibold" : "font-medium"}`}>{item.label}</span>
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* User Profile */}
                <div className="flex items-center gap-3 px-3 py-3 rounded-lg bg-forest border border-forest-light mt-4">
                    <div className="relative">
                        <div className="w-9 h-9 flex items-center justify-center bg-primary/30 text-white font-bold rounded-full border border-forest-light">
                            AR
                        </div>
                        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-primary border-2 border-forest rounded-full"></div>
                    </div>
                    <div className="flex flex-col overflow-hidden">
                        <span className="text-white text-sm font-medium truncate">Alexander R.</span>
                        <span className="text-secondary text-xs truncate">Super Admin</span>
                    </div>
                    <button onClick={() => { }} className="ml-auto text-secondary hover:text-white">
                        <LogOut className="w-5 h-5" />
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col h-[100vh] overflow-hidden relative">

                {/* Header */}
                <header className="h-16 flex items-center justify-between px-8 border-b border-forest-light bg-background-dark flex-shrink-0 z-10 pt-4">
                    <div className="flex items-center gap-4">
                        <h2 className="text-xl font-bold text-white tracking-tight">User Command Center</h2>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-forest-light text-secondary uppercase tracking-wider border border-secondary/20">v2.4.0</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative group hidden md:block">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
                            <input
                                className="bg-forest border border-forest-light text-white text-sm rounded-lg pl-10 pr-4 py-2 w-64 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-secondary/70"
                                placeholder="Search system..."
                                type="text"
                            />
                        </div>
                        <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-forest border border-forest-light text-secondary hover:text-white hover:border-primary/50 transition-colors relative">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-forest"></span>
                        </button>
                        <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-forest border border-forest-light text-secondary hover:text-white hover:border-primary/50 transition-colors">
                            <Settings className="w-5 h-5" />
                        </button>
                    </div>
                </header>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-gradient-to-b from-background-dark to-black">
                    <div className="max-w-[1400px] mx-auto flex flex-col gap-8">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}
