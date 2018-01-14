import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';

class SearchBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            movieId: 0,
        }
    }

    render(){
        return(
            <div className = "col-xs-12 search-container nopadding">
                <div className = "row">
                    <div className = "col-xs-12 col-sm-6 col-lg-5 title">
                        <h1 className = "heading">Binge Finder</h1>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-lg-7">
                        <form className="searchbox">
                            <input
                                ref="search-suggestion"
                                className="searchbox__input typeahead form-control"
                                onChange = {
                                    event => this.setState({
                                        movieId: event.target.value
                                    })
                                } 
                                onKeyPress = {
                                    event => {
                                        if(event.key === 'Enter') {
                                            this.props.action(this.state.movieId, event)
                                        }
                                    }
                                }
                                placeholder = "Search TV Show or Movie" 
                            />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBox;