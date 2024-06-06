import React from 'react'

const MidPage = () => {
  return (
    <div className="h-screen flex flex-col justify-start mt-24 text-center items-center bg-white">
        <h1 className="text-5xl mb-3">Get your <strong className="italic">superpower</strong></h1>
        <p className="text-center max-w-2xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores sed natus deleniti ratione illum, debitis accusamus numquam laboriosam eveniet maiores rerum minus impedit, aspernatur, nisi autem. Animi, totam.</p>
        <div className="flex justify-center mt-20">
          <div className="w-[16rem] h-[12rem] text-center m-10 text-white rounded-lg" style={{ backgroundImage: 'linear-gradient(to bottom right, #3377ff, #ffa64d)' }}>
            <h2 className="font-bold italic text-xl mt-6 mb-6">Outstanding Works</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="w-[16rem] h-[12rem] text-center m-10 text-white rounded-lg" style={{ backgroundImage: 'linear-gradient(to bottom right, #3377ff, #ffa64d)' }}>
            <h2 className="font-bold italic text-xl mt-6 mb-6">Outstanding Works</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="w-[16rem] h-[12rem] text-center m-10 text-white rounded-lg" style={{ backgroundImage: 'linear-gradient(to bottom right, #3377ff, #ffa64d)' }}>
            <h2 className="font-bold italic text-xl mt-6 mb-6">Outstanding Works</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          </div>
          <div className="text-4xl mt-12">
            <h1>We <i>solve</i> your problem with</h1>
            <h1 className="text-end">unique and <strong className="italic">innovative</strong> design</h1>
            <h1 className="text-xl mt-4 text-gray-500"><strong className="text-black">Mads Kolding</strong>, Creative Director of Agencuy</h1>
          </div>
        </div>
  )
}

export default MidPage