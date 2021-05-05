import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  text: '#232323',
  background: '#f6f6f3',
};

export const darkTheme = {
  text: '#f6f6f3',
  background: '#232323',
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }
 
`;
