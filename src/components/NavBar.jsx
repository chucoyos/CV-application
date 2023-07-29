import { Link } from 'react-router-dom'
import '../App.css'
import Button from './Button'
import { useLocation } from 'react-router-dom'
const NavBar = ({ path, text }) => {
	const location = useLocation()
	return (
		<nav className='Nav'>
			<ul className='nav-list'>
				<li className='nav-brand'>
					<Link to='/'>
						<span>cv</span>project
					</Link>
				</li>
				<li>
					<Link to='/general-details'>Create Resume</Link>
				</li>
				<li>
					<Link to='/experiences'>Experiences</Link>
				</li>
				<li>
					<Link to='./template'>Template</Link>
				</li>
				<li>Contact</li>
			</ul>
			{location.pathname === '/' && (
				<>
					<h1>Create your professional Resume with CV project</h1>
					<p className='subtitle'>
						Create your own professional resume and download it
					</p>
					<Button
						path='/general-details'
						text='Create your Resume'
					/>
				</>
			)}
			{location.pathname === '/general-details' && <h1>Personal details</h1>}
			{location.pathname === '/experiences' && (
				<>
					<h1>My experiences</h1>
				</>
			)}
			{location.pathname === '/template' && (
				<>
					<h1>Select template</h1>
				</>
			)}
		</nav>
	)
}

export default NavBar
