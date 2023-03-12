import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default function UseContextPage() {
  const { onToggleMode } = useContext(ThemeContext);
  return (
      <div onClick={()=>onToggleMode()}> 토글</div>
  )
}
