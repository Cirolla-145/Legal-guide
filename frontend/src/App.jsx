import react from 'react'
// import Login from './pages/Login/Login';
// import Signup from './pages/Signup/Signup'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './components/Chat-app/context/AuthContext';
import AddPdf from './components/art/addPdfs/AddPdf';
import GetPdfs from './components/art/displayPdfs/GetPdfs';
import MainHome from './pages/Home/MainHome';
import IPC from './components/art/sectioPages/IPC';
import CPC from './components/art/sectioPages/CPC';
import CRPC from './components/art/sectioPages/CRPC';
import Marriage from './components/art/sectioPages/Marriage';
import MotorV from './components/art/sectioPages/MotorV';
import FindLawyers from './components/art/lawyers/FindLawyers';
function App() {

  const { authUser } = useAuthContext()

  let router = createBrowserRouter([
    {
      path: '/login',
      element: authUser ? <Navigate to='/' /> : <Login />
    },
    {
      path: '/signup',
      element: authUser ? <Navigate to='/home' /> : <Signup />
    },
    {
      path: '/',
      element: authUser ? <MainHome /> : <Navigate to={"/login"} />,
      children: [
        {
          path: '/chat',
          element:<Home />,
        },
        {
          path:'/get',
          element: <GetPdfs/>
        },
        {
          path:'/cpc',
          element:<CPC/>
        },
        {
          path:'/crpc',
          element:<CRPC/>
        },
        {
          path:'/marriage',
          element:<Marriage/>
        },
        {
          path:'/ipc',
          element:<IPC/>
        },
        {
          path:'/motorV',
          element:<MotorV/>
        },
        {
          path:'/lawyers',
          element:<FindLawyers/>
        }

      ]
    },
    {
      path: '/add',
      element: <AddPdf />
    }
  ])

  return (

    <div className=" h-screen">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
