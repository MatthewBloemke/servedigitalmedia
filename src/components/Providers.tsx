'use client';
import { ThemeProvider, createTheme } from '@mui/material';
import { ReactNode } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Roboto } from 'next/font/google';
import { ParallaxProvider } from 'react-scroll-parallax';

const roboto = Roboto({ subsets: ['latin'], weight: '500' });

interface Props {
  children: ReactNode;
}

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8c52ff',
    },
    secondary: {
      main: '#fb5d00',
    },
    info: {
      main: '#fff',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    button: {
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 6,
  },
});

const Providers = ({ children }: Props) => {
  return (
    <AppRouterCacheProvider>
      <ParallaxProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ParallaxProvider>
    </AppRouterCacheProvider>
  );
};

export default Providers;
