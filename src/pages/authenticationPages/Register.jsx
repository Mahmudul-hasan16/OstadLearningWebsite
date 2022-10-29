import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ProfileContext } from '../../context/UserContext';

const Register = () => {
    const {register,changeProfile,popUpSignIn}=useContext(ProfileContext)
    const navigate = useNavigate()
	const location = useLocation()
  const from = location.state?.from?.pathname || '/';
    const [errorMessage, setErrorMessage] =useState(null)
    const handleRegister = event =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value;
        const img = event.target.img.value
        console.log(email,password,name,img);
        register(email,password)
        .then(result => {
            const user = result.user;
            update(name,img)
            console.log(user);
			navigate(from,{replace:true})
            
        })
        .catch(error => {
            console.error(error);
            setErrorMessage(error.message);
        })
        
    }
    const update = (name,img) =>{
        changeProfile(name,img)
        .then(()=>{})
        .catch(error => console.log(error))
    }
	const googleAuthProvider = new GoogleAuthProvider;
	const githubAuthProvider = new GithubAuthProvider;
	
	const handleGoogleLogIn = () =>{
		popUpSignIn(googleAuthProvider)
		.then(result =>{
			const user =result.user;
			console.log(user)
			navigate(from,{replace:true})
		})
		.catch(error => console.log(error))
	}
	const handleGithubLogIn =()=>{
		popUpSignIn(githubAuthProvider)
		.then(result =>{
			const user =result.user;
			console.log(user)
			navigate(from,{replace:true})
		})
		.catch(error => console.log(error))
	}
    return (
        <div>
            <div className="w-full max-w-md p-4 mt-5 mx-auto rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100">
	<h2 className="mb-3 text-3xl font-semibold text-center">Create a account</h2>
	<p className="text-sm text-center text-teal-700">Already have account?
		<Link to="/login"  className="focus:underline hover:underline">Sign in here</Link>
	</p>
    <form onSubmit={handleRegister}  className="space-y-8 ">
		<div className="space-y-4">
			<div className="space-y-2">
				<label htmlFor="name" className="block text-sm">Full Name</label>
				<input type="text" name="name" id="name" placeholder="Enter your full name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
			</div>
			<div className="space-y-2">
				<label htmlFor="img" className="block text-sm">Image url</label>
				<input type="text" name="img" id="img" placeholder="Enter your IMG url" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
			</div>
			<div className="space-y-2">
				<label htmlFor="email" className="block text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="Enter your email" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"  required/>
			</div>
			<div className="space-y-2">
				<div className="flex justify-between">
					<label htmlFor="password" className="text-sm">Password</label>
					
				</div>
				<input type="password" name="password" id="password" placeholder="Enter a password" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required/>
			</div>
            <p className='text-red-500'>{errorMessage}</p>
		</div>
		<button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-teal-700 text-white">Register</button>
	</form>
	<div className="flex items-center w-full my-4">
		<hr className="w-full text-teal-700"/>
		<p className="px-3 text-teal-700">OR</p>
		<hr className="w-full text-teal-700"/>
	</div>
	
    <div className="my-6 space-y-4">
		<button onClick={handleGoogleLogIn} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
			<p>Login with Google</p>
		</button>
		<button onClick={handleGithubLogIn} aria-label="Login with GitHub" role="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
			</svg>
			<p>Login with GitHub</p>
		</button>
		
	</div>
</div>
        </div>
    );
};

export default Register;