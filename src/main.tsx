import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import FilmProvider from './context/FilmProvider.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<FilmProvider>
				<App />
			</FilmProvider>
		</BrowserRouter>
	</React.StrictMode>
)
