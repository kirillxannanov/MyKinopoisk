import { FC } from 'react'
import styles from './search.module.css'
const Search: FC = () => {
	return (
		<>
			<input
				className={styles.search}
				type='text'
				placeholder='movies serials'
			/>
		</>
	)
}

export default Search
