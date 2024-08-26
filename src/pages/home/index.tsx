import React from 'react'
import { About } from './about/about.tsx'
import { ServicesDetails } from './servicesDetails/services-details.tsx'
import { Services } from './services/services.tsx'

export function Home() {
  return (
    <div>
      <Services />
      <ServicesDetails />
      <About />
    </div>
  )
}
