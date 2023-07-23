import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import DecorationBar from './components/DecorationBar'

function App() {
	return (
		<>
			<div className='Container'>
				<NavBar />
				<DecorationBar />

				<Outlet />
				<Footer />
			</div>
		</>
	)
}

export default App
