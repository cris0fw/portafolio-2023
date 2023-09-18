import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import logo from '../img/unnamed.jpg';
import { Box, IconButton } from '@mui/material';
import España from '../img/españa.png';
import ReinoUnido from '../img/reino unido.png';
import { FiMenu } from 'react-icons/fi';
import { useContext, useState } from 'react';
import DrawerC from './DrawerC';
import { useThemeContext } from '../context/ThemeContext';
import { LangContext } from '../context/LanguajeContext';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme } = useThemeContext();
  const { establecerLenguaje } = useContext(LangContext);

  return (
    <Box className="content-navbar">
      <AppBar className="navbar" id={theme}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <img className="logo hvr-pop" src={logo} alt="logo-navegacion" />
          </Box>

          <Box>
            <Box className="idiomas">
              <button
                className="button-bandera"
                onClick={() => establecerLenguaje('es')}
                id={theme}
              >
                <img className="bandera" src={España} alt="" />
              </button>
              <button
                className="button-bandera"
                onClick={() => establecerLenguaje('en')}
                id={theme}
              >
                <img className="bandera" src={ReinoUnido} alt="" />
              </button>
            </Box>
            <Box>
              <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
                <Button className="nav-buttons hvr-underline-from-center">
                  <FormattedMessage
                    id="menu.inicio"
                    defaultMessage="inicio"
                  ></FormattedMessage>
                </Button>

                <Button className="nav-buttons hvr-underline-from-center">
                  <Link
                    to="sobremi"
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={500}
                  >
                    <FormattedMessage
                      id="menu.sobremi"
                      defaultMessage="sobre mi"
                    ></FormattedMessage>
                  </Link>
                </Button>

                <Button className="nav-buttons hvr-underline-from-center">
                  <Link
                    to="habilidades"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                  >
                    <FormattedMessage
                      id="menu.habilidades"
                      defaultMessage="habilidades"
                    ></FormattedMessage>
                  </Link>
                </Button>
                <Button className="nav-buttons hvr-underline-from-center">
                  <Link
                    to="servicios"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                  >
                    <FormattedMessage
                      id="menu.servicios"
                      defaultMessage="servicios"
                    ></FormattedMessage>
                  </Link>
                </Button>
                <Button className="nav-buttons hvr-underline-from-center">
                  <Link
                    to="proyectos"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                  >
                    <FormattedMessage
                      id="menu.proyectos"
                      defaultMessage="proyectos"
                    ></FormattedMessage>
                  </Link>
                </Button>
              </Box>

              <IconButton
                sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}
                onClick={() => setOpen(true)}
              >
                <FiMenu />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <DrawerC open={open} onClose={() => setOpen(false)} />
    </Box>
  );
};

export default Navbar;
