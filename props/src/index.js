import {createRoot} from "react-dom/client"
import Root from "./Root"
import './index.css'


const root = createRoot(document.querySelector('#root'))

root.render(<Root />)