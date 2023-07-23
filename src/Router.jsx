import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './ErrorPage'
import App from './App'
import Home from './components/Home'

function Router() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <App />,
			errorElement: <ErrorPage />,
			children: [
				{
					path: '/home',
					element: <Home />,
				},
			],
		},
	])
	return <RouterProvider router={router} />
}
export default Router
