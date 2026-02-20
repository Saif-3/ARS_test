"use client";

import { ChevronRight, Edit2, BadgeInfo, IdCard, MapPin, UploadCloud, Save } from "lucide-react";

export default function SettingsPage() {
    return (
        <div className="w-full">
            {/* Breadcrumbs & Header */}
            <div className="flex flex-col gap-6 mb-8">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                    <a className="hover:text-primary transition-colors" href="/dashboard">Home</a>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-slate-100 font-medium">Profile Settings</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-100 tracking-tight">Personal Details</h1>
                        <p className="text-slate-400 mt-1">Manage your identity and contact information for ARS Surveys.</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                {/* Left Column: User Card */}
                <div className="xl:col-span-1 space-y-6">
                    <div className="glass-card rounded-xl p-6 flex flex-col items-center text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-primary/20 to-transparent"></div>
                        <div className="relative mt-4">
                            <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-br from-primary to-forest-light">
                                <div className="w-full h-full rounded-full bg-forest-light p-1">
                                    <div className="w-full h-full rounded-full bg-primary/30 flex items-center justify-center text-4xl text-white font-bold">
                                        AM
                                    </div>
                                </div>
                            </div>
                            <button className="absolute bottom-1 right-1 bg-primary text-white p-2 rounded-full shadow-lg hover:bg-primary-dark transition-colors group">
                                <Edit2 className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="mt-4">
                            <h2 className="text-xl font-bold text-slate-100">Alex Morgan</h2>
                            <p className="text-primary font-medium text-sm">Premium Member</p>
                        </div>

                        <div className="mt-6 w-full grid grid-cols-2 gap-4 border-t border-forest-light pt-6">
                            <div className="flex flex-col">
                                <span className="text-slate-400 text-xs uppercase tracking-wide">Member Since</span>
                                <span className="text-slate-200 font-medium">Nov 2023</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-slate-400 text-xs uppercase tracking-wide">Status</span>
                                <span className="text-primary font-medium flex items-center justify-center gap-1">
                                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                    Verified
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card rounded-xl p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-slate-100">Profile Completion</h3>
                            <span className="text-primary font-bold">85%</span>
                        </div>
                        <div className="w-full bg-background-dark rounded-full h-2.5 mb-4 border border-forest-light">
                            <div className="bg-primary h-2.5 rounded-full" style={{ width: "85%" }}></div>
                        </div>
                        <p className="text-sm text-slate-400">Complete your profile to unlock advanced survey features.</p>
                        <button className="mt-4 text-sm text-primary hover:text-primary-dark font-medium flex items-center gap-1">
                            Complete now <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Right Column: Form */}
                <div className="xl:col-span-2">
                    <div className="glass-card rounded-xl p-6 md:p-8">
                        <form className="flex flex-col gap-8">

                            {/* Basic Info Section */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-2 pb-2 border-b border-forest-light/60">
                                    <BadgeInfo className="w-5 h-5 text-primary" />
                                    <h3 className="text-lg font-semibold text-slate-100">Basic Information</h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300">Full Name</label>
                                        <input className="w-full bg-forest-light/30 border border-forest-light rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Enter your full name" type="text" defaultValue="Alex Morgan" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300">Phone Number</label>
                                        <input className="w-full bg-forest-light/30 border border-forest-light rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Enter phone number" type="tel" defaultValue="+1 (555) 000-0000" />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-sm font-medium text-slate-300">English Proficiency</label>
                                        <select className="w-full bg-forest-light/30 border border-forest-light rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-primary appearance-none cursor-pointer">
                                            <option>Beginner</option>
                                            <option defaultValue="Intermediate">Intermediate</option>
                                            <option>Fluent</option>
                                            <option>Native</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Document Upload Section */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-2 pb-2 border-b border-forest-light/60">
                                    <IdCard className="w-5 h-5 text-primary" />
                                    <h3 className="text-lg font-semibold text-slate-100">Identity Verification</h3>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">National ID (NID) Upload</label>
                                    <div className="mt-2 flex justify-center rounded-xl border-2 border-dashed border-forest-light bg-forest-light/20 px-6 py-10 hover:border-primary/50 transition-colors cursor-pointer group">
                                        <div className="text-center">
                                            <div className="mx-auto flex w-12 h-12 items-center justify-center rounded-full bg-forest-light group-hover:bg-primary/20 transition-colors">
                                                <UploadCloud className="w-6 h-6 text-slate-400 group-hover:text-primary" />
                                            </div>
                                            <div className="mt-4 flex text-sm text-slate-400 leading-6 justify-center">
                                                <label className="relative cursor-pointer rounded-md font-semibold text-primary hover:text-primary-dark">
                                                    <span>Upload a file</span>
                                                    <input className="sr-only" type="file" />
                                                </label>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs text-slate-500 mt-2">PNG, JPG, PDF up to 10MB</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Address Section */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-2 pb-2 border-b border-forest-light/60">
                                    <MapPin className="w-5 h-5 text-primary" />
                                    <h3 className="text-lg font-semibold text-slate-100">Location</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-sm font-medium text-slate-300">Street Address</label>
                                        <input className="w-full bg-forest-light/30 border border-forest-light rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-primary" placeholder="123 Main St, Apt 4B" type="text" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300">City</label>
                                        <input className="w-full bg-forest-light/30 border border-forest-light rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-primary" placeholder="New York" type="text" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300">State / Province</label>
                                        <input className="w-full bg-forest-light/30 border border-forest-light rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-primary" placeholder="NY" type="text" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300">Zip / Postal Code</label>
                                        <input className="w-full bg-forest-light/30 border border-forest-light rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-primary" placeholder="10001" type="text" />
                                    </div>
                                </div>
                            </div>

                            {/* Form Actions */}
                            <div className="pt-6 mt-4 flex items-center justify-end gap-4 border-t border-forest-light/60">
                                <button className="px-6 py-2.5 rounded-lg border border-forest-light text-slate-300 font-medium text-sm hover:bg-forest-light hover:text-white transition-colors" type="button">
                                    Cancel
                                </button>
                                <button className="px-6 py-2.5 rounded-lg bg-primary text-background-dark font-medium text-sm hover:bg-primary-dark shadow-lg shadow-primary/20 transition-all flex items-center gap-2" type="submit">
                                    <Save className="w-4 h-4" />
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
