//Icons
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { GoCommentDiscussion } from "react-icons/go";

const YourForums = (props) => {
  return (
    <div className="list-group">
      <a
        href="#"
        className="list-group-item list-group-item-action "
        aria-current="true"
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">List group item heading</h5>
          <small>3 days ago</small>
        </div>
        <p className="mb-1">Some placeholder content in a paragraph.</p>
        <small>And some small print.</small>
        <div className="float-right">
          <a href="#" className="btn btn-lg h3 text-danger">
            <AiFillHeart /> 10
          </a>
          <a href="#" className="btn btn-lg h3 text-success ml-4">
            <GoCommentDiscussion /> 39
          </a>
        </div>
      </a>
    </div>
  );
};

export default YourForums;
