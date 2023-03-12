import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function TheFooter() {
  const { mode } = useContext(ThemeContext);
  return (
    <footer>TheFooter
      <div>{mode.toString()}</div>
    </footer>
  )
}
