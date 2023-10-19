import { useEffect, useState } from "react";

import SearchBar from "./SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { AppPhotosContainer, ButtonCategory, ButtonMorePhotos, ContainerPhotos, FavoritePhotosCategory, Photo, PrincipalTitle, TitleResults } from "../assets/StyledComponents/Components";
import { doANewSearch, resultsSearch } from "../store/searchSlice";
import { getFotos } from "../helpers/peticionApi";

function PhotosApp() {
    const dispatch = useDispatch()
    const search = useSelector(state => state.search)
    const [searchBar, setSearchBar] = useState("")
    const [query, setQuery] = useState("")
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        if (query === "") return
        setLoading(true)
        async function realizarLaPeticionDeFotos() {
            let fotos = await getFotos(query, page)
            console.log(fotos)
            dispatch(resultsSearch(fotos.hits))
            setLoading(false)
        }
        realizarLaPeticionDeFotos()

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
        if (query === "") return
        setLoading(true)
        setPage(1)
        async function realizarLaPeticionDeFotos() {
            let fotos = await getFotos(query, page)
            console.log(fotos)
            dispatch(doANewSearch(fotos.hits))
            setLoading(false)
        }
        realizarLaPeticionDeFotos()

    }, [query])

    return (
        <>
            <AppPhotosContainer >
                <PrincipalTitle>Photos App </PrincipalTitle>
                <SearchBar handleSearchBar={handleSearchBar} searchBar={searchBar} handleQuery={handleQuery} />
                <FavoritePhotosCategory className="favorites-categories">
                    <ButtonCategory onClick={handleChangeQuery}>Food</ButtonCategory>
                    <ButtonCategory onClick={handleChangeQuery}>Technology</ButtonCategory>
                    <ButtonCategory onClick={handleChangeQuery}>Clothes</ButtonCategory>
                    <ButtonCategory onClick={handleChangeQuery}>Social Media</ButtonCategory>
                </FavoritePhotosCategory>
                <TitleResults>Results for {query} :</TitleResults>
                <ContainerPhotos>
                    {search.length > 0 && search.map(photo => <Photo key={photo.id} src={photo.webformatURL} alt={photo.tags} />)}
                    {loading && <h2>Cargando ...</h2>}
                </ContainerPhotos>
                {query != "" && <ButtonMorePhotos onClick={() => setPage(page + 1)}>View More</ButtonMorePhotos>}
            </AppPhotosContainer>
        </>);
}

export default PhotosApp;