import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostsService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';

const PostIdPages = () => {
  const params = useParams()
  const [post, setPost] = useState({});
  const [fecthPostById, isLoading, error] = useFetching(async () => {
    const response = await PostsService.getByID(params.id)
    setPost(response.data)
  })

  useEffect(() => {
    fecthPostById()
  }, [])

  return (
    <div>
      <h1>Вы открыли страницу поста с ID = {params.id}</h1>
      {isLoading
        ? <Loader/>
        : <div>{post.id}.{post.title}</div>}
    </div>
  );
};

export default PostIdPages;
