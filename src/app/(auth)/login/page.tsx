"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BarChart3 } from "lucide-react";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        if (res?.error) {
            setError("Invalid email or password");
        } else {
            router.push("/dashboard");
        }
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center px-4 relative">
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="orb w-[400px] h-[400px] bg-primary/20 top-[10%] left-[20%]"></div>
                <div className="orb w-[500px] h-[500px] bg-lime-accent/10 bottom-[10%] right-[10%]"></div>
            </div>

            <div className="glass-card w-full max-w-md p-8 rounded-2xl relative z-10 flex flex-col gap-6">
                <div className="flex flex-col items-center gap-2">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-lime-accent/80 text-white shadow-lg shadow-primary/20">
                        <BarChart3 className="w-8 h-8" />
                    </div>
                    <h1 className="text-2xl font-bold text-white mt-2">Welcome Back</h1>
                    <p className="text-slate-400 text-sm text-center">Enter your details to access your account</p>
                </div>

                {error && (
                    <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 rounded-lg text-sm text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-medium text-slate-300">Password</label>
                            <Link href="#" className="text-xs text-primary hover:text-lime-accent transition-colors">Forgot password?</Link>
                        </div>
                        <input
                            type="password"
                            className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="mt-2 w-full py-3 rounded-lg bg-primary hover:bg-primary/90 text-background-dark font-bold transition-all shadow-lg shadow-primary/20">
                        Sign In
                    </button>
                </form>

                <p className="text-center text-sm text-slate-400">
                    Don&apos;t have an account?{" "}
                    <Link href="/register" className="text-primary hover:text-lime-accent font-medium transition-colors">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}
