import React from "react";

import "./SearchEngine.css";

export default function SearchEngine() {
  return (
    <div className="SearchEngine">
      <div className="container">
        <div className="weather-app">
          <form className="mb-3">
            <div className="row">
              <div className="col-6">
                <input
                  type="search"
                  placeholder="Enter a city"
                  className="form-control"
                  autoComplete="off"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Current Location"
                  className="btn btn-success current-location"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
