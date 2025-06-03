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
              <Option value="selecione">Tipo</Option>
            </Select>
            <Select name="data" id="data">
              <Option value="selecione">Data</Option>
            </Select>
            <Select name="autor" id="autor">
              <Option value="selecione">Autor</Option>
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

const ContentContainer = styled.div``

const SearchInput = styled.input``

const FilterContainer = styled.div``

const Select = styled.select``

const Option = styled.option``

const Card = styled.div``

const CardContent = styled.div``

const CardTitle = styled.h4``

const CardText = styled.p``

const ChipsContainer = styled.div``

const CardChip = styled.span``
