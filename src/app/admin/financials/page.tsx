"use client";

import {
    DollarSign,
    Clock,
    CheckCircle2,
    AlertTriangle,
    XCircle,
    Filter,
    Download,
    MoreVertical,
    Link as LinkIcon,
    Eye,
    Flag,
    Check,
    TrendingUp,
    Wallet,
    X,
    ExternalLink,
} from "lucide-react";
import { useState } from "react";

const withdrawals = [
    { id: "W001", user: "Mohammad Rahim",  email: "m.rahim@mail.com",   amount: 45.00,  method: "bKash",  details: "01712345678",  status: "PENDING",  createdAt: "Jan 20, 2025 14:32", analyzerStatus: "VERIFIED",  claimed: 45.00,  actual: 45.00  },
    { id: "W002", user: "Fatema Khatun",   email: "f.khatun@mail.com",  amount: 31.50,  method: "Nagad",  details: "01898765432",  status: "FLAGGED",  createdAt: "Jan 19, 2025 09:14", analyzerStatus: "MISMATCH",  claimed: 31.50,  actual: 20.00  },
    { id: "W003", user: "Sumaiya Begum",   email: "s.begum@mail.com",   amount: 100.00, method: "bKash",  details: "01755443322",  status: "APPROVED", createdAt: "Jan 18, 2025 11:45", analyzerStatus: "VERIFIED",  claimed: 100.00, actual: 100.00 },
    { id: "W004", user: "Rakib Hossain",   email: "r.hossain@mail.com", amount: 63.00,  method: "Rocket", details: "01922334455",  status: "PAID",     createdAt: "Jan 17, 2025 16:20", analyzerStatus: "VERIFIED",  claimed: 63.00,  actual: 63.00  },
    { id: "W005", user: "Nusrat Jahan",    email: "n.jahan@mail.com",   amount: 22.00,  method: "Nagad",  details: "01611223344",  status: "PENDING",  createdAt: "Jan 17, 2025 08:05", analyzerStatus: "FAILED",    claimed: 22.00,  actual: null   },
    { id: "W006", user: "Parveen Sultana", email: "p.sultana@mail.com", amount: 14.00,  method: "bKash",  details: "01733998877",  status: "REJECTED", createdAt: "Jan 16, 2025 12:00", analyzerStatus: "MISMATCH",  claimed: 14.00,  actual: 8.50   },
];

const statusCfg: Record<string, { label: string; color: string; bg: string; border: string }> = {
    PENDING:  { label: "Pending",  color: "text-yellow-400", bg: "bg-yellow-400/10", border: "border-yellow-400/20" },
    APPROVED: { label: "Approved", color: "text-blue-400",   bg: "bg-blue-400/10",   border: "border-blue-400/20"   },
    PAID:     { label: "Paid",     color: "text-primary",    bg: "bg-primary/10",    border: "border-primary/20"    },
    FLAGGED:  { label: "Flagged",  color: "text-orange-400", bg: "bg-orange-400/10", border: "border-orange-400/20" },
    REJECTED: { label: "Rejected", color: "text-red-400",    bg: "bg-red-400/10",    border: "border-red-400/20"    },
};

const analyzerCfg: Record<string, { label: string; icon: React.ElementType; color: string }> = {
    VERIFIED: { label: "Verified", icon: CheckCircle2,  color: "text-primary"    },
    MISMATCH: { label: "Mismatch", icon: AlertTriangle, color: "text-orange-400" },
    FAILED:   { label: "Failed",   icon: XCircle,       color: "text-red-400"    },
};

const methodColors: Record<string, string> = {
    bKash:  "text-pink-400",
    Nagad:  "text-orange-400",
    Rocket: "text-blue-400",
};

type Withdrawal = typeof withdrawals[number];

