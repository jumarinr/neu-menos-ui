import React from 'react';

// material ui core
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import Card from '../../components/Card/Card';
// import PropTypes from 'prop-types';

const BOX_SHADOW = 2;

const SobreNosotros = () => (
  <Card>
    <div>
      <Typography variant="h6" gutterBottom>
        <b>NeuMenos</b>
      </Typography>

      <br />

      <Typography variant="body1" gutterBottom align="justify">
        Proyecto dedicado a enfocar al minimo por ciento posible las perdidas humanas
        por enfermedades como la neumonia. Está aplicación servirá para dar un indicio de una
        posible o no neumonia a partir del cargue de una o varias fotos de una radiografa.
        Este servicio no reemplaza el diagnostico de un especialista de la salud y siempre
        sugerimos acudir a su médico, solo es una ayuda diagnostica
      </Typography>

      <br />

      <Divider sx={{ boxShadow: BOX_SHADOW }} />

      <br />

      <Typography variant="h6" gutterBottom>
        <b>¿Cómo funciona NeuMenos?</b>
      </Typography>

      <img src="images/proceso.png" alt="pulmones logo" width="80%" />

      <br />

      <Typography variant="body1" gutterBottom align="justify">
        Tenemos un módelo público de imagenes de radiografas de más de 100k pacientes con neumonia
        y sin neumonia, el cual mandamos a un servidor que realiza un módelo de inteligencia
        artifcial que se entrena con la base de radiografas. Posteriormente se evaluó el módelo
        con 10 mil imagenes de pruebas y se exportó a la aplicación. Esto para que el usuario solo
        deba subir las imagenes que deseas verifcar y el sistema retornará un
        diagnostico aproximado.
      </Typography>
    </div>
  </Card>
);

SobreNosotros.propTypes = {};

export default SobreNosotros;
