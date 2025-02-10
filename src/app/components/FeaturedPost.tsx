import Image from "next/image";
import Link from "next/link";

export default function FeaturedPosts() {
  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-center text-blue-600 font-semibold">Practice Advice</h3>
        <h2 className="text-center text-3xl font-bold mb-4">Featured Posts</h2>
        <p className="text-center text-gray-600 mb-8">
          Problems trying to resolve the conflict between <br className="hidden sm:block" /> 
          the two major realms of Classical physics: Newtonian mechanics
        </p>
        
        {/* Responsive Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { src: "/images/fpost1.png", date: "23 July 2023", comments: "12 comments" },
            { src: "/images/fpost2.png", date: "18 August 2023", comments: "8 comments" },
            { src: "/images/fpost3.png", date: "05 September 2023", comments: "15 comments" }
          ].map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <Image 
                src={post.src} 
                alt={`Post ${index + 1}`} 
                width={300} 
                height={300} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Google</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Trending</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">New</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Loudest à la Madison #1 (L Integral)</h3>
                <p className="text-gray-600 text-sm mb-4">
                  We focus on ergonomics and meeting you where you work. Its only a keystroke away.
                </p>
                <div className="flex justify-between items-center text-gray-500 text-xs">
                  <span>{post.date}</span>
                  <span>{post.comments}</span>
                </div>
                <div className="mt-4 text-center">
                  <Link href="/" className="text-blue-600 font-bold hover:underline">Learn More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
