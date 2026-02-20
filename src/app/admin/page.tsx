"use client";

import { Users, Info, TrendingUp, PieChart, Filter, ArrowDownNarrowWide, Plus, MoreVertical, Edit2, ShieldAlert } from "lucide-react";

export default function AdminDashboardPage() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Total Users Card */}
                <div className="bg-forest border border-forest-light rounded-xl p-5 relative overflow-hidden group hover:border-primary/30 transition-all">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Users className="w-16 h-16 text-white" />
                    </div>
                    <div className="flex flex-col gap-1 relative z-10">
                        <p className="text-secondary text-sm font-medium flex items-center gap-2">
                            Total Users
                            <Info className="w-4 h-4" />
                        </p>
                        <div className="flex items-end gap-3 mt-1">
                            <h3 className="text-3xl font-bold text-white tracking-tight">12,405</h3>
                            <span className="flex items-center gap-1 text-xs font-semibold text-primary bg-primary/10 px-1.5 py-0.5 rounded mb-1">
                                <TrendingUp className="w-3 h-3" />
                                +5.2%
                            </span>
                        </div>
                        <p className="text-secondary/70 text-xs mt-2">Vs. previous 30 days</p>
                    </div>
                </div>

                {/* Active vs Banned Card */}
                <div className="bg-forest border border-forest-light rounded-xl p-5 flex items-center justify-between relative overflow-hidden hover:border-primary/30 transition-all">
                    <div className="flex flex-col gap-1 relative z-10 w-full pr-4">
                        <p className="text-secondary text-sm font-medium">User Status</p>
                        <div className="flex flex-col mt-2 gap-2">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-primary"></div>
                                <span className="text-white text-sm font-semibold">Active</span>
                                <span className="text-secondary text-xs ml-auto">92%</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-red-500/80"></div>
                                <span className="text-white text-sm font-semibold">Banned</span>
                                <span className="text-secondary text-xs ml-auto">8%</span>
                            </div>
                        </div>
                        <div className="h-1.5 w-full bg-forest-light rounded-full mt-3 flex overflow-hidden">
                            <div className="h-full bg-primary" style={{ width: "92%" }}></div>
                            <div className="h-full bg-red-500/80" style={{ width: "8%" }}></div>
                        </div>
                    </div>
                    <div className="w-16 h-16 rounded-full relative flex-shrink-0" style={{ background: "conic-gradient(#4cae4f 0% 92%, #ef4444 92% 100%)" }}>
                        <div className="absolute inset-2 bg-forest rounded-full flex items-center justify-center">
                            <PieChart className="w-5 h-5 text-white" />
                        </div>
                    </div>
                </div>

                {/* Financials Card */}
                <div className="bg-forest border border-forest-light rounded-xl p-5 relative overflow-hidden group hover:border-primary/30 transition-all">
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
                    <div className="flex flex-col gap-1 relative z-10">
                        <p className="text-secondary text-sm font-medium">Total USD Processed</p>
                        <div className="flex items-end gap-3 mt-1">
                            <h3 className="text-3xl font-bold text-white tracking-tight">$4.2M</h3>
                            <span className="flex items-center text-xs font-semibold text-primary bg-primary/10 px-1.5 py-0.5 rounded mb-1">
                                YTD
                            </span>
                        </div>
                        <div className="mt-4 h-8 w-full bg-gradient-to-t from-primary/20 to-transparent relative">
                            <svg className="absolute bottom-0 left-0 right-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                                <path d="M0 32 L20 25 L40 28 L60 15 L80 20 L100 5 L120 12 L140 2 L160 8 L180 0 L200 10 L300 0" fill="none" stroke="#4cae4f" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Table Section */}
            <div className="bg-forest border border-forest-light rounded-xl flex flex-col shadow-xl shadow-black/20">

                {/* Table Header Controls */}
                <div className="p-5 border-b border-forest-light flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div>
                        <h3 className="text-white text-lg font-bold">User Directory</h3>
                        <p className="text-secondary text-xs">Manage access and account statuses</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        <div className="flex items-center bg-background-dark border border-forest-light rounded-lg px-3 py-1.5">
                            <Filter className="w-4 h-4 text-secondary mr-2" />
                            <select className="bg-transparent text-sm text-white focus:outline-none cursor-pointer">
                                <option>All Statuses</option>
                                <option>Active</option>
                                <option>Banned</option>
                                <option>Pending</option>
                            </select>
                        </div>
                        <div className="flex items-center bg-background-dark border border-forest-light rounded-lg px-3 py-1.5">
                            <ArrowDownNarrowWide className="w-4 h-4 text-secondary mr-2" />
                            <select className="bg-transparent text-sm text-white focus:outline-none cursor-pointer">
                                <option>Newest First</option>
                                <option>Oldest First</option>
                                <option>Highest Balance</option>
                            </select>
                        </div>
                        <button className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors shadow-lg shadow-primary/20">
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
                                <th className="px-6 py-4 w-12">
                                    <input className="rounded border-forest-light bg-background-dark text-primary focus:ring-offset-forest focus:ring-primary/50" type="checkbox" />
                                </th>
                                <th className="px-6 py-4">User Details</th>
                                <th className="px-6 py-4">Role</th>
                                <th className="px-6 py-4">Joined Date</th>
                                <th className="px-6 py-4 text-right">Balance</th>
                                <th className="px-6 py-4 text-center">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-forest-light text-sm">

                            {/* Row 1 */}
                            <tr className="hover:bg-forest-light/20 transition-colors group">
                                <td className="px-6 py-4">
                                    <input className="rounded border-forest-light bg-background-dark text-primary focus:ring-offset-forest focus:ring-primary/50" type="checkbox" />
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-forest-light flex items-center justify-center text-white font-bold text-xs border border-secondary/20">
                                            JD
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-white font-medium">John Doe</span>
                                            <span className="text-secondary text-xs">john.doe@fintech.com</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-forest-light text-secondary border border-secondary/30">
                                        Analyst
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-secondary">Oct 24, 2023</td>
                                <td className="px-6 py-4 text-right font-mono text-white">$2,450.00</td>
                                <td className="px-6 py-4 text-center">
                                    <button className="relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none bg-primary">
                                        <span className="translate-x-4 inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200"></span>
                                    </button>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button className="p-1.5 text-secondary hover:text-white hover:bg-forest-light rounded transition-colors">
                                            <Edit2 className="w-4 h-4" />
                                        </button>
                                        <button className="px-2 py-1 bg-forest-light hover:bg-secondary/20 text-xs font-medium text-white rounded transition-colors border border-secondary/20">
                                            Assign
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            {/* Row 2 */}
                            <tr className="hover:bg-forest-light/20 transition-colors group">
                                <td className="px-6 py-4">
                                    <input className="rounded border-forest-light bg-background-dark text-primary focus:ring-offset-forest focus:ring-primary/50" type="checkbox" />
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-forest-light flex items-center justify-center text-white font-bold text-xs border border-secondary/20">
                                            SS
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-white font-medium">Sarah Smith</span>
                                            <span className="text-secondary text-xs">sarah.s@capital.io</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary/20 text-primary border border-primary/30">
                                        Admin
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-secondary">Oct 22, 2023</td>
                                <td className="px-6 py-4 text-right font-mono text-white">$12,890.50</td>
                                <td className="px-6 py-4 text-center">
                                    <button className="relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none bg-primary">
                                        <span className="translate-x-4 inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200"></span>
                                    </button>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button className="p-1.5 text-secondary hover:text-white hover:bg-forest-light rounded transition-colors">
                                            <Edit2 className="w-4 h-4" />
                                        </button>
                                        <button className="px-2 py-1 bg-forest-light hover:bg-secondary/20 text-xs font-medium text-white rounded transition-colors border border-secondary/20">
                                            Assign
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            {/* Row 3 (Banned) */}
                            <tr className="hover:bg-forest-light/20 transition-colors group bg-red-500/5">
                                <td className="px-6 py-4">
                                    <input className="rounded border-forest-light bg-background-dark text-primary focus:ring-offset-forest focus:ring-primary/50" type="checkbox" />
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-forest-light flex items-center justify-center text-white font-bold text-xs border border-secondary/20">
                                            MK
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-white font-medium">Michael Klein</span>
                                            <span className="text-secondary text-xs">m.klein@trading.net</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-forest-light text-secondary border border-secondary/30">
                                        Viewer
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-secondary">Oct 15, 2023</td>
                                <td className="px-6 py-4 text-right font-mono text-white">$0.00</td>
                                <td className="px-6 py-4 text-center">
                                    <button className="relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none bg-zinc-600">
                                        <span className="translate-x-0 inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200"></span>
                                    </button>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button className="p-1.5 text-secondary hover:text-white hover:bg-forest-light rounded transition-colors">
                                            <Edit2 className="w-4 h-4" />
                                        </button>
                                        <button className="px-2 py-1 bg-forest-light hover:bg-secondary/20 text-xs font-medium text-white rounded transition-colors border border-secondary/20">
                                            Assign
                                        </button>
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="p-4 border-t border-forest-light flex flex-col md:flex-row items-center justify-between gap-4">
                    <span className="text-sm text-secondary">
                        Showing <span className="font-medium text-white">1</span> to <span className="font-medium text-white">3</span> of <span className="font-medium text-white">97</span> results
                    </span>
                    <div className="flex items-center gap-2">
                        <button className="px-3 py-1 rounded bg-background-dark border border-forest-light text-secondary text-sm hover:text-white disabled:opacity-50">Previous</button>
                        <button className="px-3 py-1 rounded bg-forest-light border border-secondary/50 text-white text-sm">1</button>
                        <button className="px-3 py-1 rounded bg-background-dark border border-forest-light text-secondary text-sm hover:text-white hover:bg-forest-light">2</button>
                        <button className="px-3 py-1 rounded bg-background-dark border border-forest-light text-secondary text-sm hover:text-white hover:bg-forest-light">3</button>
                        <span className="text-secondary text-sm">...</span>
                        <button className="px-3 py-1 rounded bg-background-dark border border-forest-light text-secondary text-sm hover:text-white hover:bg-forest-light">12</button>
                        <button className="px-3 py-1 rounded bg-background-dark border border-forest-light text-secondary text-sm hover:text-white">Next</button>
                    </div>
                </div>

            </div>
        </>
    );
}
