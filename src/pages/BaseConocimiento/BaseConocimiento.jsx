import React from 'react';

// material ui core
import Typography from '@mui/material/Typography';

import Card from '../../components/Card/Card';

const BaseConocimiento = () => (
  <Card>
    <div>
      <Typography variant="h6" gutterBottom>
        <b>Base de conocimiento</b>
      </Typography>
    </div>
  </Card>
);

BaseConocimiento.propTypes = {};

export default BaseConocimiento;
