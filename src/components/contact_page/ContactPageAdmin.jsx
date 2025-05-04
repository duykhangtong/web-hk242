import { FaEdit, FaEye, FaSearch, FaStar, FaTrash } from "react-icons/fa";
import useFetchData from "../../utils/useFetchData";
import { useState, useEffect } from "react";
import { api } from "../../services";

function Modal({ initValue, onChange, onSave, title, placeholder }) {
	const [object, setObject] = useState(initValue);

	const handleChange = (event) => {
		if (initValue.email) {
			setObject((prev) => ({
				...prev,
				email: event.target.value,
			}));
		} else {
			setObject((prev) => ({
				...prev,
				phone_number: event.target.value,
			}));
		}
	};

	const handleSubmit = async () => {
		await onSave(object);
		onChange();
	};

	return (
		<div
			className='modal fade text-left show'
			id='inlineForm'
			tabIndex='-1'
			aria-labelledby='myModalLabel33'
			style={{ display: "block" }}
			role='dialog'
			aria-modal='true'
		>
			<div
				className='modal-dialog modal-dialog-centered modal-dialog-scrollable'
				role='document'
			>
				<div className='modal-content'>
					<div className='modal-header'>
						<h4 className='modal-title' id='myModalLabel33'>
							Update {title}
						</h4>
						<button
							type='button'
							className='close'
							aria-label='Close'
							onClick={onChange}
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='feather feather-x'
							>
								<line x1='18' y1='6' x2='6' y2='18'></line>
								<line x1='6' y1='6' x2='18' y2='18'></line>
							</svg>
						</button>
					</div>
					<form action='#'>
						<div className='modal-body'>
							<label htmlFor={title.toLowerCase()}>{title}: </label>
							<div className='form-group'>
								<input
									id={title.toLowerCase()}
									type='text'
									placeholder={placeholder}
									className='form-control'
									value={object?.email ? object?.email : object?.phone_number}
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className='modal-footer'>
							<button
								type='button'
								className='btn btn-light-secondary'
								onClick={onChange}
							>
								<i className='bx bx-x d-block d-sm-none'></i>
								<span className='d-none d-sm-block'>Cancel</span>
							</button>
							<button
								type='button'
								className='btn btn-primary ms-1'
								onClick={handleSubmit}
							>
								<i className='bx bx-check d-block d-sm-none'></i>
								<span className='d-none d-sm-block'>Save</span>
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

function ContactEmail() {
	const { isLoading, error, data } = useFetchData("/contact-email");
	const [emails, setEmails] = useState(null);
	const [isShowModal, setIsShowModal] = useState(false);
	const [selectedOject, setSelectedObject] = useState();

	useEffect(() => {
		if (data) {
			setEmails(data);
		}
	}, [data]);

	const handleModal = (datum) => {
		setIsShowModal(true);
		setSelectedObject(datum);
	};

	const handleUpdate = async (object) => {
		setEmails((prev) =>
			prev.map((email) =>
				email.id === object.id ? { ...email, email: object.email } : email
			)
		);
		try {
			const response = await api.put("/contact-email", object);
			console.log(response.data);
			alert("Update Success");
		} catch (error) {
			alert("Update Fail");
		}
	};

	return (
		<>
			<div>
				<h2 className='fw-medium fs-3'>Email Address Management</h2>
			</div>

			<div className='table-responsive'>
				{isLoading ? (
					<p>loading... </p>
				) : error ? (
					<p>An error occurred while fetching data</p>
				) : (
					emails && (
						<table className='table table-striped table-bordered table-hover'>
							<thead className='table-primary'>
								<tr>
									<th>STT</th>
									<th>Email Address</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{emails.map((datum, idx) => (
									<tr key={datum.id}>
										<td>{idx + 1}</td>
										<td>{datum.email}</td>
										<td>
											<div className='d-flex gap-2'>
												<button
													type='button'
													className='btn btn-light btn-sm'
													onClick={() => handleModal(datum)}
												>
													<FaEdit className='text-success' />
												</button>
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					)
				)}
			</div>

			{isShowModal && (
				<Modal
					initValue={selectedOject}
					onChange={() => setIsShowModal(false)}
					onSave={handleUpdate}
					title='Email'
					placeholder='Email Address'
				/>
			)}
		</>
	);
}

function ContactPhone() {
	const { isLoading, error, data } = useFetchData("/contact-phone");
	const [phoneNumbers, setPhoneNumbers] = useState(null);
	const [isShowModal, setIsShowModal] = useState(false);
	const [selectedOject, setSelectedObject] = useState();

	useEffect(() => {
		if (data) {
			setPhoneNumbers(data);
		}
	}, [data]);

	const handleUpdate = async (object) => {
		setPhoneNumbers((prev) =>
			prev.map((phoneNumber) =>
				phoneNumber.id === object.id ? { ...phoneNumber, phone_number: object.phone_number } : phoneNumber
			)
		);
		try {
			const response = await api.put("/contact-phone", object);
			console.log(response.data);
			alert("Update Success");
		} catch (error) {
			alert("Update Fail");
		}
	};

	const handleModal = (datum) => {
		setIsShowModal(true);
		setSelectedObject(datum);
	};

	return (
		<>
			<div>
				<h2 className='fw-medium fs-3'>Phone Number Management</h2>
			</div>
			<div className='table-responsive'>
				{isLoading ? (
					<p>loading ...</p>
				) : error ? (
					<p>An error occurred while fetching data</p>
				) : (
					phoneNumbers && (
						<table className='table table-striped table-bordered table-hover'>
							<thead className='table-primary'>
								<tr>
									<th>STT</th>
									<th>Phone Number</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{phoneNumbers.map((datum, idx) => (
									<tr key={datum.id}>
										<td>{idx + 1}</td>
										<td>{datum.phone_number}</td>
										<td>
											<div className='d-flex gap-2'>
												<button
													type='button'
													className='btn btn-light btn-sm'
													onClick={() => handleModal(datum)}
												>
													<FaEdit className='text-success' />
												</button>
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					)
				)}
			</div>
			{isShowModal && (
				<Modal
					initValue={selectedOject}
					onChange={() => setIsShowModal(false)}
					onSave={handleUpdate}
					title='Phone Number'
					placeholder='Phone Number'
				/>
			)}
		</>
	);
}

export default function ContactPageAdmin() {
	const [isModal, setIsModal] = useState(false);
	return (
		<div className='p-4'>
			<h1 className='fw-bold mb-4 text-center'>Contact Page Management</h1>

			<div className='row g-5 mb-3 mt-4'>
				<div className='col-md-6'>
					<ContactEmail />
				</div>
				<div className='col-md-6'>
					<ContactPhone />
				</div>
			</div>
		</div>
	);
}
