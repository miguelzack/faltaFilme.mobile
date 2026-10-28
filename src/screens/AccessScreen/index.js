import {router} from 'expo-router';
import ActionButton from '../../components/ActionButton';
import BrandLogo from '../../components/BrandLogo';
import {
    Actions,
    Container,
    Content,
    Description,
    Introduction,
    RegisterButton,
    RegisterHighlight,
    RegisterText,
    Subtitle,
    Title
} from './styles';

export default function AccessScreen() {
    return (<Container>
        <Content>
            <Introduction>
                <BrandLogo/>
                <Description>
                    <Title>Entre ou crie sua conta</Title>
                    <Subtitle>Escolha uma sessão e compre seu ingresso.</Subtitle>
                </Description>
            </Introduction>
            <Actions>
                <ActionButton label="Entrar" onPress={() => router.push('/login')}/>
                <RegisterButton accessibilityRole="button" accessibilityLabel="Criar conta"
                                onPress={() => router.push('/cadastro')}>
                    <RegisterText>Ainda não tem uma conta? <RegisterHighlight>Criar
                        conta</RegisterHighlight></RegisterText>
                </RegisterButton>
            </Actions>
        </Content>
    </Container>);
}
