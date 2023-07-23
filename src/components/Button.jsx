import { Link } from 'react-router-dom'
const Button = ({ path, text }) => {
	return (
		<Link
			to={path}
			className='main-button'
		>
			{text}
		</Link>
	)
}
export default Button
