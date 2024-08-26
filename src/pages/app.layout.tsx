import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../global-components/navbar/navbar.tsx'

export function AppLayout() {
  return (
    <div>
      <Navbar />

      <Outlet />
    </div>
  )
}
