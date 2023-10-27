import React, { useState, useEffect } from "react";
import image1 from "../Images/image1.avif";
import Button from "react-bootstrap/Button";
import { BsFillPencilFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { AddComment, DeleteComment, editComment } from "../Slices/CommentSlice";

const Comments = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments);
  const [newComment, setNewComment] = useState("");
  const [editCommentId, setEditCommentId] = useState(null);
  const [editedComment, setEditedComment] = useState("");

  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      try {
        const parsedComments = JSON.parse(storedComments);
        if (Array.isArray(parsedComments)) {
          // Filter out invalid comments
          const validComments = parsedComments.filter(
            (comment) => comment.id && comment.content,
          );
          dispatch(AddComment(validComments));
        } else {
          console.error("Stored comments are not in the expected format.");
        }
      } catch (error) {
        console.error("Error parsing stored comments:", error);
      }
    }
  }, [dispatch]);

  const handlePostComment = () => {
    if (newComment.trim() !== "") {
      dispatch(AddComment({ content: newComment, id: Date.now() })); // Use a unique identifier for the comment
      setNewComment("");
    }
  };

  const handleEditComment = () => {
    if (editedComment.trim() !== "") {
      dispatch(editComment({ id: editCommentId, content: editedComment }));
      setEditCommentId(null);
      setEditedComment("");
    }
  };

  const handleDeleteComment = (id) => {
    dispatch(DeleteComment(id));
  };
  console.log(comments);
  // return (
  //     <div className="">
  //       <h3>Comments</h3>
  //       <div className="">
  //         <div className="card mb-3 border-0">
  //           <div className="row g-0">
  //             <div className="col-4">
  //               <img
  //                 src={image1}
  //                 className="img-fluid rounded-start h-100 object-fit-cover"
  //                 alt="..."
  //               />
  //             </div>
  //             <div className="col-8">
  //               <div class="statictext">
  //                 <div className="card-body">
  //                   <h5 className="card-title">Sherlyn</h5>
  //                   <p className="card-text">
  //                     I am using this product around 5 years and its fine and
  //                     value of money
  //                   </p>
  //                   <div className="d-flex justify-content-end align-items-center gap-3">
  //                     <button className="btn">
  //                       <BsFillPencilFill />
  //                     </button>
  //                     <button className="btn">
  //                       <AiFillDelete />
  //                     </button>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="addnew">
  //           <div className="form-floating">
  //             {/* {comments.map((body) => (
  //               <div key={body.id} className="card mb-3 border-0">
  //                 <div className="card-body">
  //                   {editCommentId === body.id ? (
  //                     <>
  //                       <textarea
  //                         value={editedComment}
  //                         onChange={(e) => setEditedComment(e.target.value)}
  //                       ></textarea>
  //                       <button onClick={handleEditComment}>Save</button>
  //                     </>
  //                   ) : (
  //                     <>
  //                       <h5 className="card-title">Sherlyn</h5>
  //                       <p className="card-text">{body.content}</p>
  //                       <button onClick={() => setEditCommentId(body.id)}>
  //                         Edit
  //                       </button>
  //                       <button onClick={() => handleDeleteComment(body.id)}>
  //                         Delete
  //                       </button>
  //                     </>
  //                   )}
  //                 </div>
  //               </div>
  //             ))} */}
  //             <div className="addnew">
  //               <div className="form-floating">
  //                 <textarea
  //                   style={{ height: "100px" }}
  //                   className="form-control"
  //                   placeholder="Leave a comment here"
  //                   id="floatingTextarea"
  //                   value={newComment}
  //                   onChange={(e) => setNewComment(e.target.value)}
  //                 ></textarea>
  //                 <label htmlFor="floatingTextarea">Add new Comment</label>
  //               </div>
  //               <div className="mt-2">
  //                 <button className="btn btn-primary" onClick={handlePostComment}>
  //                   Post Your View
  //                 </button>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  // );
};
export default Comments;
