import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { MainContainer } from '@/components/MainContainer'
import { Paragraph } from '@/components/Paragraph'
import { Title } from '@/components/Title'

export default function RepositorioCientifico() {
  return (
    <>
      <Header />
      <MainContainer>
        <Title>Repositório científico</Title>
        <Paragraph>
          Acesse cartilhas, artigos científicos, boletins informativos e documentos produzidos pelo observatório e
          parceiros do projeto
        </Paragraph>
      </MainContainer>
      <Footer />
    </>
  )
}
