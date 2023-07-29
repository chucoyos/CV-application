import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import DecorationBar from './components/DecorationBar'
import MovilNav from './components/MovilNav'
import Slider from './components/Slider'

function App() {
	return (
		<>
			<div className='Container'>
				<MovilNav />
				<Slider />
				<NavBar />
				<DecorationBar />

				<Outlet />
			</div>
		</>
	)
}

export default App
