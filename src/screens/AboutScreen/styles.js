import {styled} from 'styled-components/native';
import theme from "../../theme";

const CARD = theme.colors.input;
const BORDER = 'rgba(255, 255, 255, 0.12)';
const DANGER = theme.colors.error;

export const Root = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.surface};
`;

export const Scroll = styled.ScrollView`
    flex: 1;
`;

export const Content = styled.View`
    width: 100%;
    max-width: 500px;
    align-self: center;
    padding: 0 28px;
    gap: 24px;
`;

export const Header = styled.View`
    gap: 4px;
`;

export const HeaderTitle = styled.Text`
    font-family: ${({theme}) => theme.fonts.semibold};
    font-size: 18px;
    color: ${({theme}) => theme.colors.text};
`;

export const HeaderSubtitle = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: 12px;
    color: ${({theme}) => theme.colors.textSecondary};
`;

export const Card = styled.View`
    padding: 16px;
    border-radius: 12px;
    background-color: ${CARD};
`;