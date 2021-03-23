import styled from 'styled-components';
import {Model, Question} from '../types/model';
import * as React from 'react';
import {removeSludge} from "../utils/dateHandler";

const Container = styled.div`
  width: 80%;
  background-color: var(--light-yellow);
  /*margin-left: 10%;*/
  margin-top: 0.5rem;
  padding: 0.1rem;
  border-radius: 5px;
  box-shadow: 5px 5px 15px #aaaaaa;
`;

const Top = styled.div`
  display: flex !important;
  width: 100% !important;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100px;
  height: 100%;
`;

const Avatar = styled.div`
  width: 100px;
  height: 100px;
`;

const AvatarImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  padding: 0.5rem;
  border-radius: 50%;
  -webkit-user-drag: none;
`;

const Created = styled.div`
  max-width: 100%;
  max-height: 100%;
  color: gray;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem;
  margin: 0.5rem;
  border: var(--dark-yellow) 3px solid;
  font-size: x-large;
`;

const Contents = styled.div`
  padding: 1rem;
  margin: 0.5rem;
  border: var(--dark-yellow) 3px solid;
  line-height: 130%;
`;

const QuestionDetail: React.FC<{props: Model<Question>}> = ({props}) => {
  return props ? (
    <Container>
      <Top>
        <Left>
          <Avatar>
            <AvatarImage src="/jobs_avatar.png" alt="avatar" />
          </Avatar>
          <Created>{removeSludge(props.createdAt)}</Created>
        </Left>
        <Title>{props.title}</Title>
      </Top>
      <Contents>{props.contents}</Contents>
    </Container>
  ) : (
    <>질문이 없다</>
  );
};

export default QuestionDetail;
