import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { useThemeContext } from '../context/ThemeContext';
import { FormattedMessage } from 'react-intl';

const CardServicios = ({ img, title, paragraph, idTitle, idDescription }) => {
  const { theme } = useThemeContext();

  return (
    <Card className="card hvr-float-shadow" id={theme}>
      <Box className="triangulo"></Box>
      <CardMedia
        sx={{ height: 140 }}
        image={img}
        title="paginas web"
        className="img-card"
      ></CardMedia>
      <CardContent className="contenido">
        <Typography className="card-title" variant="h5">
          <FormattedMessage
            id={idTitle}
            defaultMessage={title}
          ></FormattedMessage>
        </Typography>
        <Typography className="card-paragraph" variant="body">
          <FormattedMessage
            id={idDescription}
            defaultMessage={paragraph}
          ></FormattedMessage>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardServicios;
