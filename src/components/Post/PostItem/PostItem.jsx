import React from 'react';
import { useNavigate } from 'react-router-dom';
import cl from './PostItem.module.css';

/* Components UI */
import MyDelButton from '../../UI/button/MyDelButton';
import MyButton from '../../UI/button/MyButton';


const PostItem = (props) => {
	const navigate = useNavigate();
	return (
		<div>
			<article className={cl.wrapper}>
				<div className={cl.post}>
					<div className={cl.postTitleWrap}>
						<h3 className={cl.postID}>{props.post.id}.</h3>
						<h3 className={cl.postTitle}>{props.post.title}</h3>
					</div>
					<div className={cl.postBodyWrap}>
						<p className={cl.postBody}>{props.post.body}</p>
						<MyButton onClick={() => navigate(`/posts/${props.post.id}`)}>Открыть</MyButton>
						<MyDelButton onClick={() => props.remove(props.post)}>
							Удалить
						</MyDelButton>
					</div>
				</div>
			</article>
		</div>
	)
}

export default PostItem;