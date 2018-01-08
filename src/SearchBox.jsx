import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SearchBox extends Component {
    render(){
        return(
            <div className = "col-xs-12">
                <div className = "row">
                    <div className = "col-xs-12 col-sm-6 col-lg-5">
                        <h1>Binge Finder</h1>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-lg-7">
                        <form>
                            <input placeholder = "Search TV Show or Movie" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBox;