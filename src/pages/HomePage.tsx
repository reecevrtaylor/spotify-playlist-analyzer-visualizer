import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

const HomePage: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const hashParams: any = {};
    let e;
    const r = /([^&;=]+)=?([^&;]*)/g,
      q = location.hash.substring(1);

    while ((e = r.exec(q)) !== null) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }

    if (!hashParams['access_token']) {
      return;
    }
    setLoggedIn(true);
  }, [location]);

  return (
    <div>
      {loggedIn ? 'Logged In!' : 'Not Logged In.'}
      <Link to="/callback">
        <Button>Login with Spotify</Button>
      </Link>
    </div>
  );
};

export default HomePage;
