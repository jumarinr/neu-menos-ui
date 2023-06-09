import React, { useState, useMemo } from 'react';

// material ui core
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Card from '../../components/Card/Card';
import InputFile from '../../components/InputFile/InputFile';
import PieChart from '../../components/PieChart/PieChart';

const transformResult = (result) => {
  if (!result) {
    return null;
  }

  if (result > 0.5) {
    const neumonia = (1 - result) * 100;
    return {
      labels: ['Neumonia', 'Sano'],
      neumonia,
      datasets: [
        {
          label: 'Porcentaje de acierto',
          data: [neumonia, (100 - neumonia)],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };
  }

  const neumonia = (result - 1) * -100;
  return {
    labels: ['Neumonia', 'Sano'],
    neumonia,
    datasets: [
      {
        label: 'Estado de salud',
        data: [neumonia, (100 - neumonia)],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
};

const SubirArchivo = () => {
  const [resultado, setResultado] = useState(null);

  const parsedResult = useMemo(() => transformResult(resultado), [resultado]);
  return (
    <Card>
      <div className="d-flex justify-content-center">
        <Typography variant="h6" gutterBottom>
          <b>¡Sube tu radiografía aquí!</b>
        </Typography>

        <div>
          <InputFile setResultado={setResultado} />
        </div>

        {resultado
          ? (
            <Grid container justifyContent="center" alignItems="center">
              <Grid item xs={12} md={6} className="text-center">
                {parsedResult.neumonia > 40
                  ? (
                    <Alert severity="warning">
                      <AlertTitle>¡Posible Neumonia detectada!</AlertTitle>
                      <strong>
                        Le recomendamos acudir con su médico de confianza a
                        realizarse un examen
                      </strong>
                    </Alert>
                  )
                  : (
                    <Alert severity="success">
                      <AlertTitle>Saludable</AlertTitle>
                      Usted se encuentra saludable. De igual forma le recomendamos hacer chequeos
                      con su médico regularmente
                    </Alert>
                  )}
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container justifyContent="center" alignItems="center">
                  <Grid item xs={12} md={6}>
                    <PieChart data={parsedResult} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )
          : null}
      </div>
    </Card>
  );
};

SubirArchivo.propTypes = {};

export default SubirArchivo;
