import { Link, useLocation } from 'react-router-dom'
function Santiago(props) {
	return (
		<>
			{location.pathname === '/santiago' && (
				<div className='header'>
					<button
						className='downloadBtn'
						onClick={() => window.print()}
					>
						Download PDF
					</button>
				</div>
			)}
			<div
				className='template tooltip santiago'
				id='oslo'
			>
				<Link to='/santiago'>
					<span className='tooltipText'>Select template</span>
					<div
						className='card'
						id='name'
					>
						<h3 className='name'>
							{props.generalInfo.name} {props.generalInfo.last}
						</h3>
					</div>
					<div className='flexGroup'>
						<p className='address'>{props.generalInfo.phone}</p>
						<p className='address'>{props.generalInfo.address}</p>
						<p className='address'>{props.generalInfo.email}</p>
					</div>
					{/* Education */}
					<div
						className='card list'
						id='education'
					>
						<p className='cardTitle'>Education</p>
						<div className='list'>
							{props.education.map((edu) => (
								<div
									key={edu.id}
									className='duo'
								>
									<p className='details'>
										{edu.degree} in {edu.description} - {edu.school} -{' '}
										{edu.city}-{edu.startDate} - {edu.endDate}
									</p>
								</div>
							))}
						</div>
					</div>

					{/* Resume objective */}
					<div
						className='card list'
						id='objectiveDiv'
					>
						<div
							className='decoLine'
							id='objectiveLine'
						></div>
						<div className='list duo'>
							<p className='cardTitle'>Resume objective</p>
							<p className='details'>{props.resumeObjective.objective}</p>
						</div>
					</div>

					{/* Work experience */}
					<hr className='workExperienceHr' />
					{props.workExperience.map((work) => (
						<>
							<div
								key={work.id}
								className='col-2'
							>
								<p>
									∘ {work.jobTitle} {work.company} - {work.companyCity}
								</p>
								<p>
									{work.workStartDate} - {work.workEndDate}
								</p>
							</div>
							<p>{work.workDescription}</p>
						</>
					))}
					{/* end resume */}
					<hr className='skillsHr' />
					{props.skills.map((skill) => (
						<div
							key={skill.id}
							className='col-2'
						>
							<p>∘ {skill.skill}</p>
							<p>{skill.level}</p>
						</div>
					))}
					<hr className='languagesHr' />
					{props.languages.map((language) => (
						<div
							key={language.id}
							className='col-2'
						>
							<p>∘ {language.language}</p>
							<p>{language.level}</p>
						</div>
					))}
					<hr className='interestsHr' />
					{props.interests.map((interest) => (
						<div key={interest.id}>
							<p>∘ {interest.interest}</p>
						</div>
					))}
					<span className='tooltipText'>Select template</span>
				</Link>
			</div>
		</>
	)
}
export default Santiago
