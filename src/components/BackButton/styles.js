import { styled } from 'styled-components/native';

export const Container = styled.Pressable`
  width: 44px;
  height: 44px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.input};
`;
