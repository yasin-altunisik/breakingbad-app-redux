import { useEffect } from "react"

import Masonry from 'react-masonry-css'
import "./styles.css"

import { useSelector, useDispatch } from "react-redux"
import { fetchCharacters } from "../../redux/charactersSlice"
import Loading from "../../components/Loading"
import Error from "../../components/Error"

function Home() {
    const characters = useSelector(state => state.characters.items)
    const isLoading = useSelector(state => state.characters.isLoading)
    const nextPage = useSelector(state => state.characters.page)
    const error = useSelector(state => state.characters.error)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCharacters())
        console.log("useEffect içi")
    }, [dispatch])

    if (isLoading) {
        return <Loading />
    }

    if (error) {
        return <Error message={error} />
    }

    console.log("home component")

    return (
        <div>
            <Masonry
                breakpointCols={4}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {
                    characters.map((character) => (
                        <div key={character.char_id}>
                            <img alt={character.name} src={character.img} className="character" />
                            <div className="char_name">{character.name}</div>
                        </div>
                    ))
                }
            </Masonry>
            <div style={{padding: "20px 0 40px 0", textAlign: "center"}}>
                <button onClick={() => {dispatch(fetchCharacters(nextPage))}} >Load More ({nextPage})</button>
            </div>
        </div>
    )
}

export default Home