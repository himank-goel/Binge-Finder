import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieID: 157336,
            json: null
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
            this.setState({json});
        })
    }

    render(){
        //this.fetchApi();
        //console.log(this.state.json);
        return(
            <div>
                hello
            {/* <SearchBox fetchMovieID={this.fetchMovieID.bind(this)}/>
            <Card data={this.state}/> */}
            </div>
        )
    }
}

export default App;