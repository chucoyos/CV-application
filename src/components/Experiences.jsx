import ExperienceCard from './ExperienceCard'

const Experiences = (props) => {
	const toggleForm = (id) => {
		const formContainer = document.getElementById(id)
		const toggleStyle =
			formContainer.style.display === 'block' ? 'none' : 'block'
		formContainer.style.display = toggleStyle
	}

	const handleInterest = (e) => {
		props.setInterest(e.target.value)
	}
	const onInterestSubmit = (e) => {
		e.preventDefault()
		props.setInterests([
			...props.interests,
			{ interest: props.interest, id: Math.random() * 1000 },
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

	// const educationList = props.education.map((edu) => (
	// 	<li key={edu.id}>
	// 		<hr />
	// 		<div className={styles.inputDuo}>
	// 			<div className={styles.inputGroup}>
	// 				<h3>{edu.degree}</h3>
	// 				<p>
	// 					{edu.startDate} / {edu.endDate}
	// 				</p>
	// 			</div>
	// 			<div className={styles.editList}>
	// 				<button
	// 					onClick={() => {
	// 						props.onEducationDelete(edu.id)
	// 					}}
	// 				>
	// 					🗑️
	// 				</button>
	// 				<button
	// 					onClick={() => {
	// 						props.onEducationEdit(edu.id)
	// 						toggleForm('educationForm')
	// 					}}
	// 				>
	// 					✏️
	// 				</button>
	// 			</div>
	// 		</div>
	// 	</li>
	// ))

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

	// const educationForm = (
	// 	<form onSubmit={props.onEducationSubmit}>
	// 		<div className={styles.inputDuo}>
	// 			<div className={styles.inputGroup}>
	// 				<label>Degree</label>
	// 				<input
	// 					type='text'
	// 					name='degree'
	// 					placeholder='e.g. Bachelor of Science'
	// 					value={props.degree}
	// 					onChange={props.handleDegree}
	// 					required
	// 				/>
	// 			</div>
	// 			<div className={styles.inputGroup}>
	// 				<label>City/Town</label>
	// 				<input
	// 					type='text'
	// 					placeholder='e.g. San Francisco'
	// 					value={props.city}
	// 					onChange={props.handleCity}
	// 					required
	// 				/>
	// 			</div>
	// 		</div>
	// 		<div className={styles.inputGroup}>
	// 			<label>School</label>
	// 			<input
	// 				type='text'
	// 				placeholder='e.g. New York University'
	// 				value={props.school}
	// 				onChange={props.handleSchool}
	// 				required
	// 			/>
	// 		</div>
	// 		<div className={styles.inputDuo}>
	// 			<div className={styles.inputGroup}>
	// 				<label>Start Date</label>
	// 				<input
	// 					type='date'
	// 					value={props.startDate}
	// 					onChange={props.handleStartDate}
	// 					required
	// 				/>
	// 			</div>
	// 			<div className={styles.inputGroup}>
	// 				<label>End Date</label>
	// 				<input
	// 					type='date'
	// 					value={props.endDate}
	// 					onChange={props.handleEndDate}
	// 					required
	// 				/>
	// 			</div>
	// 		</div>
	// 		<div className={styles.inputGroup}>
	// 			<label>Description</label>
	// 			<textarea
	// 				value={props.description}
	// 				onChange={props.handleDescription}
	// 			/>
	// 		</div>
	// 		<div className={styles.btnGroup}>
	// 			<button
	// 				className={styles.first}
	// 				type='button'
	// 				onClick={() => {
	// 					props.setDegree('')
	// 					props.setCity('')
	// 					props.setSchool('')
	// 					props.setStartDate('')
	// 					props.setEndDate('')
	// 					props.setDescription('')
	// 					toggleForm('educationForm')
	// 				}}
	// 			>
	// 				🗑️ Delete
	// 			</button>
	// 			<button type='submit'>💾️ Save</button>
	// 		</div>
	// 	</form>
	// )

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
			{/* <ExperienceCard
				cardTitle='Education and Qualifications'
				education={props.education}
				onEducationSubmit={props.onEducationSubmit}
				onEducationDelete={props.onEducationDelete}
				degree={props.degree}
				setDegree={props.setDegree}
				handleDegree={props.handleDegree}
				city={props.city}
				setCity={props.setCity}
				handleCity={props.handleCity}
				school={props.school}
				setSchool={props.setSchool}
				handleSchool={props.handleSchool}
				startDate={props.startDate}
				setStartDate={props.setStartDate}
				handleStartDate={props.handleStartDate}
				endDate={props.endDate}
				setEndDate={props.setEndDate}
				handleEndDate={props.handleEndDate}
				onEducationEdit={props.onEducationEdit}
				description={props.description}
				setDescription={props.setDescription}
				handleDescription={props.handleDescription}
				count={props.education.length}
				list={educationList}
				experienceName='education'
				cardBody='educationCardBody'
				divId='educationCard'
				formId='educationForm'
				form={educationForm}
			></ExperienceCard> */}

			{/* Work experience Card */}
			{/* <ExperienceCard
				cardTitle='Work Experience'
				experienceName='work experience'
				workExperience={props.workExperience}
				count={props.workExperience.length}
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
				count={props.interests.length}
				list={interestsList}
				divId='interestsCard'
				experienceName='Hobby'
				formId='interestForm'
				form={interestsForm}
			></ExperienceCard>
		</div>
	)
}

export default Experiences
