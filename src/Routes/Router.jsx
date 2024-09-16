import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root'; // Correct default import for Root
import Login from "../Pages/Login";
import Home from '../Pages/Home';
import FeesPayment from '../Pages/FeesPayment';
import TalkToTeacher from '../Pages/TalkToTeacher';
import NoticeBoard from '../Components/NoticeBoard';
import Notice from '../Pages/Notice';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />, // Use the Root component correctly here
    children: [
      {
        path: '/',
        element: <Login />,
      },
      {
        path: '/studentlogin',
        element: <Home />,
      },
      {
        path: '/teacherlogin',
        element: <Home />,
      },
      {
        path: '/payment',
        element: <FeesPayment />,
      },
      {
        path: '/payment',
        element: <FeesPayment />,
      },
      {
        path: '/noticeBoard',
        element: <Notice/>,
      },
    ]
  }
]);

export default router;
