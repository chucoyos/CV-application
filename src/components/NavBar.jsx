import { Link } from 'react-router-dom'
import '../App.css'
import Button from './Button'
const NavBar = ({ path, text }) => {
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

			{/* {location.pathname === '/cv-project/general' && (
				<>
					<h2 className='subtitle'>Personal Details</h2>
				</>
			)}

			{location.pathname === '/cv-project/experiences' && (
				<>
					<h2 className='subtitle'>My experiences</h2>
				</>
			)} */}
		</nav>
	)
}

export default NavBar
