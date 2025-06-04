import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { MainContainer } from '@/components/MainContainer'
import { Paragraph } from '@/components/Paragraph'
import { Title } from '@/components/Title'
import Image from 'next/image'
import styled from 'styled-components'
import Map from '../../public/map.svg'

export default function MapaSaude() {
  return (
    <>
      <Header />
      <MainContainer>
        <Title>Mapa regional de saúde</Title>
        <Paragraph>
          Visualize no mapa a distribuição geográfica dos casos notificados. Acompanhe onde estão os focos por município
          ou bairro e filtre por tipo de doença.
        </Paragraph>
        <MainContent>
          <SelectContainer>
            <InputContainer>
              <Label>Doença</Label>
              <Select>
                <Option>Selecione...</Option>
              </Select>
            </InputContainer>
            <InputContainer>
              <Label>Período</Label>
              <Select>
                <Option>Selecione...</Option>
              </Select>
            </InputContainer>
            <InputContainer>
              <Label>Nível de risco</Label>
              <Select>
                <Option>Selecione...</Option>
              </Select>
            </InputContainer>
            <Button>Aplicar filtros</Button>
          </SelectContainer>
          <LegendContainer>
            <LegendTitle>Legenda:</LegendTitle>
            <ColorContainer>
              <LegendColor style={{ backgroundColor: 'var(--text-color)' }} />
              <LegendText>Alto</LegendText>
            </ColorContainer>
            <ColorContainer>
              <LegendColor style={{ backgroundColor: 'var(--primary-color)' }} />
              <LegendText>Médio</LegendText>
            </ColorContainer>
            <ColorContainer>
              <LegendColor style={{ backgroundColor: 'var(--legend-color)' }} />
              <LegendText>Baixo</LegendText>
            </ColorContainer>
            <LegendColor />
          </LegendContainer>
          <Image style={{ marginLeft: '17rem' }} src={Map} alt="brazil map" />
        </MainContent>
      </MainContainer>
      <Footer />
    </>
  )
}

const MainContent = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 3rem 0;
`

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--grey);
  border: 1px solid var(--primary-color);
  border-radius: 10px;
  padding: 1rem 1.1rem;
  gap: 1rem;
`

const InputContainer = styled.div`
  width: 100%;
`

const Label = styled.label`
  font-weight: 500;
`

const Select = styled.select`
  width: 100%;
  background-color: var(--grey);
  padding: 0.2rem;
  margin-top: 0.3rem;
`

const Option = styled.option``

const Button = styled.button`
  border: 0;
  color: var(--grey);
  background-color: var(--primary-color);
  padding: 0.5rem 3rem;
`

const LegendContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-left: 3rem;
`

const LegendTitle = styled.h4`
  font-weight: 500;
  font-family: 2rem;
`

const ColorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const LegendText = styled.p``

const LegendColor = styled.div`
  width: 38px;
  height: 15px;
`
