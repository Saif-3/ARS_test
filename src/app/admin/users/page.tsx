"use client";

import {
    Search,
    Filter,
    Plus,
    MoreVertical,
    ShieldAlert,
    ShieldCheck,
    Edit2,
    Server,
    ChevronDown,
    Users,
    UserCheck,
    UserX,
    Clock,
    X,
    Check,
} from "lucide-react";
import { useState } from "react";

const users = [
    { id: "U001", name: "Mohammad Rahim",  email: "m.rahim@mail.com",    role: "USER",  joinedDate: "Nov 15, 2024", balance: 284.50, status: "ACTIVE",    vpsAssigned: true,  package: "Starter 2" },
    { id: "U002", name: "Fatema Khatun",   email: "f.khatun@mail.com",   role: "USER",  joinedDate: "Dec 02, 2024", balance: 143.00, status: "ACTIVE",    vpsAssigned: true,  package: "Starter 1" },
    { id: "U003", name: "Abdul Karim",     email: "a.karim@mail.com",    role: "USER",  joinedDate: "Jan 05, 2025", balance: 0,      status: "BANNED",    vpsAssigned: false, package: null },
    { id: "U004", name: "Sumaiya Begum",   email: "s.begum@mail.com",    role: "USER",  joinedDate: "Oct 20, 2024", balance: 512.00, status: "ACTIVE",    vpsAssigned: true,  package: "Renewal" },
    { id: "U005", name: "Hasan Ali",       email: "h.ali@mail.com",      role: "USER",  joinedDate: "Jan 18, 2025", balance: 0,      status: "PENDING",   vpsAssigned: false, package: null },
    { id: "U006", name: "Nusrat Jahan",    email: "n.jahan@mail.com",    role: "USER",  joinedDate: "Dec 19, 2024", balance: 98.50,  status: "ACTIVE",    vpsAssigned: true,  package: "Starter 1" },
    { id: "U007", name: "Rakib Hossain",   email: "r.hossain@mail.com",  role: "USER",  joinedDate: "Nov 30, 2024", balance: 341.00, status: "ACTIVE",    vpsAssigned: true,  package: "Starter 2" },
    { id: "U008", name: "Parveen Sultana", email: "p.sultana@mail.com",  role: "USER",  joinedDate: "Jan 10, 2025", balance: 22.00,  status: "ACTIVE",    vpsAssigned: true,  package: "Starter 1" },
];

const statusConfig: Record<string, { label: string; color: string; bg: string; border: string; dot: string }> = {
    ACTIVE:  { label: "Active",  color: "text-primary",    bg: "bg-primary/10",    border: "border-primary/20",    dot: "bg-primary"    },
    BANNED:  { label: "Banned",  color: "text-red-400",    bg: "bg-red-400/10",    border: "border-red-400/20",    dot: "bg-red-400"    },
    PENDING: { label: "Pending", color: "text-yellow-400", bg: "bg-yellow-400/10", border: "border-yellow-400/20", dot: "bg-yellow-400" },
};

type User = typeof users[number];

