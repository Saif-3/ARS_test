"use client";

import { PiggyBank, TrendingUp, HandCoins, DollarSign, Link as LinkIcon, ArrowRight, History, Download, Filter, MoreVertical, Wallet, Bitcoin, Check, Clock, X, Building } from "lucide-react";

export default function EarningsPage() {
    return (
        <div className="flex flex-col gap-8 w-full">
            {/* Page Header & Stats */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="flex flex-col gap-1">
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">Withdrawal Management</h2>
                    <p className="text-secondary text-base">Manage your earnings and request payouts seamlessly.</p>
                </div>

                {/* Balance Card Small */}
                <div className="flex items-center gap-4 bg-forest border border-forest-light px-6 py-4 rounded-xl shadow-lg">
                    <div className="p-3 bg-primary/20 rounded-full text-primary">
                        <PiggyBank className="w-8 h-8" />
                    </div>
                    <div>
                        <p className="text-secondary text-xs uppercase tracking-wider font-semibold">Available Balance</p>
                        <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold text-white tracking-tight">$1,240.50</span>
                            <span className="text-primary text-sm font-medium flex items-center gap-1">
                                <TrendingUp className="w-4 h-4" />
                                12.5%
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Section: Request Withdrawal */}
            <section className="w-full">
                <div className="glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>

                    <div className="relative z-10 flex flex-col gap-6">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="p-2 bg-primary/10 rounded-lg text-primary">
                                <HandCoins className="w-6 h-6" />
                            </span>
                            <h3 className="text-xl font-bold text-white">Request New Withdrawal</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                            {/* Amount Input */}
                            <div className="md:col-span-4 flex flex-col gap-2">
                                <label className="text-sm font-medium text-secondary">USD Amount</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <DollarSign className="w-5 h-5 text-white/40" />
                                    </div>
                                    <input
                                        className="block w-full rounded-lg border-0 bg-white/5 py-3 pl-10 pr-4 text-white ring-1 ring-inset ring-white/10 placeholder:text-white/20 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 transition-all"
                                        placeholder="0.00"
                                        type="number"
                                    />
                                </div>
                                <p className="text-xs text-secondary">Min: $10.00 — Max: $5,000.00</p>
                            </div>

                            {/* Link Input */}
                            <div className="md:col-span-8 flex flex-col gap-2">
                                <label className="text-sm font-medium text-secondary">Destination Link / Wallet Address</label>
                                <div className="relative flex gap-4">
                                    <div className="relative flex-1">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <LinkIcon className="w-5 h-5 text-white/40" />
                                        </div>
                                        <input
                                            className="block w-full rounded-lg border-0 bg-white/5 py-3 pl-10 pr-4 text-white ring-1 ring-inset ring-white/10 placeholder:text-white/20 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 transition-all"
                                            placeholder="e.g., paypal.me/username or 0x123...abc"
                                            type="text"
                                        />
                                    </div>
                                    <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-lg font-semibold shadow-lg shadow-primary/20 transition-all flex items-center gap-2 whitespace-nowrap">
                                        <span>Submit Request</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                                <p className="text-xs text-secondary">Double check your destination link. Reversals are not possible.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* History Section: Table */}
            <section className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <History className="w-5 h-5 text-secondary" />
                        Withdrawal History
                    </h3>
                    <div className="flex gap-2">
                        <button className="text-xs font-medium text-secondary hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-md transition-colors flex items-center gap-1">
                            <Download className="w-3 h-3" /> Export CSV
                        </button>
                        <button className="text-xs font-medium text-secondary hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-md transition-colors flex items-center gap-1">
                            <Filter className="w-3 h-3" /> Filter
                        </button>
                    </div>
                </div>

                <div className="overflow-hidden rounded-xl border border-white/5 bg-forest shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm text-secondary">
                            <thead className="bg-white/5 text-xs uppercase text-white">
                                <tr>
                                    <th className="px-6 py-4 font-semibold tracking-wider" scope="col">Date Initiated</th>
                                    <th className="px-6 py-4 font-semibold tracking-wider" scope="col">Transaction ID</th>
                                    <th className="px-6 py-4 font-semibold tracking-wider text-right" scope="col">Amount</th>
                                    <th className="px-6 py-4 font-semibold tracking-wider" scope="col">Destination</th>
                                    <th className="px-6 py-4 font-semibold tracking-wider text-center" scope="col">Status</th>
                                    <th className="px-6 py-4 font-semibold tracking-wider text-right" scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">

                                {/* Row 1 */}
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="whitespace-nowrap px-6 py-4 font-medium text-white">Oct 24, 2023</td>
                                    <td className="whitespace-nowrap px-6 py-4 text-xs font-mono text-secondary">TXN-8839201</td>
                                    <td className="whitespace-nowrap px-6 py-4 text-right font-bold text-white">$250.00</td>
                                    <td className="whitespace-nowrap px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <Wallet className="w-4 h-4 text-blue-400" />
                                            <span className="truncate max-w-[150px]">paypal.me/johndoe</span>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-center">
                                        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                            Approved
                                        </span>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-right">
                                        <button className="text-secondary hover:text-white transition-colors">
                                            <MoreVertical className="w-5 h-5" />
                                        </button>
                                    </td>
                                </tr>

                                {/* Row 2 */}
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="whitespace-nowrap px-6 py-4 font-medium text-white">Oct 20, 2023</td>
                                    <td className="whitespace-nowrap px-6 py-4 text-xs font-mono text-secondary">TXN-7721004</td>
                                    <td className="whitespace-nowrap px-6 py-4 text-right font-bold text-white">$15.00</td>
                                    <td className="whitespace-nowrap px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <Bitcoin className="w-4 h-4 text-orange-400" />
                                            <span className="truncate max-w-[150px] font-mono text-xs">0x71C...9A2b</span>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-center">
                                        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-500 ring-1 ring-inset ring-amber-500/20">
                                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                                            Under Review
                                        </span>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-right">
                                        <button className="text-secondary hover:text-white transition-colors">
                                            <MoreVertical className="w-5 h-5" />
                                        </button>
                                    </td>
                                </tr>

                                {/* Row 3 */}
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="whitespace-nowrap px-6 py-4 font-medium text-white">Sep 15, 2023</td>
                                    <td className="whitespace-nowrap px-6 py-4 text-xs font-mono text-secondary">TXN-6610293</td>
                                    <td className="whitespace-nowrap px-6 py-4 text-right font-bold text-white">$100.00</td>
                                    <td className="whitespace-nowrap px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <Wallet className="w-4 h-4 text-blue-400" />
                                            <span className="truncate max-w-[150px]">paypal.me/johndoe</span>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-center">
                                        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                            Approved
                                        </span>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-right">
                                        <button className="text-secondary hover:text-white transition-colors">
                                            <MoreVertical className="w-5 h-5" />
                                        </button>
                                    </td>
                                </tr>

                                {/* Row 4 */}
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="whitespace-nowrap px-6 py-4 font-medium text-white">Aug 30, 2023</td>
                                    <td className="whitespace-nowrap px-6 py-4 text-xs font-mono text-secondary">TXN-5501928</td>
                                    <td className="whitespace-nowrap px-6 py-4 text-right font-bold text-white">$550.00</td>
                                    <td className="whitespace-nowrap px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <Building className="w-4 h-4 text-white" />
                                            <span className="truncate max-w-[150px]">Bank Transfer ****8821</span>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-center">
                                        <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/10 px-2.5 py-0.5 text-xs font-medium text-red-500 ring-1 ring-inset ring-red-500/20">
                                            <X className="w-3 h-3 text-red-500" />
                                            Rejected
                                        </span>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-right">
                                        <button className="text-secondary hover:text-white transition-colors">
                                            <MoreVertical className="w-5 h-5" />
                                        </button>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                    {/* Pagination Footer */}
                    <div className="px-6 py-4 bg-white/5 border-t border-white/5 flex items-center justify-between">
                        <p className="text-xs text-secondary">Showing <span className="text-white font-medium">1</span> to <span className="text-white font-medium">4</span> of <span className="text-white font-medium">24</span> results</p>
                        <div className="flex gap-1">
                            <button className="p-1 rounded hover:bg-white/10 text-white disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                                <span className="material-symbols-outlined text-sm">chevron_left</span>
                            </button>
                            <button className="p-1 rounded hover:bg-white/10 text-white">
                                <span className="material-symbols-outlined text-sm">chevron_right</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
