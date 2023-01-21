import reactDOM from "react-dom"
import { App } from "./App"

const appELement = <App />
const root = document.querySelector("#root")

reactDOM.render(appELement, root)