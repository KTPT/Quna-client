const BASE_URL = 'http://localhost:8080';

export const API = (
  model: 'Questions' | 'Answers' | 'Signup' | 'Login' | 'QuestionDetail',
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
