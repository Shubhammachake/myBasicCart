// user.js

const users = []; // Array to store user data

const addUser = (userData) => {
  users.push(userData);
};

const getAllUsers = () => {
  return users;
};

export { addUser, getAllUsers };
