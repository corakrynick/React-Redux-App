import React, { useState } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

const SearchForm = (props) => {
  const [searchTerm, setSearchTerm] = useState("react");

  const handleChanges = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setUrl(
      `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${searchTerm}`
    );
  };

  const renderLoader = () => {
    return (
      <>
        <Loader
          type="Puff"
          color="#00BFFF"
          height={15}
          width={115}
          timeout={30000} //3 secs
        />
      </>
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChanges} value={searchTerm} />
      <button>{props.isLoading ? renderLoader() : "Search"}</button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading
  };
};

export default connect(mapStateToProps, {})(SearchForm);

