import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Paragraph } from '@/components/Paragraph'
import { Title } from '@/components/Title'

export default function PainelDados() {
  return (
    <>
      <Header />
      <Title>Painel de indicadores epidemiológicos</Title>
      <Paragraph>
        contextualizar que os dados apresentados são atualizados periodicamente e têm como objetivo apoiar a gestão
        pública e a conscientização comunitária
      </Paragraph>
      <Footer />
    </>
  )
}
