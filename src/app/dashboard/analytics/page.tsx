"use client";

import {
    TrendingUp,
    DollarSign,
    ClipboardList,
    Clock,
    BarChart2,
    Calendar,
    ArrowUp,
    ArrowDown,
    Activity,
    Target,
    Zap,
} from "lucide-react";

// Inline mini bar chart component (no recharts dependency needed)
function BarChart({ data, color = "#4cae4f" }: { data: number[]; color?: string }) {
    const max = Math.max(...data);
    return (
        <div className="flex items-end gap-1 h-16 w-full">
            {data.map((val, i) => (
                <div
                    key={i}
                    className="flex-1 rounded-sm transition-all duration-300"
                    style={{
                        height: `${(val / max) * 100}%`,
                        background: i === data.length - 1 ? color : `${color}55`,
                    }}
                />
            ))}
        </div>
    );
}

// SVG Sparkline
function Sparkline({ data, color = "#4cae4f" }: { data: number[]; color?: string }) {
    const max  = Math.max(...data);
    const min  = Math.min(...data);
    const w    = 200;
    const h    = 60;
    const norm = (v: number) => h - ((v - min) / (max - min || 1)) * h;
    const pts  = data.map((v, i) => `${(i / (data.length - 1)) * w},${norm(v)}`).join(" L ");

    return (
        <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-full overflow-visible" preserveAspectRatio="none">
            <defs>
                <linearGradient id={`grad-${color.replace("#","")}`} x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor={color} stopOpacity="0.3" />
                    <stop offset="100%" stopColor={color} stopOpacity="0" />
                </linearGradient>
            </defs>
            <path d={`M ${pts}`} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <path d={`M ${pts} L ${w},${h} L 0,${h} Z`} fill={`url(#grad-${color.replace("#","")})`} />
        </svg>
    );
}

const earningsData    = [12, 18, 14, 22, 19, 28, 24, 31, 27, 35, 29, 38, 41, 45];
const surveysData     = [3,  5,  4,  6,  5,  8,  7,  9,  8, 10,  9, 11, 12, 13];
const monthlyEarnings = [42, 67, 58, 89, 74, 95, 84, 107, 98, 124, 115, 138];
const monthLabels     = ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"];

const categoryBreakdown = [
    { label: "Technology",    pct: 38, earned: 48.50, color: "#4cae4f"   },
    { label: "Finance",       pct: 26, earned: 33.15, color: "#9DD666"   },
    { label: "Health",        pct: 18, earned: 22.95, color: "#60A5FA"   },
    { label: "Retail",        pct: 12, earned: 15.30, color: "#F59E0B"   },
    { label: "Other",         pct:  6, earned:  7.65, color: "#94A3B8"   },
];

const recentActivity = [
    { type: "Survey Completed", detail: "Consumer Electronics Q4",  amount: "+$3.50",  time: "2h ago",     positive: true  },
    { type: "Survey Completed", detail: "Financial Services Habits", amount: "+$7.50",  time: "Yesterday",  positive: true  },
    { type: "Bonus Earned",     detail: "Referral: Karim Hassan",   amount: "+$5.00",  time: "Jan 18",     positive: true  },
    { type: "Withdrawal",       detail: "bKash — ৳5,280",          amount: "-$48.00", time: "Jan 15",     positive: false },
    { type: "Survey Completed", detail: "Health App Preferences",   amount: "+$4.00",  time: "Jan 14",     positive: true  },
];

