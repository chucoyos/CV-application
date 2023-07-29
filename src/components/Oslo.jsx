import { Link } from 'react-router-dom'
function Oslo(props) {
	return (
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
						<p className='center'>
							{edu.degree} in {edu.description}
						</p>
						<p className='center'>
							{edu.school} - {edu.city}
						</p>
						<p className='center'>
							{edu.startDate} - {edu.endDate}
						</p>
					</div>
				))}
				<hr className='objectiveHr' />
				<p>{props.resumeObjective.objective}</p>
				<hr className='workExperienceHr' />
				{props.workExperience.map((work) => (
					<div key={work.id}>
						<p>
							∘ {work.jobTitle} {work.company} - {work.companyCity}
						</p>
						{/* <p>
							{work.company} - {work.companyCity}
						</p> */}
						<p className='center'>
							{work.workStartDate} - {work.workEndDate}
						</p>
						<p>{work.workDescription}</p>
					</div>
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
					<div key={language.id}>
						<p>
							∘ {language.language} {language.level}
						</p>
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
	)
}
export default Oslo
