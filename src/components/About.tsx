import React from 'react';

const About = () => {
  return (
    <div className='flex flex-col text-center'>
<h1 className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
  ABOUT
</h1>
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-64 h-1 my-8 bg-gray-400 border-0 rounded" />
        <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 text-gray-400">
          <svg className="w-4 h-4 fill-current" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 14">
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
          </svg>
        </div>
      </div>
      <p className="pl-0 pr-0 md:pl-52 md:pr-52 mb-14 text-gray-500 text-lg">
        Hemit, a young prodigy in the making, embarked on his coding journey at the age of 9 when his uncle introduced him to programming with a calculator app. 
        Now a high school student, Hemit has already secured an internship, showcasing his exceptional skills in web development and cybersecurity. 
        Proficient in multiple programming languages and frameworks, he integrates his talents to build dynamic websites and identify security vulnerabilities. 
        With a passion for continuous learning and a collaborative mindset, Hemit is poised to make a significant impact in the tech industry.
      </p>
      <h2 className="mb-2 text-2xl font-semibold text-cyan-800">Some info about me :)</h2>
      <div className="flex justify-center">
        <ul className="max-w-md space-y-1 text-gray-500 list-inside">
          <li className="flex items-center">
            <svg className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <b>Birthday:</b> May 2nd 2009
          </li>
          <li className="flex items-center">
            <svg className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <b>City:</b> Greater Toronto Area (GTA)
          </li>
          <li className="flex items-center">
            <svg className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <b>Freelance?</b> Absolutely! Prices range from 50-150 dollars :)
          </li>
        </ul>
      </div>
    </div>
  )
}

export default About;
