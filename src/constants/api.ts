import axios from "axios";
import {TOKEN, TOKEN_TYPE} from "./token";

const BASE_URL = 'http://localhost:8080';

type API = 'Questions' | 'Answers' | 'Signup' | 'Login' | 'QuestionDetail';

export const getAPIPath = (
  model: API,
  questionsId?: string | number
) =>
  model === 'Questions'
    ? `${BASE_URL}/questions`
    : model === 'QuestionDetail'
    ? `${BASE_URL}/questions/${questionsId}`
    : model === 'Answers'
      ? `${BASE_URL}/questions/${questionsId}/answers`
      : model === 'Login'
        ? `${BASE_URL}/login`
        : model === 'Signup'
          ? `${BASE_URL}/members`
          : '';

export const fetchAPI = async (method: 'POST' | 'GET' | 'PUT' | 'DELETE', api: API, questionsId?: string | number, content?: {}) => {
  if (method === 'POST' && api === 'Signup') {
    return await axios.post(getAPIPath(api, questionsId), content);
  }
  if (method === 'POST') {
    return await axios.post(getAPIPath(api, questionsId), content,
      {
        headers: {Authorization: `${localStorage.getItem(TOKEN_TYPE)} ${localStorage.getItem(TOKEN)}`}
      })
  }
  if (method === 'GET') {
    return await axios.get(getAPIPath(api, questionsId))
  }
  if (method === 'PUT') {
    return await axios.put(getAPIPath(api, questionsId), content,
      {
        headers: {Authorization: `${TOKEN_TYPE} ${TOKEN}`}
      })
  }
  if (method === 'DELETE') {
    return await axios.delete(getAPIPath(api, questionsId), {
      headers: {Authorization: `${TOKEN_TYPE} ${TOKEN}`}
    })
  }
  throw new Error();
}