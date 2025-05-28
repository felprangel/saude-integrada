import Image from 'next/image'
import Logo from '../../../public/logo.svg'
import styled from 'styled-components'

export function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Image src={Logo} alt="logo" />
      </LogoContainer>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  width: 100%;
  background-color: var(--primary-color);
`

const LogoContainer = styled.div`
  max-width: fit-content;
  padding: 0 5rem 0 2rem;
  border-radius: 0 2rem 2rem 0;
  background-color: var(--grey);
`
