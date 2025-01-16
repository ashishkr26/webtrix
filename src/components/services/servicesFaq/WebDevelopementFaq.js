import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const WebDevelopmentFaq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What services does Webtrix Solutions offer?",
      answer:
        "We offer website design, development, management, optimization, and other digital solutions tailored to your business needs.",
    },
    {
      question: "Do you provide website maintenance services?",
      answer:
        "Yes, we provide ongoing website maintenance to ensure your site is secure, up-to-date, and running smoothly.",
    },
    {
      question: "Can you create websites for startups?",
      answer:
        "Absolutely! We specialize in building websites for startups, ensuring they are professional, scalable, and aligned with your brand.",
    },
    {
      question: "What industries do you cater to?",
      answer:
        "We cater to a wide range of industries, including retail, healthcare, education, technology, and more.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "The timeline depends on the complexity of the project. Typically, it can range from 2 to 6 weeks for most websites.",
    },
    {
      question: "Do you offer custom solutions?",
      answer:
        "Yes, all our solutions are tailored to meet your specific business requirements and goals.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section ">
      <h2 className="text-2xl font-bold mb-4 py-4 text-gray-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b pb-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-lg font-semibold flex justify-between items-center text-gray-700">
              {faq.question}
              <span>{activeIndex === index ? <RemoveIcon /> : <AddIcon />}</span>
            </h3>
            {activeIndex === index && (
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebDevelopmentFaq;
