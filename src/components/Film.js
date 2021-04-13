const Film = ({author, children}) => {

    return (
        <div class="films">
            <a href={children}>
                <li>{author}</li>
            </a>
        </div>
    )
}

export default Film;