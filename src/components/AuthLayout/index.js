import { router } from 'expo-router';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components/native';
import AnimatedFeedback from '../AnimatedFeedback';
import BackButton from '../BackButton';
import { Content, FeedbackSlot, FooterButton, FooterLink, FooterText, Form, Heading, Page, Subtitle, Title } from './styles';

/** @param {{ title: string, subtitle: string, children: import('react').ReactNode, footerText: string, footerAction: string, footerRoute: '/login' | '/cadastro', message?: string, messageType?: 'error' | 'success' }} props */
export default function AuthLayout({ title, subtitle, children, footerText, footerAction, footerRoute, message, messageType = 'error' }) {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: theme.colors.background }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <FeedbackSlot style={{ paddingTop: insets.top, minHeight: insets.top + 64 }}>
        <AnimatedFeedback message={message} messageType={messageType} />
      </FeedbackSlot>
      <Page>
        <Content>
          <BackButton onPress={() => router.canGoBack() ? router.back() : router.replace('/acesso')} />
          <Heading><Title>{title}</Title><Subtitle>{subtitle}</Subtitle></Heading>
          <Form>{children}</Form>
          <FooterButton accessibilityRole="button" accessibilityLabel={footerAction} onPress={() => router.replace(footerRoute)}>
            <FooterText>{footerText} <FooterLink>{footerAction}</FooterLink></FooterText>
          </FooterButton>
        </Content>
      </Page>
    </KeyboardAvoidingView>
  );
}
