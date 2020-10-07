import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { fetchJobs } from "./store/actions";

import SearchForm from "./components/SearchForm";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App(props) {
  const { fetchJobs } = props;
  const [url, setUrl] = useState(
    "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=react"
  );
  useEffect(() => {
    // this effect will only call an action creator, not make an API call
    fetchJobs(url);
  }, [fetchJobs, url]);

  return (
    <div className="App">
      <h1>Github Jobs</h1>
      <SearchForm setUrl={setUrl} />
      {props.jobs.map((job) => (
        <h1 key={job.id}>{job.title}</h1>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    jobs: state.jobs
  };
};

export default connect(mapStateToProps, { fetchJobs })(App);
