import React from 'react';
import Footer from '../../footer/Footer';
import Head from '../Head';
import './faq.css';

function FAQ() {
    const faqs = [
        {
          question: "What is the difference between karat and carat?",
          answer:
            "Karat (k) is a measure of the purity of gold, with 24k being pure gold. Carat (ct) is a measure of the weight of a gemstone, with one carat equaling 0.2 grams.",
        },
        {
          question: "How do I determine my ring size?",
          answer:
            "You can measure your ring size using a printable ring sizer or by measuring the circumference of your finger with a piece of string or a tape measure.",
        },
        {
          question: "Can I customize a piece of jewelry?",
          answer:
            "Yes, many of our pieces can be customized with different metals, gemstones, and engravings. Please contact us for more information.",
        },
        {
          question: "How do I care for my jewelry?",
          answer:
            "Different types of jewelry require different care, but in general, you should avoid exposing your jewelry to harsh chemicals or abrasive materials, and store it in a cool, dry place when not in use.",
        },
        {
          question: "Do you offer appraisals or certifications?",
          answer:
            "Yes, we offer appraisals and certifications for many of our pieces. Please contact us for more information.",
        },
        {
          question: "What is your return policy?",
          answer:
            "We offer a 30-day return policy for most of our items, with some exceptions for custom or personalized pieces. Please see our full return policy for more information.",
        },
        {
          question: "Do you offer financing or layaway options?",
          answer:
            "Yes, we offer financing and layaway options for many of our pieces. Please contact us for more information.",
        },
        {
          question: "How can I contact customer service?",
          answer:
            "You can contact our customer service team by phone, email, or through our website's contact form. Our business hours are Monday through Friday, 9am to 5pm EST.",
        },
      ];
      

  return (
   <div>
    <Head/>
     <div className="faq_container">
      <h1 className='faq_h1'>Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div key={index}>
          <h2 className='faq_h2'>{faq.question}</h2>
          <p className='faq_p'>{faq.answer}</p>
        </div>
      ))}
    </div>
    <Footer/>
   </div>
  );
}

export default FAQ;
