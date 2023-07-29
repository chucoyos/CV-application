import ExperienceCard from './ExperienceCard'
import { useState } from 'react'
import { v4 } from 'uuid'
import Button from './Button'

const Experiences = (props) => {
	const openForm = (id) => {
		const formContainer = document.getElementById(id)
		formContainer.style.display = 'block'
	}

	const closeForm = (id) => {
		const formContainer = document.getElementById(id)
		formContainer.style.display = 'none'
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
		closeForm('educationForm')
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
	// work experience
	const [jobTitle, setJobTitle] = useState('')
	const [companyCity, setCompanyCity] = useState('')
	const [company, setCompany] = useState('')
	const [workStartDate, setWorkStartDate] = useState('')
	const [workEndDate, setWorkEndDate] = useState('')
	const [workDescription, setWorkDescription] = useState('')
	const handleJobTitle = (e) => {
		setJobTitle(e.target.value)
	}
	const handleCompanyCity = (e) => {
		setCompanyCity(e.target.value)
	}
	const handleCompany = (e) => {
		setCompany(e.target.value)
	}
	const handleWorkStartDate = (e) => {
		setWorkStartDate(e.target.value)
	}
	const handleWorkEndDate = (e) => {
		setWorkEndDate(e.target.value)
	}
	const handleWorkDescription = (e) => {
		setWorkDescription(e.target.value)
	}
	const onWorkExperienceSubmit = (e) => {
		e.preventDefault()
		props.setWorkExperience([
			...props.workExperience,
			{
				jobTitle: jobTitle,
				companyCity: companyCity,
				company: company,
				workStartDate: workStartDate,
				workEndDate: workEndDate,
				workDescription: workDescription,
				id: v4(),
			},
		])
		setJobTitle('')
		setCompanyCity('')
		setCompany('')
		setWorkStartDate('')
		setWorkEndDate('')
		setWorkDescription('')
		closeForm('workExperienceForm')
	}
	const onWorkExperienceDelete = (id) => {
		props.setWorkExperience(
			props.workExperience.filter((work) => work.id !== id)
		)
	}
	const onWorkExperienceEdit = (id) => {
		const workExperience = props.workExperience.find((work) => work.id === id)
		setJobTitle(workExperience.jobTitle)
		setCompanyCity(workExperience.companyCity)
		setCompany(workExperience.company)
		setWorkStartDate(workExperience.workStartDate)
		setWorkEndDate(workExperience.workEndDate)
		setWorkDescription(workExperience.workDescription)
		onWorkExperienceDelete(id)
		openForm('workExperienceForm')
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
		closeForm('interestForm')
	}
	const onInterestDelete = (id) => {
		props.setInterests(props.interests.filter((interest) => interest.id !== id))
	}
	const onInterestEdit = (id) => {
		const interest = props.interests.find((interest) => interest.id === id)
		props.setInterest(interest.interest)
		onInterestDelete(id)
		openForm('interestForm')
	}
	// resume objective
	const [objective, setObjective] = useState('')
	const handleResumeObjective = (e) => {
		setObjective(e.target.value)
	}
	const onResumeObjectiveSubmit = (e) => {
		e.preventDefault()
		props.setResumeObjective({ objective: objective })
	}
	// skills
	const [skill, setSkill] = useState('')
	const [level, setLevel] = useState('beginner')
	const handleSkill = (e) => {
		setSkill(e.target.value)
	}
	const handleLevel = (e) => {
		setLevel(e.target.value)
	}
	const onSkillSubmit = (e) => {
		e.preventDefault()
		props.setSkills([...props.skills, { skill: skill, level: level, id: v4() }])
		setSkill('')
		setLevel('beginner')
		closeForm('skillForm')
	}
	const onSkillDelete = (id) => {
		props.setSkills(props.skills.filter((skill) => skill.id !== id))
	}
	const onSkillEdit = (id) => {
		const skill = props.skills.find((skill) => skill.id === id)
		setSkill(skill.skill)
		setLevel(skill.level)
		onSkillDelete(id)
		openForm('skillForm')
	}
	// languages
	const [language, setLanguage] = useState('')
	const handleLanguage = (e) => {
		setLanguage(e.target.value)
	}
	const onLanguageSubmit = (e) => {
		e.preventDefault()
		props.setLanguages([
			...props.languages,
			{ language: language, level: level, id: v4() },
		])
		setLanguage('')
		setLevel('beginner')
		closeForm('languageForm')
	}
	const onLanguageDelete = (id) => {
		props.setLanguages(props.languages.filter((language) => language.id !== id))
	}
	const onLanguageEdit = (id) => {
		const language = props.languages.find((language) => language.id === id)
		setLanguage(language.language)
		setLevel(language.level)
		onLanguageDelete(id)
		openForm('languageForm')
	}

	const skillsList = props.skills.map((skill) => (
		<li key={skill.id}>
			<hr />
			<div className='inputDuo'>
				<div className='inputGroup'>
					<h3>{skill.skill}</h3>
					<p>{skill.level}</p>
				</div>
				<div className='editList'>
					<button
						onClick={() => {
							onSkillDelete(skill.id)
						}}
					>
						🗑️
					</button>
					<button
						onClick={() => {
							onSkillEdit(skill.id)
							openForm('skillForm')
						}}
					>
						✏️
					</button>
				</div>
			</div>
		</li>
	))
	const languagesList = props.languages.map((language) => (
		<li key={language.id}>
			<hr />
			<div className='inputDuo'>
				<div className='inputGroup'>
					<h3>{language.language}</h3>
					<p>{language.level}</p>
				</div>
				<div className='editList'>
					<button
						onClick={() => {
							onLanguageDelete(language.id)
						}}
					>
						🗑️
					</button>
					<button
						onClick={() => {
							onLanguageEdit(language.id)
							openForm('languageForm')
						}}
					>
						✏️
					</button>
				</div>
			</div>
		</li>
	))

	const languageForm = (
		<form onSubmit={onLanguageSubmit}>
			<div className='inputDuo'>
				<div className='inputGroup'>
					<label>Language</label>
					<input
						type='text'
						name='language'
						placeholder='e.g. English'
						value={language}
						onChange={handleLanguage}
						required
					/>
				</div>
				<div className='inputGroup'>
					<label>Level</label>
					<select
						name='level'
						value={level}
						onChange={handleLevel}
						required
					>
						<option value='beginner'>Beginner</option>
						<option value='intermediate'>Intermediate</option>
						<option value='expert'>Expert</option>
					</select>
				</div>
			</div>
			<div className='btnGroup'>
				<button
					className='first'
					type='button'
					onClick={() => {
						setLanguage('')
						setLevel('beginner')
						closeForm('languageForm')
					}}
				>
					🗑️ Delete
				</button>
				<button type='submit'>💾️ Save</button>
			</div>
		</form>
	)

	const resumeObjectiveForm = (
		<form onSubmit={onResumeObjectiveSubmit}>
			<div className='inputGroup'>
				<label>Resume Objective</label>
				<textarea
					value={objective}
					onChange={handleResumeObjective}
				/>
			</div>
		</form>
	)

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
							openForm('educationForm')
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
							openForm('interestForm')
						}}
					>
						✏️
					</button>
				</div>
			</div>
		</li>
	))

	const workExperienceList = props.workExperience.map((work) => (
		<li key={work.id}>
			<hr />
			<div className='inputDuo'>
				<div className='inputGroup'>
					<h3>{work.jobTitle}</h3>
					<p>
						{work.workStartDate} / {work.workEndDate}
					</p>
				</div>
				<div className='editList'>
					<button
						onClick={() => {
							onWorkExperienceDelete(work.id)
						}}
					>
						🗑️
					</button>
					<button
						onClick={() => {
							onWorkExperienceEdit(work.id)
							openForm('workExperienceForm')
						}}
					>
						✏️
					</button>
				</div>
			</div>
		</li>
	))

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
						closeForm('educationForm')
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
						closeForm('interestForm')
					}}
				>
					🗑️ Delete
				</button>
				<button type='submit'>💾️ Save</button>
			</div>
		</form>
	)

	const workExperienceForm = (
		<form onSubmit={onWorkExperienceSubmit}>
			<div className='inputDuo'>
				<div className='inputGroup'>
					<label>Job Title</label>
					<input
						type='text'
						name='jobTitle'
						placeholder='e.g. software engineer'
						value={jobTitle}
						onChange={handleJobTitle}
						required
					/>
				</div>
				<div className='inputGroup'>
					<label>City/Town</label>
					<input
						type='text'
						placeholder='e.g. San Francisco'
						value={companyCity}
						onChange={handleCompanyCity}
						required
					/>
				</div>
			</div>
			<div className='inputGroup'>
				<label>Employer</label>
				<input
					type='text'
					placeholder='e.g. Google'
					value={company}
					onChange={handleCompany}
					required
				/>
			</div>
			<div className='inputDuo'>
				<div className='inputGroup'>
					<label>Start Date</label>
					<input
						type='date'
						value={workStartDate}
						onChange={handleWorkStartDate}
						required
					/>
				</div>
				<div className='inputGroup'>
					<label>End Date</label>
					<input
						type='date'
						value={workEndDate}
						onChange={handleWorkEndDate}
						required
					/>
				</div>
			</div>
			<div className='inputGroup'>
				<label>Description</label>
				<textarea
					value={workDescription}
					onChange={handleWorkDescription}
				/>
			</div>
			<div className='btnGroup'>
				<button
					className='first'
					type='button'
					onClick={() => {
						setJobTitle('')
						setCompanyCity('')
						setCompany('')
						setWorkStartDate('')
						setWorkEndDate('')
						setWorkDescription('')
						closeForm('workExperienceForm')
					}}
				>
					🗑️ Delete
				</button>
				<button type='submit'>💾️ Save</button>
			</div>
		</form>
	)
	const skillsForm = (
		<form onSubmit={onSkillSubmit}>
			<div className='inputDuo'>
				<div className='inputGroup'>
					<label>Skill</label>
					<input
						type='text'
						name='skill'
						placeholder='e.g. React'
						value={skill}
						onChange={handleSkill}
						required
					/>
				</div>
				<div className='inputGroup'>
					<label>Level</label>
					<select
						name='level'
						value={level}
						onChange={handleLevel}
						required
					>
						<option value='beginner'>Beginner</option>
						<option value='intermediate'>Intermediate</option>
						<option value='expert'>Expert</option>
					</select>
				</div>
			</div>
			<div className='btnGroup'>
				<button
					className='first'
					type='button'
					onClick={() => {
						setSkill('')
						setLevel('beginner')
						closeForm('skillForm')
					}}
				>
					🗑️ Delete
				</button>
				<button type='submit'>💾️ Save</button>
			</div>
		</form>
	)

	return (
		<div className='App'>
			<div className='header'>
				<h1>My experiences</h1>
			</div>
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
				isArray={true}
			></ExperienceCard>
			{/* Resume objective */}
			<ExperienceCard
				cardTitle='Resume Objective'
				resumeObjective={props.resumeObjective}
				setResumeObjective={props.setResumeObjective}
				divId='resumeObjectiveCard'
				formId='resumeObjectiveForm'
				form={resumeObjectiveForm}
				count={props.resumeObjective.length}
				isArray={false}
			></ExperienceCard>

			{/* Work experience Card */}
			<ExperienceCard
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
				count={props.workExperience.length}
				isArray={true}
			></ExperienceCard>
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
				isArray={true}
			></ExperienceCard>
			{/* ==========Skills Card ============ */}
			<ExperienceCard
				cardTitle='Skills'
				skills={props.skills}
				setSkills={props.setSkills}
				skill={props.skill}
				setSkill={props.setSkill}
				level={props.level}
				setLevel={props.setLevel}
				list={skillsList}
				divId='skillsCard'
				experienceName='Skill'
				formId='skillForm'
				form={skillsForm}
				count={props.skills.length}
				isArray={true}
			></ExperienceCard>
			{/* ==========Languages Card ============ */}
			<ExperienceCard
				cardTitle='Languages'
				languages={props.languages}
				setLanguages={props.setLanguages}
				language={props.language}
				setLanguage={props.setLanguage}
				level={props.level}
				setLevel={props.setLevel}
				list={languagesList}
				divId='languagesCard'
				experienceName='Language'
				formId='languageForm'
				form={languageForm}
				count={props.languages.length}
				isArray={true}
			></ExperienceCard>

			<Button
				text='Next step ﹥'
				path='/template'
			/>
		</div>
	)
}

export default Experiences
