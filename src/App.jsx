import React from 'react'
import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/sections/Hero'
import { ProblemSection } from './components/sections/ProblemSection'
import { AndromedaSystem } from './components/sections/AndromedaSystem'
import { WhoIsThisFor } from './components/sections/WhoIsThisFor'
import { ResultsGallery } from './components/sections/ResultsGallery'
import { SecretWeaponSection } from './components/sections/SecretWeaponSection'
import { ComparisonSection } from './components/sections/ComparisonSection'
import { StepsSection } from './components/sections/StepsSection'
import { ExpertStory } from './components/sections/ExpertStory'
import { TestimonialsGrid } from './components/sections/TestimonialsGrid'
import { CurriculumSection } from './components/sections/CurriculumSection'
import { BonusSection } from './components/sections/BonusSection'
import { PricingSection } from './components/sections/PricingSection'
import { GuaranteeSection } from './components/sections/GuaranteeSection'
import { FAQ } from './components/sections/FAQ'
import { Footer } from './components/layout/Footer'
import { Notification } from './components/layout/Notification'

function App() {
    return (
        <main className="bg-background text-white selection:bg-primary selection:text-white font-roboto overflow-x-hidden">
            <Navbar />

            <Hero />
            <ProblemSection />
            <AndromedaSystem />
            <ResultsGallery />
            <ExpertStory />
            <WhoIsThisFor />
            <SecretWeaponSection />
            <ComparisonSection />
            <StepsSection />
            <TestimonialsGrid />
            <CurriculumSection />
            <BonusSection />
            <PricingSection />
            <GuaranteeSection />
            <FAQ />

            {/* Final CTA Strip */}
            <section className="bg-primary py-12 text-center group transition-colors">
                <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-left">
                        <h3 className="text-2xl font-black mb-1 text-white">BẮT ĐẦU NGAY HÔM NAY</h3>
                        <p className="text-white/70 font-bold uppercase text-xs tracking-widest">Ưu đãi chỉ còn lại 09 suất cuối cùng</p>
                    </div>
                    <button className="bg-white text-primary font-black px-10 py-4 rounded-xl text-xl hover:bg-gray-100 transition-colors shadow-2xl transform group-hover:scale-105">
                        NHẬN ƯU ĐÃI NGAY
                    </button>
                </div>
            </section>

            <Footer />
            <Notification />
        </main>
    )
}

export default App
