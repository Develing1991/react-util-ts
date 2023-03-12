import { Outlet } from 'react-router-dom'
import ThemeContextProvider from '../context/ThemeContext'
interface ILayoutIndex {
  header?:  () => JSX.Element,
  main:  () => JSX.Element,
  footer:  () => JSX.Element,
}
export default function LayoutIndex({header:LayoutHeader,
                                       main: LayoutMain,
                                       footer:LayoutFooter}:ILayoutIndex) {
  
  return (
    <ThemeContextProvider>
      <>
        { LayoutHeader && <LayoutHeader/> }
          <LayoutMain/>
        { LayoutFooter && <LayoutFooter/> }
      </>
    </ThemeContextProvider>
  )
}


