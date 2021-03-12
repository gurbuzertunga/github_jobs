import React, { Component } from "react";
import NavLogo from "./components/header.component";
import FooterLogo from "./components/footer.component";
import SearchPage from "./pages/searchpage.pages";
import { Switch, Route } from "react-router-dom";
import notFound from "./components/notFound";
import Description from "./pages/description.pages";
import axios from "axios";

// remote links = {
//   link1 = "https://remoteok.io/api?tags=digital+nomad", THIS WORKS
//   link2 = "https://www.themuse.com/api/public/jobs?page=1," THIS WORKS
//   link3 = "https://remotive.io/api/remote-jobs?category=software-dev",
// }

export default class App extends Component {
  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    let response;
    try {

     

        // const promise1 = await axios.get("https://www.themuse.com/api/public/jobs?page=1")
        // const promise2 = await axios.get("https://remoteok.io/api?tags=digital+nomad")
        const promise3 = await axios.get("https://jobs.github.com/positions.json?search=node",{mode: 'cors'})

        

        Promise.all([promise3]).then((values) => {
          console.log(values);
        });

      // response = await axios.get("https://www.themuse.com/api/public/jobs?page=1", {
      //    mode: "corse",
      //    header: "Access-Control-Allow-Origin"
      //   }).then((d) => d).then((data => console.log(data)));
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
