import { Header } from '@/components/Header'
import Hero from '../../public/hero.svg'
import Saude from '../../public/saude.svg'
import ClickIcon from '../../public/icons/click.svg'
import GroupIcon from '../../public/icons/group.svg'
import ScienceIcon from '../../public/icons/science.svg'
import EducationIcon from '../../public/icons/education.svg'
import MapIcon from '../../public/icons/map.svg'
import NotifyIcon from '../../public/icons/notify.svg'
import Medicos from '../../public/Medicos.png'
import Image from 'next/image'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { Card } from '@/components/Card'

export default function Home() {
  const Router = useRouter()
  return (
    <>
      <Header />
      <HeroSection>
        <Paragraph>
          <Title>Monitoramento participativo para uma saúde única</Title>
          <HeroText>Conectando dados, ciência e comunidade para fortalecer a saúde pública</HeroText>
          <Button onClick={() => Router.push('/painel-dados')}>
            <ButtonText>Acessar painel de dados</ButtonText>
            <Image height={30} width={30} src={ClickIcon} alt="click icon" />
          </Button>
        </Paragraph>
        <Image src={Hero} alt="hero image" />
      </HeroSection>
      <HubSection>
        <Title>O que é o UC HUB?</Title>
        <Divider>
          <Image style={{ marginTop: '4rem' }} src={Medicos} alt="doctors photos" />
          <Paragraph>
            <SubTitle>
              O UC HUB – Saúde Única e Ações Integradas é um projeto acadêmico que integra dados epidemiológicos,{' '}
            </SubTitle>
            <HubText>
              participação social e capacitação em saúde pública. Seu objetivo é promover a vigilância participativa,
              facilitar o acesso à informação e apoiar a tomada de decisões estratégicas na gestão da saúde coletiva,
              com foco na região Centro-Oeste de Minas Gerais.{' '}
            </HubText>
          </Paragraph>
        </Divider>
      </HubSection>
      <CardSection>
        <Title>Portal interativo de saúde</Title>
        <Divider style={{ width: '100%', padding: 0 }}>
          <CardColumn>
            <Card
              image={GroupIcon}
              title="Painel de indicadores"
              description="Veja os dados e tendências em tempo real"
            />
            <Card image={NotifyIcon} title="Notificar sintomas" description="Ajude a monitorar sua região" />
            <Card
              image={ScienceIcon}
              title="Repositório científico"
              description="Consulta materiais produzidos pelo observatório"
            />
          </CardColumn>
          <CardColumn>
            <Card image={MapIcon} title="Mapa da saúde" description="Explore surtos e informações geográficas" />
            <Card image={EducationIcon} title="Educação em saúde" description="Acesse vídeos, podcasts e FAQs" />
          </CardColumn>
        </Divider>
      </CardSection>
      <SaudeUnicaSection>
        <div>
          <Title>Porque saúde única?</Title>
          <HubText>
            A abordagem de Saúde Única reconhece que a saúde humana está diretamente conectada à saúde animal e ao meio
            ambiente. O UC HUB adota esse conceito para promover ações integradas de vigilância, prevenção e educação em
            saúde pública, considerando as interações entre pessoas, animais e ecossistemas na formulação de políticas e
            estratégias mais eficazes.
          </HubText>
        </div>
        <Image src={Saude} alt="doctor" />
      </SaudeUnicaSection>
      <NotifySection>
        <TextSection>
          <Title>Sua participação faz a diferença!</Title>
          <Title>Ajude a monitorar a saúde de sua comunidade</Title>
        </TextSection>

        <Button>
          <ButtonText style={{ fontSize: '1.7rem' }}>Notifique agora</ButtonText>
          <Image height={30} width={30} src={ClickIcon} alt="click icon" />
        </Button>
      </NotifySection>
    </>
  )
}

const HeroSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 3rem;
`

const Paragraph = styled.div`
  margin: 3rem 0;
  width: 50%;
`

const Title = styled.h3`
  font-weight: 500;
  font-size: 2.5rem;
`

const SubTitle = styled.h4`
  font-weight: 500;
  font-size: 1.8rem;
`

const HeroText = styled.p`
  width: 60%;
  margin: 1rem 0;
  font-weight: 300;
  font-size: 1.2rem;
  margin-bottom: 2rem;
`

const Button = styled.button`
  border: 0;
  background-color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
`

const ButtonText = styled.p`
  color: var(--grey);
`

const HubSection = styled.div`
  margin-top: 6rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
`

const Divider = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;
  padding: 0 5rem;
`

const HubText = styled.p`
  width: 90%;
  margin: 1rem 0;
  font-weight: 300;
  font-size: 1.2rem;
`

const CardSection = styled.div`
  width: 100%;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6rem;
`

const CardColumn = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`

const SaudeUnicaSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 7rem;
  gap: 4rem;
`

const TextSection = styled.div`
  text-align: center;
`

const NotifySection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 7rem;
  margin-top: 12rem;
  gap: 2rem;
`
