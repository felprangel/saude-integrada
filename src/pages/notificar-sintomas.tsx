import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { MainContainer } from '@/components/MainContainer'
import { Paragraph } from '@/components/Paragraph'
import { Title } from '@/components/Title'
import Image from 'next/image'
import Notify from '../../public/notify.svg'
import styled from 'styled-components'

export default function NotificarSintomas() {
  return (
    <>
      <Header />
      <MainContainer style={{ paddingTop: 0 }}>
        <TitleContainer>
          <div>
            <Title>Notificar sintomas</Title>
            <Paragraph style={{ maxWidth: '100%' }}>
              Ajude a monitorar sua comunidade notificando sintomas de doenças. Suas informações serão tratadas de forma
              segura e anônima
            </Paragraph>
          </div>
          <Image src={Notify} alt="notify-icon" />
        </TitleContainer>
        <TextContainer>
          <Text>
            Compartilhar sintomas é uma forma simples e importante de cuidar da sua comunidade. Ao preencher este
            formulário, você contribui com informações que auxiliam na detecção precoce de surtos e fortalecem a
            vigilância em saúde pública. Nenhuma informação pessoal identificável será exigida.
          </Text>
        </TextContainer>
        <Form>
          <InputContainer>
            <Label>Localização (bairro/cidade)</Label>
            <Input type="text" placeholder="Ex: centro, Rua das flores 123, Minas Gerais - MG" />
          </InputContainer>
          <InputContainer>
            <Label>Idade (opcional)</Label>
            <Input type="number" placeholder="Ex: 20" />
          </InputContainer>
          <InputContainer>
            <Label>Sintomas</Label>
            <TextArea placeholder="Descreva seus sintomas (ex: tosse, dor muscular...)" />
          </InputContainer>
          <InputContainer>
            <Label>Data de início dos sintomas</Label>
            <Input type="date" placeholder="Ex: 28/05/2025" />
          </InputContainer>
          <InputContainer>
            <Label>Comentários adicionais (opcional)</Label>
            <TextArea placeholder="Ex: uso de medicamento, contato com alguém doente..." />
          </InputContainer>
          <CheckboxContainer>
            <Label>Declaro que li e concordo com a política de privacidade</Label>
            <Checkbox type="checkbox" />
          </CheckboxContainer>
          <Button>Enviar notificação</Button>
        </Form>
      </MainContainer>
      <Footer />
    </>
  )
}

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`

const TextContainer = styled.div`
  border: 1px solid var(--primary-color);
  background-color: var(--grey);
  border-radius: 10px;
  padding: 1.5rem 1rem;
  margin: 2rem 0;
`

const Text = styled.p``

const Form = styled.form``

const Input = styled.input``

const Label = styled.label``

const InputContainer = styled.div``

const TextArea = styled.textarea``

const Checkbox = styled.input``

const CheckboxContainer = styled.div``

const Button = styled.button``
