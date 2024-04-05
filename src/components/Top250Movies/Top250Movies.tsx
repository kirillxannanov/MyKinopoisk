import { FC, useContext } from 'react'
import { FilmContext } from '../../context/FilmProvider'
import styles from './top250Movies.module.css'
const Top250Movies: FC = () => {
	const { getTop250Movies, setGetTop250Movies } = useContext(FilmContext)
	return (
		<div className={styles.top250Movies}>
			{getTop250Movies.map((film) => (
				<div key={film.kinopoiskId}>
					<img
						className={styles.poster}
						src={film.posterUrl}
						width={220}
						height={300}
						alt='film'
					/>
					<div className={styles.title}>{film.nameRu}</div>
				</div>
			))}
		</div>
	)
}

export default Top250Movies
