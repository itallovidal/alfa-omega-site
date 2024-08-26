import { BoxWrapper, ServiceBox, ServicesWrapper } from './style.ts'
import { Button } from '../../styles'

export function Services() {
  return (
    <ServicesWrapper>
      <div>
        <BoxWrapper>
          <ServiceBox>
            <h2>Educação & Tecnologia</h2>
            <p>
              Serviço especializado que visa ajudar instituições educacionais,
              empresas, organizações e profissionais a aproveitar as inovações
              tecnológicas para aprimorar seus processos de ensino, aprendizado
              e treinamento.
            </p>

            <p>
              Os consultores nessa área fornecem orientação e expertise para a
              integração eficaz de tecnologia na educação, desde a seleção de
              ferramentas e recursos digitais até a implementação de estratégias
              educacionais baseadas em tecnologia.
            </p>
          </ServiceBox>

          <ServiceBox>
            <h2>Marketing Digital</h2>
            <p>
              Serviço especializado que auxilia empresas e organizações a
              desenvolver estratégias de marketing online eficazes. Os
              consultores nessa área oferecem orientação e expertise em áreas
              como publicidade online, SEO (otimização de mecanismos de busca),
              mídias sociais, email marketing, marketing de conteúdo e análise
              de dados.
            </p>

            <p>
              Eles ajudam as empresas a identificar as melhores táticas para
              alcançar seu público-alvo, aumentar o reconhecimento da marca,
              gerar leads e melhorar as conversões.
            </p>
          </ServiceBox>

          <ServiceBox>
            <h2>Tráfego Pago</h2>
            <p>
              Serviço especializado que visa ajudar instituições educacionais,
              empresas, organizações e profissionais a aproveitar as inovações
              tecnológicas para aprimorar seus processos de ensino, aprendizado
              e treinamento.
            </p>

            <p>
              Os consultores nessa área fornecem orientação e expertise para a
              integração eficaz de tecnologia na educação, desde a seleção de
              ferramentas e recursos digitais até a implementação de estratégias
              educacionais baseadas em tecnologia.
            </p>
          </ServiceBox>
          <ServiceBox>
            <h2>Gestão de TI</h2>
            <p>
              Serviço especializado que auxilia empresas e organizações a
              desenvolver estratégias de marketing online eficazes. Os
              consultores nessa área oferecem orientação e expertise em áreas
              como publicidade online, SEO (otimização de mecanismos de busca),
              mídias sociais, email marketing, marketing de conteúdo e análise
              de dados.
            </p>

            <p>
              Eles ajudam as empresas a identificar as melhores táticas para
              alcançar seu público-alvo, aumentar o reconhecimento da marca,
              gerar leads e melhorar as conversões.
            </p>
          </ServiceBox>
        </BoxWrapper>

        <Button>Quero Saber mais</Button>
      </div>
    </ServicesWrapper>
  )
}
