import {createRoot} from "react-dom/client"
import { Hello } from "./Hello"

const root = createRoot(document.querySelector("#root"))

root.render(<Hello />)

