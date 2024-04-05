import { FC, useContext } from 'react'
import { FilmContext } from '../../context/FilmProvider'
import styles from './premier.module.css'
const Premier: FC = () => {
	const { getPremier, setGetPremier } = useContext(FilmContext)
	return (
		<div className={styles.premier}>
			{getPremier.map((film) => (
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

export default Premier
