import FeaturedPosts from "../components/FeaturedPost";
import { IoIosArrowForward } from "react-icons/io";

export default function Blogs() {
  return (
    <div className="bg-white py-6 px-4">
      <section className="product-page container mx-auto">
        <div className="category mb-6">
          <h4 className="text-2xl font-semibold">Blog</h4>
          <span className="cat-list text-gray-600">
            Home <IoIosArrowForward className="text-gray-400 inline" /> Blog{" "}
          </span>
        </div>
      </section>

      <div className="w-full px-4 py-12 md:py-20 lg:py-24 text-center">
        <FeaturedPosts />
      </div>
    </div>
  );
}
