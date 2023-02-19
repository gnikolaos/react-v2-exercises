import { BrowserRouter } from 'react-router-dom'
import App from './router/App'

function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

export default Root