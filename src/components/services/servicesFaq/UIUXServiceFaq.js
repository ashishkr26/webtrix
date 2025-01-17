import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const UIUXServiceFaq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What does your UI/UX design process involve?",
      answer:
        "Our design process includes research, wireframing, prototyping, visual design, and usability testing to ensure the best user experience.",
    },
    {
      question: "Can you redesign an existing website or app?",
      answer:
        "Yes, we specialize in revamping existing designs to improve usability, aesthetics, and overall user experience.",
    },
    {
      question: "Do you conduct user research as part of your services?",
      answer:
        "Absolutely! User research is a critical part of our process to understand user needs and behavior, ensuring the design aligns with their expectations.",
    },
    {
      question: "What tools do you use for UI/UX design?",
      answer:
        "We use industry-standard tools like Figma, Adobe XD, Sketch, and InVision for designing and prototyping.",
    },
    {
      question: "Do you provide responsive designs for mobile and desktop?",
      answer:
        "Yes, all our designs are fully responsive, ensuring a seamless experience across mobile, tablet, and desktop devices.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2 className="text-2xl font-bold mb-4 py-4 text-gray-800">
        UI/UX Design FAQs
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b pb-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-lg font-semibold flex justify-between items-center text-gray-700">
              {faq.question}
              <span>
                {activeIndex === index ? <RemoveIcon /> : <AddIcon />}
              </span>
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

export default UIUXServiceFaq;
