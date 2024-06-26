import React from 'react'
// import {CiLogout} from 'react-icons/ci';
import useLogout from '../hooks/useLogout';

const LogoutButton = () => {
	const { loading, logout } = useLogout();

	return (
		<div className='mt-auto'>
			{!loading ? (
				// <CiLogout className='w-6 h-6 text-white cursor-pointer' onClick={logout} />
				<button className='btn' onClick={logout}>Logout</button>
			) : (
				<span className='loading loading-spinner'></span>
			)}
		</div>
	);
};
export default LogoutButton;