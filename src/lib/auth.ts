import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";
import { compare } from "bcryptjs";



export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },
    pages: {
        signIn: "/login",
    },
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Missing credentials");
                }
                const user = await prisma.user.findUnique({
                    where: { email: credentials.email }
                });
                if (!user || !user.password) {
                    throw new Error("Invalid credentials");
                }
                const isValid = await compare(credentials.password, user.password);
                if (!isValid) {
                    throw new Error("Invalid credentials");
                }
                return user;
            }
        })
    ],
    callbacks: {
        async session({ session, token }) {
            if (token.sub && session.user) {
                (session.user as any).id = token.sub;
            }
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.sub = user.id;
            }
            return token;
        }
    }
};
