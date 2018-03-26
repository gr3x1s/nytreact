import React from "react";

class SavedArticles extends React.Component {
  render() {
    return(
      <div className="row">
        <div className="col-sm-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">
                <i className="fa fa-list-alt glyphicon glyphicon-heart"></i> Saved Articles
              </h3>
            </div>
            <div className="panel-body">
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = SavedArticles;
