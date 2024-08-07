import { useState } from "react";
import Comments from "../layouts/Comments";

const About = () => {
  const [comments, setComments] = useState([]);

  const handleDataFetch = (data) => {
    setComments(data);
  };

  return (
    <div>
      <h1>Page - 2</h1>
      <Comments onDataFetch={handleDataFetch} />
      <div className="w-full h-full flex flex-col items-center gap-4 mt-[1rem]">
        {comments &&
          comments.slice(0, 10).map((comment) => (
            <div
              key={comment.id}
              className="border-2 flex flex-col w-[60%] p-4 gap-2 rounded-sm shadow-sm"
            >
              <div className="flex justify-between">
                <p className="font-semibold text-lg">
                  {comment.id}. {comment.user.fullName}
                </p>
                <p>{comment.likes} Likes</p>
              </div>
              <p>{comment.body}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
export default About;
