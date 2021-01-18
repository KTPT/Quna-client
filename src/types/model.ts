export interface Answer {
  id: number;
  questionId: number;
  contents: string;
  responderId: number | null;
  createdAt: string;
  lastModifiedAt: string;
}

export interface Question {
  id: number;
  title: string;
  contents: string;
  responderId: number | null;
  createdAt: string;
  lastModifiedAt: string;
}

export type Model<T> = T;
