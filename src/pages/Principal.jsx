import { Box, Grid, IconButton, Typography } from '@mui/material';
import '../style/Principal.scss';
import Navbar from '../components/Navbar';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsFillSunFill } from 'react-icons/bs';
import { BsFillMoonFill } from 'react-icons/bs';
import Foto from '../img/foto-recortada.jpg';
import { useState } from 'react';
import { useThemeContext } from '../context/ThemeContext';
import { FormattedMessage } from 'react-intl';

const Principal = () => {
  const [click, setClick] = useState(false);
  const { theme, toggleTheme } = useThemeContext();

  const handleClick = () => {
    toggleTheme();
    setClick(!click);
  };

  return (
    <Box className="section-hero" id={theme}>
      <Navbar />

      <Box className="circulo"></Box>

      <div className="boton-container">
        <button className="boton-cambio hvr-pulse-shrink" onClick={handleClick}>
          {theme === 'Light' ? (
            <BsFillMoonFill color="#07DC99" fontSize={25} cursor="pointer" />
          ) : (
            <BsFillSunFill color="#07DC99" fontSize={25} cursor="pointer" />
          )}
        </button>
      </div>

      <Grid container className="grilla">
        <Grid item xs={12} md={6} lg={6}>
          <Box className="content-titles">
            <Typography
              variant="h1"
              className="animated fadeInLeft titlo-principal"
            >
              Cristian <span className="secundary">Ludueña</span>
            </Typography>

            <Typography
              variant="h2"
              className="animated fadeInLeft titulo-secundario"
            >
              <FormattedMessage
                id="principal.desarrollador"
                defaultMessage="DESARROLLADOR"
              ></FormattedMessage>{' '}
              <span className="secundary">FULL STACK</span>
            </Typography>

            <Box className="animated fadeInLeft content-iconos">
              <IconButton
                className="border hvr-buzz"
                href="https://www.linkedin.com/in/cristian-ludue%C3%B1a-92288423b/"
                target="_blank"
              >
                <AiFillLinkedin color="#fff" fontSize={25} />
              </IconButton>
              <IconButton
                href="https://github.com/cris0fw"
                target="_blank"
                className="border hvr-buzz"
              >
                <AiFillGithub color="#fff" fontSize={25} />
              </IconButton>
              <IconButton
                className="border hvr-buzz"
                href="https://www.instagram.com/cris_ludue/"
                target="_blank"
              >
                <AiOutlineInstagram color="#fff" fontSize={25} />
              </IconButton>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <img
            src={Foto}
            alt="Foto-portafolio"
            className="animated fadeInRight foto-portafolio hvr-float"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Principal;
