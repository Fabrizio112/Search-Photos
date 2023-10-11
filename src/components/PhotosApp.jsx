import { useEffect, useState } from "react";

import SearchBar from "./SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { client } from "../helpers/constants";
import { AppPhotosContainer, ButtonCategory, ButtonMorePhotos, ContainerPhotos, FavoritePhotosCategory, Photo, PrincipalTitle, TitleResults } from "../assets/StyledComponents/Components";
import { doANewSearch, resultsSearch } from "../store/searchSlice";

function PhotosApp() {
    const dispatch = useDispatch()
    const search = useSelector(state => state.search)
    const [searchBar, setSearchBar] = useState("")
    const [query, setQuery] = useState("Egg")
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)
        client.photos.search({ query, per_page: 30, page: page })
            .then(photos => {
                dispatch(resultsSearch(photos.photos))
                setLoading(false)
            });
    }, [page])
    const handleSearchBar = (e) => {
        setSearchBar(e.target.value)
    }
    const handleQuery = () => {
        setQuery(searchBar)
    }
    const handleChangeQuery = (e) => {
        setQuery(e.target.innerText)
    }
    useEffect(() => {
        if (query != "Egg") {
            setLoading(true)
            setPage(1)
            client.photos.search({ query, per_page: 30, page: page }).then(photos => {
                dispatch(doANewSearch(photos.photos))
                setLoading(false)
            });
        }
    }, [query])

    return (
        <AppPhotosContainer >
            <PrincipalTitle>Photos App </PrincipalTitle>
            <SearchBar handleSearchBar={handleSearchBar} searchBar={searchBar} handleQuery={handleQuery} />
            <FavoritePhotosCategory>
                <ButtonCategory onClick={handleChangeQuery}>Food</ButtonCategory>
                <ButtonCategory onClick={handleChangeQuery}>Technology</ButtonCategory>
                <ButtonCategory onClick={handleChangeQuery}>Clothes</ButtonCategory>
                <ButtonCategory onClick={handleChangeQuery}>Social Media</ButtonCategory>
            </FavoritePhotosCategory>
            <TitleResults>Results for {query} :</TitleResults>
            <ContainerPhotos>
                {search.length > 0 && search.map(photo => <Photo key={photo.id} src={photo.src.medium} alt={photo.alt} />)}
                {loading && <h2>Cargando ...</h2>}
            </ContainerPhotos>
            <ButtonMorePhotos onClick={() => setPage(page + 1)}>View More</ButtonMorePhotos>
        </AppPhotosContainer>);
}

export default PhotosApp;