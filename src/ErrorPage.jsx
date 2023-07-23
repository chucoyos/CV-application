import './App.css'
import { Link } from 'react-router-dom'
function ErrorPage() {
	return (
		<div className='container errorDiv'>
			<h1>Oops!</h1>
			<h2>Page not found</h2>
			<Link to='/'>Go back to home page</Link>
		</div>
	)
}
export default ErrorPage
