"use client";

import {
    Plus,
    Settings,
    Edit2,
    Trash2,
    ToggleLeft,
    ToggleRight,
    ClipboardList,
    DollarSign,
    Users,
    Timer,
    Filter,
    Search,
    ChevronDown,
    Star,
    CheckCircle2,
    X,
} from "lucide-react";
import { useState } from "react";

const surveys = [
    { id: "SRV-1041", title: "Consumer Electronics Usage Habits",         category: "Technology",    reward: 3.50,  duration: 15, completions: 1204, quota: 2000, active: true,  difficulty: "Easy"   },
    { id: "SRV-1038", title: "Online Shopping Behavior & Brand Loyalty",  category: "Retail",        reward: 5.00,  duration: 22, completions: 876,  quota: 1500, active: true,  difficulty: "Medium" },
    { id: "SRV-1035", title: "Financial Services & Mobile Banking",       category: "Finance",       reward: 7.50,  duration: 30, completions: 543,  quota: 1000, active: true,  difficulty: "Medium" },
    { id: "SRV-1029", title: "Healthcare & Wellness App Preferences",     category: "Health",        reward: 4.00,  duration: 18, completions: 2103, quota: 2000, active: false, difficulty: "Easy"   },
    { id: "SRV-1022", title: "Streaming Platform Content Discovery",      category: "Entertainment", reward: 6.00,  duration: 25, completions: 3412, quota: 4000, active: false, difficulty: "Medium" },
    { id: "SRV-1018", title: "Premium Automotive Purchase Intent",        category: "Automotive",    reward: 12.00, duration: 45, completions: 198,  quota: 500,  active: true,  difficulty: "Hard"   },
    { id: "SRV-1012", title: "Social Media Engagement Patterns",         category: "Technology",    reward: 3.00,  duration: 12, completions: 4521, quota: 5000, active: true,  difficulty: "Easy"   },
];

const difficultyConfig: Record<string, { color: string; bg: string }> = {
    Easy:   { color: "text-primary",    bg: "bg-primary/10"    },
    Medium: { color: "text-yellow-400", bg: "bg-yellow-400/10" },
    Hard:   { color: "text-red-400",    bg: "bg-red-400/10"    },
};

const categories = ["All", "Technology", "Retail", "Finance", "Health", "Entertainment", "Automotive"];

type Survey = typeof surveys[number];

