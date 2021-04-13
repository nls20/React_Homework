import Film from './Film';

const FilmList = ({films}) => {

    const filmNodes = films.map((film) => {
        return <Film author={film.name} key={film.id}>{film.url}</Film>
    })

    return (
        <>
        {filmNodes}
        <button url="https://www.imdb.com/calendar/?region=gb">View Upcoming Releases</button>
        </>
    )
}

export default FilmList;