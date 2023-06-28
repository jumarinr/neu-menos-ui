import {
  BrowserRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';

import { useState } from 'react';

import { ThemeProvider } from '@mui/material/styles';

import './App.css';

import Menu from './components/Menu/Menu';
import menuItems from './components/Menu/menuItems';
import theme from './theme';
import ContextFile from './context/ContextFile';

const App = () => {
  const [modelo, setModelo] = useState(null);

  return (
    <div className="App">

      {/* eslint-disable-next-line react/jsx-no-constructed-context-values */}
      <ContextFile.Provider value={{ modelo, setModelo }}>
        <ThemeProvider theme={theme}>
          <Router>
            <Menu>
              <Routes>
                {menuItems.map(({ page, component: Component }) => (
                  <Route path={page} element={<Component />} key={page} />
                ))}

                <Route
                  path="*"
                  element={<Navigate to="/sobre-nosotros" replace />}
                />
              </Routes>
            </Menu>
          </Router>
        </ThemeProvider>
      </ContextFile.Provider>
    </div>
  );
};

export default App;
