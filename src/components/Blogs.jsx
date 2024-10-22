import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
import Bookmarked from "./Bookmarked";

const Blogs = () => {
    const [time, setTime] = useState(0)
    const [bookmarked, setBookmarked] = useState([])

    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch("blogs.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const handelBookmarked = bookmark => {
        const newBlog = [...bookmarked, bookmark]
        setBookmarked(newBlog)
    }

    const handelReadAsMark = (id, times) => {
        setTime(time + times)
        console.log("remove as", id);
        const remainingBookmark = bookmarked.filter(bookmark => bookmark.id !== id)
        setBookmarked(remainingBookmark)
    }
    return (
        <div className="flex gap-4">
            <div className="w-[60%]">
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                        handelBookmarked={handelBookmarked}
                        handelReadAsMark={handelReadAsMark}></Blog>)
                }
            </div>

            <div className="w-[40%]">
                <hr className="my-8" />
                <h2 className="py-5 bg-secondary/10 px-8 rounded-lg text-secondary text-2xl font-bold border border-solid border-secondary">Spent time on read : {time} min</h2>
                <div className="bg-[#1111110d] p-[30px] mt-6 rounded-lg">
                    <h3 className="text-primary font-bold text-2xl">Bookmarked Blogs : {bookmarked.length}</h3>

                    <div className="">
                        {
                            bookmarked.map((blog, index) => <Bookmarked key={index} bookmarkBlog={blog}></Bookmarked>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;