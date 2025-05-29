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
  border-radius: 5px;
  display: flex;
`

const CardTextContainer = styled.div``

const CardTitle = styled.h3`
  color: var(--grey);
`

const CardDescription = styled.p`
  color: var(--grey);
`
