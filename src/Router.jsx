import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './ErrorPage'
import App from './App'
import Home from './components/Home'
import GeneralDetails from './components/GeneralDetails'
import Experiences from './components/Experiences'
import Template from './components/Template'
import Oslo from './components/Oslo'
import Santiago from './components/Santiago'
import { useState } from 'react'

function Router() {
	const [generalInfo, setGeneralInfo] = useState({
		name: 'Tom',
		last: 'Cruise',
		email: 'mail.com',
		phone: '0123456789',
		address: '1234 Main St',
		zip: '12345',
		city: 'Los Angeles',
	})
	const [education, setEducation] = useState([
		{
			degree: 'Bachelor of Science',
			city: 'Los Angeles',
			school: 'University of California',
			startDate: '10/2010',
			endDate: '05/2014',
			description: 'Computer Science',
			id: 1,
		},
		{
			degree: 'Bachelor of Science',
			city: 'Los Angeles',
			school: 'University of California',
			startDate: '10/2010',
			endDate: '05/2014',
			description: 'Computer Science',
			id: 2,
		},
	])
	const [workExperience, setWorkExperience] = useState([
		{
			jobTitle: 'Software Engineer',
			companyCity: 'Los Angeles',
			company: 'Google',
			workStartDate: '10/2010',
			workEndDate: '05/2014',
			workDescription: 'Computer Science',
		},
		{
			jobTitle: 'Software Engineer',
			companyCity: 'Los Angeles',
			company: 'Google',
			workStartDate: '10/2010',
			workEndDate: '05/2014',
			workDescription: 'Computer Science',
		},
	])
	const [interests, setInterests] = useState([
		{ interest: 'Soccer', id: 1 },
		{ interest: 'Basketball', id: 2 },
	])
	const [interest, setInterest] = useState('')
	const [resumeObjective, setResumeObjective] = useState({
		objective: 'To obtain a position as a software engineer',
	})
	const [skills, setSkills] = useState([
		{ skill: 'React', level: 'expert', id: 1 },
		{ skill: 'JavaScript', level: 'beginner', id: 2 },
	])
	const [languages, setLanguages] = useState([
		{ language: 'English', level: 'expert', id: 1 },
		{ language: 'Spanish', level: 'beginner', id: 2 },
	])
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
							resumeObjective={resumeObjective}
							setResumeObjective={setResumeObjective}
							skills={skills}
							setSkills={setSkills}
							languages={languages}
							setLanguages={setLanguages}
						/>
					),
				},
				{
					path: '/template',
					element: (
						<Template
							generalInfo={generalInfo}
							education={education}
							workExperience={workExperience}
							interests={interests}
							resumeObjective={resumeObjective}
							skills={skills}
							languages={languages}
						/>
					),
				},
				{
					path: '/oslo',
					element: (
						<Oslo
							generalInfo={generalInfo}
							education={education}
							workExperience={workExperience}
							interests={interests}
							resumeObjective={resumeObjective}
							skills={skills}
							languages={languages}
						/>
					),
				},
				{
					path: '/santiago',
					element: (
						<Santiago
							generalInfo={generalInfo}
							education={education}
							workExperience={workExperience}
							interests={interests}
							resumeObjective={resumeObjective}
							skills={skills}
							languages={languages}
						/>
					),
				},
				{
					path: '*',
					element: <ErrorPage />,
				},
			],
		},
	])
	return <RouterProvider router={router} />
}
export default Router
