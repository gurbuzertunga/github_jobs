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
//   link3 = "https://limitless-harbor-63035.herokuapp.com/https://jobs.github.com/positions.json?search=node", THIS WORKS
//   lin4 = ""
// }

export default class App extends Component {
  state = {};  

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const dataToSubmit=[]
    try {
        const promise1 = await axios.get("https://limitless-harbor-63035.herokuapp.com/https://remoteok.io/api")
        const promise2 = await axios.get("https://limitless-harbor-63035.herokuapp.com/https://jobs.github.com/positions.json?search=node")
        Promise.all([promise1, promise2]).then(values =>{
          values.forEach(value=>{

            dataToSubmit.push(value.data)
          })
          
          
          const result = [];
         result.push(dataToSubmit[0].map(el=>{
            return {
              name:el.company || 'Opportunity',
              position:el.position,
              logo:el.company_logo || 'logo',
              date:el.date,
              description:el.description || `This company hasn't provided description`,
              location:el.location || 'Remote',
              url:el.apply_url
            }
          }).filter(el=>el.position));

          result.push( dataToSubmit[1].map(el=>{
              return {
                name:el.company || 'Opportunity',
                position:el.title,
                logo:el.company_logo || 'logo',
                date:el.created_at,
                description:el.description || `This company hasn't provided description`,
                location:el.location || 'Remote',
                url:el.url
              }
            }).filter(el=>el.position)
          )

          this.setState({
            jobs:[...result[0],...result[1]]
          })
        })

        
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="px-24">
        <NavLogo />
        <Switch>
          <Route exact path="/" component={SearchPage} jobs={this.state.jobs}/>
          <Route exact path="/description/:id" component={Description} />
          <Route exact path="/description/:id" component={Description} />
          <Route component={notFound} />
        </Switch>
        <FooterLogo />
      </div>
    );
  }
}
