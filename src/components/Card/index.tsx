import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import styled from 'styled-components'

interface CardProps {
  title: string
  description: string
  image: StaticImport
}

export function Card(props: CardProps) {
  return (
    <CardContent>
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
  padding: 2rem 1.5rem;
  justify-content: center;
  align-items: center;
  width: 85%;
  gap: 1rem;
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
