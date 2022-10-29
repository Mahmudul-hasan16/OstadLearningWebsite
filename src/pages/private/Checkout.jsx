import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { ProfileContext } from '../../context/UserContext';

const Checkout = () => {
    const {user,changeProfile,enroll} = useContext(ProfileContext);
    const coursesData = useLoaderData()
    const courses = coursesData.filter(data => data.id in enroll);
    console.log(courses)
    const navigate = useNavigate()
    const handleChange =event=>{
        event.preventDefault();
        const name = event.target.name.value;
        const img = event.target.img.value;
        changeProfile(name,img)
        .then(()=>{
            console.log(user)
            navigate('/courses/profile')
        })
        .catch(error => console.log(error))
    }
    console.log(user)
    return (
        <div>
            <div className="w-full h-screen p-8 flex flex-col md:flex-row  sm:space-x-6 dark:bg-gray-900 dark:text-gray-100">
	<div className="w-5/12 ">
		<img src={user?.photoURL===null ? "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1666775465~exp=1666776065~hmac=52d3d334805b06451346430374e0d14f56359098935ada58c67bce030d779713" :user?.photoURL } alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
	</div>
	<div className="flex flex-col space-y-4">
		<div>
			<h2 className="text-2xl font-semibold">{user?.displayName}</h2>
			<span className="text-sm text-teal-700">Student</span>
		</div>
		<div className="space-y-1">
			<span className="flex items-center space-x-2">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
					<path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
				</svg>
				<span className="text-teal-700">{user?.email}</span>
			</span>
			
            <form onSubmit={handleChange}>
            <div className="space-y-2">
				<label htmlFor="name" className="block text-sm">Full Name</label>
				<input type="text" name="name" id="name" placeholder="Change name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
			</div>
			<div className="space-y-2">
				<label htmlFor="img" className="block text-sm">Image url</label>
				<input type="text" name="img" id="img" placeholder={user?.photoURL ===null ? 'default' : user?.photoURL} className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
			</div>
            <button type="submit" className="w-full px-8 mt-5 py-3 font-semibold rounded-md bg-teal-700 text-white">Update profile</button>
            </form>
		</div>
	</div>
</div>
        <div>
        <div className="container p-2 mx-auto rounded-md sm:p-4 dark:text-gray-100 dark:bg-gray-900">
	<h2 className="mb-3 text-2xl font-semibold leading-tight">Your Enroll courses</h2>
	<div className="overflow-x-auto">
		<table className="min-w-full text-xs">
			<thead className="rounded-t-lg dark:bg-gray-700">
				<tr className="text-right">
					<th title="Ranking" className="p-3 text-left">category</th>
					<th title="name" className="p-3 text-left">title</th>
				</tr>
			</thead>
			<tbody>
					{
                         courses.map(course=> {
                            return(
                                <>
                                <tr className="text-right border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-800">
                                <td className="px-3 py-2 text-left">
						<span>{course.category}</span>
					</td>
					<td className="px-3 py-2 text-left">
						<span>{course.name}</span>
					</td>
                       </tr>
                                </>
                            )
                        })
                    }
					
			</tbody>
		</table>
	</div>
</div>
        </div>
        </div>
    );
};

export default Checkout;