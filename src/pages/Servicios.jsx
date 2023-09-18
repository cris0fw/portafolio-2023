import '../style/servicios.scss';
import { Grid, Typography } from '@mui/material';
import CardServicios from '../components/CardServicios';
import { useThemeContext } from '../context/ThemeContext';
import { FormattedMessage } from 'react-intl';
import { Element } from 'react-scroll';

const Servicios = () => {
  const { theme } = useThemeContext();

  return (
    <Element
      data-aos="zoom-in-up"
      className="section-servicios"
      name="servicios"
    >
      <Typography className="titulos-generales" variant="h1">
        <FormattedMessage
          id="servicios.titulo"
          defaultMessage="Servicios"
        ></FormattedMessage>
      </Typography>

      <Grid container className="grilla">
        <Grid className="grillahijo" item xs={12} sm={6} md={4} lg={3}>
          <CardServicios
            img="https://i.ibb.co/YXxPRdW/Paginas-web-3.png"
            title="Desarrollo web completo"
            paragraph="Planificacions, diseño inicial, trabajando desde el backend base de
            datos y el fronted hasta el lanzamiento del sitio web."
            idTitle="servicios.tarjetauno"
            idDescription="servicios.descripcionuno"
          />
        </Grid>
        <Grid className="grillahijo" item xs={12} sm={6} md={4} lg={3}>
          <CardServicios
            img="https://i.ibb.co/gWdX66C/images-1.png"
            title="Desarrollo de Apis"
            paragraph="Crear APIs para permitir laintegración de aplicaciones con
            servicios externos o entre diferentes componentes de un sistema."
            idTitle="servicios.tarjetados"
            idDescription="servicios.descripciondos"
          />
        </Grid>
        <Grid className="grillahijo" item xs={12} sm={6} md={4} lg={3}>
          <CardServicios
            img="https://i.ibb.co/SBwrkC9/optimizacion-funciones-1.png"
            title="Optimizacion y mejora de rendimiento"
            paragraph="Mejora de rendimiento de sitios web asegurando que sean
            rapidos y eficientes"
            idTitle="servicios.tarjetatres"
            idDescription="servicios.descripciontres"
          />
        </Grid>
        <Grid className="grillahijo" item xs={12} sm={6} md={4} lg={3}>
          <CardServicios
            img="https://i.ibb.co/gPTdhgy/tienda-electronica-1.png"
            title="Desarrollo de comercio electronico"
            paragraph="Crear tiendas completamente funcionales implementando
            sistemas de carrito de compras procesamiento de pagos."
            idTitle="servicios.tarjetacuatro"
            idDescription="servicios.descripcioncuatro"
          />
        </Grid>
      </Grid>
    </Element>
  );
};

export default Servicios;
