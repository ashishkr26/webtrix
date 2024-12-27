import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const MainFaq = () => {
  const [activeAnswer, setActiveAnswer] = useState(null);
  const faqList = [
    {
      question: "What are the services Webtrix provides?",
      answer:
        "Webtrix provides a wide range of services, including website creation, website management, SEO optimization, e-commerce solutions, and custom web applications. We specialize in helping startups and small businesses establish a strong online presence.",
    },
    {
      question: "Does Webtrix provide high-quality services?",
      answer:
        "Yes, Webtrix is dedicated to delivering high-quality services. We use the latest technologies, follow industry best practices, and ensure every project meets the highest standards of design and functionality.",
    },
    {
      question: "What is the time estimate for a project?",
      answer:
        "The time required for a project depends on its complexity. A basic website can be completed in 2-4 weeks, while more advanced projects with custom features may take 6-8 weeks or longer. We work efficiently to meet your deadlines.",
    },
    {
      question: "What is the cost of Webtrix's services?",
      answer:
        "The cost varies based on the project's requirements and scope. We provide competitive pricing and tailor our quotes to suit your specific needs. Contact us for a detailed estimate and consultation.",
    },
  ];

  return (
    <div className="font-poppins bg-gray-50  w-full ">
      {/* <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Frequently Asked Questions
      </h2> */}
      <div className="space-y-4 ">
        {faqList.map((faq, index) => (
          <div
            key={index}
            className="p-4 border border-amber-400 rounded-md shadow-sm bg-white"
          >
            <h3
              onClick={() =>
                setActiveAnswer(activeAnswer === index ? null : index)
              }
              className="text-lg font-semibold mb-2 cursor-pointer"
            >
              <div className="flex justify-between">
                <span>{faq.question}</span>
                <span>
                  {activeAnswer === index ? <RemoveIcon /> : <AddIcon />}
                </span>
              </div>
            </h3>
            {activeAnswer === index && (
              <p className="text-gray-900 text-sm">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainFaq;
