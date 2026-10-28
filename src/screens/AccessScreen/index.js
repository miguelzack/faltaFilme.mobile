import { useState } from 'react';
import ActionButton from '../../components/ActionButton';
import BrandLogo from '../../components/BrandLogo';
import { Actions, Container, Content, Description, Introduction, Notice, RegisterButton, RegisterHighlight, RegisterText, Subtitle, Title } from './styles';

export default function AccessScreen() {
  const [notice, setNotice] = useState('');

  return (
    <Container>
      <Content>
        <Introduction>
          <BrandLogo />
          <Description>
            <Title>Entre ou crie sua conta</Title>
            <Subtitle>Escolha uma sessão e compre seu ingresso.</Subtitle>
          </Description>
        </Introduction>
        <Actions>
          <ActionButton label="Entrar" onPress={() => setNotice('A tela de login estará disponível em breve.')} />
          <RegisterButton accessibilityRole="button" accessibilityLabel="Criar conta" onPress={() => setNotice('A tela de cadastro estará disponível em breve.')}>
            <RegisterText>Ainda não tem uma conta? <RegisterHighlight>Criar conta</RegisterHighlight></RegisterText>
          </RegisterButton>
          {!!notice && <Notice accessibilityLiveRegion="polite">{notice}</Notice>}
        </Actions>
      </Content>
    </Container>
  );
}
