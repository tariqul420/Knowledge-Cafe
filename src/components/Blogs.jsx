import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch("blogs.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="flex gap-4">
            <div className="w-[60%]">
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>

            <div className="w-[40%]">
                <hr className="my-8" />
                <h2 className="py-5 bg-secondary/10 px-8 rounded-lg text-secondary text-2xl font-bold border border-solid border-secondary">Spent time on read : 177 min</h2>
                <div className="bg-[#1111110d] p-[30px] mt-6 rounded-lg">
                <h3 className="text-primary font-bold text-2xl">Bookmarked Blogs : 8</h3>
                
                <div className="">

                </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;