import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Root from './pages/Root';
import Home from './pages/HomePage';
import SpotifyLogin from './pages/SpotifyLogin';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/callback",
        element: <SpotifyLogin />,
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
