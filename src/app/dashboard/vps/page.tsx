"use client";

import { Lock, Router, Copy, Eye, Copy as CopyIcon, Info, Activity, Globe, RefreshCw, AlertTriangle, HeadphonesIcon } from "lucide-react";

export default function VPSDetailsPage() {
    return (
        <div className="flex flex-col gap-6">
            {/* Page Title Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-4">
                <div className="flex flex-col gap-2">
                    <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">VPS Connection Details</h2>
                    <p className="text-slate-400 text-base font-normal">
                        Secure connection credentials assigned to Worker ID: <span className="text-slate-200 font-mono">#8492</span>
                    </p>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 bg-forest-light/50 rounded-full border border-forest-light backdrop-blur-sm">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </span>
                    <span className="text-primary font-medium text-sm">System Operational</span>
                </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Main Connection Card */}
                <div className="lg:col-span-2 flex flex-col gap-6">

                    <div className="relative overflow-hidden rounded-xl border border-forest-light bg-forest shadow-2xl group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-50"></div>
                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors duration-700"></div>

                        <div className="relative p-6 md:p-8 flex flex-col justify-between min-h-[240px]">
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col gap-1">
                                    <span className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider font-bold">
                                        <Lock className="w-4 h-4" />
                                        Encrypted Connection
                                    </span>
                                    <h3 className="text-white text-3xl font-bold mt-2">Assigned VPS IP</h3>
                                </div>
                                <div className="bg-forest/80 backdrop-blur border border-forest-light p-2 rounded-lg text-slate-400">
                                    <Router className="w-6 h-6" />
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-end sm:justify-between gap-4 mt-8">
                                <div className="font-mono text-4xl md:text-5xl font-bold text-white tracking-tight tabular-nums">
                                    192.168.1.45
                                </div>
                                <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-background-dark font-bold rounded-lg transition-all active:scale-95 shadow-lg shadow-primary/20">
                                    <Copy className="w-5 h-5" />
                                    <span>Copy IP</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-8 rounded-xl bg-forest border border-forest-light">
                        <div className="flex flex-col gap-2">
                            <label className="text-slate-300 text-sm font-medium flex justify-between">
                                Username
                                <span className="text-xs text-slate-500">Read-only</span>
                            </label>
                            <div className="relative group">
                                <input
                                    className="w-full bg-background-dark border border-forest-light rounded-lg px-4 py-3 text-white font-mono focus:outline-none focus:border-primary/50 transition-colors"
                                    readOnly
                                    type="text"
                                    value="ars_worker_01"
                                />
                                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors p-1" title="Copy Username">
                                    <CopyIcon className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-slate-300 text-sm font-medium flex justify-between">
                                Password
                                <span className="text-xs text-slate-500">Tap to reveal</span>
                            </label>
                            <div className="relative group">
                                <input
                                    className="w-full bg-background-dark border border-forest-light rounded-lg px-4 py-3 text-white font-mono focus:outline-none focus:border-primary/50 transition-colors tracking-widest"
                                    readOnly
                                    type="password"
                                    value="SecurePass123!"
                                />
                                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                                    <button className="text-slate-400 hover:text-white transition-colors p-1.5 rounded hover:bg-forest-light" title="Show Password">
                                        <Eye className="w-5 h-5" />
                                    </button>
                                    <button className="text-slate-400 hover:text-white transition-colors p-1.5 rounded hover:bg-forest-light" title="Copy Password">
                                        <CopyIcon className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-2 pt-2">
                            <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg flex items-start gap-3">
                                <Info className="w-5 h-5 text-primary mt-0.5" />
                                <div className="flex flex-col gap-1">
                                    <p className="text-white text-sm font-medium">Security Notice</p>
                                    <p className="text-slate-400 text-xs leading-relaxed">
                                        These credentials are strictly confidential. Do not share your worker account details with anyone. Connection logs are monitored for security compliance.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Right Sidebar: Stats & Actions */}
                <div className="flex flex-col gap-6">
                    <div className="rounded-xl bg-forest border border-forest-light p-6 flex flex-col gap-4">
                        <h3 className="text-white font-semibold flex items-center gap-2">
                            <Activity className="w-5 h-5 text-slate-400" />
                            System Status
                        </h3>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-between p-3 rounded-lg bg-background-dark border border-forest-light">
                                <span className="text-slate-400 text-sm">Uptime</span>
                                <span className="text-primary font-mono font-medium">99.99%</span>
                            </div>
                            <div className="flex items-center justify-between p-3 rounded-lg bg-background-dark border border-forest-light">
                                <span className="text-slate-400 text-sm">Latency</span>
                                <span className="text-white font-mono font-medium">24ms</span>
                            </div>
                            <div className="flex items-center justify-between p-3 rounded-lg bg-background-dark border border-forest-light">
                                <span className="text-slate-400 text-sm">Region</span>
                                <span className="text-white font-medium flex items-center gap-2">
                                    <Globe className="w-4 h-4" />
                                    US-East
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl bg-forest border border-forest-light p-6 flex flex-col gap-4">
                        <h3 className="text-white font-semibold">Quick Actions</h3>
                        <button className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border border-forest-light hover:bg-forest-light text-slate-300 hover:text-white transition-all">
                            <RefreshCw className="w-4 h-4" />
                            Refresh Connection
                        </button>
                        <button className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border border-forest-light hover:bg-forest-light text-slate-300 hover:text-white transition-all">
                            <AlertTriangle className="w-4 h-4" />
                            Report Issue
                        </button>
                    </div>

                    <div className="mt-auto rounded-xl bg-gradient-to-br from-forest-light to-forest p-6 border border-forest-light text-center">
                        <div className="bg-background-dark inline-flex p-3 rounded-full mb-3 border border-forest-light">
                            <HeadphonesIcon className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-white font-bold mb-1">Need help connecting?</h4>
                        <p className="text-slate-400 text-sm mb-4">Check our setup guide for detailed instructions.</p>
                        <a className="text-primary hover:text-primary-dark text-sm font-semibold hover:underline" href="#">View Setup Guide</a>
                    </div>
                </div>

            </div>
        </div>
    );
}
