import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const MobileAppDevelopmentFaq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What mobile platforms do you develop apps for?",
      answer:
        "We develop apps for both iOS and Android platforms, ensuring optimal performance and user experience on each.",
    },
    {
      question: "Do you provide cross-platform app development?",
      answer:
        "Yes, we specialize in cross-platform development using frameworks like React Native and Flutter to create apps that work seamlessly on both platforms.",
    },
    {
      question: "Can you help with app design and user experience?",
      answer:
        "Absolutely! We prioritize intuitive design and seamless user experience to ensure your app is user-friendly and engaging.",
    },
    {
      question: "What kind of apps can you develop?",
      answer:
        "We develop a wide range of apps, including e-commerce, social networking, healthcare, education, and enterprise apps.",
    },
    {
      question: "Do you provide post-launch support for mobile apps?",
      answer:
        "Yes, we offer comprehensive post-launch support, including updates, maintenance, and troubleshooting, to keep your app running smoothly.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2 className="text-2xl font-bold mb-4 py-4 text-gray-800">Mobile App Development FAQs</h2>
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

export default MobileAppDevelopmentFaq;
