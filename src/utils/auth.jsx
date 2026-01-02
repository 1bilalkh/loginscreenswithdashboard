export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

export const login = () => {
  localStorage.setItem("token", "123");
};

export const logout = () => {
  localStorage.removeItem("token");
};
