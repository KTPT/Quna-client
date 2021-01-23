import * as React from 'react';
import ApiButton from '../../components/ApiButton';
import styled from 'styled-components';
import Layout from '../../components/Layout';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
`;

const Nickname = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
`;

const Password = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
`;

const Login: React.FC = () => {
  return (
    <Layout>
      <h1>로그인</h1>
      <Container>
        <Nickname>
          <div>닉네임</div>
          <input type="text" name="nickname" />
        </Nickname>
        <Password>
          <div>비밀번호</div>
          <input type="password" name="password" />
        </Password>
        <ApiButton content={'로그인 하기'} />
      </Container>
    </Layout>
  );
};

export default Login;
