import React, {ChangeEvent, useState} from 'react';
import styled from 'styled-components';
import Questioner from './Questioner';

const Container = styled.div.attrs({
  title: 'Container',
})`
  width: 60%;
  margin-left: 20%;
  background-color: var(--white-yellow);
  box-sizing: border-box;
  padding: 20px;
  align-items: center;
`;

const HeaderContainer = styled.div.attrs({
  title: 'HeaderContainer',
})`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

const TitleInput = styled.input.attrs({
  title: 'TitleInput',
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

const MainInput = styled.textarea.attrs({
  title: 'MainInput',
})`
  border: 0.1px solid rgba(0, 0, 0, 0.2);
  border-radius: 7px 0px 0px 7px;
  width: 100%;
  height: 20em;
  font-size: 16px;
  padding: 10px;
  font-family: nanum, sans-serif;
  margin-bottom: 10px;
`;

const NextButton = styled.button.attrs({
  title: 'NextButton',
})`
  background-color: var(--yellow);
  width: 15%;
  height: 80px;
  border-radius: 7px;
  border: 0.1px solid rgba(0, 0, 0, 0.2);
  margin-left: 10px;
  font-size: 25px;
  color: rgba(0, 0, 0, 0.8);
`;

const ButtonSubmit = styled.button.attrs({
  title: 'ButtonSubmit',
})`
  background-color: var(--yellow);
  border: 0.1px solid rgba(0, 0, 0, 0.2);
  border-radius: 7px;
  width: 100%;
  height: 70px;
  font-size: 25px;
  color: rgba(0, 0, 0, 0.8);
`;

const QuestionInput: React.FC = () => {
  const [isTitleExist, setIsTitleExist] = useState<boolean>(true);
  const [title, setTitle] = useState<string>('');
  const [mainContent, setMainContent] = useState<string>('');

  const handleClickNext = () => {
    if (title !== '') {
      setIsTitleExist(false);
    } else {
      alert('질문 제목을 입력해주세요.');
    }
  };

  const handleClickSubmit = () => {
    if (mainContent !== '') {
      alert('작성완료');
    } else {
      alert('질문 내용을 입력해주세요.');
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
      {isTitleExist ? (
        <>
          <HeaderContainer>
            <Questioner />
            <TitleInput onChange={handleTitleChange} value={title} />
            <NextButton onClick={handleClickNext}>Next</NextButton>
          </HeaderContainer>
        </>
      ) : (
        <div>
          <HeaderContainer>
            <Questioner />
            <TitleInput value={title} />
          </HeaderContainer>
          <MainInput onChange={handleMainChange} value={mainContent} />
          <ButtonSubmit onClick={handleClickSubmit}>Submit</ButtonSubmit>
        </div>
      )}
    </Container>
  );
};

export default QuestionInput;
