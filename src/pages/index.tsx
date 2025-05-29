import { Header } from '@/components/Header'
import Hero from '../../public/hero.svg'
import ClickIcon from '../../public/icons/click.svg'
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
        <Divider>
          <CardColumn>
            <Card
              image={ClickIcon}
              title="Painel de indicadores"
              description="Veja os dados e tendências em tempo real"
            />
            <Card image={ClickIcon} title="Notificar sintomas" description="Ajude a monitorar sua região" />
            <Card
              image={ClickIcon}
              title="Repositório científico"
              description="Consulta materiais produzidos pelo observatório"
            />
          </CardColumn>
          <CardColumn>
            <Card image={ClickIcon} title="Mapa da saúde" description="Explore surtos e informações geográficas" />
            <Card image={ClickIcon} title="Educação em saúde" description="Acesse vídeos, podcasts e FAQs" />
          </CardColumn>
        </Divider>
      </CardSection>
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
`

const CardColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`
