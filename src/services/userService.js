const STORAGE_KEY = "users";

const getStoredUsers = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
};

const saveUsers = (users) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
};

export const getUsers = () => {
  return Promise.resolve({
    data: getStoredUsers()
  });
};

export const createUser = (user) => {
  const users = getStoredUsers();
  const newUser = { ...user, id: Date.now() };
  saveUsers([...users, newUser]);
  return Promise.resolve(newUser);
};

export const updateUser = (id, updatedUser) => {
  const users = getStoredUsers().map(user =>
    user.id === id ? { ...updatedUser, id } : user
  );
  saveUsers(users);
  return Promise.resolve();
};

export const deleteUser = (id) => {
  const users = getStoredUsers().filter(user => user.id !== id);
  saveUsers(users);
  return Promise.resolve();
};
