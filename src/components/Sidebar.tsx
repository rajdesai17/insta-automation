import { Drawer, List, ListItem, ListItemIcon, ListItemButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CommentIcon from '@mui/icons-material/Comment';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = () => (
  <Drawer variant="permanent" anchor="left" sx={{ width: 64, flexShrink: 0, '& .MuiDrawer-paper': { width: 64, boxSizing: 'border-box', background: '#fff', borderRight: '1px solid #eee' } }}>
    <List>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center', display: 'flex' }}><HomeIcon /></ListItemIcon>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center', display: 'flex' }}><CommentIcon /></ListItemIcon>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center', display: 'flex' }}><SettingsIcon /></ListItemIcon>
        </ListItemButton>
      </ListItem>
    </List>
  </Drawer>
);

export default Sidebar; 