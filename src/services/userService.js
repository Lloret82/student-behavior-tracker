// src/services/userService.js
import users from '../data/users.json';

export const fetchUsers = () => {
  // Simulate an async call to fetch user data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 300);
  });
};

export const login = async (email, password) => {
  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    return { success: true, user };
  } else {
    return { success: false, message: "Invalid email or password" };
  }
};
