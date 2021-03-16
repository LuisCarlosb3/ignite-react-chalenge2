import { MovieProps } from "../Models/MovieModel";
import { MovieCard } from './MovieCard';
import { Header } from './Header'
interface ContentProps {
  movies: MovieProps[],
  selectedGenreTitle: string
}

export function Content(props: ContentProps) {
  const {movies, selectedGenreTitle} = props
  
  return (
    <div className="container">
    <Header genreTitle={selectedGenreTitle}/>

    <main>
      <div className="movies-list">
        {movies.map(movie => (
          <MovieCard title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        ))}
      </div>
    </main>
  </div>
  )
}