function Oslo(props) {
	return (
		<div className='template'>
			<div className=''>
				<hr />
				<h3>
					{props.generalInfo.name} {props.generalInfo.last}
				</h3>
				<hr />
				<p>
					{props.generalInfo.address}♦{props.generalInfo.phone}♦
					{props.generalInfo.email}
				</p>
				<hr />
				<h3>EDUCATION</h3>
				{props.education.map((edu) => (
					<div key={edu.id}>
						<p>
							∘ {edu.degree} in {edu.description}
						</p>
						<p>
							{edu.school} - {edu.city}
						</p>
						<p>
							{edu.startDate} - {edu.endDate}
						</p>
					</div>
				))}
				<hr />
				<h3>RESUME OBJECTIVE</h3>
				<p>{props.resumeObjective.objective}</p>
				<hr />
				<h3>WORK EXPERIENCE</h3>
				{props.workExperience.map((work) => (
					<div key={work.id}>
						<p>∘ {work.jobTitle}</p>
						<p>
							{work.company} - {work.companyCity}
						</p>
						<p>
							{work.workStartDate} - {work.workEndDate}
						</p>
						<p>{work.workDescription}</p>
					</div>
				))}
				<hr />
				<h3>SKILLS</h3>
				{props.skills.map((skill) => (
					<div key={skill.id}>
						<p>∘ {skill.skill}</p>
						<p>{skill.level}</p>
					</div>
				))}
				<hr />
				<h3>LANGUAGES</h3>
				{props.languages.map((language) => (
					<div key={language.id}>
						<p>∘ {language.language}</p>
						<p>{language.level}</p>
					</div>
				))}
				<hr />
				<h3>INTERESTS</h3>
				{props.interests.map((interest) => (
					<div key={interest.id}>
						<p>∘ {interest.interest}</p>
					</div>
				))}
			</div>
		</div>
	)
}
export default Oslo
