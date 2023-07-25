import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './ErrorPage'
import App from './App'
import Home from './components/Home'
import GeneralDetails from './components/GeneralDetails'
import Experiences from './components/Experiences'
import { useState } from 'react'

function Router() {
	const [generalInfo, setGeneralInfo] = useState({})
	const [education, setEducation] = useState([])
	const [interests, setInterests] = useState([])
	const [interest, setInterest] = useState('')
	const router = createBrowserRouter([
		{
			path: '/',
			element: <App />,
			errorElement: <ErrorPage />,
			children: [
				{
					path: '/',
					element: <Home />,
				},
				{
					path: '/general-details',
					element: (
						<GeneralDetails
							generalInfo={generalInfo}
							setGeneralInfo={setGeneralInfo}
						/>
					),
				},
				{
					path: '/experiences',
					element: (
						<Experiences
							education={education}
							setEducation={setEducation}
							interests={interests}
							setInterests={setInterests}
							interest={interest}
							setInterest={setInterest}
						/>
					),
				},
			],
		},
	])
	return <RouterProvider router={router} />
}
export default Router
