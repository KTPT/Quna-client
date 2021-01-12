import {QuestionDetailProps} from '../QuestionDetail';

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
): Promise<QuestionDetailProps> {
  // TODO axios를 이용하여 서버로 정보를 가져와야 한다.

  return {
    data: {
      id: parseInt(id),
      title: '이런 내용에 대해서 질문을 하고 있습니다.'.repeat(3),
      contents: '이런 내용에 대해서 질문을 하고 있습니다.'.repeat(50),
      responderId: null,
      createdAt: '2021-01-10',
      lastModifiedAt: '2021-01-10T12:32:22',
    },
  };
}
