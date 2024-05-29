import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../components/Chat-app/hooks/useLogin";
import { useForm } from "react-hook-form";

const Login = () => {

	let { register, handleSubmit } = useForm()

	const { loading, login } = useLogin();

	const onFormSubmit = async (userObj) => {
		console.log(userObj)
		await login(userObj);
	};

	return (
		<div className="">
			<div className="flex justify-center items-center">
				<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
					<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
						<h1 className='text-3xl font-semibold text-center text-gray-300'>
							Login
						</h1>
						<h2 className='text-3xl font-semibold text-center text-gray-300'><span className='text-blue-500'>OLAS</span></h2>

						<form onSubmit={handleSubmit(onFormSubmit)}>

							<div className="flex justify-center">
								<div className="flex justify-center p-1">
									<span>Lawyer</span>
									<input type="radio" name="radio-1" className="radio" value="lawyer" {...register("userType")} checked />
								</div>
								<div className="flex justify-center p-1">
									<span>client</span>
									<input type="radio" name="radio-1" className="radio" value="client" {...register("userType")} />
								</div>
							</div>

							<div>
								<label className='label p-2'>
									<span className='text-base label-text'>Username</span>
								</label>
								<input
									type='text'
									placeholder='Enter username'
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
							<Link to='/signup' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
								{"Don't"} have an account?
							</Link>

							<div>
								<button className='btn btn-block btn-sm mt-2' disabled={loading}>
									{loading ? <span className='loading loading-spinner '></span> : "Login"}
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Login;

// STARTER CODE FOR THIS FILE
// const Login = () => {
// 	return (
// 		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
// 			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
// 				<h1 className='text-3xl font-semibold text-center text-gray-300'>
// 					Login
// 					<span className='text-blue-500'> ChatApp</span>
// 				</h1>

// 				<form>
// 					<div>
// 						<label className='label p-2'>
// 							<span className='text-base label-text'>Username</span>
// 						</label>
// 						<input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
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
// 					<a href='#' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
// 						{"Don't"} have an account?
// 					</a>

// 					<div>
// 						<button className='btn btn-block btn-sm mt-2'>Login</button>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };
// export default Login;