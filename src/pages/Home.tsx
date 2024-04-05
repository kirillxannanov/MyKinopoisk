import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import Premier from '../components/Premier/Premier'
import Top250Movies from '../components/Top250Movies/Top250Movies'
import Top250Serials from '../components/Top250Serials/Top250Serials'
import TopPopularAll from '../components/TopPopularAll/TopPopularAll'
import TopPopularMovies from '../components/TopPopularMovies/TopPopularMovies'

const Home: FC = () => {
	return (
		<Routes>
			{/* <Route path='/' element={<Dashboard />}>
				<Route path='messages' element={<DashboardMessages />} />
				<Route path='tasks' element={<DashboardTasks />} />
			</Route> */}

			<Route path='/' element={<Premier />} />
			<Route path='TopPopularAll' element={<TopPopularAll />} />
			<Route path='TopPopularMovies' element={<TopPopularMovies />} />
			<Route path='Top250Movies' element={<Top250Movies />} />
			<Route path='Top250Serials' element={<Top250Serials />} />
		</Routes>
	)
}

export default Home
