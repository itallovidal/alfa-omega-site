import React from 'react'
import { AddressWrapper, ContactWrapper, Wrapper } from './style.ts'
import AlfaLogo from '../../assets/logo_preto.svg'
import { Link } from 'react-router-dom'
export function Footer() {
  return (
    <Wrapper>
      <div>
        <AddressWrapper>
          <picture>
            <img src={AlfaLogo} alt="AlfaLogo" />
          </picture>
          <div>
            <span>Copacabana</span>
            <span>Rio de Janeiro - RJ, 22030001, BR</span>
            <span>contato@alfaeomegatecnologia.com</span>
          </div>
        </AddressWrapper>
        <ContactWrapper>
          <Link to={'/#home'}>Início</Link>
          <Link to={'/#services'}> Serviços</Link>
          <Link to={'/#traffic'}> Tráfego Pago</Link>
          <Link to={'/#about'}>Sobre</Link>
        </ContactWrapper>
      </div>
    </Wrapper>
  )
}
