import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const WebDevelopmentFaq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What makes Webtrix Solutions unique in web development?",
      answer:
        "We focus on delivering custom, scalable, and user-friendly websites tailored to your business needs while ensuring the best user experience.",
    },
    {
      question: "Do you provide mobile-friendly website designs?",
      answer:
        "Yes, all our websites are designed to be fully responsive, ensuring seamless performance across all devices.",
    },
    {
      question: "Can you help redesign an existing website?",
      answer:
        "Absolutely! We can revamp your existing website to enhance its design, functionality, and performance.",
    },
    {
      question: "What kind of support do you offer after website delivery?",
      answer:
        "We offer post-launch support, including maintenance, updates, and troubleshooting, to keep your website running smoothly.",
    },
    {
      question: "Do you offer integration with CMS platforms like WordPress?",
      answer:
        "Yes, we can build websites using popular CMS platforms like WordPress, or create custom CMS solutions tailored to your needs.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
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
