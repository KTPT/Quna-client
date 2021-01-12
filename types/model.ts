export interface AnswerModel {
  id: number;
  questionId: number;
  contents: string;
  responderId: number | null;
  createdAt: string;
  lastModifiedAt: string;
}

export interface QuestionModel {
  id: number;
  title: string;
  contents: string;
  responderId: number | null;
  createdAt: string;
  lastModifiedAt: string;
}
