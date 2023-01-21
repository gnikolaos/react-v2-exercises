import {createRoot} from "react-dom/client"
import { Greet } from "./App"


const root = createRoot(document.querySelector("#root"))

root.render(Greet("Kate"))