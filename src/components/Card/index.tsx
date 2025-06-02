import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styled from 'styled-components'

interface CardProps {
  title: string
  description: string
  image: StaticImport
  link: string
}

export function Card(props: CardProps) {
  const Router = useRouter()
  return (
    <CardContent onClick={() => Router.push(props.link)}>
      <Image src={props.image} alt="card icon" />
      <CardTextContainer>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardTextContainer>
    </CardContent>
  )
}

const CardContent = styled.div`
  background-color: var(--card-color);
  border-radius: 1rem;
  display: flex;
  padding: 3rem 1.5rem;
  justify-content: center;
  align-items: center;
  width: 85%;
  gap: 1rem;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`

const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const CardTitle = styled.h3`
  font-weight: 500;
  color: var(--grey);
`

const CardDescription = styled.p`
  font-weight: 300;
  color: var(--grey);
`
