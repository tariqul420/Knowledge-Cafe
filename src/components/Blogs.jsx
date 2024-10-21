import { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";

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

            </div>
        </div>
    );
};

const Blog = ({ blog }) => {
    const { cover, title, author_img, author, posted_date, reading_time, hashtags } = blog
    return (
        <div>
            <img src={cover} alt="" />
            <div className="flex justify-between">
                <div className="flex gap-4">
                    <div>
                        <img className="w-[60px]" src={author_img} alt="" />
                    </div>
                    <div>
                        <h3>Name</h3>
                        <p>Publish Date</p>
                    </div>
                </div>
                <div>
                    bookmarks
                </div>
            </div>
            <h2>Title</h2>
            <div className="flex gap-6">
                <p>tags</p>
                <p>tags</p>
            </div>
            <p><a href="#">Read as Mark</a></p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blogs;