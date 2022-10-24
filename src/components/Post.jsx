import React from "react";

const Post = (  { Title, Description, imageFerst } ) =>{
   return (
      <div className="post">
         <div style={{ backgroundImage: `url(${imageFerst})`}} className="post__image"></div>
         <div className="post__info">
            <h2 className="post__title">{Title}</h2>
            <p className="post__description">{Description}</p>
         </div>

      </div>
   )
};
export default Post;