import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { MainContainer } from '@/components/MainContainer'
import { Paragraph } from '@/components/Paragraph'
import { Title } from '@/components/Title'
import styled from 'styled-components'

export default function PainelDados() {
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
      </MainContainer>
      <Footer />
    </>
  )
}

const FilterContainer = styled.div`
  display: flex;
`

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Select = styled.select``

const SelectLabel = styled.h4``

const Option = styled.option``

const Button = styled.button``
