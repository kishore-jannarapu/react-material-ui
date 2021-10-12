import { IconButton } from '@mui/material';
import React from 'react';
import { useContext } from 'react';
import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';
import { ThemeContext } from '../Providers/ThemeContextProvider';
import { FiMoon } from 'react-icons/fi';

export default function ThemeSwitch({ currentTheme, setCurrentTheme }) {
  const { mode, setMode } = useContext(ThemeContext);
  const flipDarkMode = () => {
    setMode(mode === 'dark' ? 'light' : 'dark');
    setCurrentTheme({
      ...currentTheme,
      palette: {
        primary: currentTheme.palette.primary,
        secondary: currentTheme.palette.secondary,
        mode: mode === 'dark' ? 'light' : 'dark',
      },
    });
  };
  return (
    <>
      {/* <DarkLightSwitch checked={dark} onChange={flipDarkMode} color="primary" /> */}
      <IconButton
        onClick={flipDarkMode}
        color="primary"
        sx={{ padding: '5px', color: 'primary' }}
      >
        {mode === 'light' ? (
          // <Brightness2TwoToneIcon
          //   color="primary"
          //   fontSize="medium"
          //   sx={{ height: "30px" }}
          // />
          <FiMoon style={{ color: currentTheme.palette.primary }} />
        ) : (
          <WbSunnyTwoToneIcon
            color="primary"
            fontSize="medium"
            sx={{ height: '30px' }}
          />
        )}
      </IconButton>
    </>
  );
}
