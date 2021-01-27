import * as React from 'react';
import {useState} from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import axios from 'axios';
import {API} from '../../constants/api';
import {useRouter} from 'next/router';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  width: 240px;
`;

const NicknameInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
`;

const PasswordInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
`;

const AvatarInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
`;

const SubmitButton = styled.button`
  max-width: 500px;
  cursor: pointer;
  background: inherit;
  box-shadow: 5px 5px 15px #aaaaaa;
  border-radius: 5px;
  background-color: var(--light-yellow);
  border: none;
  margin-top: 2rem;
  padding: 1rem 3rem;
  font-size: x-large;
  user-select: none;
  :hover {
    background-color: var(--yellow);
  }
  :focus {
    outline: none;
  }
`;

const Signup: React.FC = () => {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const router = useRouter();

  const verifyFails = () => {
    if (!nickname) {
      alert('닉네임을 입력해주세요.');
      return true;
    }
    if (!password) {
      alert('패스워드를 입력해주세요.');
      return true;
    }
    return false;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (verifyFails()) {
      return;
    }

    const request = {
      nickname,
      password,
      avatarUrl: avatarUrl
        ? avatarUrl
        : 'https://icon-library.com/images/icon-profile/icon-profile-22.jpg',
    };

    try {
      const {status} = await axios.post(API('Signup'), request);
      if (status === 201) {
        await router.push('/');
        return;
      }
    } catch (e) {
      console.error(e);
      alert('회원가입 실패');
    }
  };

  const onChangeNickname = ({
    currentTarget: {value},
  }: React.FormEvent<HTMLInputElement>) => setNickname(value);

  const onChangePassword = ({
    currentTarget: {value},
  }: React.FormEvent<HTMLInputElement>) => setPassword(value);

  const onChangeAvatarUrl = ({
    currentTarget: {value},
  }: React.FormEvent<HTMLInputElement>) => setAvatarUrl(value);

  return (
    <Layout>
      <Container onSubmit={onSubmit} method={'POST'}>
        <NicknameInputContainer>
          <div>닉네임</div>
          <input
            type="text"
            name="nickname"
            value={nickname}
            onChange={onChangeNickname}
          />
        </NicknameInputContainer>
        <PasswordInputContainer>
          <div>비밀번호</div>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChangePassword}
          />
        </PasswordInputContainer>
        <AvatarInputContainer>
          <div>프로필 사진</div>
          <input
            type="avatarUrl"
            name="avatarUrl"
            value={avatarUrl}
            onChange={onChangeAvatarUrl}
          />
        </AvatarInputContainer>
        <SubmitButton type={'submit'}>가입하기</SubmitButton>
      </Container>
    </Layout>
  );
};

export default Signup;
