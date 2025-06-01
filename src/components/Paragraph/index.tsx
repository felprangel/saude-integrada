import { HTMLProps } from 'react'
import styled from 'styled-components'

export function Paragraph(props: HTMLProps<HTMLParagraphElement>) {
  return <ParagraphText>{props.children}</ParagraphText>
}

const ParagraphText = styled.p`
  font-weight: 300;
  max-width: 60%;
  font-size: 1.5rem;
`
