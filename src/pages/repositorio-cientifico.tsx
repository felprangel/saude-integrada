import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { MainContainer } from '@/components/MainContainer'
import { Paragraph } from '@/components/Paragraph'
import { Title } from '@/components/Title'
import Image from 'next/image'
import styled from 'styled-components'
import Pdf from '../../public/icons/pdf.svg'

export default function RepositorioCientifico() {
  return (
    <>
      <Header />
      <MainContainer>
        <Title>Repositório científico</Title>
        <Paragraph>
          Acesse cartilhas, artigos científicos, boletins informativos e documentos produzidos pelo observatório e
          parceiros do projeto
        </Paragraph>
        <ContentContainer>
          <SearchInput placeholder="Buscar" />
          <FilterContainer>
            <Select name="tipo" id="tipo">
              <Option value="selecione">Artigo</Option>
            </Select>
            <Select name="data" id="data">
              <Option value="selecione">Último ano</Option>
            </Select>
            <Select name="autor" id="autor">
              <Option value="selecione">UNA</Option>
            </Select>
          </FilterContainer>
          <Card>
            <CardContent>
              <CardTitle>Boletim Epidemiológico da Dengue – Abril 2025</CardTitle>
              <CardText>Panorama dos casos confirmados e notificações na macrorregião Centro-Oeste de MG.</CardText>
              <ChipsContainer>
                <CardChip>Dengue</CardChip>
                <CardChip>2025</CardChip>
                <CardChip>Macrorregião</CardChip>
              </ChipsContainer>
            </CardContent>
            <Image src={Pdf} alt="pdf" />
          </Card>
          <Card>
            <CardContent>
              <CardTitle>Manual de Prevenção da Leishmaniose Visceral</CardTitle>
              <CardText>Cartilha educativa com orientações práticas para controle e prevenção.</CardText>
              <ChipsContainer>
                <CardChip>Leishmaniose</CardChip>
                <CardChip>Cartilha</CardChip>
                <CardChip>Saúde Única</CardChip>
              </ChipsContainer>
            </CardContent>
            <Image src={Pdf} alt="pdf" />
          </Card>
          <Card>
            <CardContent>
              <CardTitle>Análise de Tendência de Casos de Arboviroses (2020–2024)</CardTitle>
              <CardText>Estudo técnico com dados comparativos e projeções.</CardText>
              <ChipsContainer>
                <CardChip>Arbovirose</CardChip>
                <CardChip>Análise Técnica</CardChip>
                <CardChip>Gráficos</CardChip>
              </ChipsContainer>
            </CardContent>
            <Image src={Pdf} alt="pdf" />
          </Card>
          <Card>
            <CardContent>
              <CardTitle>Relatório Integrado de Saúde Ambiental e Humana</CardTitle>
              <CardText>Documento interdisciplinar sobre fatores ambientais associados a surtos.</CardText>
              <ChipsContainer>
                <CardChip>Saúde Única</CardChip>
                <CardChip>Meio Ambiente</CardChip>
                <CardChip>Relatório Técnico</CardChip>
              </ChipsContainer>
            </CardContent>
            <Image src={Pdf} alt="pdf" />
          </Card>
        </ContentContainer>
      </MainContainer>
      <Footer />
    </>
  )
}

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`

const SearchInput = styled.input`
  border: 1px solid var(--primary-color);
  background-color: var(--grey);
  border-radius: 10px;
  height: 3rem;
  width: 50%;
  padding: 0 1rem;
  margin-top: 4rem;
`

const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
`

const Select = styled.select`
  border: 1px solid var(--primary-color);
  background-color: var(--grey);
  padding: 0.2rem 1.3rem;
  width: 8rem;
  border-radius: 5px;
  font-weight: 500;
  font-size: 1.1rem;
`

const Option = styled.option``

const Card = styled.div`
  border: 1px solid var(--primary-color);
  background-color: var(--grey);
  display: flex;
  width: 70%;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2.5rem;
  border-radius: 8px;
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`

const CardTitle = styled.h4`
  font-weight: 500;
  font-size: 1.2rem;
`

const CardText = styled.p`
  font-weight: 300;
  font-size: 1.1rem;
`

const ChipsContainer = styled.div`
  display: flex;
  gap: 1rem;
`

const CardChip = styled.span`
  border: 1px solid var(--primary-color);
  border-radius: 16px;
  padding: 0.4rem;
  font-weight: 500;
`
