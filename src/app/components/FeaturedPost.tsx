import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

// components/FeaturedPosts.js
export default function FeaturedPosts() {
  const posts = [
    {
      id: 1,
      title: "Loudest à la Madison #1 (L'Integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It’s only a keystroke away.",
      image: "/images/fpost1.png", 
      date: "23 July 2023",
      comments: "12 comments",
      tags: ["Google", "Trending", "New"],
    },
    {
      id: 2,
      title: "Loudest à la Madison #1 (L'Integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It’s only a keystroke away.",
      image: "/images/fpost2.png", 
      date: "23 July 2023",
      comments: "12 comments",
      tags: ["Google", "Trending", "New"],
      
    },
    {
      id: 3,
      title: "Loudest à la Madison #1 (L'Integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It’s only a keystroke away.",
      image: "/images/fpost3.png", 
      date: "23 July 2023",
      comments: "12 comments",
      tags: ["Google", "Trending", "New"],
    },
  ];

  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-2">
        <h3 className='text-center'>Practice Advice</h3>
        <h2 className="text-center text-3xl font-bold mb-4">Featured Posts</h2>
        <p className="text-center text-gray-600 mb-8">
          Problems trying to resolve the conflict between <br/> the two major realms
          of Classical physics: Newtonian mechanics
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex gap-2 mb-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{post.description}</p>
                <div className="flex justify-between items-center text-gray-500 text-xs">
                  <span>{post.date}</span>
                  <span>{post.comments}</span>
                </div>
                <div>
                  <button className='pt-2 mx-20 pl-6 font-bold'><Link href="/"> Learn More</Link></button></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
