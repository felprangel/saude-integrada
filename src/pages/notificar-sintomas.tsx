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
        <FormContainer>
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
              <TextArea rows={3} placeholder="Descreva seus sintomas (ex: tosse, dor muscular...)" />
            </InputContainer>
            <InputContainer>
              <Label>Data de início dos sintomas</Label>
              <Input type="date" placeholder="Ex: 28/05/2025" />
            </InputContainer>
            <InputContainer>
              <Label>Comentários adicionais (opcional)</Label>
              <TextArea rows={4} placeholder="Ex: uso de medicamento, contato com alguém doente..." />
            </InputContainer>
            <CheckboxContainer>
              <Checkbox type="checkbox" />
              <Label>Declaro que li e concordo com a política de privacidade</Label>
            </CheckboxContainer>
            <Button>Enviar notificação</Button>
          </Form>
        </FormContainer>
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

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Form = styled.form`
  border: 1px solid var(--primary-color);
  background-color: var(--grey);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: fit-content;
  padding: 3rem 4rem 5rem 4rem;
  border-radius: 10px;
  gap: 1rem;
`

const Input = styled.input`
  width: 100%;
  background-color: var(--grey);
  border: 1px solid var(--primary-color);
  padding: 0.3rem 0.8rem;
`

const Label = styled.label`
  font-weight: 500;
  font-size: 1.2rem;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  width: 100%;
`

const TextArea = styled.textarea`
  background-color: var(--grey);
  border: 1px solid var(--primary-color);
`

const Checkbox = styled.input``

const CheckboxContainer = styled.div`
  display: flex;
  gap: 0.7rem;
  margin-bottom: 2rem;
`

const Button = styled.button`
  background-color: var(--text-color);
  color: var(--grey);
  border: 0;
  font-weight: 500;
  border-radius: 3px;
  padding: 0.3rem 3rem;
`
