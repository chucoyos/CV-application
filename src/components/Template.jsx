import Madrid from './Madrid'
import Oslo from './Oslo'
import Santiago from './Santiago'
function Template(props) {
	return (
		<div className='templates'>
			<Oslo
				generalInfo={props.generalInfo}
				education={props.education}
				workExperience={props.workExperience}
				interests={props.interests}
			/>
			<Madrid
				generalInfo={props.generalInfo}
				education={props.education}
				workExperience={props.workExperience}
				interests={props.interests}
			/>
			<Santiago />
		</div>
	)
}
export default Template