function DetailModal({ w, onClose }: { w: Withdrawal; onClose: () => void }) {
    const s  = statusCfg[w.status];
    const an = analyzerCfg[w.analyzerStatus];
    const AnIcon = an.icon;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
            <div className="relative bg-forest border border-forest-light rounded-2xl p-6 w-full max-w-lg shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h3 className="text-white font-bold text-lg">Withdrawal {w.id}</h3>
                        <p className="text-secondary text-sm">{w.user} · {w.createdAt}</p>
                    </div>
                    <button onClick={onClose} className="text-secondary hover:text-white p-1">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Analyzer Result */}
                <div className={`p-4 rounded-xl border mb-5 ${
                    w.analyzerStatus === "VERIFIED" ? "bg-primary/5 border-primary/20"
                    : w.analyzerStatus === "MISMATCH" ? "bg-orange-400/5 border-orange-400/20"
                    : "bg-red-400/5 border-red-400/20"
                }`}>
                    <div className="flex items-center gap-2 mb-2">
                        <AnIcon className={`w-4 h-4 ${an.color}`} />
                        <span className={`text-sm font-bold ${an.color}`}>Analyzer: {an.label}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                            <p className="text-secondary text-xs mb-1">Claimed Amount</p>
                            <p className="text-white font-bold">${w.claimed.toFixed(2)}</p>
                        </div>
                        <div>
                            <p className="text-secondary text-xs mb-1">Actual Amount</p>
                            <p className={`font-bold ${
                                w.actual === null ? "text-secondary"
                                : w.actual === w.claimed ? "text-primary"
                                : "text-orange-400"
                            }`}>
                                {w.actual !== null ? `$${w.actual.toFixed(2)}` : "—"}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Details */}
                <div className="grid grid-cols-2 gap-3 mb-5 text-sm">
                    {[
                        { label: "Amount",  value: `$${w.amount.toFixed(2)}` },
                        { label: "Method",  value: w.method                  },
                        { label: "Account", value: w.details                 },
                        { label: "Status",  value: w.status                  },
                    ].map((d) => (
                        <div key={d.label} className="bg-background-dark rounded-lg p-3 border border-forest-light">
                            <p className="text-secondary text-xs mb-1">{d.label}</p>
                            <p className="text-white font-medium">{d.value}</p>
                        </div>
                    ))}
                </div>

                <div className="mb-4">
                    <label className="block text-secondary text-xs font-medium uppercase tracking-wider mb-1.5">Admin Note</label>
                    <textarea
                        rows={2}
                        placeholder="Optional note for this action..."
                        className="w-full bg-background-dark border border-forest-light text-white text-sm rounded-lg px-3 py-2.5 focus:outline-none focus:border-primary transition-all resize-none placeholder-secondary/50"
                    />
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                    <button className="flex-1 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-background-dark font-bold text-sm transition-all flex items-center justify-center gap-2">
                        <Check className="w-4 h-4" /> Approve
                    </button>
                    <button className="flex-1 py-2.5 rounded-lg bg-orange-400/10 hover:bg-orange-400/20 text-orange-400 border border-orange-400/20 text-sm font-bold transition-colors flex items-center justify-center gap-2">
                        <Flag className="w-4 h-4" /> Flag
                    </button>
                    <button className="flex-1 py-2.5 rounded-lg bg-red-400/10 hover:bg-red-400/20 text-red-400 border border-red-400/20 text-sm font-bold transition-colors flex items-center justify-center gap-2">
                        <XCircle className="w-4 h-4" /> Reject
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function AdminFinancialsPage() {
    const [filter, setFilter]   = useState("ALL");
    const [detail, setDetail]   = useState<Withdrawal | null>(null);

    const counts = {
        pending:  withdrawals.filter(w => w.status === "PENDING").length,
        flagged:  withdrawals.filter(w => w.status === "FLAGGED").length,
        approved: withdrawals.filter(w => w.status === "APPROVED").length,
        paid:     withdrawals.filter(w => w.status === "PAID").length,
        total:    withdrawals.reduce((s, w) => s + w.amount, 0),
    };

    const filtered = filter === "ALL" ? withdrawals : withdrawals.filter(w => w.status === filter);

    return (
        <>
            {detail && <DetailModal w={detail} onClose={() => setDetail(null)} />}

            <div className="flex flex-col gap-6">

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { icon: Clock,        label: "Pending Review",  value: counts.pending,            color: "text-yellow-400", bg: "bg-yellow-400/20" },
                        { icon: AlertTriangle,label: "Flagged",         value: counts.flagged,            color: "text-orange-400", bg: "bg-orange-400/20" },
                        { icon: CheckCircle2, label: "Approved",        value: counts.approved,           color: "text-blue-400",   bg: "bg-blue-400/20"   },
                        { icon: DollarSign,   label: "Total Volume",    value: `$${counts.total.toFixed(2)}`, color: "text-primary",bg: "bg-primary/20"    },
                    ].map((s) => {
                        const Icon = s.icon;
                        return (
                            <div key={s.label} className="bg-forest border border-forest-light rounded-xl p-5 flex items-center gap-4 relative overflow-hidden group hover:border-primary/30 transition-all">
                                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all pointer-events-none" />
                                <div className={`p-2.5 rounded-lg ${s.bg} ${s.color} flex-shrink-0`}>
                                    <Icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-secondary text-xs">{s.label}</p>
                                    <p className={`text-2xl font-bold tracking-tight ${s.color}`}>{s.value}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Table */}
                <div className="bg-forest border border-forest-light rounded-xl flex flex-col shadow-xl shadow-black/20">

                    {/* Header */}
                    <div className="p-5 border-b border-forest-light flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div>
                            <h3 className="text-white font-bold text-lg">Withdrawal Requests</h3>
                            <p className="text-secondary text-xs mt-0.5">Review, approve or reject payout requests</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-3">

                            {/* Status filter pills */}
                            <div className="flex items-center gap-1.5">
                                {["ALL", "PENDING", "FLAGGED", "APPROVED", "PAID", "REJECTED"].map((f) => (
                                    <button
                                        key={f}
                                        onClick={() => setFilter(f)}
                                        className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-colors ${
                                            filter === f
                                                ? "bg-primary/20 text-primary border border-primary/20"
                                                : "text-secondary hover:text-white border border-transparent hover:border-forest-light"
                                        }`}
                                    >
                                        {f === "ALL" ? "All" : f.charAt(0) + f.slice(1).toLowerCase()}
                                    </button>
                                ))}
                            </div>

                            <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-forest-light text-secondary hover:text-white hover:bg-forest-light text-xs font-medium transition-colors">
                                <Download className="w-3.5 h-3.5" /> Export
                            </button>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto w-full">
                        <table className="w-full text-left border-collapse min-w-[900px]">
                            <thead>
                                <tr className="bg-forest-light/30 text-secondary text-xs uppercase tracking-wider font-semibold border-b border-forest-light">
                                    <th className="px-5 py-4">Request</th>
                                    <th className="px-5 py-4">User</th>
                                    <th className="px-5 py-4">Method</th>
                                    <th className="px-5 py-4 text-right">Amount</th>
                                    <th className="px-5 py-4 text-center">Analyzer</th>
                                    <th className="px-5 py-4 text-center">Status</th>
                                    <th className="px-5 py-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map((w) => {
                                    const s  = statusCfg[w.status];
                                    const an = analyzerCfg[w.analyzerStatus];
                                    const AnIcon = an.icon;
                                    return (
                                        <tr key={w.id} className="border-b border-forest-light last:border-0 hover:bg-white/[0.02] transition-colors group">
                                            <td className="px-5 py-4">
                                                <p className="text-white font-mono text-sm font-medium">{w.id}</p>
                                                <p className="text-secondary text-xs">{w.createdAt}</p>
                                            </td>
                                            <td className="px-5 py-4">
                                                <p className="text-white text-sm font-medium">{w.user}</p>
                                                <p className="text-secondary text-xs">{w.email}</p>
                                            </td>
                                            <td className="px-5 py-4">
                                                <div className="flex flex-col gap-0.5">
                                                    <span className={`text-sm font-bold ${methodColors[w.method] ?? "text-white"}`}>{w.method}</span>
                                                    <span className="text-secondary text-xs font-mono">{w.details}</span>
                                                </div>
                                            </td>
                                            <td className="px-5 py-4 text-right">
                                                <span className="text-white font-bold text-sm">${w.amount.toFixed(2)}</span>
                                            </td>
                                            <td className="px-5 py-4 text-center">
                                                <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${an.color}`}>
                                                    <AnIcon className="w-3.5 h-3.5" />
                                                    {an.label}
                                                    {w.analyzerStatus === "MISMATCH" && (
                                                        <span className="text-[10px] text-secondary ml-0.5">
                                                            (${w.actual?.toFixed(2)})
                                                        </span>
                                                    )}
                                                </span>
                                            </td>
                                            <td className="px-5 py-4 text-center">
                                                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${s.bg} ${s.color} ${s.border}`}>
                                                    {s.label}
                                                </span>
                                            </td>
                                            <td className="px-5 py-4">
                                                <div className="flex items-center justify-end gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button
                                                        onClick={() => setDetail(w)}
                                                        className="p-1.5 rounded-md hover:bg-primary/10 text-secondary hover:text-primary transition-colors"
                                                        title="View details"
                                                    >
                                                        <Eye className="w-3.5 h-3.5" />
                                                    </button>
                                                    {w.status === "PENDING" && (
                                                        <>
                                                            <button className="p-1.5 rounded-md hover:bg-primary/10 text-secondary hover:text-primary transition-colors" title="Approve">
                                                                <Check className="w-3.5 h-3.5" />
                                                            </button>
                                                            <button className="p-1.5 rounded-md hover:bg-orange-400/10 text-secondary hover:text-orange-400 transition-colors" title="Flag">
                                                                <Flag className="w-3.5 h-3.5" />
                                                            </button>
                                                            <button className="p-1.5 rounded-md hover:bg-red-400/10 text-secondary hover:text-red-400 transition-colors" title="Reject">
                                                                <XCircle className="w-3.5 h-3.5" />
                                                            </button>
                                                        </>
                                                    )}
                                                    {w.status === "APPROVED" && (
                                                        <button className="p-1.5 rounded-md hover:bg-primary/10 text-secondary hover:text-primary transition-colors" title="Mark Paid">
                                                            <Wallet className="w-3.5 h-3.5" />
                                                        </button>
                                                    )}
                                                </div>
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
                            <span className="text-white font-medium">{filtered.length}</span> of {withdrawals.length} requests
                        </p>
                        <div className="flex gap-2">
                            <button className="px-3 py-1.5 rounded-lg border border-forest-light text-secondary hover:text-white hover:bg-forest-light text-sm transition-colors">Previous</button>
                            <button className="px-3 py-1.5 rounded-lg bg-primary/20 border border-primary/20 text-primary text-sm font-bold">1</button>
                            <button className="px-3 py-1.5 rounded-lg border border-forest-light text-secondary hover:text-white hover:bg-forest-light text-sm transition-colors">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
