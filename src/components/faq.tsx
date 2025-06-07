import Head from "next/head";

const faqs = [
  {
    question: "Why should I choose Evoke Event Co. for my event in Bhopal?",
    answer:
      "Evoke Event Co. offers bespoke event planning with a local touch, ensuring every detail is executed flawlessly with creativity and professionalism.",
  },
  {
    question: "What makes your wedding planning services unique?",
    answer:
      "Our team personalizes each wedding to reflect the couple’s story, offering theme-based decor, coordination, and heartfelt experiences.",
  },
  {
    question: "Do you handle corporate events in Bhopal?",
    answer:
      "Yes, we specialize in seamless corporate event management including conferences, product launches, and team-building activities.",
  },
  {
    question: "Why are you considered the best for decoration services in Bhopal?",
    answer:
      "Our decor stands out for its elegance, attention to detail, and ability to transform spaces into memorable settings tailored to your vision.",
  },
];

export default function FAQPage() {
  return (
    <>
      <Head>
        <title>Frequently Asked Questions | Evoke Event Co.</title>
      </Head>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <p className="text-pink-700 text-base sm:text-lg italic mb-2">
          Unveiling Clarity
        </p>
        <h1 className="text-2xl sm:text-4xl font-serif font-semibold mb-2">
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <div className="w-20 border-b-2 border-pink-700 mx-auto mb-6 relative">
          <span className="absolute left-1/2 -translate-x-1/2 bg-white px-2 text-pink-700 text-xl">
            •
          </span>
        </div>
        <p className="text-gray-600 text-sm sm:text-base mb-10 px-2">
          Navigate the Intricacies of Event Planning, Decoration, and Corporate
          Gatherings with Confidence and Insight.
        </p>

        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-md p-4 sm:p-6 bg-white shadow-sm hover:shadow-md transition duration-300"
            >
              <h2 className="text-sm sm:text-base font-semibold mb-2 text-pink-700">
                {faq.question}
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
