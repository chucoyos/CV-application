import { Link } from 'react-router-dom'
function Slider() {
	function closeSlider() {
		document.querySelector('.slider').style.width = '0'
	}
	return (
		<div className='slider'>
			<button
				className='closeSlider'
				onClick={closeSlider}
			>
				✗
			</button>
			<div className='sliderMenu'>
				<Link
					to='/'
					onClick={closeSlider}
				>
					CVproject
				</Link>
				<Link
					to='/general-details'
					onClick={closeSlider}
				>
					Create resume
				</Link>
				<Link
					to='/experiences'
					onClick={closeSlider}
				>
					Experiences
				</Link>
				<Link
					to='/template'
					onClick={closeSlider}
				>
					Templates
				</Link>
			</div>
		</div>
	)
}
export default Slider
