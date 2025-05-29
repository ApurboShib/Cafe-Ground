import Bookmark from "./Bookmark";
import PropTypes from "prop-types";

const Bookmarks = ({ bookmarks, readingTime }) => (
  <aside className="md:w-1/3 p-4">
    <div className="bg-purple-100 p-4 rounded mb-4 font-bold">
      Reading Time: {readingTime} min
    </div>
    <h2 className="text-xl font-bold mb-2">
      Bookmarked Blogs: {bookmarks.length}
    </h2>
    {bookmarks.map((bookmark, idx) => (
      <Bookmark key={idx} bookmark={bookmark} />
    ))}
  </aside>
);

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};

export default Bookmarks;
