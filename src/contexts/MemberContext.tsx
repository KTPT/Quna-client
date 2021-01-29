import * as React from 'react';
import {useState} from 'react';

const MemberContext = React.createContext(null);

const MemberProvider = ({children}) => {
  const [member, setMember] = useState({
    isLogin: false,
  });

  const memberState = {
    member, setMember
  };

  return (
    <MemberContext.Provider value={memberState}>
      {children}
    </MemberContext.Provider>
  )
};

export {
  MemberProvider,
  MemberContext
};
