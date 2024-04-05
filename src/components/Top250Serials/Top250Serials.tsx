import { FC, useContext } from 'react'
import { FilmContext } from '../../context/FilmProvider'
import styles from './top250Serials.module.css'
const Top250Serials: FC = () => {
	const { getTop250Serials, setGetTop250Serials } = useContext(FilmContext)
	return (
		<div className={styles.top250Serials}>
			{getTop250Serials.map((film) => (
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

export default Top250Serials
