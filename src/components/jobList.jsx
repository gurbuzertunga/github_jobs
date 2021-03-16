import React, { Component } from "react";
import Job from "./job";
import { withRouter } from "react-router-dom";
import ReactPaginate from "react-paginate";

class JobList extends Component {
  state = {
    offset: 0,
    data: [],
    perPage: 20,
    currentPage: 0,
  };

  handleClick = (e, job) => {
    this.props.history.push(`description/${e}`, job);
  };

  handlePageClick = (e) => {
    console.log(e.selected);
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        window.scrollTo(0, 0);
        this.receivedData();
      }
    );
  };

  receivedData = () => {
    const jobs = this.props.jobs;
    const postData =
      jobs &&
      jobs
        .slice(this.state.offset, this.state.offset + this.state.perPage)
        .map((element, i) => {
          return element;
        });
    this.setState({
      data: postData,
      pageCount: Math.ceil(jobs.length / this.state.perPage),
    });
  };

  componentDidMount() {
    this.receivedData();
  }

  render() {
    const { data } = this.state;

    return (
      <div className="flex flex-col flex-1">
        <div className="flex-1 md:ml-8">
          {data &&
            data.map((job, i) => (
              <Job
                key={i}
                pageNumber={i}
                data={job}
                handleClick={() => this.handleClick(i, job)}
              />
            ))}
        </div>
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    );
  }
}

export default withRouter(JobList);
