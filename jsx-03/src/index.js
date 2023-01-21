import {createRoot} from "react-dom/client"
import { Sum } from "./App"


const root = createRoot(document.querySelector("#root"))

root.render(Sum(5,8))