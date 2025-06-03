import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { MainContainer } from '@/components/MainContainer'
import { Paragraph } from '@/components/Paragraph'
import { Title } from '@/components/Title'
import Image from 'next/image'
import Chart from '../../public/graficos/grafico1.svg'
import Chart1 from '../../public/graficos/grafico2.svg'
import styled from 'styled-components'
import { useRouter } from 'next/router'

export default function PainelDados() {
  const Router = useRouter()

  return (
    <>
      <Header />
      <MainContainer>
        <Title>Painel de indicadores epidemiológicos</Title>
        <Paragraph>
          contextualizar que os dados apresentados são atualizados periodicamente e têm como objetivo apoiar a gestão
          pública e a conscientização comunitária
        </Paragraph>
        <FilterContainer>
          <SelectContainer>
            <SelectLabel>Região</SelectLabel>
            <Select name="regiao" id="regiao">
              <Option value="selecione">Selecione...</Option>
            </Select>
          </SelectContainer>
          <SelectContainer>
            <SelectLabel>Doença</SelectLabel>
            <Select name="doenca" id="doenca">
              <Option value="selecione">Selecione...</Option>
            </Select>
          </SelectContainer>
          <SelectContainer>
            <SelectLabel>Período</SelectLabel>
            <Select name="periodo" id="periodo">
              <Option value="selecione">Selecione...</Option>
            </Select>
          </SelectContainer>
          <Button>Aplicar filtros</Button>
        </FilterContainer>
        <NumbersContainer>
          <NumberCard>
            <CardText>Total de casos notificados</CardText>
            <CardNumber>130</CardNumber>
          </NumberCard>
          <NumberCard>
            <CardText>Casos ativos no período</CardText>
            <CardNumber>45</CardNumber>
          </NumberCard>
          <NumberCard>
            <CardText>Média móvel de novos casos</CardText>
            <CardNumber>30</CardNumber>
          </NumberCard>
        </NumbersContainer>
        <ChartsContainer>
          <Image src={Chart} alt="chart" />
          <Image src={Chart1} alt="chart" />
        </ChartsContainer>
        <Button onClick={() => Router.push('/mapa-saude')}>Visualizar no mapa</Button>
      </MainContainer>
      <Footer />
    </>
  )
}

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 5rem;
`

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`

const Select = styled.select`
  background-color: var(--grey);
  width: 17rem;
  height: 2rem;
  padding: 0 0.5rem;
  font-weight: 300;
`

const SelectLabel = styled.h4`
  font-weight: 500;
  font-size: 1.1rem;
`

const Option = styled.option``

const Button = styled.button`
  border: 0;
  background-color: var(--primary-color);
  color: var(--grey);
  border-radius: 3px;
  padding: 0.9rem 5rem;
  font-weight: 500;
`

const NumbersContainer = styled.div`
  display: flex;
`

const NumberCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CardText = styled.h4``

const CardNumber = styled.h4``

const ChartsContainer = styled.div``
