"use client";

import { Search, Bell, Plus, DollarSign, Clock, Server, ArrowRight, CheckCircle2, AlertCircle, UserPlus, Ban } from "lucide-react";

export default function DashboardPage() {
    return (
        <>
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 pt-12 md:pt-4">
                <div>
                    <h2 className="text-3xl font-bold text-white tracking-tight">Welcome back, Alex</h2>
                    <p className="text-secondary mt-1">Here is your financial overview for today.</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Search className="absolute top-2.5 left-3 text-secondary w-5 h-5" />
                        <input
                            className="bg-forest-light/50 border border-forest-light text-white text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary block w-64 pl-10 p-2.5 placeholder-secondary/70"
                            placeholder="Search surveys..."
                            type="text"
                        />
                    </div>
                    <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-forest-light/50 border border-forest-light text-white hover:bg-forest-light transition-colors relative">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full"></span>
                    </button>
                    <button className="hidden md:flex bg-primary hover:bg-primary-dark text-white text-sm font-semibold py-2.5 px-5 rounded-lg transition-colors items-center gap-2 shadow-lg shadow-primary/20">
                        <Plus className="w-5 h-5" />
                        New Survey
                    </button>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="glass-card rounded-2xl p-6 relative overflow-hidden group">
                    <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-500"></div>
                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-primary/20 rounded-lg text-primary">
                                <DollarSign className="w-6 h-6" />
                            </div>
                            <span className="flex items-center text-primary text-xs font-bold bg-primary/10 px-2 py-1 rounded-full border border-primary/20">
                                +12%
                            </span>
                        </div>
                        <p className="text-secondary text-sm font-medium">Total Earnings (USD)</p>
                        <h3 className="text-white text-3xl font-bold mt-1 tracking-tight">$1,240.50</h3>
                        <p className="text-xs text-secondary/70 mt-2">vs $1,107.50 last month</p>
                    </div>
                </div>

                <div className="glass-card rounded-2xl p-6 relative overflow-hidden">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-yellow-500/20 rounded-lg text-yellow-500">
                            <Clock className="w-6 h-6" />
                        </div>
                    </div>
                    <p className="text-secondary text-sm font-medium">Pending Withdrawal</p>
                    <h3 className="text-white text-3xl font-bold mt-1 tracking-tight">$45.00</h3>
                    <div className="mt-4 w-full bg-forest-light/50 rounded-full h-1.5">
                        <div className="bg-yellow-500 h-1.5 rounded-full" style={{ width: "65%" }}></div>
                    </div>
                    <p className="text-xs text-secondary/70 mt-2">Estimated arrival: 24h</p>
                </div>

                <div className="glass-card rounded-2xl p-6 relative overflow-hidden">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                            <Server className="w-6 h-6" />
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                            </span>
                            <span className="text-primary text-xs font-bold">Active</span>
                        </div>
                    </div>
                    <p className="text-secondary text-sm font-medium">VPS Status</p>
                    <h3 className="text-white text-3xl font-bold mt-1 tracking-tight">99.9%</h3>
                    <p className="text-xs text-secondary/70 mt-2">Uptime verified</p>
                    <div className="flex gap-2 mt-4">
                        <span className="h-1 w-full bg-primary rounded-full opacity-80"></span>
                        <span className="h-1 w-full bg-primary rounded-full opacity-80"></span>
                        <span className="h-1 w-full bg-primary rounded-full opacity-80"></span>
                        <span className="h-1 w-full bg-primary rounded-full opacity-60"></span>
                        <span className="h-1 w-full bg-primary rounded-full opacity-40"></span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
                <div className="lg:col-span-2 glass-card rounded-2xl p-6 flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h3 className="text-white text-lg font-bold">Earnings Growth</h3>
                            <p className="text-secondary text-sm">Revenue over the last 30 days</p>
                        </div>
                        <button className="text-xs text-secondary hover:text-white bg-forest-light/50 hover:bg-forest-light px-3 py-1.5 rounded-lg transition-colors border border-forest-light">
                            Download Report
                        </button>
                    </div>
                    <div className="flex-1 w-full h-64 min-h-[250px] relative">
                        <svg className="w-full h-full overflow-visible" viewBox="0 0 800 300">
                            <defs>
                                <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                                    <stop offset="0%" stopColor="#4cae4f" stopOpacity="0.2"></stop>
                                    <stop offset="100%" stopColor="#4cae4f" stopOpacity="0"></stop>
                                </linearGradient>
                            </defs>
                            <line stroke="#2d3e2e" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="800" y1="0" y2="0"></line>
                            <line stroke="#2d3e2e" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="800" y1="75" y2="75"></line>
                            <line stroke="#2d3e2e" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="800" y1="150" y2="150"></line>
                            <line stroke="#2d3e2e" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="800" y1="225" y2="225"></line>
                            <line stroke="#2d3e2e" strokeWidth="1" x1="0" x2="800" y1="300" y2="300"></line>

                            <path d="M0,250 C100,240 150,150 250,180 C350,210 400,100 500,120 C600,140 650,50 800,80 L800,300 L0,300 Z" fill="url(#chartGradient)"></path>
                            <path d="M0,250 C100,240 150,150 250,180 C350,210 400,100 500,120 C600,140 650,50 800,80" fill="none" stroke="#4cae4f" strokeLinecap="round" strokeWidth="3"></path>

                            <circle cx="250" cy="180" fill="#151d15" r="4" stroke="#4cae4f" strokeWidth="2"></circle>
                            <circle cx="500" cy="120" fill="#151d15" r="4" stroke="#4cae4f" strokeWidth="2"></circle>
                            <circle cx="800" cy="80" fill="#4cae4f" r="6" stroke="white" strokeWidth="2"></circle>

                            <g transform="translate(720, 30)">
                                <rect fill="#2d3e2e" height="36" rx="6" stroke="#4cae4f" strokeWidth="1" width="80" x="0" y="0"></rect>
                                <text fill="white" fontFamily="Inter" fontSize="12" fontWeight="bold" textAnchor="middle" x="40" y="22">$184.00</text>
                            </g>
                        </svg>
                    </div>
                    <div className="flex justify-between mt-4 text-xs text-secondary font-medium px-2">
                        <span>May 01</span>
                        <span>May 05</span>
                        <span>May 10</span>
                        <span>May 15</span>
                        <span>May 20</span>
                        <span>May 25</span>
                        <span>Today</span>
                    </div>
                </div>

                <div className="glass-card rounded-2xl p-0 flex flex-col h-full overflow-hidden">
                    <div className="p-6 pb-4 border-b border-forest-light">
                        <h3 className="text-white text-lg font-bold">Recent Activity</h3>
                        <p className="text-secondary text-sm">Latest transactions & logs</p>
                    </div>
                    <div className="flex-1 overflow-y-auto p-2">

                        <div className="flex items-center gap-3 p-3 hover:bg-forest-light/30 rounded-lg transition-colors cursor-pointer group">
                            <div className="w-10 h-10 rounded-full bg-forest-light flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <CheckCircle2 className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                                <p className="text-white text-sm font-medium">Survey #4402 Complete</p>
                                <p className="text-secondary text-xs">Tech Trends 2024</p>
                            </div>
                            <div className="text-right">
                                <p className="text-primary text-sm font-bold">+$12.50</p>
                                <p className="text-secondary text-xs">2m ago</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 p-3 hover:bg-forest-light/30 rounded-lg transition-colors cursor-pointer group">
                            <div className="w-10 h-10 rounded-full bg-forest-light flex items-center justify-center text-yellow-500 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                                <Clock className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                                <p className="text-white text-sm font-medium">Withdrawal Request</p>
                                <p className="text-secondary text-xs">PayPal</p>
                            </div>
                            <div className="text-right">
                                <p className="text-white text-sm font-bold">-$45.00</p>
                                <p className="text-secondary text-xs">1h ago</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 p-3 hover:bg-forest-light/30 rounded-lg transition-colors cursor-pointer group">
                            <div className="w-10 h-10 rounded-full bg-forest-light flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                <UserPlus className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                                <p className="text-white text-sm font-medium">Referral Bonus</p>
                                <p className="text-secondary text-xs">User: @mike_t</p>
                            </div>
                            <div className="text-right">
                                <p className="text-primary text-sm font-bold">+$5.00</p>
                                <p className="text-secondary text-xs">4h ago</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 p-3 hover:bg-forest-light/30 rounded-lg transition-colors cursor-pointer group">
                            <div className="w-10 h-10 rounded-full bg-forest-light flex items-center justify-center text-red-400 group-hover:bg-red-500 group-hover:text-white transition-colors">
                                <Ban className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                                <p className="text-white text-sm font-medium">Survey Disqualified</p>
                                <p className="text-secondary text-xs">Consumer Goods</p>
                            </div>
                            <div className="text-right">
                                <p className="text-secondary text-sm font-bold">$0.00</p>
                                <p className="text-secondary text-xs">Yesterday</p>
                            </div>
                        </div>

                    </div>
                    <div className="p-4 border-t border-forest-light">
                        <button className="w-full py-2 bg-forest-light/30 hover:bg-forest-light text-secondary hover:text-white text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2">
                            View Full History
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
