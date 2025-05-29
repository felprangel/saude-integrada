import { Header } from '@/components/Header'
import Hero from '../../public/hero.svg'
import ClickIcon from '../../public/icons/click.svg'
import Image from 'next/image'
import styled from 'styled-components'
import { useRouter } from 'next/router'

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

const HeroText = styled.p`
  width: 50%;
  margin: 1rem 0;
  font-weight: 300;
  font-size: 1.2rem;
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
