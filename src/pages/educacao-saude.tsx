import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { MainContainer } from '@/components/MainContainer'
import { Paragraph } from '@/components/Paragraph'
import { Title } from '@/components/Title'
import Image from 'next/image'
import styled from 'styled-components'

export default function EducacaoSaude() {
  return (
    <>
      <Header />
      <MainContainer>
        <Title>Conteúdos educativos em saúde</Title>
        <Paragraph>
          Assista vídeos, ouça podcasts e leia respostas para dúvidas frequentes sobre saúde pública e prevenção de
          doenças
        </Paragraph>
        <MainContent>
          <VideosContainer>
            <Card>
              {/* <Image src={} alt="card image" /> */}
              <CardContent>
                <CardTitle>Como prevenir a Dengue</CardTitle>
                <CardText>Orientações simples para o dia a dia.</CardText>
                <Link>Ler mais</Link>
              </CardContent>
            </Card>
            <Card>
              {/* <Image src={} alt="card image" /> */}
              <CardContent>
                <CardTitle>Diferença entre sintomas da gripe, COVID-19 e Dengue</CardTitle>
                <Link>Ler mais</Link>
              </CardContent>
            </Card>
            <Card>
              {/* <Image src={} alt="card image" /> */}
              <CardContent>
                <CardTitle>Cuidados com animais domésticos</CardTitle>
                <CardText>Prevenção contra a leishmaniose</CardText>
                <Link>Ler mais</Link>
              </CardContent>
            </Card>
          </VideosContainer>
          <VideosContainer>
            <Card>
              {/* <Image src={} alt="card image" /> */}
              <CardContent>
                <CardTitle>Quando procurar uma unidade de saúde</CardTitle>
                <CardText>Descubra em que casos é necessário atendimento.</CardText>
                <Link>Ler mais</Link>
              </CardContent>
            </Card>
            <Card>
              {/* <Image src={} alt="card image" /> */}
              <CardContent>
                <CardTitle>Sintomas que você deve conhecer</CardTitle>
                <CardText>Saiba reconhecer os sinais mais comuns de doenças.</CardText>
                <Link>Ler mais</Link>
              </CardContent>
            </Card>
            <Card>
              {/* <Image src={} alt="card image" /> */}
              <CardContent>
                <CardTitle>Cuidados com a saúde no verão</CardTitle>
                <CardText>Proteja-se do calor e previna infecções sazonais.</CardText>
                <Link>Ler mais</Link>
              </CardContent>
            </Card>
          </VideosContainer>
        </MainContent>
      </MainContainer>
      <Footer />
    </>
  )
}

const MainContent = styled.div``

const VideosContainer = styled.div``

const Card = styled.div``

const CardContent = styled.div``

const CardTitle = styled.h4``

const CardText = styled.p``

const Link = styled.a``
