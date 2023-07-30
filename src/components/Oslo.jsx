import { Link } from 'react-router-dom'
function Oslo(props) {
	return (
		<>
			{location.pathname === '/oslo' && (
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
				className='template tooltip'
				id='oslo'
			>
				<Link to='/oslo'>
					<span className='tooltipText'>Select template</span>
					<hr className='duoHr' />

					<h3 className='name'>
						{props.generalInfo.name} {props.generalInfo.last}
					</h3>

					<hr className='duoHr' />
					<hr className='mainHr' />
					<p className='address'>
						{props.generalInfo.address}♦{props.generalInfo.phone}♦
						{props.generalInfo.email}
					</p>
					<hr className='educationHr' />
					{props.education.map((edu) => (
						<div key={edu.id}>
							<p className=''>
								{edu.degree} in {edu.description} - {edu.school} - {edu.city}-
								{edu.startDate} - {edu.endDate}
							</p>
							<p className='center'>♦</p>
						</div>
					))}
					<hr className='objectiveHr' />
					<p>{props.resumeObjective.objective}</p>
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
export default Oslo
