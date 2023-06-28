import axios from 'axios';
import React, { useState } from 'react';

// material ui core
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';

// material ui icons
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import IconButton from '@mui/material/IconButton';

import Card from '../../components/Card/Card';
import InputFileModelo from '../../components/InputFile/InputFileModelo';

const BaseConocimiento = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onDowload = async () => {
    try {
      setIsLoading(true);
      const download = await axios.get('https://backend-rna.onrender.com/download-model');

      const a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([download.data], {
        type: 'text/plain',
      }));
      // file extension, PDF
      a.setAttribute('download', 'Modelo-NeuMenos.h5');
      document.body.appendChild(a);
      a.click();
      // clean up "a" element & remove ObjectURL
      document.body.removeChild(a);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  return (
    <Card>
      <div>
        <Typography variant="h6" gutterBottom>
          <b>Base de conocimiento</b>
        </Typography>

        <div>

          <Grid container>

            <Grid item xs={12} md={6}>
              <div className="d-flex justify-content-start">
                <div>
                  <Typography variant="subtitle1" gutterBottom>
                    <b>Conocimiento público</b>
                  </Typography>

                  {isLoading
                    ? (
                      <CircularProgress
                        size={50}
                        sx={{ color: 'primary' }}
                      />
                    )
                    : (
                      <IconButton color="primary" size="medium" onClick={onDowload}>
                        <CloudDownloadIcon fontSize="large" />
                      </IconButton>

                    )}
                  <Typography variant="subtitle2" color="primary" gutterBottom>
                    <b>Descargar</b>
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="d-flex justify-content-end">
                <InputFileModelo />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </Card>
  );
};

BaseConocimiento.propTypes = {};

export default BaseConocimiento;
