import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContainerSearchIcon, InputSearch, SearchBarSection } from "../assets/StyledComponents/Components";

function SearchBar({ handleSearchBar, searchBar, handleQuery }) {
    return (
        <SearchBarSection>
            <InputSearch type="text" value={searchBar} onChange={handleSearchBar} />
            <ContainerSearchIcon onClick={handleQuery} style={{ cursor: "pointer" }}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </ContainerSearchIcon>
        </SearchBarSection>);
}

export default SearchBar;