function SurveyFormModal({ survey, onClose }: { survey: Survey | null; onClose: () => void }) {
    const isEdit = !!survey;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
            <div className="relative bg-forest border border-forest-light rounded-2xl p-6 w-full max-w-lg shadow-2xl max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-white font-bold text-lg">{isEdit ? "Edit Survey" : "Create Survey"}</h3>
                    <button onClick={onClose} className="text-secondary hover:text-white p-1 transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="flex flex-col gap-4">
                    <div>
                        <label className="block text-secondary text-xs font-medium uppercase tracking-wider mb-1.5">Survey Title</label>
                        <input
                            type="text"
                            defaultValue={survey?.title}
                            placeholder="e.g. Consumer Electronics Usage"
                            className="w-full bg-background-dark border border-forest-light text-white text-sm rounded-lg px-3 py-2.5 focus:outline-none focus:border-primary transition-all placeholder-secondary/50"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-secondary text-xs font-medium uppercase tracking-wider mb-1.5">Category</label>
                            <select className="w-full bg-background-dark border border-forest-light text-white text-sm rounded-lg px-3 py-2.5 focus:outline-none focus:border-primary transition-all cursor-pointer">
                                {categories.filter(c => c !== "All").map(c => (
                                    <option key={c} selected={survey?.category === c}>{c}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-secondary text-xs font-medium uppercase tracking-wider mb-1.5">Difficulty</label>
                            <select className="w-full bg-background-dark border border-forest-light text-white text-sm rounded-lg px-3 py-2.5 focus:outline-none focus:border-primary transition-all cursor-pointer">
                                {["Easy", "Medium", "Hard"].map(d => (
                                    <option key={d} selected={survey?.difficulty === d}>{d}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-secondary text-xs font-medium uppercase tracking-wider mb-1.5">Reward (USD)</label>
                            <input
                                type="number"
                                defaultValue={survey?.reward}
                                placeholder="3.50"
                                step="0.50"
                                className="w-full bg-background-dark border border-forest-light text-white text-sm rounded-lg px-3 py-2.5 focus:outline-none focus:border-primary transition-all placeholder-secondary/50"
                            />
                        </div>
                        <div>
                            <label className="block text-secondary text-xs font-medium uppercase tracking-wider mb-1.5">Duration (min)</label>
                            <input
                                type="number"
                                defaultValue={survey?.duration}
                                placeholder="15"
                                className="w-full bg-background-dark border border-forest-light text-white text-sm rounded-lg px-3 py-2.5 focus:outline-none focus:border-primary transition-all placeholder-secondary/50"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-secondary text-xs font-medium uppercase tracking-wider mb-1.5">Completion Quota</label>
                        <input
                            type="number"
                            defaultValue={survey?.quota}
                            placeholder="1000"
                            className="w-full bg-background-dark border border-forest-light text-white text-sm rounded-lg px-3 py-2.5 focus:outline-none focus:border-primary transition-all placeholder-secondary/50"
                        />
                    </div>

                    <div>
                        <label className="block text-secondary text-xs font-medium uppercase tracking-wider mb-1.5">Survey URL</label>
                        <input
                            type="url"
                            placeholder="https://survey-platform.com/task/..."
                            className="w-full bg-background-dark border border-forest-light text-white text-sm rounded-lg px-3 py-2.5 focus:outline-none focus:border-primary transition-all placeholder-secondary/50"
                        />
                    </div>
                </div>

                <div className="flex gap-3 mt-6">
                    <button onClick={onClose} className="flex-1 py-2.5 rounded-lg border border-forest-light text-secondary hover:text-white hover:bg-forest-light text-sm font-medium transition-colors">
                        Cancel
                    </button>
                    <button className="flex-1 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-background-dark font-bold text-sm transition-all shadow-lg shadow-primary/20">
                        {isEdit ? "Save Changes" : "Create Survey"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function AdminSurveysPage() {
    const [catFilter, setCatFilter] = useState("All");
    const [search, setSearch]       = useState("");
    const [editTarget, setEditTarget] = useState<Survey | null | "new">(null);

    const filtered = surveys.filter(s => {
        const matchCat    = catFilter === "All" || s.category === catFilter;
        const matchSearch = s.title.toLowerCase().includes(search.toLowerCase());
        return matchCat && matchSearch;
    });

    const totals = {
        active:      surveys.filter(s => s.active).length,
        inactive:    surveys.filter(s => !s.active).length,
        completions: surveys.reduce((t, s) => t + s.completions, 0),
        volume:      surveys.reduce((t, s) => t + s.reward * s.completions, 0),
    };

    return (
        <>
            {editTarget !== null && (
                <SurveyFormModal
                    survey={editTarget === "new" ? null : editTarget}
                    onClose={() => setEditTarget(null)}
                />
            )}

            <div className="flex flex-col gap-6">

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { icon: ClipboardList, label: "Active Surveys",    value: totals.active,                               color: "text-primary",    bg: "bg-primary/20"    },
                        { icon: Settings,      label: "Inactive",          value: totals.inactive,                             color: "text-secondary",  bg: "bg-secondary/20"  },
                        { icon: Users,         label: "Total Completions", value: totals.completions.toLocaleString(),          color: "text-blue-400",   bg: "bg-blue-400/20"   },
                        { icon: DollarSign,    label: "USD Distributed",   value: `$${totals.volume.toLocaleString("en-US", { maximumFractionDigits: 0 })}`, color: "text-lime-accent", bg: "bg-lime-accent/20" },
                    ].map((s) => {
                        const Icon = s.icon;
                        return (
                            <div key={s.label} className="bg-forest border border-forest-light rounded-xl p-5 flex items-center gap-4">
                                <div className={`p-2.5 rounded-lg ${s.bg} ${s.color}`}>
                                    <Icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-secondary text-xs">{s.label}</p>
                                    <p className={`text-xl font-bold tracking-tight ${s.color}`}>{s.value}</p>
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
                            <h3 className="text-white font-bold text-lg">Survey Configuration</h3>
                            <p className="text-secondary text-xs mt-0.5">Manage tasks, rewards, quotas and availability</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-3">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
                                <input
                                    type="text"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Search surveys..."
                                    className="bg-background-dark border border-forest-light text-white text-sm rounded-lg pl-9 pr-4 py-1.5 w-44 focus:outline-none focus:border-primary transition-all placeholder-secondary/60"
                                />
                            </div>
                            <div className="flex items-center bg-background-dark border border-forest-light rounded-lg px-3 py-1.5">
                                <Filter className="w-4 h-4 text-secondary mr-2" />
                                <select
                                    value={catFilter}
                                    onChange={(e) => setCatFilter(e.target.value)}
                                    className="bg-transparent text-sm text-white focus:outline-none cursor-pointer"
                                >
                                    {categories.map(c => <option key={c}>{c}</option>)}
                                </select>
                            </div>
                            <button
                                onClick={() => setEditTarget("new")}
                                className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-background-dark text-sm font-bold px-4 py-2 rounded-lg transition-colors shadow-lg shadow-primary/20"
                            >
                                <Plus className="w-4 h-4" />
                                New Survey
                            </button>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[880px]">
                            <thead>
                                <tr className="bg-forest-light/30 text-secondary text-xs uppercase tracking-wider font-semibold border-b border-forest-light">
                                    <th className="px-5 py-4">Survey</th>
                                    <th className="px-5 py-4">Category</th>
                                    <th className="px-5 py-4 text-center">Difficulty</th>
                                    <th className="px-5 py-4 text-right">Reward</th>
                                    <th className="px-5 py-4 text-center">Progress</th>
                                    <th className="px-5 py-4 text-center">Status</th>
                                    <th className="px-5 py-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map((survey) => {
                                    const diff    = difficultyConfig[survey.difficulty];
                                    const pct     = Math.round((survey.completions / survey.quota) * 100);
                                    return (
                                        <tr key={survey.id} className="border-b border-forest-light last:border-0 hover:bg-white/[0.02] transition-colors group">
                                            <td className="px-5 py-4">
                                                <p className="text-white font-medium text-sm leading-snug max-w-[260px]">{survey.title}</p>
                                                <p className="text-secondary text-xs font-mono mt-0.5">{survey.id}</p>
                                            </td>
                                            <td className="px-5 py-4">
                                                <span className="text-sm text-secondary">{survey.category}</span>
                                            </td>
                                            <td className="px-5 py-4 text-center">
                                                <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold ${diff.bg} ${diff.color}`}>
                                                    <Star className="w-3 h-3" />
                                                    {survey.difficulty}
                                                </span>
                                            </td>
                                            <td className="px-5 py-4 text-right">
                                                <span className="text-white font-bold text-sm">${survey.reward.toFixed(2)}</span>
                                                <p className="text-secondary text-xs">{survey.duration} min</p>
                                            </td>
                                            <td className="px-5 py-4">
                                                <div className="flex flex-col gap-1.5 min-w-[120px]">
                                                    <div className="flex justify-between text-xs">
                                                        <span className="text-secondary">{survey.completions.toLocaleString()}</span>
                                                        <span className="text-white">{pct}%</span>
                                                    </div>
                                                    <div className="w-full bg-background-dark rounded-full h-1.5">
                                                        <div
                                                            className="h-1.5 rounded-full bg-primary"
                                                            style={{ width: `${Math.min(pct, 100)}%` }}
                                                        />
                                                    </div>
                                                    <p className="text-secondary text-[10px]">quota: {survey.quota.toLocaleString()}</p>
                                                </div>
                                            </td>
                                            <td className="px-5 py-4 text-center">
                                                <button className="flex items-center gap-1.5 mx-auto">
                                                    {survey.active ? (
                                                        <>
                                                            <ToggleRight className="w-5 h-5 text-primary" />
                                                            <span className="text-primary text-xs font-semibold">Live</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <ToggleLeft className="w-5 h-5 text-secondary" />
                                                            <span className="text-secondary text-xs font-semibold">Off</span>
                                                        </>
                                                    )}
                                                </button>
                                            </td>
                                            <td className="px-5 py-4">
                                                <div className="flex items-center justify-end gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button
                                                        onClick={() => setEditTarget(survey)}
                                                        className="p-1.5 rounded-md hover:bg-primary/10 text-secondary hover:text-primary transition-colors"
                                                    >
                                                        <Edit2 className="w-3.5 h-3.5" />
                                                    </button>
                                                    <button className="p-1.5 rounded-md hover:bg-red-400/10 text-secondary hover:text-red-400 transition-colors">
                                                        <Trash2 className="w-3.5 h-3.5" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    <div className="p-4 border-t border-forest-light flex items-center justify-between">
                        <p className="text-secondary text-sm">
                            <span className="text-white font-medium">{filtered.length}</span> of {surveys.length} surveys
                        </p>
                        <button className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-primary hover:bg-primary/90 text-background-dark text-sm font-bold transition-all">
                            <Plus className="w-3.5 h-3.5" /> Add Survey
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
