import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { MainContainer } from '@/components/MainContainer'
import { Paragraph } from '@/components/Paragraph'
import { Title } from '@/components/Title'
import Image from 'next/image'
import styled from 'styled-components'
import Educativo1 from '../../public/educativo1.png'
import Educativo2 from '../../public/educativo2.png'
import Educativo3 from '../../public/educativo3.png'
import Educativo4 from '../../public/educativo4.png'
import Educativo5 from '../../public/educativo5.png'
import Educativo6 from '../../public/educativo6.png'

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
              <Image src={Educativo1} alt="card image" />
              <CardContent>
                <CardTitle>Como prevenir a Dengue</CardTitle>
                <CardText>Orientações simples para o dia a dia.</CardText>
                <Link>Ler mais</Link>
              </CardContent>
            </Card>
            <Card>
              <Image src={Educativo2} alt="card image" />
              <CardContent>
                <CardTitle>Diferença entre sintomas da gripe, COVID-19 e Dengue</CardTitle>
                <Link>Ler mais</Link>
              </CardContent>
            </Card>
            <Card>
              <Image src={Educativo3} alt="card image" />
              <CardContent>
                <CardTitle>Cuidados com animais domésticos</CardTitle>
                <CardText>Prevenção contra a leishmaniose</CardText>
                <Link>Ler mais</Link>
              </CardContent>
            </Card>
          </VideosContainer>
          <VideosContainer>
            <Card>
              <Image src={Educativo4} alt="card image" />
              <CardContent>
                <CardTitle>Quando procurar uma unidade de saúde</CardTitle>
                <CardText>Descubra em que casos é necessário atendimento.</CardText>
                <Link>Ler mais</Link>
              </CardContent>
            </Card>
            <Card>
              <Image src={Educativo5} alt="card image" />
              <CardContent>
                <CardTitle>Sintomas que você deve conhecer</CardTitle>
                <CardText>Saiba reconhecer os sinais mais comuns de doenças.</CardText>
                <Link>Ler mais</Link>
              </CardContent>
            </Card>
            <Card>
              <Image src={Educativo6} alt="card image" />
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

const MainContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 5rem 0;
`

const VideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const Card = styled.div`
  display: flex;
  gap: 2rem;
  cursor: pointer;
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`

const CardTitle = styled.h4`
  font-weight: 500;
  font-size: 1.1rem;
  margin-bottom: 0.7rem;
`

const CardText = styled.p`
  font-weight: 300;
  margin-bottom: 1rem;
`

const Link = styled.a`
  font-weight: 500;
  text-decoration: underline;
  cursor: pointer;
`
