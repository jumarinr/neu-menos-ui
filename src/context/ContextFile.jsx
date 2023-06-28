import { createContext } from 'react';

const value = {
  modelo: null,
  setModelo: () => null,
};

const ContextFile = createContext(value);

export default ContextFile;
