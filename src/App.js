import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './client/Navbar';
import Login from './client/Login';
import SignUp from './client/SignUp';
import Home from './client/Home';

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
        },
        {
          path:"/home/:id",
          element:<Home />
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
