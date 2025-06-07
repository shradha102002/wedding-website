import Image from 'next/image';

const blogs = [
  {
    title: "Top 10 Wedding Trends to Watch in 2025: Expert Insights by Evoke Event Co.",
    excerpt: "Expert Insights by Evoke Event Co. Planning a wedding in 2025? Whether you dream of a grand destination wedding or a personalized ceremony at home, staying updated with the latest trends is essential...",
    image: "/s1.jpg",
    link: "#",
    date: "April 29, 2025",
  },
  {
    title: "Smart Wedding Budget Planning: Tips from the Best Wedding Planners in Bhopal, Madhya Pradesh",
    excerpt: "Planning your dream wedding is a magical experience, but it comes with the significant task of managing your budget wisely. Whether an intimate ceremony or grand destination wedding, here's how to stay on track...",
    image: "/s2.jpg",
    link: "#",
    date: "April 27, 2025",
  },
  {
    title: "Haldi Ceremony Magic: Vibrant Ideas & Planning Tips by the Best Wedding Planners in Bhopal & India",
    excerpt: "When it comes to Indian weddings, every ritual holds a unique charm — and the Haldi ceremony is no exception. Known for its laughter, emotion, and vivid hues of yellow, the Haldi is a celebration of love, life, and light...",
    image: "/s4.jpg",
    link: "#",
    date: "April 16, 2025",
  },
];

export default function BlogSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <p className="text-pink-700 italic text-lg sm:text-xl mb-2">Elegance. Expertise. Evoke.</p>
      <h2 className="text-3xl sm:text-4xl font-serif font-semibold mb-4">OUR BLOGS</h2>
      <div className="w-20 border-b-2 border-pink-700 mx-auto mb-6 relative">
        <span className="absolute left-1/2 -translate-x-1/2 bg-white px-2 text-pink-700 text-xl">•</span>
      </div>
      <p className="text-gray-600 mb-10 max-w-3xl mx-auto px-2 sm:px-0 text-base sm:text-lg">
        Elevate your Celebrations: Explore the World of Evoke Event Co. Where Innovation Meets Elegance, and Your Special Moments Take Center Stage.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 text-left">
        {blogs.map((blog, index) => (
          <div key={index} className="border rounded-lg shadow-sm hover:shadow-md transition p-4 flex flex-col">
            <div className="relative w-full h-48 mb-4 rounded overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                layout="fill"
                objectFit="cover"
                className="rounded"
                priority={index === 0}
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
            <p className="text-sm text-gray-700 mb-4 flex-grow">{blog.excerpt}</p>
            <div className="flex justify-between items-center text-sm text-pink-700 font-medium mt-auto">
              <a href={blog.link} className="hover:underline">READ MORE</a>
              <span className="text-gray-500 font-normal">{blog.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
