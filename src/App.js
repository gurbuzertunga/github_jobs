import React, { Component, useState } from "react";
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
//   link3 = "https://limitless-harbor-63035.herokuapp.com/https://jobs.github.com/positions.json?search=node", THIS WORKS
//   lin4 = ""
// }

const data = [{}, {}, {}];



export default function App {
  const componentDidMount = () => {
    this.fetchData();
  }

  async fetchData() {
    const [state, setState] = useState(data);
    let response;
    try {
        const promise1 = await axios.get("https://limitless-harbor-63035.herokuapp.com/https://www.themuse.com/api/public/jobs?page=1")
        const promise2 = await axios.get("https://limitless-harbor-63035.herokuapp.com/https://remoteok.io/api")
        const promise3 = await axios.get("https://limitless-harbor-63035.herokuapp.com/https://jobs.github.com/positions.json?search=node")
        Promise.all([promise1, promise2, promise3]).then((values) => {
          setState(values);
          console.log(state);
        });
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
