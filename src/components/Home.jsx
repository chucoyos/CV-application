import Button from './Button'
import DescriptionCard from './DescriptionCard'
function Home() {
	return (
		<div className='cardContainer'>
			<div className='header'>
				<h1>Create your professional Resume with CV project</h1>
				<p className='subtitle'>And download it in minutes</p>
				<Button
					text='Create Resume'
					path='/general-details'
				/>
			</div>
			<DescriptionCard logo='🍎️' />
			<DescriptionCard logo='🍄️' />
			<DescriptionCard logo='🍓️' />
		</div>
	)
}
export default Home
