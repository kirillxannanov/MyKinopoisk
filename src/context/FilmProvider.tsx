import axios from 'axios'
import { FC, ReactNode, createContext, useEffect, useState } from 'react'
interface IFilmProvider {
	children: ReactNode
}
export const FilmContext = createContext({})

const FilmProvider: FC<IFilmProvider> = ({ children }) => {
	const API_KEY = 'f9949dd3-8bc0-4eed-a3de-5fa207b1cff4'
	const [getPremier, setGetPremier] = useState([])
	const [getTopPopularAll, setGetTopPopularAll] = useState([])
	const [getTopPopularMovies, setGetTopPopularMovies] = useState([])
	const [getTop250Movies, setGetTop250Movies] = useState([])
	const [getTop250Serials, setGetTop250Serials] = useState([])

	useEffect(() => {
		const getFilm = async () => {
			const premier = await axios.get(
				'https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2024&month=MARCH',
				{
					headers: {
						'X-API-KEY': API_KEY,
						'Content-Type': 'application/json'
					}
				}
			)
			const topPopularAll = await axios.get(
				'https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_ALL&page=1',
				{
					headers: {
						'X-API-KEY': API_KEY,
						'Content-Type': 'application/json'
					}
				}
			)
			const topPopularMovies = await axios.get(
				'https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_MOVIES&page=1',
				{
					headers: {
						'X-API-KEY': API_KEY,
						'Content-Type': 'application/json'
					}
				}
			)
			const top250Movies = await axios.get(
				'https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_MOVIES&page=1',
				{
					headers: {
						'X-API-KEY': API_KEY,
						'Content-Type': 'application/json'
					}
				}
			)
			const top250Serials = await axios.get(
				'https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_TV_SHOWS&page=1',
				{
					headers: {
						'X-API-KEY': API_KEY,
						'Content-Type': 'application/json'
					}
				}
			)
			setGetPremier(premier.data.items)
			setGetTopPopularAll(topPopularAll.data.items)
			setGetTopPopularMovies(topPopularMovies.data.items)
			setGetTop250Movies(top250Movies.data.items)
			setGetTop250Serials(top250Serials.data.items)
		}
		getFilm()
	}, [])
	return (
		<FilmContext.Provider
			value={{
				getPremier,
				setGetPremier,
				getTopPopularAll,
				setGetTopPopularAll,
				getTopPopularMovies,
				setGetTopPopularMovies,
				getTop250Movies,
				setGetTop250Movies,
				getTop250Serials,
				setGetTop250Serials
			}}
		>
			{children}
		</FilmContext.Provider>
	)
}

export default FilmProvider
