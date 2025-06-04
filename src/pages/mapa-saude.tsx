import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { MainContainer } from '@/components/MainContainer'
import { Paragraph } from '@/components/Paragraph'
import { Title } from '@/components/Title'

export default function MapaSaude() {
  return (
    <>
      <Header />
      <MainContainer>
        <Title>Mapa regional de saúde</Title>
        <Paragraph>
          Visualize no mapa a distribuição geográfica dos casos notificados. Acompanhe onde estão os focos por município
          ou bairro e filtre por tipo de doença.
        </Paragraph>
      </MainContainer>
      <Footer />
    </>
  )
}
