import React from 'react';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import SettingsIcon from '@mui/icons-material/Settings';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from 'react-router-dom';

import sportidentLogo from '../../assets/sportident_logo.png';

const SidebarData = [
  {
    key: 1,
    label: 'Race Home',
    path: '/',
    icon: <DirectionsBikeIcon />,
  },
  {
    key: 2,
    label: 'Settings',
    path: '/settings',
    icon: <SettingsIcon />,
  },
];

const linkStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  color: 'whitesmoke',
  justifyContent: 'center',
  alignItems: 'center',
  textDecoration: 'none',
};

const linkStyleActive = {
  ...linkStyle,
  backgroundColor: 'rgb(40,40,40)',
};

function Sidebar(): React.JSX.Element {
  return (
    <div
      style={{
        height: '100vh',
        width: '250px',
        backgroundColor: 'rgb(50,50,50)',
        color: 'lightgray',
      }}
    >
      <img
        src={sportidentLogo}
        alt="Sport Ident Logo"
        style={{
          width: '90%',
          margin: '10px',
        }}
      />
      <List disablePadding>
        {SidebarData.map(({ key, label, path, icon }) => (
          <NavLink
            key={key}
            to={path}
            style={({ isActive }) => (isActive ? linkStyleActive : linkStyle)}
          >
            <ListItemButton>
              <div
                style={{
                  paddingRight: '10px',
                  marginBottom: '-7px',
                }}
              >
                {icon}
              </div>
              <ListItemText
                primaryTypographyProps={{
                  fontSize: '1.2em',
                }}
              >
                {label}
              </ListItemText>
            </ListItemButton>
          </NavLink>
        ))}
      </List>
    </div>
  );
}

export default Sidebar;
