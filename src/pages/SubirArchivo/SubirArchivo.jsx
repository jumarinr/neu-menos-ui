import React from 'react';

// material ui core
import Typography from '@mui/material/Typography';

import Card from '../../components/Card/Card';

const SubirArchivo = () => (
  <Card>
    <div>
      <Typography variant="h6" gutterBottom>
        <b>¡Sube tu radiografía aquí!</b>
      </Typography>
    </div>
  </Card>
);

SubirArchivo.propTypes = {};

export default SubirArchivo;
