"use client";

import { Info, Download, Banknote, Clock, CreditCard, Search, ChevronDown, ChevronLeft, ChevronRight, CheckCircle2, X, Check, Wallet, AlertTriangle } from "lucide-react";

export default function AdminWithdrawalsPage() {
    return (
        <>
            <div className="flex flex-col gap-8 w-full">
                {/* Header Section */}
                <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-2">
                    <div>
                        <h2 className="text-3xl font-black tracking-tight text-white mb-2">Withdrawal Requests</h2>
                        <p className="text-secondary text-sm">Manage payout approvals, validate survey links, and monitor transaction flow.</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors text-sm font-medium">
                            <Download className="w-5 h-5" />
                            Export CSV
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/20 transition-all text-sm font-medium">
                            <Banknote className="w-5 h-5" />
                            Process Batch (5)
                        </button>
                    </div>
                </header>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-forest/70 backdrop-blur-md border border-forest-light p-6 rounded-xl flex flex-col relative overflow-hidden group">
                        <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Clock className="w-16 h-16 text-primary" />
                        </div>
                        <p className="text-secondary text-sm font-medium mb-1">Pending Requests</p>
                        <div className="flex items-baseline gap-3">
                            <h3 className="text-3xl font-bold text-white">142</h3>
                            <span className="text-primary text-xs font-bold bg-primary/10 px-2 py-0.5 rounded-full">+12%</span>
                        </div>
                        <div className="w-full bg-background-dark h-1 mt-4 rounded-full overflow-hidden">
                            <div className="bg-primary h-full" style={{ width: "65%" }}></div>
                        </div>
                    </div>

                    <div className="bg-forest/70 backdrop-blur-md border border-forest-light p-6 rounded-xl flex flex-col relative overflow-hidden group">
                        <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Banknote className="w-16 h-16 text-blue-400" />
                        </div>
                        <p className="text-secondary text-sm font-medium mb-1">Total Payouts Today</p>
                        <div className="flex items-baseline gap-3">
                            <h3 className="text-3xl font-bold text-white">$12,450</h3>
                            <span className="text-primary text-xs font-bold bg-primary/10 px-2 py-0.5 rounded-full">+5%</span>
                        </div>
                        <div className="w-full bg-background-dark h-1 mt-4 rounded-full overflow-hidden">
                            <div className="bg-blue-400 h-full" style={{ width: "42%" }}></div>
                        </div>
                    </div>

                    <div className="bg-forest/70 backdrop-blur-md border border-forest-light p-6 rounded-xl flex flex-col relative overflow-hidden group">
                        <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <AlertTriangle className="w-16 h-16 text-red-500" />
                        </div>
                        <p className="text-secondary text-sm font-medium mb-1">Flagged Links</p>
                        <div className="flex items-baseline gap-3">
                            <h3 className="text-3xl font-bold text-white">8</h3>
                            <span className="text-red-500 text-xs font-bold bg-red-500/10 px-2 py-0.5 rounded-full">-2%</span>
                        </div>
                        <div className="w-full bg-background-dark h-1 mt-4 rounded-full overflow-hidden">
                            <div className="bg-red-500 h-full" style={{ width: "8%" }}></div>
                        </div>
                    </div>
                </div>

                {/* Filters & Search */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-1 max-w-lg gap-3 flex-col sm:flex-row">
                        <div className="relative flex-1 group">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary group-focus-within:text-primary transition-colors" />
                            <input
                                className="w-full bg-forest border border-forest-light rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-secondary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                placeholder="Search by User ID, Name, or Email"
                                type="text"
                            />
                        </div>
                        <div className="relative min-w-[180px]">
                            <select className="w-full appearance-none bg-forest border border-forest-light rounded-lg pl-4 pr-10 py-2.5 text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all cursor-pointer">
                                <option>Status: All</option>
                                <option>Status: Pending</option>
                                <option>Status: Flagged</option>
                                <option>Status: Approved</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary pointer-events-none" />
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-secondary">
                        <span>Showing 1-10 of 142 requests</span>
                        <div className="flex gap-1 ml-2">
                            <button className="p-1 hover:text-white transition-colors disabled:opacity-50"><ChevronLeft className="w-4 h-4" /></button>
                            <button className="p-1 hover:text-white transition-colors"><ChevronRight className="w-4 h-4" /></button>
                        </div>
                    </div>
                </div>

                {/* Data Table */}
                <div className="bg-forest/70 backdrop-blur-md rounded-xl overflow-hidden flex flex-col shadow-2xl border border-forest-light w-full">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[900px]">
                            <thead>
                                <tr className="bg-background-dark/50 text-xs uppercase tracking-wider text-secondary font-semibold border-b border-forest-light">
                                    <th className="px-6 py-4">Request ID</th>
                                    <th className="px-6 py-4">User</th>
                                    <th className="px-6 py-4">Amount</th>
                                    <th className="px-6 py-4">Method</th>
                                    <th className="px-6 py-4">Link Validation</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-forest-light text-sm">

                                {/* Row 1 */}
                                <tr className="group hover:bg-forest-light/20 transition-colors">
                                    <td className="px-6 py-4 font-mono text-secondary">#REQ-8821</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">SM</div>
                                            <div className="flex flex-col">
                                                <span className="text-white font-medium">Sarah Miller</span>
                                                <span className="text-secondary text-xs">ID: 94821</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-white">$45.00</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2 text-white/80">
                                            <Wallet className="w-4 h-4" />
                                            PayPal
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium">
                                            <CheckCircle2 className="w-3.5 h-3.5" />
                                            Valid Source
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="px-2.5 py-1 rounded-md bg-yellow-500/10 text-yellow-500 text-xs font-medium border border-yellow-500/20">Pending</span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2 rounded-lg hover:bg-red-500/10 text-secondary hover:text-red-500 transition-colors" title="Reject">
                                                <X className="w-5 h-5" />
                                            </button>
                                            <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary hover:bg-primary-dark text-white text-xs font-bold transition-colors shadow-lg shadow-primary/20" title="Approve">
                                                <Check className="w-4 h-4" />
                                                Approve
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                                {/* Row 2 */}
                                <tr className="group hover:bg-forest-light/20 transition-colors">
                                    <td className="px-6 py-4 font-mono text-secondary">#REQ-8822</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xs">JC</div>
                                            <div className="flex flex-col">
                                                <span className="text-white font-medium">James Chen</span>
                                                <span className="text-secondary text-xs">ID: 10293</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-white">$12.50</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2 text-white/80">
                                            <CreditCard className="w-4 h-4" />
                                            Venmo
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-medium">
                                            <AlertTriangle className="w-3.5 h-3.5" />
                                            Suspicious Redirect
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="px-2.5 py-1 rounded-md bg-red-500/10 text-red-500 text-xs font-medium border border-red-500/20">Flagged</span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="px-3 py-1.5 rounded-lg border border-secondary/50 hover:border-secondary text-secondary hover:text-white text-xs font-medium transition-colors">
                                                Review
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                                {/* Row 3 */}
                                <tr className="group hover:bg-forest-light/20 transition-colors">
                                    <td className="px-6 py-4 font-mono text-secondary">#REQ-8823</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500 font-bold text-xs">MJ</div>
                                            <div className="flex flex-col">
                                                <span className="text-white font-medium">Marcus Johnson</span>
                                                <span className="text-secondary text-xs">ID: 55920</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-white">$100.00</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2 text-white/80">
                                            <Banknote className="w-4 h-4" />
                                            Bank Transfer
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium">
                                            <CheckCircle2 className="w-3.5 h-3.5" />
                                            Valid Source
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="px-2.5 py-1 rounded-md bg-yellow-500/10 text-yellow-500 text-xs font-medium border border-yellow-500/20">Pending</span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2 rounded-lg hover:bg-red-500/10 text-secondary hover:text-red-500 transition-colors" title="Reject">
                                                <X className="w-5 h-5" />
                                            </button>
                                            <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary hover:bg-primary-dark text-white text-xs font-bold transition-colors shadow-lg shadow-primary/20" title="Approve">
                                                <Check className="w-4 h-4" />
                                                Approve
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="bg-background-dark/50 border-t border-forest-light px-6 py-4 flex items-center justify-between">
                        <span className="text-xs text-secondary">Viewing 3 of 142 results</span>
                        <div className="flex gap-2">
                            <button className="px-3 py-1 rounded border border-forest-light text-secondary text-xs hover:text-white hover:bg-forest-light transition-colors disabled:opacity-50">Previous</button>
                            <button className="px-3 py-1 rounded bg-primary text-white text-xs font-medium shadow-md shadow-primary/20">1</button>
                            <button className="px-3 py-1 rounded border border-forest-light text-secondary text-xs hover:text-white hover:bg-forest-light transition-colors">2</button>
                            <button className="px-3 py-1 rounded border border-forest-light text-secondary text-xs hover:text-white hover:bg-forest-light transition-colors">3</button>
                            <span className="px-1 text-secondary">...</span>
                            <button className="px-3 py-1 rounded border border-forest-light text-secondary text-xs hover:text-white hover:bg-forest-light transition-colors">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
