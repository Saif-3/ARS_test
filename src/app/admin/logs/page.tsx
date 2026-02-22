"use client";

import {
    History,
    Filter,
    Download,
    Search,
    Shield,
    User,
    Server,
    DollarSign,
    AlertTriangle,
    CheckCircle2,
    XCircle,
    ChevronRight,
    Link as LinkIcon,
    Settings,
    Activity,
    Clock,
} from "lucide-react";
import { useState } from "react";

const logs = [
    { id: "L001", actor: "admin@arssurveys.com", role: "ADMIN",  action: "PAYMENT_VERIFIED",    target: "Payment P-0291 — Mohammad Rahim",   meta: { amount: "৳4,500", method: "bKash" },                    at: "Jan 20, 2025 14:38", ip: "103.87.22.51"  },
    { id: "L002", actor: "admin@arssurveys.com", role: "ADMIN",  action: "VPS_ASSIGNED",        target: "User U005 — Hasan Ali",              meta: { ip: "185.220.101.47", pkg: "Starter 1" },               at: "Jan 20, 2025 12:15", ip: "103.87.22.51"  },
    { id: "L003", actor: "system",               role: "SYSTEM", action: "ANALYZER_RUN",        target: "Withdrawal W002 — Fatema Khatun",    meta: { result: "MISMATCH", claimed: "$31.50", actual: "$20" }, at: "Jan 19, 2025 09:30", ip: "internal"      },
    { id: "L004", actor: "admin@arssurveys.com", role: "ADMIN",  action: "WITHDRAWAL_FLAGGED",  target: "Withdrawal W002 — Fatema Khatun",    meta: { reason: "Amount mismatch detected" },                   at: "Jan 19, 2025 09:35", ip: "103.87.22.51"  },
    { id: "L005", actor: "admin@arssurveys.com", role: "ADMIN",  action: "USER_BANNED",         target: "User U003 — Abdul Karim",            meta: { reason: "Policy violation" },                           at: "Jan 19, 2025 18:42", ip: "103.87.22.51"  },
    { id: "L006", actor: "system",               role: "SYSTEM", action: "ANALYZER_RUN",        target: "Withdrawal W001 — Mohammad Rahim",   meta: { result: "VERIFIED", claimed: "$45", actual: "$45" },    at: "Jan 20, 2025 14:32", ip: "internal"      },
    { id: "L007", actor: "admin@arssurveys.com", role: "ADMIN",  action: "WITHDRAWAL_APPROVED", target: "Withdrawal W003 — Sumaiya Begum",    meta: { amount: "$100.00" },                                    at: "Jan 18, 2025 15:10", ip: "103.87.22.51"  },
    { id: "L008", actor: "admin@arssurveys.com", role: "ADMIN",  action: "SURVEY_TOGGLED",      target: "Survey SRV-1029 — Healthcare App",   meta: { status: "DEACTIVATED" },                                at: "Jan 18, 2025 11:00", ip: "103.87.22.51"  },
    { id: "L009", actor: "admin@arssurveys.com", role: "ADMIN",  action: "PAYMENT_REJECTED",    target: "Payment P-0294 — Sumaiya Begum",     meta: { reason: "Invalid TrxID" },                              at: "Jan 18, 2025 11:22", ip: "103.87.22.51"  },
    { id: "L010", actor: "system",               role: "SYSTEM", action: "USER_REGISTERED",     target: "User U008 — Parveen Sultana",        meta: { email: "p.sultana@mail.com" },                          at: "Jan 10, 2025 08:14", ip: "internal"      },
];

