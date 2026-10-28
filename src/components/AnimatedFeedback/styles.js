import { styled } from 'styled-components/native';

export const Feedback = styled.View`
  min-height: 64px;
  padding: 10px 12px;
  border-left-width: 3px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.input};
  justify-content: center;
`;

export const Message = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text};
  font-size: 13px;
`;
