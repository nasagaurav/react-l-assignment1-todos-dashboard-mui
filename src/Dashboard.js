import { toast } from 'react-toastify';
import B from './b';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useState, useEffect, useRef } from 'react';
import { create, update, del, view } from './services';
import { useSelector } from 'react-redux';
function Dashboard() {
  const r1 = useRef(); //title
  const r2 = useRef(); //description
  const state = useSelector((s) => s);
  const { token } = state;
  const [a, seta] = useState([]);

  const loadMyTodos = () => {
    view(token).then((d) => {
      // console.log(d);
      if (d.status) {
        toast('your todos loaded successfully');
        seta(d.data);
      } else {
        // tokn error
        toast('token error');
      }
    });
  };

  const _update = (id, status) => {
    update(id, status, token).then((d) => {
      // console.log(d);
      if (d.status) {
        seta(d.data);
        toast('updated');
      } else {
        toast('not updated');
      }
    });
  };
  const _delete = (id) => {
    del(id, token).then((d) => {
      if (d.status) {
        seta(d.data);
        toast('deleted');
      } else {
        toast('not deleted');
      }
    });
  };
  const insert = () => {
    const data = {
      title: r1.current.value,
      description: r2.current.value,
    };
    create(data, token).then((d) => {
      if (d.status) {
        seta(d.data);
        toast('created');
      } else {
        toast('not created');
      }
    });
  };
  useEffect(loadMyTodos, []);
  return (
    <Container>
      <br />
      <B />
      <br />
      <div className="form">
        <h3>create new todo </h3>
        <input placeholder="title" ref={r1} />
        <input placeholder="description" ref={r2} />
        <button onClick={insert}>insert</button>
      </div>

      <Alert severity="success">My todos {a.length}!</Alert>
      {/* table starts */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>title</TableCell>
              <TableCell>description</TableCell>
              <TableCell>status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {a.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="right">{row.title}</TableCell>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell align="right">
                  <button onClick={() => _update(row.id, !row.status)}>
                    {row.status ? 'completed' : 'pending'}
                  </button>
                  <button onClick={() => _delete(row.id)}>delete</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* table ends */}
    </Container>
  );
}
export default Dashboard;
