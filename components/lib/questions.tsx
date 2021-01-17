import {QuestionModel} from '../../types/model';

export function getAllPostIds() {
  return [
    {
      params: {
        id: '1',
      },
    },
  ];
}

export async function getQuestionDetailData(
  id: string
): Promise<QuestionModel> {
  // TODO axios를 이용하여 서버로 정보를 가져와야 한다.

  return {
    id: parseInt(id),
    title: '이런 내용에 대해서 질문을 하고 있습니다.'.repeat(3),
    contents: '이런 내용에 대해서 질문을 하고 있습니다.'.repeat(50),
    responderId: null,
    createdAt: '2021-01-10',
    lastModifiedAt: '2021-01-10T12:32:22',
  };
}

export async function getAllQuestions() {
  //TODO axios를 이용하여 질문 리스트를 가져와야 한다.

  const data = [
    {
      id: 1,
      title: '1번 질문의 제목입니다.',
      contents: '1번 질문의 내용입니다.',
      responderId: null,
      createdAt: '2021-01-10',
      lastModifiedAt: '2021-01-10T12:32:22',
    },
    {
      id: 2,
      title: '2번 질문의 제목입니다.',
      contents: '2번 질문의 내용입니다.',
      responderId: null,
      createdAt: '2021-01-10',
      lastModifiedAt: '2021-01-10T12:33:33',
    },
    {
      id: 3,
      title: '3번 질문의 제목입니다.',
      contents: '3번 질문의 내용입니다.',
      responderId: null,
      createdAt: '2021-01-10',
      lastModifiedAt: '2021-01-10T12:33:33',
    },
  ];
  console.log('getAllQuestions: ', data);

  return {data};
}
