import { styled } from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  gap: 14px;
`;

export const Wordmark = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 29px;
  line-height: 35px;
  letter-spacing: 1.3px;
  color: ${({ theme }) => theme.colors.text};
  include-font-padding: false;
`;

export const Accent = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Underline = styled.View`
  width: 130px;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.primary};
`;
