import React, { Component } from "react";
import NavLogo from "./components/header.component";
import FooterLogo from "./components/footer.component";
import SearchPage from "./pages/searchpage.pages";
import { Switch, Route } from "react-router-dom";
import notFound from "./components/notFound";
import Description from "./pages/description.pages";
import axios from "axios";

export default class App extends Component {
  state = {};

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const dataToSubmit = [];
    try {
      const promise1 = await axios.get(
        "https://limitless-harbor-63035.herokuapp.com/https://remoteok.io/api"
      );
      const promise2 = await axios.get(
        "https://limitless-harbor-63035.herokuapp.com/https://jobs.github.com/positions.json?search=node"
      );
      Promise.all([promise1, promise2]).then((values) => {
        values.forEach((value) => {
          dataToSubmit.push(value.data);
        });

        const result = [];
        result.push(
          dataToSubmit[0]
            .map((el) => {
              return {
                name: el.company || "Job Opportunity",
                position: el.position,
                logo:
                  el.company_logo ||
                  "https://www.logodesign.net/logo/abstract-cuboid-building-4519ld.png",
                date: el.date,
                description:
                  el.description || `This company hasn't provided description`,
                location: el.location || "Remote",
                url: el.apply_url,
              };
            })
            .filter((el) => el.position)
        );

        result.push(
          dataToSubmit[1]
            .map((el) => {
              return {
                name: el.company || "Job Opportunity",
                position: el.title,
                logo:
                  el.company_logo ||
                  "https://www.logodesign.net/logo/abstract-cuboid-building-4519ld.png",
                date: el.created_at,
                description:
                  el.description || `This company hasn't provided description`,
                location: el.location || "Remote",
                url: el.url,
              };
            })
            .filter((el) => el.position)
        );

        const jobPosts = [...result[0], ...result[1]];

        const noShowList = [
          "ios",
          "android",
          "devOps",
          "Data",
          "Recruiter",
          "Marketer",
          "C++",
          "Mobile App",
          "Mobile Developer",
          "Content Writer",
        ].map((el) => el.toLowerCase());

        let elementIsNotIncluded = true;

        let d = jobPosts.filter(cur => {

          elementIsNotIncluded = true;

          cur.position.toLowerCase().split(" ").forEach((el) => {
            if (noShowList.includes(el)) {
              elementIsNotIncluded = false;
            }
          });

          if (elementIsNotIncluded) return cur;
        });

        console.log(d);

        this.setState({
          jobs: d,
        });
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
          <Route
            exact
            path="/"
            component={() => <SearchPage jobs={this.state.jobs} />}
          />
          <Route exact path="/description/:id" component={Description} />
          <Route component={notFound} />
        </Switch>
        <FooterLogo />
      </div>
    );
  }
}
