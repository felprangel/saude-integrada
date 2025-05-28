import { Header } from '@/components/Header'
import Hero from '../../public/hero.png'
import Image from 'next/image'
import styled from 'styled-components'

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection>
        <Paragraph></Paragraph>
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

const Paragraph = styled.div``
