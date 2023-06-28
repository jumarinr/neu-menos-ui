import axios from 'axios';
import React, { useState, useContext } from 'react';

import PropTypes from 'prop-types';

// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// Import the Image EXIF Orientation and Image Preview plugins
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';

import ContextFile from '../../context/ContextFile';

// Register the plugins
registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginFileValidateType,
);

export const HEADERS = {
  headers: {
    'Content-Type': 'multipart/form-data',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*',
  },
};

// Our app
const InputFile = ({ setResultado }) => {
  const [files, setFiles] = useState([]);
  const { modelo } = useContext(ContextFile);

  const onProcessFile = async (_fieldName, file, _metadata, load) => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      if (modelo) {
        console.log(modelo);
        formData.append('modelo_priorizado', modelo);
      }

      const result = await axios.post('https://backend-rna.onrender.com/upload-file', formData, HEADERS);

      const { predictions } = result.data;

      if (predictions) {
        setResultado(JSON.parse(predictions));
      }

      load(null);
    } catch (error) {
      console.error(error);
      load(null);
      setResultado(null);
    }
  };

  const onUpdateFiles = (data) => {
    setFiles(data);
    setResultado(null);
  };

  return (
    <div className="App">
      <FilePond
        files={files}
        onupdatefiles={onUpdateFiles}
        acceptedFileTypes={['image/*']}
        labelFileTypeNotAllowed="archivo invalido"
        fileValidateTypeLabelExpectedTypes="Debe ingresar imagenes"
        maxFiles={3}
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
        labelIdle='Arrastra y suelta tus archivos o <span class="filepond--label-action">Seleccionalos</span>'
      />
    </div>
  );
};

InputFile.propTypes = {
  setResultado: PropTypes.func.isRequired,
};

export default InputFile;
