import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { ReactNode } from 'react';
import '../theme/index.css';

type CustomThemeProviderProps = {
  children: ReactNode;
};

const theme = createTheme({
  typography: {
    fontFamily: 'Manrope',
  },
});

export function CustomThemeProvider(props: CustomThemeProviderProps) {
  const { children } = props;
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledEngineProvider>
  );
}
