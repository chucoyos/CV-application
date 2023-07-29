function MovilNav() {
	const openSlider = () => {
		document.querySelector('.slider').style.width = '100%'
	}
	return (
		<>
			<div className='movilNav'>
				<button onClick={openSlider}>𝄙</button>
			</div>
		</>
	)
}
export default MovilNav
