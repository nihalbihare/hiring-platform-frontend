import { Divider, MantineProvider, createTheme } from '@mantine/core';
import { Provider } from 'react-redux';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/tiptap/styles.css';
import HomePage from './Pages/HomePage';
import '@mantine/dates/styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Notifications, notifications } from '@mantine/notifications';
import '@mantine/notifications/styles.css';
import FindJobs from './Pages/FindJobs';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import FindTalent from './Pages/FindTalent';
import TalentProfile from './Pages/TalentProfile';
import PostJobPage from './Pages/PostJobPage';
import JobDescPage from './Pages/JobDescPage';
import ApplyJobPage from './Pages/ApplyJobPage';
import CompanyPage from './Pages/CompanyPage';
import PostedJobPage from './Pages/PostedJobPage';
import JobHistoryPage from './Pages/JobHistoryPage';
import SignUpPage from './Pages/SignUpPage';
import ProfilePage from './Pages/ProfilePage';
import Store from './Store';
import AppRoutes from './AppRoutes';

export default function App() {

  const theme = createTheme({ // matenie theme customization
    primaryColor:'bright-sun',
    primaryShade:4,
    colors: {
      'bright-sun': [
        '#fffbeb', '#fff3c6', '#ffe588', '#ffd149', '#ffbd20',
        '#f99b07', '#dd7302', '#b75006', '#943c0c', '#7a330d', '#461902'
      ],
      'mine-shaft': [
        '#f6f6f6', '#e7e7e7', '#d1d1d1', '#b0b0b0', '#888888',
        '#6d6d6d', '#5d5d5d', '#4f4f4f', '#454545', '#3d3d3d', '#2d2d2d'
      ],
      
  
    },
    fontFamily:"poppins, sans-serif"
  });

  return (

    <Provider store ={Store}>
    <MantineProvider defaultColorScheme='dark' theme={theme}>
        <Notifications  position="top-center" zIndex={2000} />
     <AppRoutes/>
    </MantineProvider>
    </Provider>
  );
}
