import NavLogo from "./components/header.component";
import FooterLogo from "./components/footer.component";
import SearchPage from "./pages/searchpage.pages";
import { Switch, Route } from "react-router-dom";
import notFound from "./components/not-found/notFound";
import Description from "./pages/description/description.pages";

function App() {
  return (
    <div className='px-12 bg-blue-300'>
      <NavLogo />
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
