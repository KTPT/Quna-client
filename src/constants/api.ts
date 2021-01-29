import axios from "axios";
import {TOKEN, TOKEN_TYPE} from "./token";

const BASE_URL = 'http://localhost:8080';

type API = 'Questions' | 'Answers' | 'Signup' | 'Login' | 'QuestionDetail';

export const path = (
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

export const APIRequest = async (method: 'POST' | 'GET' | 'PUT' | 'DELETE', api: API, questionsId?: string | number, content?: {}) => {
  if (method === 'POST') {
    return await axios.post(path(api, questionsId),
      {
        content,
      }, {
        headers: {Authorization: `${TOKEN_TYPE} ${TOKEN}`}
      })
  }
  if (method === 'GET') {
    return await axios.get(path(api, questionsId))
  }
  if (method === 'PUT') {
    return await axios.put(path(api, questionsId),
      {
        content,
      }, {
        headers: {Authorization: `${TOKEN_TYPE} ${TOKEN}`}
      })
  }
  if (method === 'DELETE') {
    return await axios.delete(path(api, questionsId), {
      headers: {Authorization: `${TOKEN_TYPE} ${TOKEN}`}
    })
  }
  throw new Error();
}