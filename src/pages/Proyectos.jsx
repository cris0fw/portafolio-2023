import { Button, Grid, Typography } from '@mui/material';
import '../style/proyectos.scss';
import CardProyectos from '../components/CardProyectos';
import { FormattedMessage } from 'react-intl';
import { Element } from 'react-scroll';

const Proyectos = () => {
  return (
    <Element
      name="proyectos"
      data-aos="zoom-in-down"
      className="section-proyectos"
    >
      <Typography className="titulos-generales" variant="h1">
        <FormattedMessage
          id="proyectos.titulo"
          defaultMessage="Proyectos"
        ></FormattedMessage>
      </Typography>

      <div className="contenedor-grilla">
        <Grid container className="grilla">
          <Grid className="grillahijo" item xs={12} sm={6} md={4} lg={3}>
            <CardProyectos
              img="https://i.ibb.co/nm0tHdF/proyecto-repuestos-linea-de-compras.png"
              link="https://repuestos.lineadecompras.com/"
              github="null"
              icons={[
                'https://i.ibb.co/pd2Ly8s/wordpress.png',
                'https://i.ibb.co/gtcBSqZ/csss.png',
                'https://i.ibb.co/LdkYCMW/php.png',
              ]}
            />
          </Grid>

          <Grid className="grillahijo" item xs={12} sm={6} md={4} lg={3}>
            <CardProyectos
              img="https://i.ibb.co/cwp0w7w/Proyecto-red-social-suskill.png"
              link="https://suskill.com/"
              github="null"
              icons={[
                'https://i.ibb.co/pd2Ly8s/wordpress.png',
                'https://i.ibb.co/gtcBSqZ/csss.png',
                'https://i.ibb.co/LdkYCMW/php.png',
              ]}
            />
          </Grid>

          <Grid className="grillahijo" item xs={12} sm={6} md={4} lg={3}>
            <CardProyectos
              img="https://i.ibb.co/nqXDpZV/Portafolio-2022.png"
              link="https://repuestos.lineadecompras.com/"
              github="https://github.com/cris0fw/Mi-portafolio-2022"
              icons={[
                'https://i.ibb.co/B3ryMwt/react.png',
                'https://i.ibb.co/gtcBSqZ/csss.png',
                'https://i.ibb.co/ggZTNkz/nnpm.png',
              ]}
            />
          </Grid>

          <Grid className="grillahijo" item xs={12} sm={6} md={4} lg={3}>
            <CardProyectos
              img="https://i.ibb.co/jrxP7J0/tienda-de-regedits-con-php.png"
              link="null"
              github="https://github.com/cris0fw/shop-regedit"
              icons={[
                'https://i.ibb.co/xYCcL6p/html.png',
                'https://i.ibb.co/gtcBSqZ/csss.png',
                'https://i.ibb.co/LdkYCMW/php.png',
                'https://i.ibb.co/d5PwsYP/phpmyadmin.png',
              ]}
            />
          </Grid>

          <Grid className="grillahijo" item xs={12} sm={6} md={4} lg={3}>
            <CardProyectos
              img="https://i.ibb.co/93Bw8MK/lxxgrgefvwxe92z19lmn.png"
              link="null"
              github="https://github.com/cris0fw/Lading-page-fylo"
              icons={[
                'https://i.ibb.co/xYCcL6p/html.png',
                'https://i.ibb.co/gtcBSqZ/csss.png',
              ]}
            />
          </Grid>

          <Grid className="grillahijo" item xs={12} sm={6} md={4} lg={3}>
            <CardProyectos
              img="https://i.ibb.co/PwwQwcV/mini-app-pokemon.png"
              link="null"
              github="https://github.com/cris0fw/App-Pokedex-Api"
              icons={[
                'https://i.ibb.co/B3ryMwt/react.png',
                'https://i.ibb.co/gtcBSqZ/csss.png',
                'https://i.ibb.co/ggZTNkz/nnpm.png',
              ]}
            />
          </Grid>

          <Grid className="grillahijo" item xs={12} sm={6} md={4} lg={3}>
            <CardProyectos
              img="https://i.ibb.co/0sVkb2C/huddle-lading-page.png"
              link="null"
              github="https://github.com/cris0fw/Hiddle_lading_page_fronted_mentor"
              icons={[
                'https://i.ibb.co/xYCcL6p/html.png',
                'https://i.ibb.co/gtcBSqZ/csss.png',
              ]}
            />
          </Grid>

          <Grid className="grillahijo" item xs={12} sm={6} md={4} lg={3}>
            <CardProyectos
              img="https://i.ibb.co/9hdHxmF/Filtrado-con-javascript.png"
              link="null"
              github="https://github.com/cris0fw/Filtrar-productos-con-Javascript"
              icons={[
                'https://i.ibb.co/xYCcL6p/html.png',
                'https://i.ibb.co/gtcBSqZ/csss.png',
                'https://i.ibb.co/1m1fq63/javascript.png',
              ]}
            />
          </Grid>
        </Grid>

        <Button
          className="vermas"
          href="https://github.com/cris0fw?tab=repositories"
          target="_blank"
        >
          <FormattedMessage
            id="proyectos.vermas"
            defaultMessage="Ver más"
          ></FormattedMessage>
        </Button>
      </div>
    </Element>
  );
};

export default Proyectos;
