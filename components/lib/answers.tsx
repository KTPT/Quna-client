import {AnswerDetailProps} from '../AnswerDetail';

export function getAllPostIds() {
  return [
    {
      params: {
        id: '1',
      },
    },
  ];
}

export async function getAnswersDetailData(
  id: string
): Promise<AnswerDetailProps[]> {
  // TODO axios를 이용하여 서버로 정보를 가져와야 한다.

  return [
    {
      data: {
        id: parseInt(id),
        questionId: 1,
        contents:
          '1번 답변입니다.\n' +
          '이런 내용에 대해서 답변을 하고 있습니다.'.repeat(20),
        responderId: null,
        createdAt: '2021-01-11',
        lastModifiedAt: '2021-01-11T12:32:22',
      },
    },
    {
      data: {
        id: parseInt(id),
        questionId: 2,
        contents:
          '2번 답변입니다.\n' +
          '이런 내용에 대해서 답변을 하고 있습니다.'.repeat(30),
        responderId: null,
        createdAt: '2021-01-12',
        lastModifiedAt: '2021-01-12T12:32:22',
      },
    },
  ];
}
