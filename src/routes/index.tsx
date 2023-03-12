import { createBrowserRouter } from 'react-router-dom'
import TheFooter from '../layouts/footers/TheFooter'
import TheHeader from '../layouts/headers/TheHeader'
import LayoutIndex from '../layouts/LayoutIndex'
import TheMain from '../layouts/mains/TheMain'
import AboutPage from '../pages/AboutPage'
import HomePage from '../pages/HomePage'
import ImmerPage from '../pages/ImmerPage'
import ReducerPage from '../pages/ReducerPage'
import UseContextPage from '../pages/UseContextPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutIndex header={TheHeader} main={TheMain} footer={TheFooter}/>,
    errorElement: <p>not found</p>,
    children : [
      {
        index:true,
        element: <HomePage/>
      },
      {
        path:'about/:id',
        element: <AboutPage/>,
      },
      {
        path:'reducer',
        element: <ReducerPage/>,
      },
      {
        path:'immer',
        element: <ImmerPage/>,
      },
      {
        path:'useContext',
        element: <UseContextPage/>,
      }
    ]
  }
])