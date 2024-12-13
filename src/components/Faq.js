import React from 'react'
import faqbg from   "../assets/faqbg.jpg"

const Faq = () => {
  return (
    <div
    style={{
      backgroundImage: `url(${faqbg})`, // Correct syntax for inline styles
      backgroundSize: "cover", // Ensures the image covers the entire div
      backgroundPosition: "center", // Centers the image
      
    }}
    className=" p-2 m-4 flex flex-col w-auto bg-gray-50 h-96 text-5xl items-center"
  >
      Frequently Asked Questions
    </div>
  )
}

export default Faq
