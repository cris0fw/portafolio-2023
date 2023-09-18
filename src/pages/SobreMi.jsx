import { Box, Button, Typography } from '@mui/material';
import '../style/SobreMi.scss';
import { useThemeContext } from '../context/ThemeContext';
import { FormattedMessage } from 'react-intl';
import { Element } from 'react-scroll';

const SobreMi = () => {
  const { theme } = useThemeContext();

  return (
    <Element data-aos="zoom-in" className="section-sobreMi" name="sobremi">
      <h2 className="titulos-generales">
        <FormattedMessage
          id="sobremi.titulo"
          defaultMessage="Sobre mi"
        ></FormattedMessage>
      </h2>

      <div className="content-parrafo">
        <Typography variant="body" className="todosParrafos">
          <FormattedMessage
            id="sobremi.descripcion"
            defaultMessage="Me centro en solucionar problemas con respecto a lo que hago dia a dia. Me gustan las mejoras y las buenas practicas que puedo brindar a los proyectos. Me considero una persona competitiva porque me gustan los desafios. Soy apasionado por las tecnologias que salen al mercado. Tambien me gusta trabajar en equipo y algo que destaco de mi mismo es que nunca me doy por vencido hasta encontrar la clave que me lleve al exito."
          ></FormattedMessage>
        </Typography>
      </div>
      <Box className="content-botones">
        <Button
          className="boton-outline hvr-bounce-to-right"
          href="../doc/fullstack.pdf"
          download
        >
          Curriculom Full Stack
        </Button>
        <Button
          className="boton-color hvr-border-fade"
          href="../doc/fronted.pdf"
          download
        >
          Curriculom Front End
        </Button>
      </Box>
    </Element>
  );
};

export default SobreMi;
