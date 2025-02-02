import React, { useEffect, useRef } from 'react'
import { About } from './about/about.tsx'
import { ServicesDetails } from './servicesDetails/services-details.tsx'
import { Services } from './services/services.tsx'
import { TechInfo } from './tech-info/tech-info.tsx'
import { Course } from './course/course.tsx'
import { Hero } from './hero/hero.tsx'
import { useLocation } from 'react-router-dom'
import { Team } from './team/team.tsx'

export function Home() {
  const { hash } = useLocation()
  const heroRef = useRef<HTMLDivElement>(null)
  const techInfoRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const servicesDetailsRef = useRef<HTMLDivElement>(null)
  const courseRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const teamRef = useRef<HTMLDivElement>(null)

  const refMap = {
    '#home': heroRef,
    '#techInfo': techInfoRef,
    '#services': servicesRef,
    '#serviceDetails': servicesDetailsRef,
    '#course': courseRef,
    '#about': aboutRef,
    '#team': teamRef,
  }

  useEffect(() => {
    const element = refMap[hash as keyof typeof refMap]
    if (hash && element && element.current) {
      element.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [hash])

  return (
    <div>
      <Hero ref={heroRef} />
      <Services ref={servicesRef} />
      <TechInfo ref={techInfoRef} />
      <ServicesDetails ref={servicesDetailsRef} />
      <Course ref={courseRef} />
      <About ref={aboutRef} />
      <Team ref={teamRef} />
    </div>
  )
}
