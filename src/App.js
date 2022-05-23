import React, {useEffect, useState} from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import './styles/App.css'
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import PostsService from './API/PostService';
import Loader from './components/UI/Loader/Loader';
import { useFetching } from './hooks/useFetching';
import {usePosts} from './hooks/usePosts'

function App() {
  const [posts, setPosts] = useState([])

  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [fetchPosts, isPostLoading, postError] = useFetching( async () => {
    const posts = await PostsService.getAll()
    setPosts(posts)
  })

  useEffect(() => {
    fetchPosts()
  },[])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <hr style={{margin:'15px 0'}}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}/>
      {postError &&
        <h1 style={{textAlign: 'center'}}>Произошла ошибка ${postError}</h1>
      }
      {
        isPostLoading
        ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
             <Loader/>
           </div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Список постов'}/>
      }
    </div>
  );
}

export default App;
