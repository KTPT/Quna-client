import styled from 'styled-components';
import Link from 'next/link';
import * as React from 'react';
import {useContext, useEffect} from 'react';
import {MemberContext} from "../contexts/MemberContext";
import {clearToken, getIsLogin} from "../utils/tokenHandler";

const Container = styled.div`
  background: var(--white-yellow);
  padding: 1rem 2rem;
  border: 0.1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;
`;

const LeftSideButton = styled.button`
  display: inline-block;
  color: black;
  font-size: large;
  background-color: var(--yellow);
  border: 0.1px solid rgba(0, 0, 0, 0.2);
  border-radius: 7px;
  padding: 1rem;
  width: 8rem;

  :hover {
    background-color: rgba(255, 241, 118, 0.5);
  }
`;

const RightSideButton = styled.button`
  display: inline-block;
  float: right;
  color: black;
  font-size: large;
  background-color: var(--yellow);
  border: 0.1px solid rgba(0, 0, 0, 0.2);
  border-radius: 7px;
  padding: 1rem;
  width: 7rem;
  margin-left: 2rem;

  :hover {
    background-color: rgba(255, 241, 118, 0.5);
  }
`;

const Navbar: React.FC = () => {
  const {member: {isLogin}, setMember} = useContext(MemberContext);

  useEffect(() => {
    setMember({isLogin: getIsLogin()});
  }, []);

  const logout = () => {
    clearToken();
    setMember({isLogin: false});
  };

  return (
    <Container>
      <Link href={'/'}>
        <LeftSideButton>Quna</LeftSideButton>
      </Link>
      {isLogin ? (
        <RightSideButton onClick={logout}>로그아웃</RightSideButton>
      ) : (
        <>
          <Link href={'/login'}>
            <RightSideButton>로그인</RightSideButton>
          </Link>
          <Link href={'/signup'}>
            <RightSideButton>회원가입</RightSideButton>
          </Link>
        </>
      )}
    </Container>
  );
};

export default Navbar;
