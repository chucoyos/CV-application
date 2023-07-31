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
									className='line'
								>
									<p className='details'>
										∘ {edu.degree} - {edu.school}
									</p>
									<p className='details'>
										{edu.city} {edu.startDate} - {edu.endDate}{' '}
									</p>
									<p className='details'>{edu.description}</p>
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
							id=''
						></div>

						<p className='cardTitle'>Resume objective</p>
						<div className='duo'>
							<p className='details'>{props.resumeObjective.objective}</p>
						</div>
					</div>

					{/* Work experience */}
					<div
						className='card list'
						id='workExperience'
					>
						<div
							className='decoLine'
							id=''
						></div>
						<p className='cardTitle'>Work Experience</p>
						<div className='list'>
							{props.workExperience.map((work) => (
								<div
									key={work.id}
									className='line'
								>
									<p className='details'>
										∘ {work.jobTitle} {work.company}
									</p>
									<p className='details'>
										{work.companyCity} - {work.workStartDate}
										{work.workEndDate}
									</p>
									<p className='details'>{work.description}</p>
								</div>
							))}
						</div>
					</div>

					{/* Skills */}
					<div
						className='card list'
						id='skills'
					>
						<div
							className='decoLine'
							id=''
						></div>
						<p className='cardTitle'>Skills</p>
						<div className='list'>
							{props.skills.map((skill) => (
								<div
									key={skill.id}
									className='duo'
								>
									<p className='details'>
										∘ {skill.skill} - {skill.level}
									</p>
								</div>
							))}
						</div>
					</div>

					{/* Languages */}
					<div
						className='card list'
						id='languages'
					>
						<div
							className='decoLine'
							id=''
						></div>
						<p className='cardTitle'>Languages</p>
						<div className='list'>
							{props.languages.map((language) => (
								<div
									key={language.id}
									className=''
								>
									<p className='details'>
										∘ {language.language} - {language.level}
									</p>
								</div>
							))}
						</div>
					</div>
					{/* Interests */}
					<div
						className='card list'
						id='interests'
					>
						<div
							className='decoLine'
							id=''
						></div>
						<p className='cardTitle'>Interests</p>
						<div className='list'>
							{props.interests.map((interest) => (
								<div
									key={interest.id}
									className='duo'
								>
									<p className='details'>∘ {interest.interest}</p>
								</div>
							))}
						</div>
					</div>
				</Link>
			</div>
		</>
	)
}
export default Santiago
