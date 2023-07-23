import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import DecorationBar from './components/DecorationBar'
import DescriptionCard from './components/DescriptionCard'

function App() {
	return (
		<>
			<div className='Container'>
				<NavBar />
				<DecorationBar />
				<div className='cardContainer'>
					<DescriptionCard logo='🍎️' />
					<DescriptionCard logo='🍄️' />
					<DescriptionCard logo='🍓️' />
				</div>
				<Outlet />
				<Footer />
			</div>
		</>
	)
}

export default App
