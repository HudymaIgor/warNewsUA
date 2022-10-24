import Post from "./Post";
import postJson from "../postJson.json"

export const App = () => {
  return (
    <div>
      {postJson.map(({title, description, imageFerst}, key) => <Post
         key={key}
         Title={title}
         Description={description}
         imageFerst={imageFerst} 
         />)      
    }
    </div>
  );
};
