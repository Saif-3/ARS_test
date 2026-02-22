"use client";

import {
    Users,
    Copy,
    Gift,
    TrendingUp,
    DollarSign,
    CheckCircle2,
    Clock,
    ChevronRight,
    Share2,
    UserPlus,
    Link as LinkIcon,
} from "lucide-react";
import { useState } from "react";

const referrals = [
    { name: "Karim Hassan",   email: "k.hassan@mail.com",  joinedDate: "Jan 18, 2025", status: "active",   earned: 5.00 },
    { name: "Sadia Islam",    email: "sadia.i@mail.com",   joinedDate: "Jan 15, 2025", status: "active",   earned: 5.00 },
    { name: "Riyad Ahmed",    email: "riyad.a@mail.com",   joinedDate: "Jan 10, 2025", status: "active",   earned: 5.00 },
    { name: "Nadia Begum",    email: "n.begum@mail.com",   joinedDate: "Jan 05, 2025", status: "pending",  earned: 0.00 },
    { name: "Farhan Hossain", email: "f.hossain@mail.com", joinedDate: "Dec 28, 2024", status: "inactive", earned: 0.00 },
];

const statusConfig: Record<string, { label: string; color: string; bg: string; border: string }> = {
    active:   { label: "Active",   color: "text-primary",   bg: "bg-primary/10",   border: "border-primary/20"   },
    pending:  { label: "Pending",  color: "text-yellow-400",bg: "bg-yellow-400/10",border: "border-yellow-400/20" },
    inactive: { label: "Inactive", color: "text-slate-400", bg: "bg-slate-400/10", border: "border-slate-400/20"  },
};

const howItWorks = [
    { step: "01", title: "Copy Your Link",     desc: "Share your unique referral link with friends or on social media.",          icon: LinkIcon  },
    { step: "02", title: "Friend Signs Up",    desc: "They register using your link and complete their account verification.",    icon: UserPlus  },
    { step: "03", title: "Earn Together",      desc: "Once they complete their first survey, you both earn a $5 bonus.",          icon: Gift      },
];

