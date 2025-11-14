import React from "react";
import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    date: "Mar 16, 2020",
    category: "Marketing",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo...",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800",
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      image:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=200",
    },
  },
  {
    id: 2,
    title: "How to use search engine optimization to drive sales",
    date: "Mar 10, 2020",
    category: "Sales",
    description:
      "Optio cum necessitatibus dolor voluptatum provident commodi et...",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
    author: {
      name: "Lindsay Walton",
      role: "Front-end Developer",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
    },
  },
  {
    id: 3,
    title: "Improve your customer experience",
    date: "Feb 12, 2020",
    category: "Business",
    description:
      "Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus...",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800",
    author: {
      name: "Tom Cook",
      role: "Director of Product",
      image:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=200",
    },
  },
];

export default function Blogs() {
  return (
    <section className="py-8 md:py-14 bg-white">
      <div className="custom-container px-4">
        <div className="flex items-center justify-between mb-8 md:mb-12">
            <h2 className="text-xl sm:text-3xl md:text-4xl leading-snug font-semibold max-w-1/2 sm:max-w-full">
              Latest Insights & <span className="text-[rgb(var(--brand-red))]">Articles</span> 
            </h2>
            <Link to="#" className="bg-[rgb(var(--brand-red))] hover:bg-[rgb(var(--brand-red-dark))] text-white 
              font-semibold px-3 sm:px-6 py-1.5 sm:py-2.5 rounded-full text-base sm:text-lg shadow-md transition-all duration-300">
               View All
            </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 space-y-3 sm:space-y-4">
          {posts.map((post) => (
            <Link to={'#'} key={post.id}>
                <article
                    className="group cursor-pointer hover:-translate-y-2 transition-all duration-300"
                    >
                    {/* Image */}
                    <div className="overflow-hidden rounded-xl">
                        <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-56 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    {/* Text */}
                    <div className="mt-4 space-y-1 sm:space-y-2">
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                        <span>{post.date}</span>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                            {post.category}
                        </span>
                        </div>

                        <h3 className="text-lg sm:text-xl font-semibold group-hover:text-[rgb(var(--brand-red))] transition-colors duration-300">
                        {post.title}
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed">
                        {post.description}
                        </p>
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-3 mt-2 sm:mt-5">
                        <img
                        src={post.author.image}
                        className="w-10 h-10 rounded-full object-cover"
                        alt={post.author.name}
                        />
                        <div>
                        <p className="font-medium">{post.author.name}</p>
                        <p className="text-sm text-gray-500">{post.author.role}</p>
                        </div>
                    </div>
                </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
