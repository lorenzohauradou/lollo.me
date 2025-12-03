"use client"

import StoreHeader from "@/src/components/store/store-header"
import StoreHero from "@/src/components/store/store-hero"
import ShowcaseGrid from "@/src/components/store/showcase-grid"
import SystemStatus from "@/src/components/store/system-status"
import Playground from "@/src/components/store/playground"
import RootAccess from "@/src/components/store/root-access"
import PageTransition from "@/src/components/store/page-transition"

export default function StorePage() {
    return (
        <PageTransition>
            <div className="min-h-screen bg-[#050505] text-white antialiased selection:bg-purple-500/30">
                <StoreHeader />
                <main>
                    <StoreHero />
                    <ShowcaseGrid />
                    <SystemStatus />
                    <Playground />
                </main>
                <RootAccess />
            </div>
        </PageTransition>
    )
}
