import Post from "../Post/Post";
import Box from "@mui/material/Box";
import "./BodyPost.css";

export default function BodyPost(props) {
  let getFavArray = JSON.parse(localStorage.getItem("favs"));

  return (
    <Box className="body-post">
      {props.data
        .filter((element) =>
          props.booleanFav === true
            ? getFavArray.includes(element.objectID)
            : element
        )
        .map((element, key) => (
          <Post
            created_at={element.created_at}
            author={element.author}
            key={key + "-" + Date.now()}
            title={element.title ? element.title : element.story_title}
            time={element.created_at}
            id={element.objectID}
            url={element.story_url}
          />
        ))}
    </Box>
  );
}
