import Madrid from './Madrid'
import Oslo from './Oslo'
import Santiago from './Santiago'
function Template(props) {
	return (
		<div className='templates'>
			<div className='header'>
				<h1>Select template</h1>
			</div>
			<Oslo
				generalInfo={props.generalInfo}
				education={props.education}
				workExperience={props.workExperience}
				interests={props.interests}
				resumeObjective={props.resumeObjective}
				skills={props.skills}
				languages={props.languages}
			/>
			<Oslo
				generalInfo={props.generalInfo}
				education={props.education}
				workExperience={props.workExperience}
				interests={props.interests}
				resumeObjective={props.resumeObjective}
				skills={props.skills}
				languages={props.languages}
			/>
			<Oslo
				generalInfo={props.generalInfo}
				education={props.education}
				workExperience={props.workExperience}
				interests={props.interests}
				resumeObjective={props.resumeObjective}
				skills={props.skills}
				languages={props.languages}
			/>
			<Oslo
				generalInfo={props.generalInfo}
				education={props.education}
				workExperience={props.workExperience}
				interests={props.interests}
				resumeObjective={props.resumeObjective}
				skills={props.skills}
				languages={props.languages}
			/>
			<Oslo
				generalInfo={props.generalInfo}
				education={props.education}
				workExperience={props.workExperience}
				interests={props.interests}
				resumeObjective={props.resumeObjective}
				skills={props.skills}
				languages={props.languages}
			/>
			<Oslo
				generalInfo={props.generalInfo}
				education={props.education}
				workExperience={props.workExperience}
				interests={props.interests}
				resumeObjective={props.resumeObjective}
				skills={props.skills}
				languages={props.languages}
			/>

			{/* <Madrid
				generalInfo={props.generalInfo}
				education={props.education}
				workExperience={props.workExperience}
				interests={props.interests}
			/>
			<Santiago /> */}
		</div>
	)
}
export default Template
