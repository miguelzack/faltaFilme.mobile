import {styled} from 'styled-components/native';

export const Field = styled.View`
    width: 100%;
    gap: 8px;
`;
export const Label = styled.Text`
    color: ${({theme}) => theme.colors.text};
    font-family: ${({theme}) => theme.fonts.semibold};
    font-size: 12px;
`;
export const InputBox = styled.View`
    height: 49px;
    padding: 0 16px;
    border-radius: 4px;
    background-color: ${({theme}) => theme.colors.input};
    flex-direction: row;
    align-items: center;
`;
export const Input = styled.TextInput`
    flex: 1;
    height: 100%;
    color: ${({theme}) => theme.colors.text};
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: 14px;
    padding: 0;
`;
export const EyeButton = styled.Pressable`
    width: 44px;
    height: 44px;
    align-items: center;
    justify-content: center;
    margin-right: -12px;
`;
