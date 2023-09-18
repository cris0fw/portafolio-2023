import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from '@mui/material';
import { AiFillHome } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { GiSkills } from 'react-icons/gi';
import { MdMiscellaneousServices } from 'react-icons/md';
import { AiFillProject } from 'react-icons/ai';

const DrawerC = ({ open, onClose }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <List sx={{ width: '230px', marginTop: '30px' }}>
        <ListItemButton>
          <ListItem>
            <ListItemIcon>
              <AiFillHome color="#07DC99" fontSize={20} />
            </ListItemIcon>
            <Typography className="fuenteDrawer">Inicio</Typography>
          </ListItem>
        </ListItemButton>
        <ListItemButton>
          <ListItem>
            <ListItemIcon>
              <BsFillPersonFill color="#07DC99" fontSize={20} />
            </ListItemIcon>
            <Typography className="fuenteDrawer">Sobre mi</Typography>
          </ListItem>
        </ListItemButton>
        <ListItemButton>
          <ListItem>
            <ListItemIcon>
              <GiSkills color="#07DC99" fontSize={20} />
            </ListItemIcon>
            <Typography className="fuenteDrawer">Habilidades</Typography>
          </ListItem>
        </ListItemButton>
        <ListItemButton>
          <ListItem>
            <ListItemIcon>
              <MdMiscellaneousServices color="#07DC99" fontSize={20} />
            </ListItemIcon>
            <Typography className="fuenteDrawer">Servicios</Typography>
          </ListItem>
        </ListItemButton>
        <ListItemButton>
          <ListItem>
            <ListItemIcon>
              <AiFillProject color="#07DC99" fontSize={20} />
            </ListItemIcon>
            <Typography className="fuenteDrawer">Proyectos</Typography>
          </ListItem>
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default DrawerC;
