import HomePage from "./components/pages/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from "react-bootstrap";
import AuthenticationPage from "./components/pages/AuthenticationPage";
const App = () => {
  return (
    <Container>
      <HomePage/>
      <hr/>
      <AuthenticationPage/>
    </Container>
  );
}

export default App;
