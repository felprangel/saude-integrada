import { Header } from '@/components/Header'
import Hero from '../../public/hero.png'
import ClickIcon from '../../public/icons/click.svg'
import Image from 'next/image'
import styled from 'styled-components'

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection>
        <Paragraph>
          <HeroTitle>Monitoramento participativo para uma saúde única</HeroTitle>
          <HeroText>Conectando dados, ciência e comunidade para fortalecer a saúde pública</HeroText>
          <button>
            Acessar painel de dados <Image src={ClickIcon} alt="click icon" />
          </button>
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
`

const Paragraph = styled.div`
  margin: 3rem;
  width: 40%;
`

const HeroTitle = styled.h3`
  font-weight: 500;
  font-size: 2rem;
`

const HeroText = styled.p`
  font-weight: 300;
  font-size: 1.2rem;
`
