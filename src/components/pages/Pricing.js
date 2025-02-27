import React from 'react'

const Pricing = () => {
  return (
    <div className=''>
     <div className="bg-gray-600 h-32 text-white p-4">
        {" "}
        Pricing
      </div>
      <div className="mt-10 p-4 flex">
        <div className="w-1/2">
          At Webtrix Solutions, we bring together a team of skilled
          professionals dedicated to turning your ideas into reality. Our expert
          developers craft high-quality, scalable, and innovative solutions
          tailored to your business needs. The applications we build empower our
          clients to accelerate growth, enhance efficiency, and achieve their
          goals with cutting-edge technology. Let us help you take your business
          to the next level!
          <div className="flex justify-center items-center m-10"><button className="p-4 rounded-md bg-[#ffd801]">Request a Quote</button></div>
        </div>
        <div className="w-1/2 flex justify-end">
          <img className="h-96 " alt="hire"  />
        </div>
      </div>
    </div>
  )
}

export default Pricing
