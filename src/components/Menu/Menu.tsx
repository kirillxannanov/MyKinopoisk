import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './menu.module.css'
const Menu: FC = () => {
	return (
		<div className={styles.menu}>
			<NavLink
				to='/'
				className={({ isActive }) => (isActive ? styles.active : '')}
			>
				<div>Premier</div>
			</NavLink>
			<NavLink
				to='TopPopularAll'
				className={({ isActive }) => (isActive ? styles.active : '')}
			>
				<div>Top Popular All</div>
			</NavLink>
			<NavLink
				to='TopPopularMovies'
				className={({ isActive }) => (isActive ? styles.active : '')}
			>
				<div>Top Popular Movies</div>
			</NavLink>
			<NavLink
				to='Top250Movies'
				className={({ isActive }) => (isActive ? styles.active : '')}
			>
				<div>Top 250 Movies</div>
			</NavLink>
			<NavLink
				to='Top250Serials'
				className={({ isActive }) => (isActive ? styles.active : '')}
			>
				<div>Top 250 Serials</div>
			</NavLink>
		</div>
	)
}

export default Menu
