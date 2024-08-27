import React from 'react'
import { About } from './about/about.tsx'
import { ServicesDetails } from './servicesDetails/services-details.tsx'
import { Services } from './services/services.tsx'
import { TechInfo } from './tech-info/tech-info.tsx'
import { Course } from './course/course.tsx'

export function Home() {
  return (
    <div>
      <TechInfo />
      <Services />
      <ServicesDetails />
      <Course />
      <About />
    </div>
  )
}
