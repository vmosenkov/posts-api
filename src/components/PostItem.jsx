import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.article`
	margin-top: 1.5rem;
	border-radius: var(--radius);
	background-color: car(--color-ui-base);
	box-shadow: var(--shadow);
	overflow: hidden;
`;

const Post = styled.div`
	padding: 1rem 1.5rem 2rem;
	display: flex;
	padding: 1.5rem;
	justify-content: space-between;
	align-items: center;
`;

const PostTitle = styled.h3`
	margin: 0;
	font-size: var(--fs-md);
	font-weight: var(--fw-bold);
`;


const PostItem = (props) => {
	return (
		<div>
			<Wrapper>
				<Post>
					<PostTitle>{props.post.id} {props.post.title} </PostTitle>
						<div>{props.post.body}</div>
						<div className="post__btns">
							<button>Удалить пост</button>
						</div>
				</Post>
			</Wrapper>
		</div>
  	)
}

export default PostItem;