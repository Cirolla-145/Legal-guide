import { Link } from "react-router-dom";
import {useForm} from 'react-hook-form'
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../components/Chat-app/hooks/useSignup";

const SignUp = () => {
	
	let {register,handleSubmit} = useForm()

	const {loading,signup} = useSignup()

	const onFormubmit = async (userObj) => {
		console.log(userObj)
		await signup(userObj);
	};

	return (
		<div className="flex justify-center items-center">
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Sign Up 
				</h1>
				<h2 className='text-3xl font-semibold text-center text-gray-300'>
				<span className='text-blue-500'> ChatApp</span>
				</h2>

				<form onSubmit={handleSubmit(onFormubmit)}>

				<div className="flex justify-center">
                                <div className="flex justify-center p-1">
                                    <span>Lawyer</span>
                                    <input type="radio" name="radio-1" className="radio" value="lawyer" {...register("userType")} checked />
                                </div>
                                <div className="flex justify-center p-1">
                                    <span>Client</span>
                                    <input type="radio" name="radio-1" className="radio" value="client" {...register("userType")} />
                                </div>
                            </div>

					<div>
						<label className='label p-2'>
							<span className='text-base label-text'>Full Name</span>
						</label>
						<input
							type='text'
							placeholder='John Doe'
							className='w-full input input-bordered  h-10'
							{...register("fullName")}
						/>
					</div>

					<div>
						<label className='label p-2 '>
							<span className='text-base label-text'>Username</span>
						</label>
						<input
							type='text'
							placeholder='johndoe'
							className='w-full input input-bordered h-10'
							{...register("username")}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
							{...register("password")}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Confirm Password</span>
						</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='w-full input input-bordered h-10'
							{...register("confirmPassword")}
						/>
					</div>

					<div className="flex justify-center">
                                <div className="flex justify-center p-1">
                                    <span>male</span>
                                    <input type="radio" name="radio-1" className="radio" value="male" {...register("gender")} checked />
                                </div>
                                <div className="flex justify-center p-1">
                                    <span>female</span>
                                    <input type="radio" name="radio-1" className="radio" value="female" {...register("gender")} />
                                </div>
                            </div>

					<Link
						to={"/login"}
						className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'
						href='#'
					>
						Already have an account?
					</Link>

					<div>
						<button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
						</button>
					</div>
				</form>
			</div>
		</div>
		</div>
	);
};
export default SignUp;

// STARTER CODE FOR THE SIGNUP COMPONENT
// import GenderCheckbox from "./GenderCheckbox";

// const SignUp = () => {
// 	return (
// 		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
// 			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
// 				<h1 className='text-3xl font-semibold text-center text-gray-300'>
// 					Sign Up <span className='text-blue-500'> ChatApp</span>
// 				</h1>

// 				<form>
// 					<div>
// 						<label className='label p-2'>
// 							<span className='text-base label-text'>Full Name</span>
// 						</label>
// 						<input type='text' placeholder='John Doe' className='w-full input input-bordered  h-10' />
// 					</div>

// 					<div>
// 						<label className='label p-2 '>
// 							<span className='text-base label-text'>Username</span>
// 						</label>
// 						<input type='text' placeholder='johndoe' className='w-full input input-bordered h-10' />
// 					</div>

// 					<div>
// 						<label className='label'>
// 							<span className='text-base label-text'>Password</span>
// 						</label>
// 						<input
// 							type='password'
// 							placeholder='Enter Password'
// 							className='w-full input input-bordered h-10'
// 						/>
// 					</div>

// 					<div>
// 						<label className='label'>
// 							<span className='text-base label-text'>Confirm Password</span>
// 						</label>
// 						<input
// 							type='password'
// 							placeholder='Confirm Password'
// 							className='w-full input input-bordered h-10'
// 						/>
// 					</div>

// 					<GenderCheckbox />

// 					<a className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>
// 						Already have an account?
// 					</a>

// 					<div>
// 						<button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };
// export default SignUp;