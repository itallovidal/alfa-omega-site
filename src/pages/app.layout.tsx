import React from 'react'
import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div>
      <nav>navbar!</nav>

      <Outlet />
    </div>
  )
}
