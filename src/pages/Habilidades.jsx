import { Grid, Typography } from '@mui/material';
import '../style/habilidades.scss';
import Habilidad from '../components/Habilidad';
import objHabilidades from '../utils/sources.json';
import { FormattedMessage } from 'react-intl';
import { Element } from 'react-scroll';

const Habilidades = () => {
  return (
    <Element
      name="habilidades"
      data-aos="zoom-in-down"
      className="section-habilidades"
    >
      <h1 className="titulos-generales">
        <FormattedMessage
          id="habilidades.titulo"
          defaultMessage="Habilidades"
        ></FormattedMessage>
      </h1>

      <Grid container className="grilla">
        <Grid className="grillaHijo" item xs={12} sm={4} md={2} lg={2}>
          <Typography variant="h2" className="subtitle-hab">
            Fronted
          </Typography>

          {objHabilidades.frontend.map((hab) => {
            return (
              <Habilidad key={hab.title} title={hab.title} img={hab.img} />
            );
          })}
        </Grid>
        <Grid className="grillaHijo" item xs={12} sm={4} md={2} lg={2}>
          <Typography variant="h2" className="subtitle-hab">
            Backend
          </Typography>
          {objHabilidades.backend.map((hab) => {
            return (
              <Habilidad key={hab.title} title={hab.title} img={hab.img} />
            );
          })}
        </Grid>
        <Grid className="grillaHijo" item xs={12} sm={4} md={2} lg={2}>
          <Typography variant="h2" className="subtitle-hab">
            <FormattedMessage
              id="habilidades.diseño"
              defaultMessage="Diseño web"
            ></FormattedMessage>
          </Typography>

          {objHabilidades.diseño.map((hab) => {
            return (
              <Habilidad key={hab.title} title={hab.title} img={hab.img} />
            );
          })}
        </Grid>
        <Grid className="grillaHijo" item xs={12} sm={4} md={2} lg={2}>
          <Typography variant="h2" className="subtitle-hab">
            <FormattedMessage
              id="habilidades.basededatos"
              defaultMessage="Base de datos"
            ></FormattedMessage>
          </Typography>

          {objHabilidades.baseDeDatos.map((hab) => {
            return (
              <Habilidad key={hab.title} title={hab.title} img={hab.img} />
            );
          })}
        </Grid>
        <Grid className="grillaHijo" item xs={12} sm={4} md={2} lg={2}>
          <Typography variant="h2" className="subtitle-hab">
            <FormattedMessage
              id="habilidades.herramientas"
              defaultMessage="Herramientas"
            ></FormattedMessage>
          </Typography>

          {objHabilidades.herramientas.map((hab) => {
            return (
              <Habilidad key={hab.title} title={hab.title} img={hab.img} />
            );
          })}
        </Grid>
      </Grid>
    </Element>
  );
};

export default Habilidades;