export default function ReferralsPage() {
    const [copied, setCopied] = useState(false);
    const referralLink = "https://arssurveys.com/ref/MR-8492";

    const handleCopy = () => {
        navigator.clipboard.writeText(referralLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex flex-col gap-8 w-full">

            {/* Page Header */}
            <div className="flex flex-col gap-2">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">
                    Referral Program
                </h2>
                <p className="text-secondary text-base max-w-2xl">
                    Invite friends and earn $5 for every person who joins and completes their first survey. No limits on how much you can earn.
                </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { icon: Users,      label: "Total Referrals",  value: "5",     color: "text-primary",    iconBg: "bg-primary/20"    },
                    { icon: CheckCircle2,label: "Active Referrals", value: "3",     color: "text-blue-400",   iconBg: "bg-blue-400/20"   },
                    { icon: DollarSign, label: "Total Earned",      value: "$15.00",color: "text-lime-accent",iconBg: "bg-lime-accent/20" },
                    { icon: TrendingUp, label: "Pending Bonus",     value: "$5.00", color: "text-yellow-400", iconBg: "bg-yellow-400/20" },
                ].map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <div key={stat.label} className="glass-card rounded-xl p-5 flex items-center gap-4 relative overflow-hidden group">
                            <div className="absolute -right-4 -top-4 w-16 h-16 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all pointer-events-none" />
                            <div className={`p-2.5 rounded-lg ${stat.iconBg} ${stat.color} flex-shrink-0`}>
                                <Icon className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-secondary text-xs font-medium">{stat.label}</p>
                                <p className={`text-xl font-bold ${stat.color} tracking-tight`}>{stat.value}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Left: Referral Link Card */}
                <div className="lg:col-span-2 flex flex-col gap-6">

                    {/* Link Card */}
                    <div className="glass-card rounded-2xl p-6 relative overflow-hidden">
                        <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2.5 bg-primary/20 rounded-xl text-primary">
                                    <Share2 className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg">Your Referral Link</h3>
                                    <p className="text-secondary text-sm">Share this link to start earning</p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3">
                                <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-forest border border-forest-light rounded-xl">
                                    <LinkIcon className="w-4 h-4 text-secondary flex-shrink-0" />
                                    <span className="text-white text-sm font-mono truncate">{referralLink}</span>
                                </div>
                                <button
                                    onClick={handleCopy}
                                    className={`flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all flex-shrink-0 ${
                                        copied
                                            ? "bg-primary/20 text-primary border border-primary/20"
                                            : "bg-primary hover:bg-primary/90 text-background-dark shadow-lg shadow-primary/20"
                                    }`}
                                >
                                    {copied ? (
                                        <>
                                            <CheckCircle2 className="w-4 h-4" />
                                            Copied!
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="w-4 h-4" />
                                            Copy Link
                                        </>
                                    )}
                                </button>
                            </div>

                            {/* Bonus info */}
                            <div className="mt-4 flex items-center gap-3 p-3 rounded-lg bg-lime-accent/5 border border-lime-accent/20">
                                <Gift className="w-4 h-4 text-lime-accent flex-shrink-0" />
                                <p className="text-sm text-slate-300">
                                    You earn <span className="text-lime-accent font-bold">$5.00</span> for each friend who completes their first survey.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Referral Table */}
                    <div className="bg-forest border border-forest-light rounded-xl flex flex-col shadow-xl shadow-black/20">
                        <div className="p-5 border-b border-forest-light flex items-center justify-between">
                            <div>
                                <h3 className="text-white font-bold">My Referrals</h3>
                                <p className="text-secondary text-xs mt-0.5">Track who you&apos;ve invited and their status</p>
                            </div>
                            <span className="text-xs bg-forest-light text-secondary px-2.5 py-1 rounded-full font-medium border border-secondary/20">
                                {referrals.length} invited
                            </span>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-secondary text-xs uppercase tracking-wider border-b border-forest-light">
                                    <tr>
                                        <th className="px-5 py-3 font-semibold">Referral</th>
                                        <th className="px-5 py-3 font-semibold">Joined</th>
                                        <th className="px-5 py-3 font-semibold text-center">Status</th>
                                        <th className="px-5 py-3 font-semibold text-right">Bonus Earned</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {referrals.map((ref, i) => {
                                        const s = statusConfig[ref.status];
                                        return (
                                            <tr key={i} className="border-b border-forest-light last:border-0 hover:bg-white/[0.02] transition-colors">
                                                <td className="px-5 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-forest-light border border-forest-light flex items-center justify-center text-white text-xs font-bold">
                                                            {ref.name.split(" ").map(w => w[0]).join("").slice(0,2)}
                                                        </div>
                                                        <div>
                                                            <p className="text-white font-medium text-sm">{ref.name}</p>
                                                            <p className="text-secondary text-xs">{ref.email}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-4 text-secondary text-xs">{ref.joinedDate}</td>
                                                <td className="px-5 py-4 text-center">
                                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${s.bg} ${s.color} ${s.border}`}>
                                                        {ref.status === "active" && <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />}
                                                        {s.label}
                                                    </span>
                                                </td>
                                                <td className="px-5 py-4 text-right">
                                                    <span className={`font-bold text-sm ${ref.earned > 0 ? "text-primary" : "text-secondary"}`}>
                                                        {ref.earned > 0 ? `+$${ref.earned.toFixed(2)}` : "—"}
                                                    </span>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Right: How It Works */}
                <div className="flex flex-col gap-4">
                    <div className="glass-card rounded-2xl p-6">
                        <h3 className="text-white font-bold text-lg mb-6">How It Works</h3>
                        <div className="flex flex-col gap-6">
                            {howItWorks.map((step) => {
                                const Icon = step.icon;
                                return (
                                    <div key={step.step} className="flex gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center">
                                                <Icon className="w-5 h-5" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-xs font-mono text-secondary/60">{step.step}</span>
                                                <h4 className="text-white font-semibold text-sm">{step.title}</h4>
                                            </div>
                                            <p className="text-secondary text-xs leading-relaxed">{step.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Bonus Progress */}
                    <div className="glass-card rounded-2xl p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-white font-bold">Milestone Bonus</h3>
                            <span className="text-xs text-secondary">3 / 10 active</span>
                        </div>
                        <div className="mb-3">
                            <div className="flex justify-between text-xs text-secondary mb-1.5">
                                <span>Progress to $25 bonus</span>
                                <span>30%</span>
                            </div>
                            <div className="w-full bg-forest-light rounded-full h-2">
                                <div className="bg-gradient-to-r from-primary to-lime-accent h-2 rounded-full" style={{ width: "30%" }} />
                            </div>
                        </div>
                        <p className="text-xs text-secondary">
                            Reach <span className="text-white font-semibold">10 active referrals</span> to unlock a $25 milestone bonus paid directly to your account.
                        </p>

                        <div className="mt-5 pt-5 border-t border-forest-light flex flex-col gap-3">
                            {[
                                { milestone: "5 referrals",  bonus: "$10 bonus",  done: false },
                                { milestone: "10 referrals", bonus: "$25 bonus",  done: false },
                                { milestone: "25 referrals", bonus: "$75 bonus",  done: false },
                            ].map((m, i) => (
                                <div key={i} className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${m.done ? "border-primary bg-primary" : "border-forest-light"}`}>
                                            {m.done && <CheckCircle2 className="w-3 h-3 text-background-dark" />}
                                        </div>
                                        <span className="text-sm text-secondary">{m.milestone}</span>
                                    </div>
                                    <span className={`text-sm font-bold ${m.done ? "text-primary" : "text-slate-500"}`}>
                                        {m.bonus}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
