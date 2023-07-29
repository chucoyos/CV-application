function MovilNav() {
	const openSlider = () => {
		document.querySelector('.slider').style.width = '100%'
	}
	return (
		<>
			<div className='movilNav'>
				<p className='logy'>CVproject</p>
				<button onClick={openSlider}>𝄙</button>
			</div>
		</>
	)
}
export default MovilNav
