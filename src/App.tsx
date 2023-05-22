import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Root from './pages/Root';
import SpotifyLogin from './pages/SpotifyLogin';
import HomePage from './pages/HomePage';
import PlaylistsPage from './pages/Playlists';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <SpotifyLogin />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/playlists",
        element: <PlaylistsPage />,
      }
    ],
  },
]);


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
