import NavLogo from "./components/header.component";
import FooterLogo from "./components/footer.component";
import SearchPage from "./pages/searchpage.pages";
import { Switch, Route } from "react-router-dom";
import notFound from "./components/notFound";
import Description from "./pages/description.pages";
import Request from './components/apiRequest.component';

function App() {
  return (
    <div className='px-24'>
      <NavLogo />
      <Request />
      <Switch>
        <Route exact path="/" component={SearchPage} />
        <Route exact path="/description/:id" component={Description} />
        <Route exact path="/description/:id" component={Description} />
        <Route component={notFound} />
      </Switch>
      <FooterLogo />
    </div>
  );
}

export default App;
