import { BrowserRouter } from 'react-router-dom';
import Router from './Router/Router';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
         <Router />
    </BrowserRouter>
  )
}
export default App;

// Install react-router-dom
// App => <BrowserRouter > <Routes>  <Route path="" element={} />
// Header / Navbar => <Link .... to="/"></Link>
