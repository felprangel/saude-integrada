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
              <LegendText>Alto</LegendText>
              <LegendColor />
            </ColorContainer>
            <ColorContainer>
              <LegendText>Médio</LegendText>
              <LegendColor />
            </ColorContainer>
            <ColorContainer>
              <LegendText>Baixo</LegendText>
              <LegendColor />
            </ColorContainer>
            <LegendColor />
          </LegendContainer>
          <Image src={Map} alt="brazil map" />
        </MainContent>
      </MainContainer>
      <Footer />
    </>
  )
}

const MainContent = styled.div``

const SelectContainer = styled.div``

const InputContainer = styled.div``

const Label = styled.label``

const Select = styled.select``

const Option = styled.option``

const Button = styled.button``

const LegendContainer = styled.div``

const LegendTitle = styled.h4``

const ColorContainer = styled.div``

const LegendText = styled.p``

const LegendColor = styled.div``
