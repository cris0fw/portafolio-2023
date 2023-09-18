import { Box, Typography } from '@mui/material';

const Habilidad = ({ title, img }) => {
  return (
    <Box className="content-hab">
      <img className="habImg hvr-shrink" src={img} alt={`Imagen ${title}`} />

      <Typography className="todosParrafos" variant="body">
        {title}
      </Typography>
    </Box>
  );
};

export default Habilidad;
