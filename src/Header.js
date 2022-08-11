import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export default function ButtonAppBar() {
  const navigate = useNavigate();
  const state = useSelector((s) => s);
  const dispatch = useDispatch();
  const { loggedin, token, user } = state;

  const logout = () => {
    dispatch({ type: 'logout' });
  };
  const hc = (str) => {
    navigate(str);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LogoName
          </Typography>
          <Button onClick={() => hc('/')} color="inherit">
            Home
          </Button>
          {!loggedin && (
            <Button onClick={() => hc('/Login')} color="inherit">
              Login
            </Button>
          )}
          {!loggedin && (
            <Button onClick={() => hc('/Signup')} color="inherit">
              Signup
            </Button>
          )}
          {loggedin && (
            <Button onClick={() => hc('/Dashboard')} color="inherit">
              Dashboard
            </Button>
          )}
          {loggedin && (
            <Button onClick={logout} color="inherit">
              {user}
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
