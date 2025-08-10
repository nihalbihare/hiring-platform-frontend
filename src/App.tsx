import { Divider, MantineProvider, createTheme } from '@mantine/core';
import { Provider } from 'react-redux';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/dates/styles.css';
import { Notifications } from '@mantine/notifications';
import '@mantine/notifications/styles.css';
import Store from './Store';
import AppRoutes from './AppRoutes';

export default function App() {

 const theme = createTheme({
  primaryColor: 'bright-sun',
  primaryShade: 4,
  colors: {
    'bright-sun': [
      // '#edeafc', '#cfcaf5', '#b1a8f0', '#9387ea', '#7c6be3',
      // '#6650db', '#5744c5', '#4d3dad', '#47428a', '#3c366b'
       '#fffbeb', '#fff3c6', '#ffe588', '#ffd149', '#ffbd20',
        '#f99b07', '#dd7302', '#b75006', '#943c0c', '#7a330d', '#461902'
    ],
    'mine-shaft': [
      '#f6f6f6', '#e7e7e7', '#d1d1d1', '#b0b0b0', '#888888',
      '#6d6d6d', '#5d5d5d', '#4f4f4f', '#454545', '#3d3d3d', '#2d2d2d'

      // '#f5f5f7','#e3e3e7', '#c1c1c9', '#9e9ea9','#7c7c8b',
      // '#5f5f6b', '#454552', '#2f2f3a', '#1f1f27','#14141b', '#0c0c11', 
    ]
  },
  fontFamily: 'poppins, sans-serif',

  // components: {
  //   Input: {
  //     styles: (theme:any) => ({
  //       input: {
  //         backgroundColor: theme.colors['mine-shaft'][9],
  //         borderColor: theme.colors['mine-shaft'][6],
  //         color: theme.colors['mine-shaft'][0],
  //         '&:focus': {
  //           borderColor: theme.colors['bright-sun'][4],
  //         },
  //       },
  //     }),
  //   },
  //   TextInput: {
  //     styles: (theme:any) => ({
  //       input: {
  //         backgroundColor: theme.colors['mine-shaft'][9],
  //         borderColor: theme.colors['mine-shaft'][6],
  //         color: theme.colors['mine-shaft'][0],
  //         '&:focus': {
  //           borderColor: theme.colors['bright-sun'][4],
  //         },
  //       },
  //     }),
  //   },
  //   Textarea: {
  //     styles: (theme:any) => ({
  //       input: {
  //         backgroundColor: theme.colors['mine-shaft'][9],
  //         borderColor: theme.colors['mine-shaft'][6],
  //         color: theme.colors['mine-shaft'][0],
  //         '&:focus': {
  //           borderColor: theme.colors['bright-sun'][4],
  //         },
  //       },
  //     }),
  //   },
  //   Select: {
  //     styles: (theme:any) => ({
  //       input: {
  //         backgroundColor: theme.colors['mine-shaft'][9],
  //         borderColor: theme.colors['mine-shaft'][6],
  //         color: theme.colors['mine-shaft'][0],
  //         '&:focus': {
  //           borderColor: theme.colors['bright-sun'][4],
  //         },
  //       },
  //       dropdown: {
  //         backgroundColor: theme.colors['mine-shaft'][8],
  //       },
  //       item: {
  //         '&[data-selected]': {
  //           backgroundColor: theme.colors['bright-sun'][4],
  //           color: theme.white,
  //         },
  //       },
  //     }),
  //   }
  // }
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
