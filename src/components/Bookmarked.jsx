import PropTypes from "prop-types";

const Bookmarked = ({bookmarkBlog}) => {
    console.log(bookmarkBlog);
    return (
        <div className="p-5 font-semibold text-lg text-primary bg-white mt-4 rounded-lg">
            <h2>{bookmarkBlog?.title}</h2>
        </div>
    );
};

Bookmarked.propTypes = {
    bookmarkBlog: PropTypes.object.isRequired,
}

export default Bookmarked;