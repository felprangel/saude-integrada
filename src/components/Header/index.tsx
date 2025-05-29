import Image from 'next/image'
import Logo from '../../../public/logo.svg'
import styled from 'styled-components'

export function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        {' '}
        <Image height={90} src={Logo} alt="logo" />
      </LogoContainer>
      <LinksContainer>
        <Text>Sobre o UC HUB</Text>
        <Text>Projeto</Text>
      </LinksContainer>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: var(--primary-color);
`

const LogoContainer = styled.div`
  max-width: fit-content;
  padding: 0 5rem 0 2rem;
  border-radius: 0 2rem 2rem 0;
  background-color: var(--grey);
`

const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

const Text = styled.p`
  color: var(--grey);
  font-weight: 500;
  font-size: 1.2rem;
`