const actionConfig: Record<string, { label: string; color: string; bg: string; border: string; icon: React.ElementType }> = {
    PAYMENT_VERIFIED:    { label: "Payment Verified",    color: "text-primary",    bg: "bg-primary/10",    border: "border-primary/20",    icon: CheckCircle2  },
    PAYMENT_REJECTED:    { label: "Payment Rejected",    color: "text-red-400",    bg: "bg-red-400/10",    border: "border-red-400/20",    icon: XCircle       },
    VPS_ASSIGNED:        { label: "VPS Assigned",        color: "text-blue-400",   bg: "bg-blue-400/10",   border: "border-blue-400/20",   icon: Server        },
    USER_BANNED:         { label: "User Banned",         color: "text-red-400",    bg: "bg-red-400/10",    border: "border-red-400/20",    icon: Shield        },
    USER_UNBANNED:       { label: "User Unbanned",       color: "text-primary",    bg: "bg-primary/10",    border: "border-primary/20",    icon: Shield        },
    USER_REGISTERED:     { label: "User Registered",     color: "text-blue-400",   bg: "bg-blue-400/10",   border: "border-blue-400/20",   icon: User          },
    WITHDRAWAL_APPROVED: { label: "Withdrawal Approved", color: "text-primary",    bg: "bg-primary/10",    border: "border-primary/20",    icon: DollarSign    },
    WITHDRAWAL_FLAGGED:  { label: "Withdrawal Flagged",  color: "text-orange-400", bg: "bg-orange-400/10", border: "border-orange-400/20", icon: AlertTriangle  },
    WITHDRAWAL_REJECTED: { label: "Withdrawal Rejected", color: "text-red-400",    bg: "bg-red-400/10",    border: "border-red-400/20",    icon: XCircle       },
    ANALYZER_RUN:        { label: "Analyzer Run",        color: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/20", icon: Activity      },
    SURVEY_TOGGLED:      { label: "Survey Toggled",      color: "text-yellow-400", bg: "bg-yellow-400/10", border: "border-yellow-400/20", icon: Settings      },
};

const allActions = ["ALL", ...Object.keys(actionConfig)];

export default function AdminLogsPage() {
    const [search, setSearch]     = useState("");
    const [actor, setActor]       = useState("ALL");
    const [action, setAction]     = useState("ALL");

    const filtered = logs.filter((log) => {
        const matchSearch = log.target.toLowerCase().includes(search.toLowerCase()) ||
                            log.actor.toLowerCase().includes(search.toLowerCase());
        const matchActor  = actor === "ALL" || log.role === actor;
        const matchAction = action === "ALL" || log.action === action;
        return matchSearch && matchActor && matchAction;
    });

    return (
        <div className="flex flex-col gap-6">

            {/* Stats Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { label: "Total Events",     value: logs.length,                                         color: "text-white",       bg: "bg-white/10",         icon: History      },
                    { label: "Admin Actions",     value: logs.filter(l => l.role === "ADMIN").length,         color: "text-primary",     bg: "bg-primary/20",       icon: Shield       },
                    { label: "System Events",     value: logs.filter(l => l.role === "SYSTEM").length,        color: "text-purple-400",  bg: "bg-purple-400/20",    icon: Activity     },
                    { label: "Today",             value: logs.filter(l => l.at.includes("Jan 20")).length,    color: "text-blue-400",    bg: "bg-blue-400/20",      icon: Clock        },
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

            {/* Log Table */}
            <div className="bg-forest border border-forest-light rounded-xl flex flex-col shadow-xl shadow-black/20">

                {/* Controls */}
                <div className="p-5 border-b border-forest-light flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div>
                        <h3 className="text-white font-bold text-lg">Audit Log</h3>
                        <p className="text-secondary text-xs mt-0.5">Full history of all admin and system actions</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search logs..."
                                className="bg-background-dark border border-forest-light text-white text-sm rounded-lg pl-9 pr-4 py-1.5 w-44 focus:outline-none focus:border-primary transition-all placeholder-secondary/60"
                            />
                        </div>
                        <div className="flex items-center bg-background-dark border border-forest-light rounded-lg px-3 py-1.5">
                            <Filter className="w-4 h-4 text-secondary mr-2" />
                            <select
                                value={actor}
                                onChange={(e) => setActor(e.target.value)}
                                className="bg-transparent text-sm text-white focus:outline-none cursor-pointer"
                            >
                                <option value="ALL">All Actors</option>
                                <option value="ADMIN">Admin</option>
                                <option value="SYSTEM">System</option>
                            </select>
                        </div>
                        <div className="flex items-center bg-background-dark border border-forest-light rounded-lg px-3 py-1.5">
                            <select
                                value={action}
                                onChange={(e) => setAction(e.target.value)}
                                className="bg-transparent text-sm text-white focus:outline-none cursor-pointer"
                            >
                                <option value="ALL">All Actions</option>
                                {Object.entries(actionConfig).map(([k, v]) => (
                                    <option key={k} value={k}>{v.label}</option>
                                ))}
                            </select>
                        </div>
                        <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-forest-light text-secondary hover:text-white hover:bg-forest-light text-xs font-medium transition-colors">
                            <Download className="w-3.5 h-3.5" /> Export
                        </button>
                    </div>
                </div>

                {/* Timeline Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[860px]">
                        <thead>
                            <tr className="bg-forest-light/30 text-secondary text-xs uppercase tracking-wider font-semibold border-b border-forest-light">
                                <th className="px-5 py-4">Timestamp</th>
                                <th className="px-5 py-4">Actor</th>
                                <th className="px-5 py-4">Action</th>
                                <th className="px-5 py-4">Target</th>
                                <th className="px-5 py-4">Metadata</th>
                                <th className="px-5 py-4">IP</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((log) => {
                                const cfg = actionConfig[log.action];
                                const ActionIcon = cfg?.icon ?? Activity;
                                return (
                                    <tr key={log.id} className="border-b border-forest-light last:border-0 hover:bg-white/[0.02] transition-colors">
                                        <td className="px-5 py-4">
                                            <p className="text-white text-xs font-mono">{log.at}</p>
                                        </td>
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-2">
                                                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs ${
                                                    log.role === "ADMIN"  ? "bg-primary/20 text-primary"    :
                                                    log.role === "SYSTEM" ? "bg-purple-400/20 text-purple-400" : "bg-secondary/20 text-secondary"
                                                }`}>
                                                    {log.role === "SYSTEM" ? <Activity className="w-3 h-3" /> : <User className="w-3 h-3" />}
                                                </div>
                                                <div>
                                                    <p className="text-white text-xs font-medium truncate max-w-[140px]">{log.actor}</p>
                                                    <p className="text-secondary text-[10px] uppercase tracking-wider">{log.role}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-4">
                                            {cfg ? (
                                                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${cfg.bg} ${cfg.color} ${cfg.border}`}>
                                                    <ActionIcon className="w-3 h-3" />
                                                    {cfg.label}
                                                </span>
                                            ) : (
                                                <span className="text-secondary text-xs">{log.action}</span>
                                            )}
                                        </td>
                                        <td className="px-5 py-4">
                                            <p className="text-slate-300 text-xs max-w-[200px] leading-relaxed">{log.target}</p>
                                        </td>
                                        <td className="px-5 py-4">
                                            <div className="flex flex-wrap gap-1">
                                                {Object.entries(log.meta).map(([k, v]) => (
                                                    <span key={k} className="text-[10px] bg-background-dark border border-forest-light text-secondary px-1.5 py-0.5 rounded font-mono">
                                                        {k}: {v}
                                                    </span>
                                                ))}
                                            </div>
                                        </td>
                                        <td className="px-5 py-4">
                                            <span className="text-secondary text-xs font-mono">{log.ip}</span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-forest-light flex items-center justify-between">
                    <p className="text-secondary text-sm">
                        Showing <span className="text-white font-medium">{filtered.length}</span> of {logs.length} events
                    </p>
                    <div className="flex gap-2">
                        <button className="px-3 py-1.5 rounded-lg border border-forest-light text-secondary hover:text-white hover:bg-forest-light text-sm transition-colors">Previous</button>
                        <button className="px-3 py-1.5 rounded-lg bg-primary/20 border border-primary/20 text-primary text-sm font-bold">1</button>
                        <button className="px-3 py-1.5 rounded-lg border border-forest-light text-secondary hover:text-white hover:bg-forest-light text-sm transition-colors">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
