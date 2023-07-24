import '../App.css'
import Button from './Button'
const GeneralDetails = ({ generalInfo, setGeneralInfo }) => {
	return (
		<div className='App'>
			<div className='form-card'>
				<p className='form-title'>Personal details</p>
				<form>
					<div className='form-group'>
						<p className='camera'>
							📷️ <span className='optional'>optional</span>
						</p>
						<div className='section-group'>
							<div className='input-group'>
								<label htmlFor='first'>Name</label>
								<input
									type='text'
									value={generalInfo.name}
									onChange={(e) =>
										setGeneralInfo({ ...generalInfo, name: e.target.value })
									}
									placeholder='e.g. Tom'
								/>
							</div>
							<div className='input-group'>
								<label htmlFor='last'>Last</label>
								<input
									type='text'
									value={generalInfo.last}
									placeholder='e.g. Cruise'
									onChange={(e) =>
										setGeneralInfo({ ...generalInfo, last: e.target.value })
									}
								/>
							</div>
						</div>
					</div>

					<div className='input-duo'>
						<div className='input-group'>
							<label htmlFor='first'>Email address</label>
							<input
								type='email'
								value={generalInfo.email}
								placeholder='e.g. myEmail@gmail.com'
								onChange={(e) =>
									setGeneralInfo({ ...generalInfo, email: e.target.value })
								}
							/>
						</div>
						<div className='input-group'>
							<label htmlFor='last'>Phone number</label>
							<input
								type='tel'
								value={generalInfo.phone}
								placeholder='e.g. 0123456789'
								onChange={(e) =>
									setGeneralInfo({ ...generalInfo, phone: e.target.value })
								}
							/>
						</div>
					</div>

					<div className='input-group'>
						<label htmlFor='first'>Address</label>
						<input
							type='text'
							value={generalInfo.address}
							placeholder='e.g. 1234 Main St'
							onChange={(e) =>
								setGeneralInfo({ ...generalInfo, address: e.target.value })
							}
						/>
					</div>

					<div className='input-duo'>
						<div className='input-group'>
							<label htmlFor='first'>Zip code</label>
							<input
								type='zip'
								value={generalInfo.zip}
								placeholder='e.g. 12345'
								onChange={(e) =>
									setGeneralInfo({ ...generalInfo, zip: e.target.value })
								}
							/>
						</div>
						<div className='input-group'>
							<label htmlFor='last'>City/Town</label>
							<input
								type='text'
								value={generalInfo.city}
								placeholder='e.g. Los Angeles'
								onChange={(e) =>
									setGeneralInfo({ ...generalInfo, city: e.target.value })
								}
							/>
						</div>
					</div>
				</form>
			</div>
			<Button
				text='Next step ﹥'
				path='/experiences'
			/>
		</div>
	)
}

export default GeneralDetails
