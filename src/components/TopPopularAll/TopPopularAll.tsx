import { FC, useContext } from 'react'
import { FilmContext } from '../../context/FilmProvider'
import styles from './topPopularAll.module.css'

const TopPopularAll: FC = () => {
	const { getTopPopularAll, setGetTopPopularAll } = useContext(FilmContext)
	return (
		<div className={styles.topPopularAll}>
			{getTopPopularAll.map((film) => (
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

export default TopPopularAll
