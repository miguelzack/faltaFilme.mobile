import {styled} from 'styled-components/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-controller';

export const Page = styled(KeyboardAwareScrollView).attrs({
    contentContainerStyle: {flexGrow: 1, justifyContent: 'center'}, keyboardShouldPersistTaps: 'handled', bottomOffset: 24,
})`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};
`;
export const Content = styled.View`
    width: 100%;
    max-width: 480px;
    align-self: center;
    padding: 24px 24px 80px;
    gap: 24px;
`;
export const Heading = styled.View`
    gap: 8px;
`;
export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.semibold};
    color: ${({theme}) => theme.colors.text};
    font-size: 24px;
`;
export const Subtitle = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.textSecondary};
    font-size: 14px;
`;
export const Form = styled.View`
    gap: 18px;
`;
export const FooterButton = styled.Pressable`
    align-items: center;
    justify-content: center;
    min-height: 44px;
`;
export const FooterText = styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    color: ${({theme}) => theme.colors.textSecondary};
    font-size: 12px;
    text-align: center;
`;
export const FooterLink = styled.Text`
    font-family: ${({theme}) => theme.fonts.semibold};
    color: ${({theme}) => theme.colors.primary};
`;
export const FeedbackSlot = styled.View`
    min-height: 64px;
    justify-content: center;
    padding-left: 24px;
    padding-right: 24px;
    width: 100%;
    max-width: 480px;
    align-self: center;
`;
