//Icons
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { GoCommentDiscussion } from "react-icons/go";

const YourPosts = (props) => {
  return (
    <div>
      <div className="card bg-warning" style={{ width: "18rem" }}>
        <img
          src="https://www.plannthat.com/wp-content/uploads/2017/06/Facebook-Post-3.jpg"
          className="card-img-top"
          alt="Child"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="px-2">
            <a href="#" className="btn btn-lg h3 text-danger">
              <AiFillHeart /> 10
            </a>
            <a href="#" className="btn btn-lg h3 text-success float-right">
              <GoCommentDiscussion /> 39
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourPosts;
