import React from 'react';

const Blog = () => {
    return (
        <div className='p-5'>
            <div className=' dark:text-white text-gray-800  my-5'>
                <h1 className=' dark:text-white text-xl font-bold uppercase'> what is cors?</h1>
                <p>Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy. However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery </p>
            </div>
            <div className=' dark:text-white text-gray-800  my-5'>
                <h1 className=' dark:text-white text-xl font-bold uppercase'>Why are you using firebase? What other options do you have to implement authentication?</h1>
                <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
            </div>
            <div className=' dark:text-white text-gray-800  my-5'>
                <h1 className=' dark:text-white text-xl font-bold uppercase'>How does the private route work?</h1>
                <p> private route is mainly recognition process route  If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is Logged in.Under hood it check conditions</p>
            </div>
            <div className=' dark:text-white text-gray-800  my-5'>
                <h1 className=' dark:text-white text-xl font-bold uppercase'>What is Node? How does Node work?</h1>
                <p> Node.js uses the “Single Threaded Event Loop” architecture to handle multiple clients at the same time.In a multi-threaded request-response model, multiple clients send a request, and the server processes each one before sending the response back. However, multiple threads are used to process concurrent calls. These threads are defined in a thread pool, and each time a request comes in, an individual thread is assigned to handle it.</p>
            </div>
        </div>
        
        
    );
};

export default Blog;