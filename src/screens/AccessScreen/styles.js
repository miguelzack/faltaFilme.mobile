import { styled } from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: { flexGrow: 1, justifyContent: 'center' },
})`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
  width: 100%;
  max-width: 480px;
  align-self: center;
  align-items: center;
  padding: 24px;
  gap: 72px;
`;

export const Introduction = styled.View`
  width: 100%;
  align-items: center;
  gap: 22px;
`;

export const Description = styled.View`
  min-height: 80px;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semibold};
  font-size: 22px;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  include-font-padding: false;
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  include-font-padding: false;
`;

export const Actions = styled.View`
  width: 100%;
  gap: 12px;
`;

export const RegisterButton = styled.Pressable`
  min-height: 60px;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 12px 8px;
`;

export const RegisterText = styled.Text`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 16px;
  text-align: center;
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing}px;
`;

export const RegisterHighlight = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Notice = styled.Text`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;
  text-align: center;
`;
