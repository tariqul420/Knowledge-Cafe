
import PropTypes from "prop-types";

const Blog = ({ blog }) => {
    const { cover, title, author_img, author, posted_date, reading_time, hashtags } = blog
    return (
        <>
            <hr className="my-8" />
            <div>
                <img src={cover} alt="" />
                <div className="flex justify-between mt-8">
                    <div className="flex gap-4">
                        <div>
                            <img className="w-[60px]" src={author_img} alt="" />
                        </div>
                        <div>
                            <h3 className="font-bold text-2xl text-primary">{author}</h3>
                            <p className="text-primary/60">{posted_date}</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-primary/60 font-bold">{reading_time} min read <i className="fa-regular fa-bookmark cursor-pointer"></i></p>
                    </div>
                </div>
                <h2 className="text-primary font-bold text-4xl mt-[18px]">{title}</h2>
                <div className="flex gap-6 mt-4">
                    <p className="text-primary/60 font-semibold">#{hashtags[0]}</p>
                    <p className="text-primary/60 font-semibold">#{hashtags[1]}</p>
                </div>
                <p className="text-xl text-secondary underline font-semibold mt-5"><a href="#">Read as Mark</a></p>
            </div>
        </>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog
