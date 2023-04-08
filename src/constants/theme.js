import { createTheme } from '@mui/material/styles';
import { deepPurple, orange } from '@mui/material/colors';

const THEME = createTheme({
  palette: {
    mode: 'dark',
    primary: deepPurple,
    secondary: orange,
  },
});

export default THEME;
