"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BarChart3 } from "lucide-react";

export default function RegisterPage() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        // Simulate API registration call
        const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password })
        });

        if (res.ok) {
            router.push("/login");
        } else {
            const data = await res.json();
            setError(data.message || "Registration failed");
        }
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center px-4 relative">
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="orb w-[500px] h-[500px] bg-primary/20 top-[0%] left-[-10%]"></div>
                <div className="orb w-[600px] h-[600px] bg-lime-accent/10 bottom-[-10%] right-[-10%]"></div>
            </div>

            <div className="glass-card w-full max-w-md p-8 rounded-2xl relative z-10 flex flex-col gap-6">
                <div className="flex flex-col items-center gap-2">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-lime-accent/80 text-white shadow-lg shadow-primary/20">
                        <BarChart3 className="w-8 h-8" />
                    </div>
                    <h1 className="text-2xl font-bold text-white mt-2">Create an Account</h1>
                    <p className="text-slate-400 text-sm text-center">Start earning with premium surveys today</p>
                </div>

                {error && (
                    <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 rounded-lg text-sm text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-slate-300">Full Name</label>
                        <input
                            type="text"
                            className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-slate-300">Email</label>
                        <input
                            type="email"
                            className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-slate-300">Password</label>
                        <input
                            type="password"
                            className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            minLength={6}
                        />
                    </div>

                    <button type="submit" className="mt-2 w-full py-3 rounded-lg bg-primary hover:bg-primary/90 text-background-dark font-bold transition-all shadow-lg shadow-primary/20">
                        Create Account
                    </button>
                </form>

                <p className="text-center text-sm text-slate-400">
                    Already have an account?{" "}
                    <Link href="/login" className="text-primary hover:text-lime-accent font-medium transition-colors">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
}
