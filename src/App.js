import HomePage from "./components/pages/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from "react-bootstrap";
import AuthenticationPage from "./components/pages/AuthenticationPage";
import LocationsPage from "./components/pages/LocationsPage";
const App = () => {
  return (
    <Container>
      <HomePage/>
      <hr/>
      <AuthenticationPage/>
      <LocationsPage/>
    </Container>
  );
}

export default App;
