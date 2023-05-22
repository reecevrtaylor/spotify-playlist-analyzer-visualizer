import React from 'react';
import { Button } from '@mui/material';

const CLIENT_ID = import.meta.env.VITE_REACT_APP_SPOTIFY_CLIENT_ID
const REDIRECT_URI = 'http://localhost:5173/'


const scopes = ['user-read-private', 'user-read-email', 'playlist-read-private', 'playlist-read-collaborative'];

const SpotifyLogin: React.FC = () => {
  const authUrl = 'https://accounts.spotify.com/authorize' +
    '?response_type=token' +
    '&client_id=' + encodeURIComponent(CLIENT_ID) +
    (scopes ? '&scope=' + encodeURIComponent(scopes.join(' ')) : '') +
    '&redirect_uri=' + encodeURIComponent(REDIRECT_URI);

  return (
    <div>
      <Button variant="contained" color="primary" href={authUrl}>
        Login to Spotify
      </Button>
    </div>
  );
};

export default SpotifyLogin;
