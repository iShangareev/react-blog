import React from 'react';
import PostItem from './PostItem';

const PostList = ({posts, title, remove}) => {
  if(!posts.length) {
    return (
      <h3 style={{textAlign:'center', marginTop:'20px'}}>Посты не найдены :(</h3>
    )
  }
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>
        {title}
      </h1>
      {posts.map((post, index) =>
        <PostItem remove={remove} number={index + 1} post={post} key={post.id}/>
        )}
    </div>
  );
};

export default PostList;