export default function AnalyticsPage() {
    return (
        <div className="flex flex-col gap-8 w-full">

            {/* Page Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex flex-col gap-1">
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">
                        My Analytics
                    </h2>
                    <p className="text-secondary text-base">
                        Track your earnings performance, survey history, and growth trends.
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex items-center bg-forest border border-forest-light rounded-lg px-3 py-2">
                        <Calendar className="w-4 h-4 text-secondary mr-2" />
                        <select className="bg-transparent text-sm text-white focus:outline-none cursor-pointer">
                            <option>Last 30 days</option>
                            <option>Last 90 days</option>
                            <option>This year</option>
                            <option>All time</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* KPI Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { icon: DollarSign,   label: "Total Earned",      value: "$127.55", delta: "+12.4%", positive: true,  iconBg: "bg-primary/20",     color: "text-primary"    },
                    { icon: ClipboardList,label: "Surveys Completed",  value: "34",      delta: "+8.1%",  positive: true,  iconBg: "bg-blue-400/20",    color: "text-blue-400"   },
                    { icon: Clock,        label: "Avg. Time / Survey", value: "22 min",  delta: "-3.2%",  positive: true,  iconBg: "bg-yellow-400/20",  color: "text-yellow-400" },
                    { icon: Target,       label: "Daily Goal Hit",     value: "71%",     delta: "+5.9%",  positive: true,  iconBg: "bg-lime-accent/20", color: "text-lime-accent" },
                ].map((kpi) => {
                    const Icon = kpi.icon;
                    return (
                        <div key={kpi.label} className="glass-card rounded-xl p-5 relative overflow-hidden group">
                            <div className="absolute -right-4 -top-4 w-20 h-20 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all pointer-events-none" />
                            <div className="flex justify-between items-start mb-3">
                                <div className={`p-2 rounded-lg ${kpi.iconBg} ${kpi.color}`}>
                                    <Icon className="w-4 h-4" />
                                </div>
                                <span className={`flex items-center gap-0.5 text-xs font-bold px-1.5 py-0.5 rounded ${
                                    kpi.positive ? "bg-primary/10 text-primary" : "bg-red-400/10 text-red-400"
                                }`}>
                                    {kpi.positive ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                                    {kpi.delta}
                                </span>
                            </div>
                            <p className="text-secondary text-xs font-medium">{kpi.label}</p>
                            <h3 className={`text-2xl font-bold mt-1 tracking-tight ${kpi.color}`}>{kpi.value}</h3>
                        </div>
                    );
                })}
            </div>

            {/* Main Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Earnings Chart */}
                <div className="lg:col-span-2 glass-card rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h3 className="text-white font-bold text-lg">Monthly Earnings</h3>
                            <p className="text-secondary text-xs mt-0.5">USD earned per month over the past year</p>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-lg">
                            <TrendingUp className="w-4 h-4 text-primary" />
                            <span className="text-primary text-xs font-bold">+27% YoY</span>
                        </div>
                    </div>

                    {/* Bar Chart */}
                    <div className="flex items-end gap-2 h-40 w-full mb-3">
                        {monthlyEarnings.map((val, i) => {
                            const max = Math.max(...monthlyEarnings);
                            const isLast = i === monthlyEarnings.length - 1;
                            return (
                                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                                    <div
                                        className="w-full rounded-t-md transition-all duration-500 relative group/bar"
                                        style={{
                                            height: `${(val / max) * 144}px`,
                                            background: isLast
                                                ? "linear-gradient(180deg, #9DD666, #4cae4f)"
                                                : "rgba(76,174,79,0.3)",
                                        }}
                                    >
                                        <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-forest border border-forest-light text-white text-[10px] px-1.5 py-0.5 rounded whitespace-nowrap opacity-0 group-hover/bar:opacity-100 transition-opacity pointer-events-none">
                                            ${val}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex justify-between text-[10px] text-secondary/60 font-medium">
                        {monthLabels.map(m => <span key={m}>{m}</span>)}
                    </div>
                </div>

                {/* Category Breakdown */}
                <div className="glass-card rounded-2xl p-6">
                    <h3 className="text-white font-bold text-lg mb-1">By Category</h3>
                    <p className="text-secondary text-xs mb-6">Where your earnings come from</p>

                    <div className="flex flex-col gap-4">
                        {categoryBreakdown.map((cat) => (
                            <div key={cat.label}>
                                <div className="flex justify-between items-center mb-1.5">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2.5 h-2.5 rounded-full" style={{ background: cat.color }} />
                                        <span className="text-sm text-slate-300 font-medium">{cat.label}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs text-secondary">{cat.pct}%</span>
                                        <span className="text-sm font-bold text-white">${cat.earned.toFixed(2)}</span>
                                    </div>
                                </div>
                                <div className="w-full bg-forest-light rounded-full h-1.5">
                                    <div
                                        className="h-1.5 rounded-full transition-all duration-700"
                                        style={{ width: `${cat.pct}%`, background: cat.color }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 pt-5 border-t border-forest-light">
                        <div className="flex justify-between">
                            <span className="text-secondary text-sm">Total surveyed</span>
                            <span className="text-white font-bold text-sm">$127.55</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Daily Trend */}
                <div className="glass-card rounded-2xl p-6 relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-lime-accent/5 rounded-full blur-3xl pointer-events-none" />
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-lime-accent/20 rounded-lg text-lime-accent">
                            <Activity className="w-4 h-4" />
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-sm">14-Day Trend</h3>
                            <p className="text-secondary text-xs">Daily earnings (USD)</p>
                        </div>
                    </div>
                    <div className="h-16 mt-4">
                        <Sparkline data={earningsData} color="#9DD666" />
                    </div>
                    <div className="flex justify-between mt-3 text-xs text-secondary/60">
                        <span>14 days ago</span>
                        <span>Today</span>
                    </div>
                </div>

                {/* Survey Rate */}
                <div className="glass-card rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-blue-400/20 rounded-lg text-blue-400">
                            <Zap className="w-4 h-4" />
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-sm">Performance Score</h3>
                            <p className="text-secondary text-xs">Based on completion rate & speed</p>
                        </div>
                    </div>

                    {[
                        { label: "Completion Rate",  val: 92, color: "#4cae4f"   },
                        { label: "Quality Score",    val: 87, color: "#9DD666"   },
                        { label: "Response Speed",   val: 78, color: "#60A5FA"   },
                    ].map((bar) => (
                        <div key={bar.label} className="mb-3">
                            <div className="flex justify-between text-xs mb-1.5">
                                <span className="text-secondary">{bar.label}</span>
                                <span className="text-white font-bold">{bar.val}%</span>
                            </div>
                            <div className="w-full bg-forest-light rounded-full h-1.5">
                                <div className="h-1.5 rounded-full" style={{ width: `${bar.val}%`, background: bar.color }} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Recent Activity */}
                <div className="bg-forest border border-forest-light rounded-xl flex flex-col shadow-xl shadow-black/20">
                    <div className="p-4 border-b border-forest-light">
                        <h3 className="text-white font-bold text-sm">Recent Activity</h3>
                    </div>
                    <div className="flex flex-col divide-y divide-forest-light">
                        {recentActivity.map((item, i) => (
                            <div key={i} className="flex items-center justify-between gap-3 px-4 py-3 hover:bg-white/[0.02] transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                                        item.positive ? "bg-primary/20 text-primary" : "bg-red-400/20 text-red-400"
                                    }`}>
                                        {item.positive
                                            ? <ArrowUp className="w-3.5 h-3.5" />
                                            : <ArrowDown className="w-3.5 h-3.5" />}
                                    </div>
                                    <div>
                                        <p className="text-white text-xs font-medium">{item.type}</p>
                                        <p className="text-secondary text-[11px] truncate max-w-[120px]">{item.detail}</p>
                                    </div>
                                </div>
                                <div className="text-right flex-shrink-0">
                                    <p className={`text-sm font-bold ${item.positive ? "text-primary" : "text-red-400"}`}>
                                        {item.amount}
                                    </p>
                                    <p className="text-secondary text-[10px]">{item.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
