import React, { useState } from 'react';

/* Components UI */
import MyInputPostName from '../../UI/input/MyInputPostName';
import MyInputPostDesc from '../../UI/input/MyInputPostDesc';
import MyButton from '../../UI/button/MyButton';

const PostForm = ({create}) => {
	const [post, setPost] = useState({title: '', body: ''})
	
	const addNewPost = (e) => {
		e.preventDefault()
		// setPosts([...posts, {...post, id: Date.now()}])
		const newPost = {
			...post, id: Date.now()
		}
		create(newPost)
		setPost({title: '', body: ''})
	}
  return (
    <form>
			<MyInputPostName
				value = { post.title }
				onChange = {e => setPost({...post, title: e.target.value}) }
			/>
			<MyInputPostDesc
				value = { post.body }
				onChange = {e => setPost({...post, body: e.target.value}) }
			/>
			<MyButton onClick={addNewPost}>Создать пост</MyButton>
		</form>
  )
}

export default PostForm;