import React from "react";
import helpers from "../../utils/helpers";


class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      searchLimit: 1,
      startYear: "",
      endYear: ""
    };
    this.search = this.search.bind(this);
    this.updateSearchTerm = this.updateSearchTerm.bind(this);
    this.updateSearchLimit = this.updateSearchLimit.bind(this);
  }
  search(e) {
    e.preventDefault();

    var searchTerm = document.getElementsByName("searchTerm")[0].value;
    var resultsLimit = document.getElementsByName("numRecordsSelect")[0].value;
    var startYear = document.getElementsByName("startYear")[0].value;
    var endYear = document.getElementsByName("endYear")[0].value;

      this.props.setSearch(searchTerm, limit, startYear, endYear);
      this.setState({
        searchTerm: searchTerm,
        limit: limit,
        startYear: startYear,
        endYear: endYear
      });

      if(searchTerm) {
        helpers.runQyert(searchTerm, startYear, endYear).then((response) => {
          var returns = [];
          for(var i=0; i<limit && i<response.data.response.docs.length; ++i)
            returns.push(response.data.response.docs[i]);

          this.props.setResults(returns);
        });
      }

  }
  updateSearchTerm(e) {
    this.setState({
      searchTerm: e.target.value
    });
    console.log(this.state);
  }
  updateSearchLimit(e) {
    this.setState({
      this.setState({
        limit: event.target.value
      });
    });
    console.log(this.state);
  }
  render() {
    return(
      <div className="row">
        <div className="col-sm-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">
                <i className="fa fa-list-alt glyphicon glyphicon-search"></i> Search
              </h3>
            </div>
            <div className="panel-body">
              <form role="form">
                {/* search term */}
                <div className="form-group">
                  <label htmlFor="search">Search Term:</label>
                  <input type="text" className="form-control" name="searchTerm" id="searchTerm" onChange={this.updateSearchTerm} value={this.state.searchTerm} />
                </div>
                {/* number of records to retrieve */}
                <div className="form-group">
                  <label htmlFor="records">Number of Records to Retrieve: </label><br />
                  <select className="form-control" id="numRecordsSelect">
                    <option value="1">1</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                  </select>
                </div>
                {/* optional start year */}
                <div className="form-group">
                  <label htmlFor="startYear">Optional Start Year:</label>
                  <input type="text" className="form-control" name="startYear" />
                </div>
                {/* optional end year */}
                <div className="form-group">
                  <label htmlFor="endYear">Optional End Year:</label>
                  <input type="text" className="form-control" id="searchTerm" name="endYear" />
                </div>
                <div style={styles.buttonStyle}>
                  {/* submit button */}
                  <button type="submit" className="btn btn-default" id="runSearch" id="searchTerm" onClick={this.search} >
                    <i className="fa fa-list-alt glyphicon glyphicon-search"></i> Search
                  </button>

                  {/* clear results button */}
                  <button type="button" className="btn btn-default" id="clearAll">
                    <i className="fa fa-trash glyphicon glyphicon-trash"></i> Clear Results
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const styles= {
    buttonStyle: {
      display: "flex",
      justifyContent: "center"
    }
};


module.exports = Search;
