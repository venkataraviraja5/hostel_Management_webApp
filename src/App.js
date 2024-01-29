import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './client/Navbar';
import Login from './client/Login';
import SignUp from './client/SignUp';

function App() {
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Navbar />,
      children:[
        {
          path:"/",
          element:<Login />
        },
        {
          path:"/signup",
          element:<SignUp />
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
