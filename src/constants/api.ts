const BASE_URL = 'http://localhost:8080';

export const API = (
  model: 'Question' | 'Answer' | string,
  questionsId?: string
) =>
  model === 'Question'
    ? `${BASE_URL}/questions`
    : model === 'Answer'
    ? `${BASE_URL}/questions${questionsId}/answers`
    : '';
