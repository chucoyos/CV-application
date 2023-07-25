import ExperienceCard from './ExperienceCard'
import { useState } from 'react'
import { v4 } from 'uuid'

const Experiences = (props) => {
	const toggleForm = (id) => {
		const formContainer = document.getElementById(id)
		const toggleStyle =
			formContainer.style.display === 'block' ? 'none' : 'block'
		formContainer.style.display = toggleStyle
	}
	// Education
	const [degree, setDegree] = useState('')
	const [city, setCity] = useState('')
	const [school, setSchool] = useState('')
	const [startDate, setStartDate] = useState('')
	const [endDate, setEndDate] = useState('')
	const [description, setDescription] = useState('')
	const handleDegree = (e) => {
		setDegree(e.target.value)
	}
	const handleCity = (e) => {
		setCity(e.target.value)
	}
	const handleSchool = (e) => {
		setSchool(e.target.value)
	}
	const handleStartDate = (e) => {
		setStartDate(e.target.value)
	}
	const handleEndDate = (e) => {
		setEndDate(e.target.value)
	}
	const handleDescription = (e) => {
		setDescription(e.target.value)
	}
	const onEducationSubmit = (e) => {
		e.preventDefault()
		props.setEducation([
			...props.education,
			{
				degree: degree,
				city: city,
				school: school,
				startDate: startDate,
				endDate: endDate,
				description: description,
				id: v4(),
			},
		])
		setDegree('')
		setCity('')
		setSchool('')
		setStartDate('')
		setEndDate('')
		setDescription('')
		toggleForm('educationForm')
	}
	const onEducationDelete = (id) => {
		props.setEducation(props.education.filter((edu) => edu.id !== id))
	}
	const onEducationEdit = (id) => {
		const education = props.education.find((edu) => edu.id === id)
		setDegree(education.degree)
		setCity(education.city)
		setSchool(education.school)
		setStartDate(education.startDate)
		setEndDate(education.endDate)
		setDescription(education.description)
		onEducationDelete(id)
	}

	// Interests
	const handleInterest = (e) => {
		props.setInterest(e.target.value)
	}
	const onInterestSubmit = (e) => {
		e.preventDefault()
		props.setInterests([
			...props.interests,
			{ interest: props.interest, id: v4() },
		])
		props.setInterest('')
		toggleForm('interestForm')
	}
	const onInterestDelete = (id) => {
		props.setInterests(props.interests.filter((interest) => interest.id !== id))
	}
	const onInterestEdit = (id) => {
		const interest = props.interests.find((interest) => interest.id === id)
		props.setInterest(interest.interest)
		onInterestDelete(id)
	}

	const educationList = props.education.map((edu) => (
		<li key={edu.id}>
			<hr />
			<div className='inputDuo'>
				<div className='inputGroup'>
					<h3>{edu.degree}</h3>
					<p>
						{edu.startDate} / {edu.endDate}
					</p>
				</div>
				<div className='editList'>
					<button
						onClick={() => {
							onEducationDelete(edu.id)
						}}
					>
						🗑️
					</button>
					<button
						onClick={() => {
							onEducationEdit(edu.id)
							toggleForm('educationForm')
						}}
					>
						✏️
					</button>
				</div>
			</div>
		</li>
	))

	const interestsList = props.interests.map((interest) => (
		<li key={interest.id}>
			<hr />
			<div className='inputDuo'>
				<div className='inputGroup'>
					<h3>{interest.interest}</h3>
				</div>
				<div className='editList'>
					<button
						onClick={() => {
							onInterestDelete(interest.id)
						}}
					>
						🗑️
					</button>
					<button
						onClick={() => {
							onInterestEdit(interest.id)
							toggleForm('interestForm')
						}}
					>
						✏️
					</button>
				</div>
			</div>
		</li>
	))

	// const workExperienceList = props.workExperience.map((work) => (
	// 	<li key={work.id}>
	// 		<hr />
	// 		<div className={styles.inputDuo}>
	// 			<div className={styles.inputGroup}>
	// 				<h3>{work.jobTitle}</h3>
	// 				<p>
	// 					{work.workStartDate} / {work.workEndDate}
	// 				</p>
	// 			</div>
	// 			<div className={styles.editList}>
	// 				<button
	// 					onClick={() => {
	// 						props.onWorkExperienceDelete(work.id)
	// 					}}
	// 				>
	// 					🗑️
	// 				</button>
	// 				<button
	// 					onClick={() => {
	// 						props.onWorkExperienceEdit(work.id)
	// 						toggleForm('workExperienceForm')
	// 					}}
	// 				>
	// 					✏️
	// 				</button>
	// 			</div>
	// 		</div>
	// 	</li>
	// ))

	const educationForm = (
		<form onSubmit={onEducationSubmit}>
			<div className='inputDuo'>
				<div className='inputGroup'>
					<label>Degree</label>
					<input
						type='text'
						name='degree'
						placeholder='e.g. Bachelor of Science'
						value={degree}
						onChange={handleDegree}
						required
					/>
				</div>
				<div className='inputGroup'>
					<label>City/Town</label>
					<input
						type='text'
						placeholder='e.g. San Francisco'
						value={city}
						onChange={handleCity}
						required
					/>
				</div>
			</div>
			<div className='inputGroup'>
				<label>School</label>
				<input
					type='text'
					placeholder='e.g. New York University'
					value={school}
					onChange={handleSchool}
					required
				/>
			</div>
			<div className='inputDuo'>
				<div className='inputGroup'>
					<label>Start Date</label>
					<input
						type='date'
						value={startDate}
						onChange={handleStartDate}
						required
					/>
				</div>
				<div className='inputGroup'>
					<label>End Date</label>
					<input
						type='date'
						value={endDate}
						onChange={handleEndDate}
						required
					/>
				</div>
			</div>
			<div className='inputGroup'>
				<label>Description</label>
				<textarea
					value={description}
					onChange={handleDescription}
				/>
			</div>
			<div className='btnGroup'>
				<button
					className='first'
					type='button'
					onClick={() => {
						setDegree('')
						setCity('')
						setSchool('')
						setStartDate('')
						setEndDate('')
						setDescription('')
						toggleForm('educationForm')
					}}
				>
					🗑️ Delete
				</button>
				<button type='submit'>💾️ Save</button>
			</div>
		</form>
	)

	const interestsForm = (
		<form onSubmit={onInterestSubmit}>
			<div className='inputGroup'>
				<label>Hobby</label>
				<input
					type='text'
					placeholder='e.g. Hiking'
					value={props.interest}
					onChange={handleInterest}
					required
				/>
			</div>

			<div className='btnGroup'>
				<button
					className='first'
					type='button'
					onClick={() => {
						props.setInterest('')
						toggleForm('interestForm')
					}}
				>
					🗑️ Delete
				</button>
				<button type='submit'>💾️ Save</button>
			</div>
		</form>
	)

	// const workExperienceForm = (
	// 	<form onSubmit={props.onWorkExperienceSubmit}>
	// 		<div className={styles.inputDuo}>
	// 			<div className={styles.inputGroup}>
	// 				<label>Job Title</label>
	// 				<input
	// 					type='text'
	// 					name='jobTitle'
	// 					placeholder='e.g. software engineer'
	// 					value={props.jobTitle}
	// 					onChange={props.handleJobTitle}
	// 					required
	// 				/>
	// 			</div>
	// 			<div className={styles.inputGroup}>
	// 				<label>City/Town</label>
	// 				<input
	// 					type='text'
	// 					placeholder='e.g. San Francisco'
	// 					value={props.companyCity}
	// 					onChange={props.handleCompanyCity}
	// 					required
	// 				/>
	// 			</div>
	// 		</div>
	// 		<div className={styles.inputGroup}>
	// 			<label>Employer</label>
	// 			<input
	// 				type='text'
	// 				placeholder='e.g. Google'
	// 				value={props.company}
	// 				onChange={props.handleCompany}
	// 				required
	// 			/>
	// 		</div>
	// 		<div className={styles.inputDuo}>
	// 			<div className={styles.inputGroup}>
	// 				<label>Start Date</label>
	// 				<input
	// 					type='date'
	// 					value={props.workStartDate}
	// 					onChange={props.handleWorkStartDate}
	// 					required
	// 				/>
	// 			</div>
	// 			<div className={styles.inputGroup}>
	// 				<label>End Date</label>
	// 				<input
	// 					type='date'
	// 					value={props.workEndDate}
	// 					onChange={props.handleWorkEndDate}
	// 					required
	// 				/>
	// 			</div>
	// 		</div>
	// 		<div className={styles.inputGroup}>
	// 			<label>Description</label>
	// 			<textarea
	// 				value={props.workDescription}
	// 				onChange={props.handleWorkDescription}
	// 			/>
	// 		</div>
	// 		<div className={styles.btnGroup}>
	// 			<button
	// 				className={styles.first}
	// 				type='button'
	// 				onClick={() => {
	// 					props.setJobTitle('')
	// 					props.setCompanyCity('')
	// 					props.setCompany('')
	// 					props.setWorkStartDate('')
	// 					props.setWorkEndDate('')
	// 					props.setWorkDescription('')
	// 					toggleForm('workExperienceForm')
	// 				}}
	// 			>
	// 				🗑️ Delete
	// 			</button>
	// 			<button type='submit'>💾️ Save</button>
	// 		</div>
	// 	</form>
	// )

	return (
		<div className='App'>
			{/* Education card */}
			<ExperienceCard
				cardTitle='Education and Qualifications'
				education={props.education}
				setEducation={props.setEducation}
				degree={props.degree}
				setDegree={props.setDegree}
				city={props.city}
				setCity={props.setCity}
				school={props.school}
				setSchool={props.setSchool}
				startDate={props.startDate}
				setStartDate={props.setStartDate}
				endDate={props.endDate}
				setEndDate={props.setEndDate}
				description={props.description}
				setDescription={props.setDescription}
				list={educationList}
				experienceName='education'
				cardBody='educationCardBody'
				divId='educationCard'
				formId='educationForm'
				form={educationForm}
				count={props.education.length}
			></ExperienceCard>

			{/* Work experience Card */}
			{/* <ExperienceCard
				cardTitle='Work Experience'
				experienceName='work experience'
				workExperience={props.workExperience}
				jobTitle={props.jobTitle}
				companyCity={props.companyCity}
				company={props.company}
				workStartDate={props.workStartDate}
				workEndDate={props.workEndDate}
				workDescription={props.workDescription}
				divId='workExperienceCard'
				formId='workExperienceForm'
				list={workExperienceList}
				form={workExperienceForm}
			></ExperienceCard> */}
			{/* ==========Interests Card ============ */}
			<ExperienceCard
				cardTitle='Interests'
				interests={props.interests}
				setInterests={props.setInterests}
				interest={props.interest}
				setInterest={props.setInterest}
				list={interestsList}
				divId='interestsCard'
				experienceName='Hobby'
				formId='interestForm'
				form={interestsForm}
				count={props.interests.length}
			></ExperienceCard>
		</div>
	)
}

export default Experiences
