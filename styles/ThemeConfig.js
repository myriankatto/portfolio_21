import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  text: '#232323',
  background: '#f6f6f3fa',
  nav_background: '#f6f6f3f5',
};

export const darkTheme = {
  text: '#f6f6f3',
  background: '#232323',
  nav_background: '#242424fc',
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }
  nav{
    background:${({ theme }) => theme.nav_background};
  }

  }
 
`;
