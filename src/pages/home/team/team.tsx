import React, { forwardRef } from 'react'
import { TeamWrapper, TeamGrid, TeamHeader, TeamCard } from './style.ts'
import itallo from '../../../assets/itallo.jpg'
import davi from '../../../assets/davi.jpeg'

export const Team = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <TeamWrapper ref={ref} id={'team'} background={'white'}>
      <TeamGrid>
        <TeamHeader>
          <h1>Equipe</h1>
          <p>
            Estamos sempre nos atualizando para fornecer um serviço com as
            tecnologias mais atuais do mercado, trabalhando para entregar o que
            há de melhor, com velocidade, comprometimento e resultado. Hoje, a
            alfa e ômega conta com 2 profissionais que abrangem todo o
            ecossistema necessário para entregar o necessário para que você
            tenha resultado.
          </p>
        </TeamHeader>
        <TeamCard
          css={{
            gridRow: '1/3',
            gridColumn: '2/3',
            '@mobile': {
              gridRow: '2/3',
              gridColumn: '1/2',
            },
          }}
        >
          <picture>
            <img src={itallo} alt="imagem do primeiro desenvolvedor" />
          </picture>
          <div>
            <h2>Itallo</h2>
            <p>
              Desenvolvedor front-end e Mobile, responsável por desenvolver
              sites, landing pages e aplicativos, assim como confeccionar a
              parte visual e cuidar da experiência de usuário.
            </p>
          </div>
        </TeamCard>

        <TeamCard
          css={{
            gridRow: '2/4',
            gridColumn: '1/2',
            '@mobile': {
              gridRow: '3/4',
              gridColumn: '1/2',
            },
          }}
        >
          <picture>
            <img
              style={{
                objectPosition: 'center',
              }}
              src={davi}
              alt="imagem do primeiro desenvolvedor"
            />
          </picture>
          <div>
            <h2>Davi Alves</h2>
            <p>
              Desenvolvedor back-end e GameDev, responsável por lidar com
              rotinas de back-end e tratamento de dados.
            </p>
          </div>
        </TeamCard>
      </TeamGrid>
    </TeamWrapper>
  )
})
