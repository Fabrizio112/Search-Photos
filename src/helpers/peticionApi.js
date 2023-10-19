import { API_KEY } from "./constants"

export async function getFotos(query, page) {
    try {
        let res = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${query}&per_page=30&page=${page}`)
        let data = await res.json()
        return data
    } catch (error) {
        console.error(error)
    }
}




