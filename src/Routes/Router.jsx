import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root'; // Correct default import for Root
import Login from "../Pages/Login";
import Home from '../Pages/Home';
import FeesPayment from '../Pages/FeesPayment';
import Notice from '../Pages/Notice';
import StuProfile from '../Components/StuProfile';
import { Result } from 'postcss';
import Results from '../Pages/Results';
import Attendance from '../Pages/Attendance';
import Conversation from '../Pages/Conversation';
import TeacherDashboard from '../Pages/TeacherDashboard';
import TeachersProfile from '../Pages/TeachersProfile';
import TeacherAttendance from '../Pages/TeacherAttendance';
import MarksEntry from '../Pages/MarksEntry';
import ReportGeneration from '../Pages/ReportGeneration';
import ResultsOfStu from '../Pages/ResultsOfStu';
import Communication from '../Pages/Communication';

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
        element: <TeacherDashboard />,
      },
      {
        path: '/teacherlogin',
        element: <TeacherDashboard />,
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
      {
        path: '/StudentProfile',
        element: <StuProfile />,
      },
      {
        path: '/results',
        element: <Results/>
      },
      {
        path: '/attendance',
        element: <Attendance/>
      },
      {
        path: '/talktoteacher',
        element: <Conversation/>
      },
      {
        path: '/TeacherProfile',
        element: <TeachersProfile/>
      },
      {
        path: '/teacherAttendance',
        element: <TeacherAttendance/>
      },
      {
        path: '/marksEntry',
        element: <MarksEntry/>
      },
      {
        path: '/reportGen',
        element: <ReportGeneration/>
      },
      {
        path: '/resultsGen',
        element: <ResultsOfStu/>
      },
      {
        path: '/talkToStu',
        element: <Communication/>
      },
      {
        path: '/talkToStu',
        element: <Communication/>
      },
    ]
  }
]);

export default router;
