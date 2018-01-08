import React, { Component } from 'react';
import SearchBox from './SearchBox';
import Card from './Card';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieID: 157336,
            data: null
        }
    }

    fetchApi() {
        const BASE_URL = "https://api.themoviedb.org/3/movie/";
        const FETCH_URL = BASE_URL + this.state.movieID + "?api_key=3fd75962391872d7b14b6f7937b4f46b&language=en-US"
        fetch(FETCH_URL, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            this.setState({
                data: json,
            });
        })
    }



    render(){
        if(this.state.data === null) {
            this.fetchApi();
        }
        //console.log(this.state.json);
        return(
            <div>
                <SearchBox />
                {
                    (this.state.data !== null) ? <Card data={this.state.data}/> : <div> Hello </div>
                }
            </div>
        )
    }
}

export default App;