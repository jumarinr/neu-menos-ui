import React, { useContext } from 'react';

// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond';

import Button from '@mui/material/Button';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// Import the Image EXIF Orientation and Image Preview plugins
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import ContextFile from '../../context/ContextFile';

// Register the plugins
registerPlugin(
  FilePondPluginFileValidateType,
);

export const HEADERS = {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
};

const InputFileModelo = () => {
  const { modelo, setModelo } = useContext(ContextFile);

  const onProcessFile = async (_fieldName, file, _metadata, load) => {
    setModelo(file);
    load(null);
  };

  const onUpdateFiles = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <FilePond
        files={modelo ? [modelo] : []}
        onupdatefiles={onUpdateFiles}
        // acceptedFileTypes={['H5']}
        labelFileTypeNotAllowed="archivo invalido"
        fileValidateTypeLabelExpectedTypes="Debe ingresar un módelo h5"
        maxFiles={3}
        file
        instantUpload={false}
        server={{
          // fake server to simulate loading a 'local' server file and processing a file
          process: onProcessFile,
          load: (source, load) => {
            // simulates loading a file from the server
            fetch(source)
              .then((res) => res.blob())
              .then(load);
          },
        }}
        credits={false}
        name="files" /* sets the file input name, it's filepond by default */
        labelIdle="Arrastra y suelta tu módelo"
      />
      {modelo
        ? (
          <Button onClick={() => setModelo(null)} variant="outlined">
            Descartar módelo
          </Button>
        )
        : null}

    </div>
  );
};

InputFileModelo.propTypes = {
};

export default InputFileModelo;
