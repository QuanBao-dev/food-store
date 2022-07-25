import { useState } from "react";
import Stars from "../Stars/Stars";
import "./FormSubmitReview.css";
const FormSubmitReview = () => {
  const [activeKeyStar, setActiveKeyStar] = useState(-1);
  return (
    <form className="container-form-submit-review">
      <div className="container-image">
        <i className="fas fa-user"></i>
      </div>
      <div className="container-input-text">
        <Stars
          amount={0}
          maxStars={5}
          isEditable={true}
          activeKeyStar={activeKeyStar}
          setActiveKeyStar={setActiveKeyStar}
        />
        <textarea
          name="Review textarea"
          placeholder="Type your comment here..."
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button
          className="button-post-comment"
          onClick={(e) => {
            e.preventDefault();
            console.log({
              star: activeKeyStar + 1,
              username: "",
              createdAt: new Date(Date.now()),
            });
          }}
        >
          Post Comment
        </button>
      </div>
    </form>
  );
};

export default FormSubmitReview;
