const DescriptionCard = ({ logo }) => {
	return (
		<div className='card'>
			<div className='logo'>{logo}</div>
			<div className='card-content'>
				<div className='card-title'>Quick and easy resume builder</div>
				<div className='card-description'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore
				</div>
			</div>
		</div>
	)
}

export default DescriptionCard
