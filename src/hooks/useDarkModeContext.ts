import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

const useDarkModeContext = () => useContext(DarkModeContext);

export default useDarkModeContext;
