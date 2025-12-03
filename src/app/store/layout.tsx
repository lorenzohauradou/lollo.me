import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Store | SaaS Starter Kits",
    description: "Premium SaaS starter kits. Stop building from scratch. Get production-ready code with Auth, Payments, and AI integrations.",
    keywords: [
        "SaaS starter kit",
        "Next.js boilerplate",
        "Stripe integration",
        "Supabase auth",
        "n8n automation",
        "AI SaaS template",
    ],
    openGraph: {
        title: "The Black Market | SaaS Starter Kits by Lorenzo",
        description: "Steal my codebase. Production-ready SaaS starter kits with Auth, Stripe, and AI integrations.",
        type: "website",
    },
}

export default function StoreLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="dark">
            {children}
        </div>
    )
}

