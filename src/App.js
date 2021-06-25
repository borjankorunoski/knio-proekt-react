import HomePage from "./components/pages/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from "react-bootstrap";
import AuthenticationPage from "./components/pages/AuthenticationPage";
import LocationsPage from "./components/pages/LocationsPage";
import ProfilePage from "./components/pages/ProfilePage";
import Route from "./components/navigation bar components/Route";
import NavigationBar from "./components/navigation bar components/NavigationBar";

const App = () => {
  return (
    <div>
      <NavigationBar/>
      <Container>
        <Route path='/'>
          <HomePage/>
        </Route>
        <Route path='/login'>
          <AuthenticationPage/>
        </Route>
        <Route path='/locations'>
          <LocationsPage/>
        </Route>
        <Route path='/profile'>
          <ProfilePage/>
        </Route>
      </Container>
    </div>
  );
};

export default App;
