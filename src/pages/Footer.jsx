import { Box, IconButton, Typography } from '@mui/material';
import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { FormattedMessage } from 'react-intl';

const Footer = () => {
  return (
    <footer className="section-footer">
      <Typography className="letraFooter" variant="body">
        <FormattedMessage
          id="footer.reactjs"
          defaultMessage="Hecho con React Js"
        ></FormattedMessage>
      </Typography>

      <Typography className="letraFooter abajo" variant="body">
        <FormattedMessage
          id="footer.derechos"
          defaultMessage="@Todos los derechos a Cristian Ludueña"
        ></FormattedMessage>
      </Typography>

      <Box className="content-icons">
        <IconButton href="https://github.com/cris0fw" target="_blank">
          <AiFillGithub size={40} color="white" />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/cristian-ludue%C3%B1a-92288423b/"
          target="_blank"
        >
          <BsLinkedin size={30} color="white" />
        </IconButton>
        <IconButton
          href="https://www.instagram.com/cris_ludue/"
          target="_blank"
        >
          <BsInstagram size={30} color="white" />
        </IconButton>
      </Box>
    </footer>
  );
};

export default Footer;
