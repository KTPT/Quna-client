import * as React from 'react';
import {ChangeEvent, useState, useContext, useEffect} from 'react';
import {MemberContext} from "../contexts/MemberContext";
import styled from 'styled-components';
import Questioner from './Questioner';
import {fetchAPI} from '../constants/api';
import {isCreated} from '../constants/status';
import {getIsLogin} from "../utils/tokenHandler";
import {useRouter} from "next/router";

const Container = styled.div`
  /*Layout 적용 이후 width 변경 요망* */
  width: 60%;
  margin-left: 20%;
  background-color: var(--white-yellow);
  box-sizing: border-box;
  padding: 20px;
  align-items: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

const InputTitle = styled.input.attrs({
  type: 'text',
  placeholder: '무엇을 물어볼까요?',
})`
  margin-left: 20px;
  font-size: 35px;
  padding-left: 20px;
  height: 80px;
  width: 100%;
  border: 0.1px solid rgba(0, 0, 0, 0.2);
  border-radius: 7px;

  ::placeholder {
    color: rgba(0, 0, 0, 0.2);
    font-weight: 500;
  }
`;

const InputMain = styled.textarea`
  border: 0.1px solid rgba(0, 0, 0, 0.2);
  border-radius: 7px 0px 0px 7px;
  width: 100%;
  height: 20em;
  font-size: 16px;
  padding: 10px;
  font-family: nanum, sans-serif;
  margin-bottom: 10px;
`;

const ButtonNext = styled.button`
  background-color: var(--yellow);
  width: 15%;
  height: 80px;
  border-radius: 7px;
  border: 0.1px solid rgba(0, 0, 0, 0.2);
  margin-left: 10px;
  font-size: 25px;
  color: rgba(0, 0, 0, 0.8);
`;

const ButtonSubmit = styled.button`
  background-color: var(--yellow);
  border: 0.1px solid rgba(0, 0, 0, 0.2);
  border-radius: 7px;
  width: 100%;
  height: 70px;
  font-size: 25px;
  color: rgba(0, 0, 0, 0.8);
`;

const QuestionInput: React.FC = () => {
  const {member: {isLogin}, setMember} = useContext(MemberContext);
  const [isFolded, setIsFolded] = useState<boolean>(true);
  const [title, setTitle] = useState<string>('');
  const [mainContent, setMainContent] = useState<string>('');
  const {push} = useRouter();

  useEffect(() => {
    setMember({isLogin: getIsLogin()});
  }, []);

  const isNotVerified = () => {
    if (!title) {
      alert('질문 제목을 입력해주세요.');
      return true;
    } else if (!mainContent) {
      alert('질문 내용을 입력해주세요.');
      return true;
    } else if (!isLogin) {
      alert('로그인이 필요합니다.');
      return true;
    }
    return false;
  }

  const handleClickNext = () => {
    if (!title) {
      alert('질문 제목을 입력해주세요.');
      return;
    }

    setIsFolded(false);

  };

  const handleClickSubmit = async () => {
    if (isNotVerified()) {
      return;
    }
    /**responderId 관련 로직 확인 필요 */
    const request = {
      title : title,
      contents : mainContent,
      responderId : null,
    }

    try {
      const {status} = await fetchAPI('POST', 'Questions', null, request);
    
      if (isCreated(status)) {
        alert('질문이 등록되었습니다.');
        await push('/');
      }
    } catch (e) {
      console.error(e);
      alert('질문 등록에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleMainChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMainContent(e.target.value);
  };

  return (
    <Container>
      {isFolded ? (
        <>
          <HeaderContainer>
            <Questioner />
            <InputTitle onChange={handleTitleChange} />
            <ButtonNext onClick={handleClickNext}>Next</ButtonNext>
          </HeaderContainer>
        </>
      ) : (
        <div>
          <HeaderContainer>
            <Questioner />
            <InputTitle onChange={handleTitleChange} defaultValue={title}/>
          </HeaderContainer>
          <InputMain onChange={handleMainChange} value={mainContent} />
          <ButtonSubmit onClick={handleClickSubmit}>Submit</ButtonSubmit>
        </div>
      )}
    </Container>
  );
};

export default QuestionInput;
