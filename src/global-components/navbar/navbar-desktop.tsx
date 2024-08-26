import React from 'react'
import { WrapperDesktop } from './style.ts'
import AlfaLogo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

export function NavbarDesktop() {
  return (
    <WrapperDesktop>
      <div>
        <picture>
          <img src={AlfaLogo} alt="AlfaLogo" />
        </picture>

        <nav>
          <Link to={'/#home'}>Início</Link>
          <Link to={'/#servicesDetails'}> Serviços</Link>
          <Link to={'/#traffic'}> Tráfego Pago</Link>
          <Link to={'/#about'}>Sobre</Link>
        </nav>
      </div>
    </WrapperDesktop>
  )
}
