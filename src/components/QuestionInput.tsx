import React, {ChangeEvent, useState} from 'react';
import styled from 'styled-components';
import Questioner from './Questioner';

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
  const [isFolded, setIsFolded] = useState<boolean>(true);
  const [title, setTitle] = useState<string>('');
  const [mainContent, setMainContent] = useState<string>('');

  const handleClick = () => {
    setIsFolded(!isFolded);
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
            <InputTitle onChange={handleTitleChange} value={title} />
            <ButtonNext onClick={handleClick}>Next</ButtonNext>
          </HeaderContainer>
        </>
      ) : (
        <div>
          <HeaderContainer>
            <Questioner />
            <InputTitle value={title} />
          </HeaderContainer>
          <InputMain onChange={handleMainChange} value={mainContent} />
          <ButtonSubmit onClick={handleClick}>Submit</ButtonSubmit>
        </div>
      )}
    </Container>
  );
};

export default QuestionInput;
