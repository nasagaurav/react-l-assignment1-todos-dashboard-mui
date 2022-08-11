import axios from 'axios';

export const getToken = (token) => {
  return {
    headers: {
      Authorization: `bearer ${token}`,
    },
  };
};

export const getAllTodosOfAllUser = async () => {
  const url = 'https://vast-tor-96424.herokuapp.com/notes';
  const result = await axios
    .get(url)
    .then((res) => res.data)
    .then((d) => d.data)
    .catch((d) => []);
  return result;
};
export const loginService = async (payload) => {
  const url = 'https://vast-tor-96424.herokuapp.com/login';
  const result = await axios.post(url, payload).then((res) => res.data);
  return result;
};
export const signupService = async (payload) => {
  const url = 'https://vast-tor-96424.herokuapp.com/signup';
  const result = await axios.post(url, payload).then((res) => res.data);
  return result;
};
export const view = async (token) => {
  const url = 'https://vast-tor-96424.herokuapp.com/mynotes';
  const result = await axios.get(url, getToken(token)).then((res) => res.data);
  return result;
};
export const create = async (payload, token) => {
  const url = 'https://vast-tor-96424.herokuapp.com/mynotes';
  const result = await axios
    .post(url, payload, getToken(token))
    .then((res) => res.data);
  return result;
};

export const update = async (id, status, token) => {
  const url = `https://vast-tor-96424.herokuapp.com/mynotes/${id}/${status}`;
  const result = await axios
    .patch(url, {}, getToken(token))
    .then((res) => res.data);
  return result;
};
export const del = async (id, token) => {
  const url = `https://vast-tor-96424.herokuapp.com/mynotes/${id}`;
  const result = await axios
    .delete(url, getToken(token))
    .then((res) => res.data);
  return result;
};
