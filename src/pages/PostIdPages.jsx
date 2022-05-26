import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostsService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';

const PostIdPages = () => {
  const params = useParams()
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fecthPostById, isLoading, error] = useFetching(async () => {
    const response = await PostsService.getByID(params.id)
    setPost(response.data)
  })

  const [fecthComments, isComLoading, comError] = useFetching(async () => {
    const response = await PostsService.getCommentByPostID(params.id)
    setComments(response.data)
  })

  useEffect(() => {
    fecthPostById()
    fecthComments()
  }, [])

  return (
    <div>
      <h1>Вы открыли страницу поста с ID = {params.id}</h1>
      {isLoading
        ? <Loader/>
        : <div>{post.id}.{post.title}</div>
      }
      <h1>
        комментарии
      </h1>
      {isComLoading
        ? <Loader/>
        : <div>
            {comments.map(comm =>
              <div style={{margin: 20}}>
                <h4>{comm.email}</h4>
                <div>{comm.body}</div>
              </div>
            )}
          </div>
      }
    </div>
  );
};

export default PostIdPages;
