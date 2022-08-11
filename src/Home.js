import React, { useState, useEffect } from 'react';
import { getAllTodosOfAllUser } from './services';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
function Home() {
  const [a, seta] = useState([]);

  const loadAllTodos = () => {
    // need a service
    getAllTodosOfAllUser().then((d) => seta(d));
  };

  useEffect(loadAllTodos, []);

  // get all todos of all users
  return (
    <Container>
      <Box
        sx={{
          marginTop: '50px',
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
        }}
      >
        <nav aria-label="main mailbox folders">
          <List>
            {a.map((x) => (
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={x.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </nav>
      </Box>
    </Container>
  );
}
export default Home;
