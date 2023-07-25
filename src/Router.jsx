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
	const [workExperience, setWorkExperience] = useState([
		{
			jobTitle: 'Web Developer',
			companyCity: 'San Francisco',
			company: 'Google',
			workStartDate: '2019-01-01',
			workEndDate: '2020-01-01',
			workDescription: 'I worked as a web developer',
			id: 1,
		},
	])
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
							workExperience={workExperience}
							setWorkExperience={setWorkExperience}
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
