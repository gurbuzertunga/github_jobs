import React, { Component } from "react";
import NavLogo from "./components/header.component";
import FooterLogo from "./components/footer.component";
import SearchPage from "./pages/searchpage.pages";
import { Switch, Route } from "react-router-dom";
import notFound from "./components/notFound";
import Description from "./pages/description.pages";
// import axios from "axios";

export default class App extends Component {
  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    let response;
    try {
      // response = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
      //   method: "HEAD",
      //   mode: "no-cors",
      //   headers: {
      //     "Access-Control-Allow-Origin": "*",
      //     Accept: "application/json",
      //     "Content-Type": "application/json",
      //   },
      //   withCredentials: true,
      //   credentials: "same-origin",
      //   crossdomain: true,
      // }).then((d) => console.log(d));

      response = await fetch("http://test.jointohire.com:3000/api/v1/freelancer/list?page=1&perPage=10",{
        mode:'no-cors'
      }).then((d) => console.log(d));
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="px-24">
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
}
