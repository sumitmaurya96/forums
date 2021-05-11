import { useState } from "react";

//Icons
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { GoCommentDiscussion } from "react-icons/go";

const YourForums = (props) => {
  const [yourForums, setYourForums] = useState([
    {
      dateCreated: new Date(),
      title: "Forum Heading",
      author: "Zishan",
      comments: 45,
      likes: 178,
      content:
        "This is forum's content, Here you can view covid-19 history and origination",
    },
    {
      dateCreated: new Date(),
      title: "Another Forum Heading",
      author: "Zishan",
      comments: 4,
      likes: 18,
      content:
        "This is forum's content, Here you can view covid-19 history and origination",
    },
  ]);

  return (
    <div className="row" style={{ width: "100%" }}>
      <div className="col-md-12">
        <div className="list-group p-4">
          {yourForums.map((val, ind) => {
            return (
              <a
                href="#"
                key={ind}
                className="list-group-item list-group-item-action "
                aria-current="true"
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">{val.title}</h5>
                  <small>
                    {Math.floor(
                      (new Date() - val.dateCreated) / (24 * 60 * 60)
                    )}{" "}
                    days ago
                  </small>
                </div>
                <p className="mb-1">{val.content}</p>
                <a href="#">@{val.author}</a>
                <div className="float-right">
                  <a href="#" className="btn btn-lg h3 text-danger">
                    <AiFillHeart /> {val.likes}
                  </a>
                  <a href="#" className="btn btn-lg h3 text-success ml-4">
                    <GoCommentDiscussion /> {val.comments}
                  </a>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default YourForums;