function VpsModal({ user, onClose }: { user: User; onClose: () => void }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
            <div className="relative bg-forest border border-forest-light rounded-2xl p-6 w-full max-w-md shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h3 className="text-white font-bold text-lg">Assign VPS</h3>
                        <p className="text-secondary text-sm mt-0.5">For: {user.name}</p>
                    </div>
                    <button onClick={onClose} className="text-secondary hover:text-white transition-colors p-1">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="flex flex-col gap-4">
                    {[
                        { label: "IP Address",  placeholder: "185.220.101.xx",  type: "text"     },
                        { label: "Username",    placeholder: "worker_ars_XXXX", type: "text"     },
                        { label: "Password",    placeholder: "••••••••••••",    type: "password" },
                    ].map((field) => (
                        <div key={field.label}>
                            <label className="block text-secondary text-xs font-medium uppercase tracking-wider mb-1.5">
                                {field.label}
                            </label>
                            <input
                                type={field.type}
                                placeholder={field.placeholder}
                                className="w-full bg-background-dark border border-forest-light text-white text-sm rounded-lg px-3 py-2.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-secondary/50"
                            />
                        </div>
                    ))}

                    <div>
                        <label className="block text-secondary text-xs font-medium uppercase tracking-wider mb-1.5">Package</label>
                        <select className="w-full bg-background-dark border border-forest-light text-white text-sm rounded-lg px-3 py-2.5 focus:outline-none focus:border-primary transition-all cursor-pointer">
                            <option>Starter 1 — $3.50/day</option>
                            <option>Starter 2 — $7.00/day</option>
                            <option>Renewal — $3.50/day</option>
                        </select>
                    </div>
                </div>

                <div className="flex gap-3 mt-6">
                    <button
                        onClick={onClose}
                        className="flex-1 py-2.5 rounded-lg border border-forest-light text-secondary hover:text-white hover:bg-forest-light text-sm font-medium transition-colors"
                    >
                        Cancel
                    </button>
                    <button className="flex-1 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-background-dark font-bold text-sm transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                        <Server className="w-4 h-4" />
                        Assign VPS
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function AdminUsersPage() {
    const [filter, setFilter]     = useState("All");
    const [search, setSearch]     = useState("");
    const [vpsTarget, setVpsTarget] = useState<User | null>(null);

    const filtered = users.filter((u) => {
        const matchStatus = filter === "All" || u.status === filter.toUpperCase();
        const matchSearch = u.name.toLowerCase().includes(search.toLowerCase()) ||
                            u.email.toLowerCase().includes(search.toLowerCase());
        return matchStatus && matchSearch;
    });

    const counts = {
        total:   users.length,
        active:  users.filter(u => u.status === "ACTIVE").length,
        banned:  users.filter(u => u.status === "BANNED").length,
        pending: users.filter(u => u.status === "PENDING").length,
    };

    return (
        <>
            {vpsTarget && <VpsModal user={vpsTarget} onClose={() => setVpsTarget(null)} />}

            <div className="flex flex-col gap-6">

                {/* Stats Strip */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { icon: Users,     label: "Total Users",   value: counts.total,   color: "text-white",       bg: "bg-white/10"          },
                        { icon: UserCheck, label: "Active",        value: counts.active,  color: "text-primary",     bg: "bg-primary/20"        },
                        { icon: UserX,     label: "Banned",        value: counts.banned,  color: "text-red-400",     bg: "bg-red-400/20"        },
                        { icon: Clock,     label: "Pending",       value: counts.pending, color: "text-yellow-400",  bg: "bg-yellow-400/20"     },
                    ].map((s) => {
                        const Icon = s.icon;
                        return (
                            <div key={s.label} className="bg-forest border border-forest-light rounded-xl p-4 flex items-center gap-4">
                                <div className={`p-2.5 rounded-lg ${s.bg} ${s.color}`}>
                                    <Icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-secondary text-xs">{s.label}</p>
                                    <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Table Card */}
                <div className="bg-forest border border-forest-light rounded-xl flex flex-col shadow-xl shadow-black/20">

                    {/* Controls */}
                    <div className="p-5 border-b border-forest-light flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div>
                            <h3 className="text-white text-lg font-bold">User Directory</h3>
                            <p className="text-secondary text-xs mt-0.5">Manage access, VPS assignments and account statuses</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-3">

                            {/* Search */}
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
                                <input
                                    type="text"
                                    placeholder="Search users..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="bg-background-dark border border-forest-light text-white text-sm rounded-lg pl-9 pr-4 py-1.5 w-48 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-secondary/60"
                                />
                            </div>

                            {/* Status Filter */}
                            <div className="flex items-center bg-background-dark border border-forest-light rounded-lg px-3 py-1.5">
                                <Filter className="w-4 h-4 text-secondary mr-2" />
                                <select
                                    value={filter}
                                    onChange={(e) => setFilter(e.target.value)}
                                    className="bg-transparent text-sm text-white focus:outline-none cursor-pointer"
                                >
                                    <option>All</option>
                                    <option>Active</option>
                                    <option>Banned</option>
                                    <option>Pending</option>
                                </select>
                            </div>

                            <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-background-dark text-sm font-bold px-4 py-2 rounded-lg transition-colors shadow-lg shadow-primary/20">
                                <Plus className="w-4 h-4" />
                                Invite User
                            </button>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto w-full">
                        <table className="w-full text-left border-collapse min-w-[800px]">
                            <thead>
                                <tr className="bg-forest-light/30 text-secondary text-xs uppercase tracking-wider font-semibold border-b border-forest-light">
                                    <th className="px-6 py-4">User</th>
                                    <th className="px-6 py-4">Package</th>
                                    <th className="px-6 py-4">Joined</th>
                                    <th className="px-6 py-4 text-right">Balance</th>
                                    <th className="px-6 py-4 text-center">VPS</th>
                                    <th className="px-6 py-4 text-center">Status</th>
                                    <th className="px-6 py-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map((user) => {
                                    const s = statusConfig[user.status];
                                    return (
                                        <tr
                                            key={user.id}
                                            className="border-b border-forest-light last:border-0 hover:bg-white/[0.02] transition-colors group"
                                        >
                                            {/* User */}
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-9 h-9 rounded-full bg-background-dark border border-forest-light flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                                                        {user.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                                                    </div>
                                                    <div>
                                                        <p className="text-white font-medium text-sm">{user.name}</p>
                                                        <p className="text-secondary text-xs">{user.email}</p>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* Package */}
                                            <td className="px-6 py-4">
                                                {user.package ? (
                                                    <span className="text-sm text-white font-medium">{user.package}</span>
                                                ) : (
                                                    <span className="text-secondary text-sm">—</span>
                                                )}
                                            </td>

                                            {/* Joined */}
                                            <td className="px-6 py-4 text-secondary text-sm">{user.joinedDate}</td>

                                            {/* Balance */}
                                            <td className="px-6 py-4 text-right">
                                                <span className="text-white font-bold text-sm">${user.balance.toFixed(2)}</span>
                                            </td>

                                            {/* VPS */}
                                            <td className="px-6 py-4 text-center">
                                                {user.vpsAssigned ? (
                                                    <span className="inline-flex items-center gap-1 text-primary text-xs">
                                                        <Check className="w-3.5 h-3.5" /> Assigned
                                                    </span>
                                                ) : (
                                                    <button
                                                        onClick={() => setVpsTarget(user)}
                                                        className="text-xs text-secondary hover:text-primary border border-forest-light hover:border-primary/30 px-2 py-1 rounded-md transition-colors"
                                                    >
                                                        + Assign
                                                    </button>
                                                )}
                                            </td>

                                            {/* Status */}
                                            <td className="px-6 py-4 text-center">
                                                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${s.bg} ${s.color} ${s.border}`}>
                                                    <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                                                    {s.label}
                                                </span>
                                            </td>

                                            {/* Actions */}
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button className="p-1.5 rounded-md hover:bg-forest-light text-secondary hover:text-white transition-colors" title="Edit">
                                                        <Edit2 className="w-3.5 h-3.5" />
                                                    </button>
                                                    {user.status === "ACTIVE" ? (
                                                        <button className="p-1.5 rounded-md hover:bg-red-500/10 text-secondary hover:text-red-400 transition-colors" title="Ban User">
                                                            <ShieldAlert className="w-3.5 h-3.5" />
                                                        </button>
                                                    ) : (
                                                        <button className="p-1.5 rounded-md hover:bg-primary/10 text-secondary hover:text-primary transition-colors" title="Unban User">
                                                            <ShieldCheck className="w-3.5 h-3.5" />
                                                        </button>
                                                    )}
                                                    <button className="p-1.5 rounded-md hover:bg-forest-light text-secondary hover:text-white transition-colors">
                                                        <MoreVertical className="w-3.5 h-3.5" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="p-4 border-t border-forest-light flex items-center justify-between">
                        <p className="text-secondary text-sm">
                            Showing <span className="text-white font-medium">{filtered.length}</span> of <span className="text-white font-medium">{users.length}</span> users
                        </p>
                        <div className="flex items-center gap-2">
                            <button className="px-3 py-1.5 rounded-lg border border-forest-light text-secondary hover:text-white hover:bg-forest-light text-sm transition-colors">
                                Previous
                            </button>
                            <button className="px-3 py-1.5 rounded-lg bg-primary/20 border border-primary/20 text-primary text-sm font-bold">1</button>
                            <button className="px-3 py-1.5 rounded-lg border border-forest-light text-secondary hover:text-white hover:bg-forest-light text-sm transition-colors">2</button>
                            <button className="px-3 py-1.5 rounded-lg border border-forest-light text-secondary hover:text-white hover:bg-forest-light text-sm transition-colors">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
