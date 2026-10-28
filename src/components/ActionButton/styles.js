import {styled} from 'styled-components/native';

export const Button = styled.Pressable`
    width: 100%;
    min-height: 56px;
    align-items: center;
    justify-content: center;
    padding: 18px 24px;
    border-radius: 32px;
    background-color: ${({theme}) => theme.colors.primary};
`;

export const Label = styled.Text`
    color: ${({theme}) => theme.colors.text};
    font-family: ${({theme}) => theme.fonts.medium};
    font-size: 16px;
    letter-spacing: ${({theme}) => theme.typography.letterSpacing}px;
    text-align: center;
    include-font-padding: false;
`;
