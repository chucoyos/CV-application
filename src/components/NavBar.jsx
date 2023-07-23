import { Link } from 'react-router-dom'
import '../App.css'
const NavBar = ({ path, text }) => {
	return (
		<nav className='Nav'>
			<ul className='nav-list'>
				<li className='nav-brand'>
					<Link to='/cv-project'>
						<span>cv</span>project
					</Link>
				</li>
				<li>
					<Link to='/cv-project/general'>Create Resume</Link>
				</li>
				<li>Resume Templates</li>
				<li>Blog</li>
				<li>Contact</li>
			</ul>
			<>
				<h1>Create your professional Resume with CV project</h1>
				<p className='subtitle'>
					Create your own professional resume and download it
				</p>
				{/* <Button
						path='/cv-project/general'
						text='Create your Resume'
					/> */}
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
