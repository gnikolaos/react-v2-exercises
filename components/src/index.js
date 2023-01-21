import reactDOM from "react-dom"
import { App } from "./App"

const appElement = <App />
const root = document.querySelector("#root")

reactDOM.render(appElement, root)