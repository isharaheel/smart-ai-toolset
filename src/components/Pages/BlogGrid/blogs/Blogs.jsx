import blogData from "./blogsData";
import { FaRegUser } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

export default function BlogSection() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className="group bg-gray-950 rounded-2xl overflow-hidden shadow-md"
          >
            <div className="overflow-hidden w-full h-56 sm:h-64 md:h-52 lg:h-60">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-5 sm:p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {blog.categories.map((cat) => (
                  <span
                    key={cat}
                    className="text-xs bg-violet-900/30 text-violet-300 px-2.5 py-1 rounded-full font-medium"
                  >
                    {cat}
                  </span>
                ))}
              </div>

               <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 text-left ">
                {blog.title}
              </h3>

             
              <p className="text-gray-400 text-sm sm:text-base mb-4 text-left leading-relaxed">
                {blog.description}
              </p>

          
              <div className="flex flex-wrap items-center justify-between text-sm text-gray-400 border-t border-gray-700 pt-3">
                <span className="flex items-center gap-2">
                  <FaRegUser className="text-violet-400" /> {blog.author}
                </span>
                <span className="flex items-center gap-2">
                  <SlCalender className="text-violet-400" /> {blog.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
