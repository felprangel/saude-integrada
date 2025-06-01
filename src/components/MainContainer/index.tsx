import { HTMLProps } from 'react'
import styled from 'styled-components'

export function MainContainer(props: HTMLProps<HTMLDivElement>) {
  return <Container {...props}>{props.children}</Container>
}

const Container = styled.div`
  padding: 5rem 4rem;
`
