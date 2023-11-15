import React, { useState, useEffect } from "react";
import image1 from "../Images/image1.avif";
import Button from "react-bootstrap/Button";
import { BsFillPencilFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { AddComment, DeleteComment, editComment } from "../Slices/CommentSlice";

const Comments = () => {
  const dispatch = useDispatch();
  const { commentsData } = useSelector((state) => state.comments);
  const [newComment, setNewComment] = useState("");
  const [newName, setNewName] = useState("");

  const [editedName, setEditedName] = useState("");
  const [editCommentId, setEditCommentId] = useState(null);
  const [editedComment, setEditedComment] = useState("");

  useEffect(() => {
    // Retrieve comments from local storage on component mount
    const storedComments = localStorage.getItem("commentsData");
    if (storedComments) {
      try {
        const parsedComments = JSON.parse(storedComments);
        if (Array.isArray(parsedComments)) {
          dispatch(AddComment(parsedComments)); // Dispatch retrieved comments
        } else {
          console.error("Stored comments are not in the expected format.");
        }
      } catch (error) {
        console.error("Error parsing stored comments:", error);
      }
    }
  }, [dispatch]);

  useEffect(() => {
    // Update local storage when commentsData changes
    localStorage.setItem("commentsData", JSON.stringify(commentsData));
  }, [commentsData]);

  const handlePostComment = () => {
    if (newName.trim() !== "" && newComment.trim() !== "") {
      dispatch(
        AddComment({ name: newName, content: newComment, id: Date.now() })
      ); // Use a unique identifier for the comment

      setNewName("");
      setNewComment("");
    }
  };

  const handleEditComment = () => {
    if (editedName.trim() !== "" && editedComment.trim() !== "") {
      dispatch(
        editComment({
          id: editCommentId,
          content: editedComment,
          name: editedName,
        })
      );
      setEditCommentId(null);
      setEditedComment("");
      setEditedName("");
    }
  };

  const handleDeleteComment = (id) => {
    dispatch(DeleteComment(id));
  };
  console.log(commentsData);
  return (
    <div className="">
      <h3>Comments</h3>
      <div className="">
        <div className="card mb-3 border-0">
          <div className="row g-0">
            <div className="col-4">
              <img
                src={image1}
                className="img-fluid rounded-start h-100 object-fit-cover"
                alt="..."
              />
            </div>
            <div className="col-8">
              <div class="statictext">
                <div className="card-body">
                  <h5 className="card-title">Sherlyn</h5>
                  <p className="card-text">
                    I am using this product around 5 years and its fine and
                    value of money
                  </p>
                  <div className="d-flex justify-content-end align-items-center gap-3">
                    <button className="btn">
                      <BsFillPencilFill />
                    </button>
                    <button className="btn">
                      <AiFillDelete />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {commentsData.map((body) => (
          <div key={body.id}>
            {editCommentId === body.id ? (
              <>
                <div className="card mb-3 border-0">
                  <div className="card-body">
                    <div className="d-flex flex-column gap-3">
                      <input
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                        placeholder="Edit Your Name"
                      />
                      <textarea
                        value={editedComment}
                        onChange={(e) => setEditedComment(e.target.value)}
                      ></textarea>
                      <button
                        onClick={handleEditComment}
                        className="btn btn-primary"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {body.name &&
                  body.content && ( // Added parentheses here
                    <div class="statictext">
                      <div className="card mb-3 border-0">
                        <div className="card-body">
                          <h5 className="card-title">{body.name}</h5>
                          <p className="card-text">{body.content}</p>
                          <div className="d-flex justify-content-end align-items-center gap-3">
                            <p className="card-text">{body.changetext}</p>
                            <button
                              onClick={() => setEditCommentId(body.id)}
                              className="btn"
                            >
                              <BsFillPencilFill />
                            </button>
                            <button
                              onClick={() => handleDeleteComment(body.id)}
                              className="btn"
                            >
                              <AiFillDelete />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
              </>
            )}
          </div>
        ))}

        <div className="addnew">
          
          <div className=" d-flex flex-column gap-3">
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter your Name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <textarea
              style={{ height: "100px" }}
              className="form-control"
              id="floatingTextarea"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            ></textarea>
          </div>
          <div className="mt-2">
            <button className="btn btn-primary" onClick={handlePostComment}>
              Post Your View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Comments;
