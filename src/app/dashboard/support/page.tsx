"use client";

import { Edit, ChevronDown, UploadCloud, Send, Clock, Wrench, CheckCircle2, Calendar, HelpCircle, FileText } from "lucide-react";

export default function SupportPage() {
    return (
        <div className="flex flex-col w-full">
            {/* Header Section */}
            <div className="mb-8">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white">Support & Help Center</h1>
                    <p className="text-slate-500 dark:text-secondary text-lg max-w-2xl">
                        Need assistance? Submit a ticket below or track the status of your existing requests. Our team is here to help 24/7.
                    </p>
                </div>
            </div>

            {/* Main Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* Left Column: Submit Ticket Form */}
                <div className="lg:col-span-7 xl:col-span-8">
                    <div className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-forest-light bg-white dark:bg-forest/60 backdrop-blur-xl shadow-lg">
                        <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

                        <div className="relative p-6 md:p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary">
                                    <Edit className="w-5 h-5" />
                                </span>
                                <h2 className="text-xl font-bold text-slate-900 dark:text-white">New Support Ticket</h2>
                            </div>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Subject</label>
                                        <input
                                            className="w-full h-12 px-4 rounded-lg bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-forest-light text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                                            placeholder="Brief summary of the issue"
                                            type="text"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Category</label>
                                        <div className="relative">
                                            <select className="w-full h-12 px-4 rounded-lg bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-forest-light text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary appearance-none transition-all cursor-pointer">
                                                <option>Technical Issue</option>
                                                <option>Billing & Payments</option>
                                                <option>Account Management</option>
                                                <option>Feature Request</option>
                                            </select>
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                                                <ChevronDown className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Description</label>
                                    <textarea
                                        className="w-full min-h-[160px] p-4 rounded-lg bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-forest-light text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary resize-none transition-all"
                                        placeholder="Please describe the issue in detail..."
                                    ></textarea>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Attachments</label>
                                    <div className="flex items-center justify-center w-full">
                                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-slate-50 dark:bg-background-dark border-slate-300 dark:border-forest-light hover:bg-slate-100 dark:hover:bg-forest-light/30 transition-colors group">
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <UploadCloud className="w-8 h-8 text-slate-400 group-hover:text-primary mb-2 transition-colors" />
                                                <p className="mb-1 text-sm text-slate-500 dark:text-slate-400"><span className="font-semibold text-primary">Click to upload</span> or drag and drop</p>
                                                <p className="text-xs text-slate-500 dark:text-slate-500">SVG, PNG, JPG or PDF (MAX. 800x400px)</p>
                                            </div>
                                            <input className="hidden" type="file" />
                                        </label>
                                    </div>
                                </div>

                                <div className="pt-2 flex justify-end">
                                    <button className="inline-flex items-center justify-center h-12 px-8 font-semibold text-white transition-all duration-200 rounded-lg bg-primary hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20 focus:outline-none" type="button">
                                        Submit Ticket
                                        <Send className="w-5 h-5 ml-2" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Right Column: Ticket History & Quick Links */}
                <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6">

                    {/* Ticket History Card */}
                    <div className="bg-white dark:bg-forest rounded-xl border border-slate-200 dark:border-forest-light shadow-sm flex-1 flex flex-col">
                        <div className="p-5 border-b border-slate-100 dark:border-forest-light flex items-center justify-between">
                            <h3 className="font-bold text-slate-900 dark:text-white">Recent Tickets</h3>
                            <a className="text-xs font-medium text-primary hover:text-primary-dark transition-colors" href="#">View All</a>
                        </div>

                        <div className="p-2 flex-1 overflow-y-auto max-h-[500px]">

                            <div className="group flex flex-col gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-forest-light/50 transition-colors cursor-pointer border border-transparent hover:border-slate-200 dark:hover:border-forest-light pb-4 border-b dark:border-b-forest-light/60">
                                <div className="flex justify-between items-start">
                                    <div className="flex gap-3">
                                        <div className="mt-1">
                                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400">
                                                <Clock className="w-4 h-4" />
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-primary transition-colors">API Rate Limit Exceeded</h4>
                                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Ticket #2942 • Technical Issue</p>
                                        </div>
                                    </div>
                                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-800">
                                        Pending
                                    </span>
                                </div>
                                <div className="pl-11 text-xs text-slate-400 flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    <span>Created 2 hours ago</span>
                                </div>
                            </div>

                            <div className="group flex flex-col gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-forest-light/50 transition-colors cursor-pointer border border-transparent hover:border-slate-200 dark:hover:border-forest-light pb-4 border-b dark:border-b-forest-light/60">
                                <div className="flex justify-between items-start">
                                    <div className="flex gap-3">
                                        <div className="mt-1">
                                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                                                <Wrench className="w-4 h-4" />
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-primary transition-colors">Survey Logic Branching Error</h4>
                                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Ticket #2938 • Bug Report</p>
                                        </div>
                                    </div>
                                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                                        In Progress
                                    </span>
                                </div>
                                <div className="pl-11 text-xs text-slate-400 flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    <span>Updated yesterday</span>
                                </div>
                            </div>

                            <div className="group flex flex-col gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-forest-light/50 transition-colors cursor-pointer border border-transparent hover:border-slate-200 dark:hover:border-forest-light pb-4 border-b dark:border-b-forest-light/60">
                                <div className="flex justify-between items-start">
                                    <div className="flex gap-3">
                                        <div className="mt-1">
                                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 dark:bg-primary/20 text-green-600 dark:text-primary">
                                                <CheckCircle2 className="w-4 h-4" />
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-primary transition-colors">Billing Invoice Request - Oct</h4>
                                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Ticket #2910 • Billing</p>
                                        </div>
                                    </div>
                                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide bg-green-100 dark:bg-primary/20 text-green-700 dark:text-primary border border-green-200 dark:border-primary/50">
                                        Resolved
                                    </span>
                                </div>
                                <div className="pl-11 text-xs text-slate-400 flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    <span>Closed 3 days ago</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* FAQ Quick Links */}
                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-forest-light dark:to-background-dark rounded-xl border border-slate-200 dark:border-forest-light shadow-sm p-6 relative overflow-hidden mt-auto">
                        <div className="absolute right-0 top-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
                            <HelpCircle className="w-48 h-48 text-white" />
                        </div>
                        <h3 className="font-bold text-white text-lg mb-4 relative z-10">Common Questions</h3>
                        <ul className="space-y-3 relative z-10">
                            <li>
                                <a className="flex items-center gap-2 text-slate-300 hover:text-primary transition-colors text-sm" href="#">
                                    <FileText className="w-4 h-4" />
                                    How to export survey data to CSV?
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center gap-2 text-slate-300 hover:text-primary transition-colors text-sm" href="#">
                                    <FileText className="w-4 h-4" />
                                    Setting up custom domain mapping
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center gap-2 text-slate-300 hover:text-primary transition-colors text-sm" href="#">
                                    <FileText className="w-4 h-4" />
                                    Understanding billing cycles
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}
