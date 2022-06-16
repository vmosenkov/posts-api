import React, { useState } from 'react'
import './styles/App.css';

/* Components */
import { ClassCounter } from './components/ClassCounter';
import { Counter } from './components/Counter';
import { Header } from './components/Header';
import { Main } from './components/Main';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import { eventWrapper } from '@testing-library/user-event/dist/utils';

function App() {
	const [posts, setPosts] = useState([
		{id: 1, title: 'JavaScript 1', body: 'Description' },
		{id: 2, title: 'JavaScript 2', body: 'Description' },
		{id: 3, title: 'JavaScript 3', body: 'Description' },
	])

	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')

	const addNewPost = (e) => {
		e.preventDefault()
		const newPost = {
			id: Date.now(),
			title,
			body
		}
		console.log(newPost);
		setPosts([...posts, newPost])
	}
	
	return (
    	<div className="App">
			<Header/>
			<Main>
				<form>
					<MyInput
						value = { title }
						onChange = {e => setTitle(e.target.value) }
					/>
					<MyInput
						value = { body }
						onChange = {e => setBody(e.target.value) }
					/>
					<MyButton onClick={addNewPost}>Создать пост</MyButton>
				</form>
				<PostList posts={posts} title="Список постов по JS" />
			</Main>
    	</div>
  	);
}

export default App;