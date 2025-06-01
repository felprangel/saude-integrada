import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { MainContainer } from '@/components/MainContainer'
import { Paragraph } from '@/components/Paragraph'
import { Title } from '@/components/Title'
import Image from 'next/image'
import Notify from '../../public/notify.svg'
import styled from 'styled-components'

export default function NotificarSintomas() {
  return (
    <>
      <Header />
      <MainContainer style={{ paddingTop: 0 }}>
        <TitleContainer>
          <div>
            <Title>Notificar sintomas</Title>
            <Paragraph style={{ maxWidth: '100%' }}>
              Ajude a monitorar sua comunidade notificando sintomas de doenças. Suas informações serão tratadas de forma
              segura e anônima
            </Paragraph>
          </div>
          <Image src={Notify} alt="notify-icon" />
        </TitleContainer>
      </MainContainer>
      <Footer />
    </>
  )
}

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`
