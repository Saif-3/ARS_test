import Link from "next/link";
import { BarChart3, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";

export default function LandingPage() {
  return (
    <>
      {/* Ambient Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="orb w-[500px] h-[500px] bg-primary/20 top-[-10%] left-[-10%]"></div>
        <div className="orb w-[600px] h-[600px] bg-lime-accent/10 bottom-[-10%] right-[-10%]"></div>
        <div className="orb w-[300px] h-[300px] bg-primary/10 top-[40%] left-[30%]"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav h-16 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-gradient-to-br from-primary to-lime-accent/80 text-white shadow-lg shadow-primary/20">
              <BarChart3 className="w-5 h-5" />
            </div>
            <span className="text-white font-bold text-lg tracking-tight">ARS Surveys</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#features">Features</a>
            <a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#pricing">Pricing</a>
            <a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#about">About</a>
          </div>
          <Link href="/login" className="bg-white/10 hover:bg-white/20 text-white text-sm font-semibold py-2 px-5 rounded-lg transition-all border border-white/5 backdrop-blur-sm">
            Login
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 flex-grow pt-24 pb-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-24">

          {/* Hero Section */}
          <section className="flex flex-col items-center justify-center text-center mt-12 md:mt-20">
            <div className="glass-card p-8 md:p-12 rounded-2xl max-w-4xl w-full relative overflow-hidden group">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
              <div className="flex flex-col items-center gap-6 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase mb-2">
                  <span className="w-2 h-2 rounded-full bg-lime-accent animate-pulse"></span>
                  New Features Live
                </div>
                <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight text-white drop-shadow-sm">
                  Unlock Your <br />
                  <span className="text-gradient">Earning Potential</span>
                </h1>
                <p className="text-slate-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
                  Join the premier survey platform designed for modern earners. Instant payouts, premium tasks, and secure transactions wrapped in a sleek experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
                  <Link href="/register" className="h-12 px-8 rounded-lg bg-primary hover:bg-primary/90 text-background-dark font-bold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(76,174,79,0.3)] flex items-center justify-center">
                    Start Now
                  </Link>
                  <a href="#pricing" className="h-12 px-8 rounded-lg border border-white/20 hover:bg-white/5 text-white font-medium transition-all backdrop-blur-sm flex items-center justify-center gap-2 group-hover:border-primary/50">
                    View Packages
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Stats Dashboard Widget */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 w-full max-w-4xl">
              <div className="glass-card p-6 rounded-xl flex flex-col gap-1 relative overflow-hidden">
                <div className="absolute right-0 top-0 p-4 opacity-10">
                  <BarChart3 className="w-10 h-10 text-white" />
                </div>
                <p className="text-slate-400 text-sm font-medium">Total Paid Out</p>
                <div className="flex items-end gap-2">
                  <p className="text-white text-2xl font-bold tracking-tight">$1.2M+</p>
                  <span className="text-lime-accent text-xs font-bold mb-1 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> 12%
                  </span>
                </div>
                <div className="h-8 w-full mt-2 flex items-end gap-1 opacity-80">
                  <div className="w-1/6 bg-primary/20 h-[30%] rounded-sm"></div>
                  <div className="w-1/6 bg-primary/30 h-[50%] rounded-sm"></div>
                  <div className="w-1/6 bg-primary/40 h-[40%] rounded-sm"></div>
                  <div className="w-1/6 bg-primary/60 h-[70%] rounded-sm"></div>
                  <div className="w-1/6 bg-primary/80 h-[60%] rounded-sm"></div>
                  <div className="w-1/6 bg-lime-accent h-[90%] rounded-sm shadow-[0_0_10px_rgba(157,214,102,0.4)]"></div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl flex flex-col gap-1 relative overflow-hidden">
                <p className="text-slate-400 text-sm font-medium">Active Users</p>
                <div className="flex items-end gap-2">
                  <p className="text-white text-2xl font-bold tracking-tight">50k+</p>
                  <span className="text-lime-accent text-xs font-bold mb-1 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> 5%
                  </span>
                </div>
                <svg className="w-full h-8 mt-2 overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 20">
                  <path className="drop-shadow-md" d="M0 15 Q 25 18 50 10 T 100 5" fill="none" stroke="#9DD666" strokeLinecap="round" strokeWidth="2"></path>
                </svg>
              </div>

              <div className="glass-card p-6 rounded-xl flex flex-col gap-1 relative overflow-hidden">
                <p className="text-slate-400 text-sm font-medium">Growth Rate</p>
                <div className="flex items-end gap-2">
                  <p className="text-white text-2xl font-bold tracking-tight">+125%</p>
                  <span className="text-lime-accent text-xs font-bold mb-1 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> 15%
                  </span>
                </div>
                <div className="h-8 w-full mt-2 flex items-center gap-1">
                  <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-lime-accent rounded-full shadow-[0_0_10px_rgba(157,214,102,0.4)]"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features / Graph Section */}
          <section className="flex flex-col md:flex-row gap-8 items-center justify-center" id="features">
            <div className="w-full md:w-1/2 flex flex-col gap-6">
              <h2 className="text-3xl font-bold text-white tracking-tight">Monitor Your Growth</h2>
              <p className="text-slate-400 font-light text-lg">
                Track your daily earnings with precision. Our real-time analytics dashboard gives you the insights you need to maximize your survey income.
              </p>
              <ul className="flex flex-col gap-3 mt-2">
                <li className="flex items-center gap-3 text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-lime-accent" />
                  <span>Real-time earnings updates</span>
                </li>
                <li className="flex items-center gap-3 text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-lime-accent" />
                  <span>Instant withdrawal to local banks</span>
                </li>
                <li className="flex items-center gap-3 text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-lime-accent" />
                  <span>High-paying premium surveys</span>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2">
              <div className="glass-card p-6 rounded-2xl relative">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Monthly Revenue</p>
                    <p className="text-2xl font-bold text-white mt-1">$4,250.00</p>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white">
                    Last 30 Days
                  </div>
                </div>
                <div className="w-full h-64">
                  <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 400 150">
                    <line stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" x1="0" x2="400" y1="30" y2="30"></line>
                    <line stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" x1="0" x2="400" y1="70" y2="70"></line>
                    <line stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" x1="0" x2="400" y1="110" y2="110"></line>
                    <path className="drop-shadow-[0_0_10px_rgba(157,214,102,0.5)]" d="M0 120 C 50 120, 80 90, 130 90 S 180 110, 230 70 S 300 80, 350 40 L 400 20" fill="none" stroke="#9DD666" strokeWidth="3"></path>
                    <circle cx="350" cy="40" fill="#0F1C0F" r="4" stroke="#9DD666" strokeWidth="2"></circle>
                    <rect fill="#4cae4f" height="24" rx="4" width="80" x="310" y="5"></rect>
                    <text fill="#0F1C0F" fontSize="10" fontWeight="bold" textAnchor="middle" x="350" y="21">$524 today</text>
                  </svg>
                </div>
                <div className="flex justify-between mt-4 text-xs text-slate-500 font-medium px-2">
                  <span>Week 1</span>
                  <span>Week 2</span>
                  <span>Week 3</span>
                  <span>Week 4</span>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="flex flex-col items-center gap-12 mb-10" id="pricing">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Choose Your Package</h2>
              <p className="text-slate-400 max-w-lg mx-auto">Select a plan that fits your ambition. Upgrade anytime as you scale your earnings.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">

              <div className="glass-card p-8 rounded-2xl flex flex-col gap-6 hover:-translate-y-1 transition-transform duration-300">
                <div>
                  <h3 className="text-xl font-bold text-white">Starter 1</h3>
                  <p className="text-slate-400 text-sm mt-1">Perfect for beginners</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-white">3,290</span>
                  <span className="text-sm font-semibold text-slate-400">BDT</span>
                </div>
                <hr className="border-white/10" />
                <ul className="flex flex-col gap-4 flex-1">
                  <li className="flex items-start gap-3 text-slate-300 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-lime-accent" /> Basic survey access
                  </li>
                  <li className="flex items-start gap-3 text-slate-300 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-lime-accent" /> Standard payout speed
                  </li>
                </ul>
                <Link href="/register" className="w-full py-3 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors text-sm text-center">
                  Get Started
                </Link>
              </div>

              <div className="glass-card p-8 rounded-2xl flex flex-col gap-6 relative transform md:-translate-y-4 border-primary/40 shadow-[0_0_30px_rgba(76,174,79,0.15)] z-10">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-lime-accent px-4 py-1 rounded-full text-background-dark text-xs font-bold uppercase tracking-wider shadow-lg">
                  Best Value
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Starter 2</h3>
                  <p className="text-slate-400 text-sm mt-1">For serious earners</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-white">4,490</span>
                  <span className="text-sm font-semibold text-slate-400">BDT</span>
                </div>
                <hr className="border-white/10" />
                <ul className="flex flex-col gap-4 flex-1">
                  <li className="flex items-start gap-3 text-white text-sm font-medium">
                    <CheckCircle2 className="w-5 h-5 text-lime-accent" /> All Starter 1 features
                  </li>
                  <li className="flex items-start gap-3 text-white text-sm font-medium">
                    <CheckCircle2 className="w-5 h-5 text-lime-accent" /> High-Yield Surveys
                  </li>
                </ul>
                <Link href="/register" className="w-full py-3 rounded-lg bg-primary hover:bg-primary/90 text-background-dark font-bold transition-all shadow-lg shadow-primary/20 text-sm text-center">
                  Upgrade Now
                </Link>
              </div>

              <div className="glass-card p-8 rounded-2xl flex flex-col gap-6 hover:-translate-y-1 transition-transform duration-300">
                <div>
                  <h3 className="text-xl font-bold text-white">Renewal</h3>
                  <p className="text-slate-400 text-sm mt-1">Existing members only</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-white">2,999</span>
                  <span className="text-sm font-semibold text-slate-400">BDT</span>
                </div>
                <hr className="border-white/10" />
                <ul className="flex flex-col gap-4 flex-1">
                  <li className="flex items-start gap-3 text-slate-300 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-lime-accent" /> Maintain account status
                  </li>
                  <li className="flex items-start gap-3 text-slate-300 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-lime-accent" /> Keep streak bonuses
                  </li>
                </ul>
                <Link href="/login" className="w-full py-3 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors text-sm text-center">
                  Renew Plan
                </Link>
              </div>

            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 glass-nav border-t border-white/5 mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-4 items-center md:items-start">
            <div className="flex items-center gap-2">
              <div className="size-6 rounded bg-primary flex items-center justify-center">
                <BarChart3 className="text-white w-4 h-4" />
              </div>
              <span className="text-white font-bold text-lg">ARS Surveys</span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs text-center md:text-left">
              Empowering users worldwide to monetize their opinions securely and efficiently.
            </p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Contact Support</a>
          </div>
        </div>
      </footer>
    </>
  );
}
