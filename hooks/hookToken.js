import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const hookToken = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const tokenCookie = Cookies.get('SportStoreloginCoockie');
    if (tokenCookie) {
      setToken(tokenCookie);
    }
  },[]);

  return token;
};

export default hookToken;
