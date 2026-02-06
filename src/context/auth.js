export const TOKEN_KEY = "social_app_token";

export const loginUser = (name) => {
  const token = {
    name,
    issuedAt: Date.now(),
  };
  localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
};

export const logoutUser = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const getUser = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  return token ? JSON.parse(token) : null;
};

export const isAuthenticated = () => {
  return !!localStorage.getItem(TOKEN_KEY);
};
