import { createContext, useState } from 'react'

export const ThemeContext = createContext({
    mode:false,
    onToggleMode: () => {}
});

export default function ThemeContextProvider({children}:{children:JSX.Element}) {
  const [mode, setMode] = useState(false);
  const onToggleMode = () =>{
    setMode((prevMode) => !prevMode);
  }
  return (
    <ThemeContext.Provider value={{mode, onToggleMode}}>
        {children}
    </ThemeContext.Provider>
  )
}