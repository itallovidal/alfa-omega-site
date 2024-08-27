import { ServiceList, ServicesWrapper } from './style.ts'
import { forwardRef } from 'react'

export const Services = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <ServicesWrapper ref={ref} id={'services'} background={'gray'}>
      <div>
        <h1>Consultoria</h1>

        <ServiceList>
          <div>
            <span>Educação & Tecnologia</span>
            <span>Cursos e Treinamentos</span>
            <span>Marketing Digital</span>
          </div>

          <div>
            <span>Tráfego Pago</span>
            <span>Governança Coorporativa</span>
            <span>Gestão de TI</span>
          </div>
        </ServiceList>
      </div>
    </ServicesWrapper>
  )
})
