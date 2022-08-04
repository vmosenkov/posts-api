import React, { useState, useEffect, useRef } from 'react'
import '../styles/App.css';
import { useFetching } from "../hooks/useFetching.js";
import { usePosts } from "../hooks/usePosts.js";

/* Components */
import { Main } from '../components/Main';
import MyModal from '../components/UI/MyModal/MyModal';

/* Components - Post*/
import PostList from '../components/Post/PostList/PostList';
import PostForm from '../components/Post/PostForm/PostForm';
import PostFilter from '../components/Post/PostFilter/PostFilter';

/* Other */
import MyButton from '../components/UI/button/MyButton';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { getPageCount } from '../utils/pages';
import Pagination from '../components/UI/pagination/pagination';
import { useObserver } from '../hooks/useObserver';
import MySelect from '../components/UI/MySelect';



function Posts() {
	const [posts, setPosts] = useState([])
	const [filter, setFilter] = useState( {sort: '', query: ''})
	const [modal, setModal] = useState(false);
	const [totalPages, setTotalPages] = useState(0);
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(1);
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
	const lastElement = useRef()

	const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
		const response = await PostService.getAll(limit, page);
		setPosts([...posts,...response.data])
		const totalCount = response.headers['x-total-count'];
		setTotalPages(getPageCount(totalCount, limit));
	})
	
	useObserver(lastElement, page < totalPages, isPostsLoading, () => {
		setPage(page + 1);
	})
	

	useEffect(() => {
		fetchPosts(limit, page)
	}, [page, limit]) //Отработает 1 раз  в момент монтирования компонента
	// Если вписать в [filter], то отработает на каждое  изменение filter
	/* useEffect(() => {
		fetchPosts()
		return () => {
			Делаем очистку
		}
	}, []) */ 
	// Отработает, когда компонент будет уничтожаться

	const createPost = (newPost) => {
		setPosts([...posts, newPost])
		setModal(false)
	}

	// Получаем post из дочернего  компонента
	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	const changePage = (page) => {
		setPage(page)
	}

	return (
		<div className="App">
			
			<Main>
				<button onClick={fetchPosts}>Get posts</button>
				<MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>Создать пост</MyButton>
				<MyModal visible={modal} setVisible={setModal}>
					<PostForm create={createPost}/>
				</MyModal>
			
			<PostFilter
				filter={filter}
				setFilter={setFilter}
			/>
			<MySelect
				value={limit}
				onChange={value => setLimit(value)}
				defaultValue="Кол-во элементов на странице"
				options={[
					{value: 5, name: '5'},
					{value: 10, name: '10'},
					{value: 25, name: '25'},
					{value: -1, name: 'Показать все посты'},
				]}
			/>
			{postError &&
				<div style={{
						textAlign: 'center', 
						marginTop: '10%'
					}}>
					<h1>Произошла ошибка</h1>
					<h1 style={{
							marginTop: '10px', 
							color: 'red'
						}}>${postError}
					</h1>
				</div>
				
			}
			<PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов по JS" />
			<div ref={lastElement} style={{height:50, background: 'red'}}></div>
			{isPostsLoading &&
				<Loader/>
			}
			<Pagination
				page={page}
				changePage={changePage}
				totalPages={totalPages} 
			/>
			
			
			{/* Условная отрисовка */}
			{/* {sortedAndSearchedPosts.length  !== 0 можно удалить и ничего не изменится
				? 
				<PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов по JS" />
				: 
				<h1 style={{textAlign: 'center'}}>
					Хей, дружок-пирожок! Постов нет, но ты можешь его создать сам.
				</h1>
			} */}
			{/* // Условная отрисовка */}
			
			</Main>
		</div>
	);
}

export default Posts;