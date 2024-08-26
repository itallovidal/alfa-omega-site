import { ServiceList, ServicesWrapper } from './style.ts'

export function Services() {
  return (
    <ServicesWrapper background={'black'}>
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
}
