import React from 'react'
import HeroSection from './HeroSection'
import CourseHighlights from './CourseHighlights'
import AdmissionAlerts from './AdmissionAlerts'

const Home = () => {
    return (
        <div>
            <HeroSection />
            <CourseHighlights />
            <AdmissionAlerts />
        </div>
    )
}

export default Home