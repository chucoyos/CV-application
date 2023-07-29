import { Link } from 'react-router-dom'

function MovilNav() {
	const openSlider = () => {
		document.querySelector('.slider').style.width = '100%'
	}
	return (
		<>
			<div className='movilNav'>
				<Link to='/'>
					<p className='logy'>CVproject</p>
				</Link>
				<button onClick={openSlider}>𝄙</button>
			</div>
		</>
	)
}
export default MovilNav
