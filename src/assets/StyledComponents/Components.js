import styled from "styled-components"

export const ContainerPhotos = styled.section`
    width:80%;
    min-height:60vh;
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
    grid-auto-rows :200px;
    gap:2rem;
    place-items:center;
    margin:2rem 0;
`
export const PrincipalTitle = styled.h1`
    padding: 2rem;
    font-size: 3rem;
    font-family: monospace;`


export const AppPhotosContainer = styled.section`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:100%;
min-height:100vh;

`
export const Photo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: none;
    border-radius:10px;`
export const SearchBarSection = styled.section`
    width: 70%;
    border: 1px solid;
    border-radius: 10px;
    display:flex;
    padding:0.2rem;`

export const InputSearch = styled.input`
width:90%;
height:100%;
border:none;
outline:none;
font-size:1.5rem;
padding:1rem;`

export const ContainerSearchIcon = styled.section`
    width:10%;
    max-height:4rem;
    border-left:1px solid black;
    display:flex;
    justify-content:center;
    align-items:center;
`

export const TitleResults = styled.h2`
margin: 2rem 0;
text-decoration: underline;
`
export const FavoritePhotosCategory = styled.section`
width:100%;
place-items:center;
display:flex;
justify-content:center;
align-items:center;
gap:4rem;
`
export const ButtonCategory = styled.button`
    min-width:70px;
    heigth:auto;
    font-size:1.5rem;
    background-color:white;
    border:1px solid black;
    color:black;
    margin:2rem 0;
    padding:0.8rem;
    border-radius:10px;
    cursor:pointer;
    &:hover{
        color:white;
        background-color:black;
        border:1px solid white;
    }
`
export const ButtonMorePhotos = styled(ButtonCategory)`
background-color:black;
border:1px solid white;
color:white;
`