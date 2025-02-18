import CommentBox from "../components/comment";
import FeaturedPosts from "../components/FeaturedPost";
import { IoIosArrowForward } from "react-icons/io";

export default function Blogs() {
  return (
    <div className="bg-white py-4 px-4">
      <section className="product-page container mx-auto">
        <div className="category mb-6">
          <h4 className="text-2xl font-semibold">Blog</h4>
          <span className="cat-list text-gray-600">
            Home <IoIosArrowForward className="text-gray-400 inline" /> Blog{" "}
          </span>
        </div>
      </section>

      <div className="w-full px-2 md:py-12 lg:py-20 text-center">
        <FeaturedPosts />
      </div>
      <CommentBox />
    </div>
  );
}
