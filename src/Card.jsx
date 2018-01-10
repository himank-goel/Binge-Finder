import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';

class Card extends Component {

    componentDidMount() {
        const data = this.props.data;
        let backdropIMG = 'https://image.tmdb.org/t/p/original' + data.backdrop_path;
        document.body.style.backgroundImage = 'url(' + backdropIMG + ')';
      }

    render(){
        const data = this.props.data;
        console.log(this.props.data);
        let movieTitle = data.original_title,
            tagline = data.tagline,
            summary = data.overview,
            genresList = data.genres,
            releaseDate = data.release_date,
            runtime = data.runtime,
            revenue = data.revenue,
            vote = data.vote_average,
            posterIMG = 'https://image.tmdb.org/t/p/w500' + data.poster_path,
            backdropIMG = 'https://image.tmdb.org/t/p/original' + data.backdrop_path;

        if (vote === 'undefined' || vote === 0) {
            vote = '-'
        } else {
            vote = vote + ' / 10'
        };
    
        if (revenue === 'undefined' || revenue === 0) {
                revenue = '-'
        } else {
                revenue = revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        };
    
        if(posterIMG == null){
            posterIMG = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g';
        };  
        return(
            <div className="col-xs-12 card-container nopadding">
                <div className="meta-data-container col-xs-12 col-md-8 push-md-4 col-lg-7 push-lg-5">
                    <h1>{movieTitle}</h1>
                    <span className="tagline">{tagline}</span>
                    <p>{summary}</p>
                    <div className="additional-details">
                        {/* <span className="genre-list">{genresList}</span> */}
                        <div className="row nopadding release-details">
                            <div className="col-xs-6"> Original Release: <span className="meta-data">{releaseDate}</span></div>
                            <div className="col-xs-6"> Running Time: <span className="meta-data">{runtime} mins</span> </div>
                            <div className="col-xs-6"> Box Office: <span className="meta-data">{revenue}</span></div>
                            <div className="col-xs-6"> Vote Average: <span className="meta-data">{vote}</span></div>
                        </div>
                    </div>
                </div>
                <div className="poster-container nopadding col-xs-12 col-md-4 pull-md-8 col-lg-5 pull-lg-7 ">
                    <img id="postertest" className='poster' src={posterIMG}/>
                </div>
            </div>
        )
    }

    componentDidUpdate() {
        const data = this.props.data;
        let backdropIMG = 'https://image.tmdb.org/t/p/original' + data.backdrop_path;
        document.body.style.backgroundImage = 'url(' + backdropIMG + ')';
    }
}

export default Card;