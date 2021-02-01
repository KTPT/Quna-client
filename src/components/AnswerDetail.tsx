import styled from 'styled-components';
import {Answer, Model} from '../types/model';
import * as React from 'react';
import {removeSludge} from "../utils/dateHandler";

const Container = styled.div`
  display: flex;
  width: 80%;
  background-color: var(--light-yellow);
  /*margin-left: 10%;*/
  margin-top: 2rem;
  padding: 0.1rem;
  border-radius: 5px;
  box-shadow: 5px 5px 15px #aaaaaa;
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

const Contents = styled.div`
  padding: 1rem;
  margin: 0.5rem;
  border: var(--dark-yellow) 3px solid;
  line-height: 130%;
`;

const AnswerDetail: React.FC<{props: Model<Answer>}> = ({props}) => {
  return props ? (
    <Container>
      <Left>
        <Avatar>
          <AvatarImage src="/jobs_avatar.png" alt="avatar" />
        </Avatar>
        <Created>{removeSludge(props.createdAt)}</Created>
      </Left>
      <Contents>{props.contents}</Contents>
    </Container>
  ) : (
    <>답변이 없다</>
  );
};

export default AnswerDetail;
