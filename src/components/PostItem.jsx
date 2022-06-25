import styled from 'styled-components';
import React from 'react';

/* Components UI */
import MyDelButton from './UI/button/MyDelButton';

const Wrapper = styled.article`
	margin-top: 1.5rem;
	border-radius: var(--radius);
	background-color: car(--color-ui-base);
	box-shadow: var(--shadow);
	overflow: hidden;
`;

const Post = styled.div`
	padding: 1rem;

`;
const PostTitleWrap = styled.div`
	display: flex;
	justify-content: start;
	align-items: center;
`;

const PostID= styled.h3`
	margin: 0.5rem;
	font-size: var(--fs-md);
	font-weight: var(--fw-bold);
`;

const PostTitle = styled.h3`
	margin: 0.5rem;
	font-size: var(--fs-md);
	font-weight: var(--fw-bold);
`;

const PostBodyWrap = styled.div`
	display: block;
	justify-content: start;
	align-items: center;

	@media (min-width: 767px) {
		display: flex;
		justify-content: space-between;
		align-items: center;
`;

const PostBody = styled.p`
	margin: 0.5rem;
	font-size: var(--fw-sm);
	font-weight: var(--fw-light);
`;


const PostItem = (props) => {
	return (
		<div>
			<Wrapper>
				<Post>
					<PostTitleWrap>
						<PostID>{props.number}.</PostID>
						<PostTitle>{props.post.title}</PostTitle>
					</PostTitleWrap>
					<PostBodyWrap>
						<PostBody>{props.post.body}</PostBody>
						<MyDelButton onClick={() => props.remove(props.post)}>Удалить</MyDelButton>
					</PostBodyWrap>
				</Post>
			</Wrapper>
		</div>
	)
}

export default PostItem;