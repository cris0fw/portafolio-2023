import {
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Box,
  Typography,
} from '@mui/material';
import { AiFillGithub } from 'react-icons/ai';
import { useThemeContext } from '../context/ThemeContext';
import { FormattedMessage } from 'react-intl';

const CardProyectos = ({ img, link, github, icons }) => {
  const { theme } = useThemeContext();

  return (
    <Card className="card hvr-bob" id={theme}>
      <CardMedia
        image={img}
        sx={{ height: '200px', width: '300px' }}
        title=""
      />

      <CardContent className="contenido">
        <Box className="cardInvisible">
          <Typography variant="h2" className="tituloinvisible">
            Respuestos
          </Typography>
        </Box>

        <Box className="iconos">
          {icons.map((img) => {
            return (
              <img
                className="img-languaje"
                key={img}
                src={img}
                alt="imagenes"
              />
            );
          })}
        </Box>

        {link === 'null' ? (
          ''
        ) : (
          <>
            <Button className="botonLink" href={link}>
              <FormattedMessage
                id="proyectos.botones"
                defaultMessage="Ver página"
              ></FormattedMessage>
            </Button>
          </>
        )}
        {github === 'null' ? (
          ''
        ) : (
          <>
            <IconButton href={github} className="botonIcono">
              <AiFillGithub size={35} color="white" />
            </IconButton>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default CardProyectos;
