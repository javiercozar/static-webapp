
import './App.css';
import Link from '@mui/material/Link';
import React, { useState, useEffect } from 'react';


const LogginButton = ({Text, Url, Redirect}) => {
  return (<Link color="primary" href={`/${Url}?post_logout_redirect_uri=${Redirect}`}>{Text}</Link>);
};

const LoggoutButton = ({Text, Url, Redirect}) => {
  return (<Link color="primary" href={`/${Url}?post_logout_redirect_uri=${Redirect}`}>{Text}</Link>);
};

function App() {
  const redirect = window.location.pathname;

  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    (async () => {
      setUserInfo(await getUserInfo());
    })();
  }, []);

  async function getUserInfo() {
    try {
      const response = await fetch('/.auth/me');
      const payload = await response.json();
      const { clientPrincipal } = payload;
      return clientPrincipal;
    } catch (error) {
      console.error('No profile could be found');
      return undefined;
    }
  }

  return (
    <div>
      <div className="App">
        <h1>Hello agents prime</h1>
        <LogginButton Text="Loggin" Url="login" Redirect={redirect}></LogginButton>
        <LoggoutButton Text="Logout" Url="logout" Redirect={redirect}></LoggoutButton>
      </div>
      <div>
        {userInfo && (
          <div>
            <div className="user">
              <p>Welcome</p>
              <p>{userInfo && userInfo.userDetails}</p>
              <p>{userInfo && userInfo.identityProvider}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
