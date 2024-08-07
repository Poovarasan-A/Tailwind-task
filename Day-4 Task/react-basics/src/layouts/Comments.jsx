import { useQuery } from "react-query";
import axios from "axios";

const fetchComments = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/comments");
    return response.data;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log(error.message);
    }
  }
};

const Comments = ({ onDataFetch }) => {
  const { data } = useQuery("comments", fetchComments, {
    suspense: true,
  });

  const comments = data.comments;

  if (onDataFetch && comments) {
    onDataFetch(comments);
  }

  return (
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
  );
};

export default Comments;
