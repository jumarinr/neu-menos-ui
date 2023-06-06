// material ui icons
import InfoIcon from '@mui/icons-material/Info';
import PublishIcon from '@mui/icons-material/Publish';
import SchoolIcon from '@mui/icons-material/School';

import SobreNosotros from '../../pages/SobreNosotros/SobreNosotros';
import SubirArchivo from '../../pages/SubirArchivo/SubirArchivo';
import BaseConocimiento from '../../pages/BaseConocimiento/BaseConocimiento';

const menuItems = [
  {
    page: '/sobre-nosotros',
    name: 'Sobre Nosotros',
    icon: InfoIcon,
    component: SobreNosotros,
  },
  {
    page: '/subir-radiografia',
    name: 'Subir Radiografía',
    icon: PublishIcon,
    component: SubirArchivo,
  },
  {
    page: '/base-conocimiento',
    name: 'Base de conocimiento',
    icon: SchoolIcon,
    component: BaseConocimiento,
  },
];

export default menuItems;
