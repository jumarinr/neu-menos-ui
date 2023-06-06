import {
  BrowserRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';

import './App.css';

import Menu from './components/Menu/Menu';
import menuItems from './components/Menu/menuItems';
import theme from './theme';

const App = () => (
  <div className="App">
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
  </div>
);

export default App;
