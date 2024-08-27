import { Tech, TechInfoWrapper } from './style.ts'
import Tech1 from '../../../assets/tech_1.svg'
import Tech2 from '../../../assets/tech_2.svg'

export function TechInfo() {
  return (
    <TechInfoWrapper>
      <div>
        <Tech>
          <div>
            <h2>Tecnologia & Educação</h2>
            <p>
              Acreditamos que a tecnologia tem o poder de revolucionar a
              educação, tornando-a mais acessível, envolvente e personalizada
              para todos. Nossa missão é combinar o potencial ilimitado da
              tecnologia com os princípios pedagógicos mais eficazes para criar
              soluções educacionais verdadeiramente transformadoras.
            </p>
          </div>
          <picture>
            <img src={Tech2} alt="" />
          </picture>
        </Tech>

        <Tech>
          <picture>
            <img src={Tech1} alt="" />
          </picture>
          <div>
            <h2>Consultoria & Governança de TI</h2>
            <p>
              Acreditamos que a tecnologia tem o poder de revolucionar a
              educação, tornando-a mais acessível, envolvente e personalizada
              para todos. Nossa missão é combinar o potencial ilimitado da
              tecnologia com os princípios pedagógicos mais eficazes para criar
              soluções educacionais verdadeiramente transformadoras.
            </p>
          </div>
        </Tech>
      </div>
    </TechInfoWrapper>
  )
}
