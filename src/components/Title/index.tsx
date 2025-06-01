import { HTMLProps } from 'react'
import styled from 'styled-components'

export function Title(props: HTMLProps<HTMLHeadingElement>) {
  return <TitleText>{props.children}</TitleText>
}

const TitleText = styled.h3`
  font-weight: 500;
  font-size: 2.5rem;
`
