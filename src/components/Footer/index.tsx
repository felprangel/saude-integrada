import Image from 'next/image'
import Logo from '../../../public/logo.svg'
import Una from '../../../public/una.svg'
import styled from 'styled-components'

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <Title>Links rápidos</Title>
        <Link>Painel</Link>
        <Link>Notificar</Link>
        <Link>Educação</Link>
        <Link>Repositório</Link>
      </FooterContent>
      <FooterContent>
        <Title>Informações</Title>
        <Link>Contato: email@site</Link>
      </FooterContent>
      <FooterContent style={{ justifyContent: 'center', alignItems: 'center', gap: '1.5rem' }}>
        <Image width={200} src={Logo} alt="logo" />
        <Image width={200} src={Una} alt="una logo" />
      </FooterContent>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--primary-color);
  padding: 1.5rem 4rem;
`

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: var(--grey);
`

const Title = styled.h3`
  color: var(--grey);
  margin-bottom: 0.7rem;
`

const Link = styled.a``
