import {TOKEN, TOKEN_TYPE} from "../constants/token";

export const clearToken = () => {
  localStorage.removeItem(TOKEN);
  localStorage.removeItem(TOKEN_TYPE);
}

export const storeToken = (type: string, token: string) => {
  localStorage.setItem(TOKEN_TYPE, type);
  localStorage.setItem(TOKEN, token);
};

export const getIsLogin = () => localStorage.getItem(TOKEN) !== null