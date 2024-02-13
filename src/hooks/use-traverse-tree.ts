import { v4 } from "uuid";
import { Comment } from "../data/config";

const addCommentToParent = (
	comments: Comment[],
	parentId: string,
	newComment: Comment
): Comment[] => {
	const addComment = (
		comments: Comment[],
		parentId: string,
		newComment: Comment
	): boolean => {
		for (let i = 0; i < comments.length; i++) {
			if (comments[i].id === parentId) {
				comments[i].children.unshift(newComment); // Add newComment to the found parent's children
				return true; // Return true to indicate the new comment has been added
			}
			// If the current comment is not the parent, recursively search its children
			const isAdded = addComment(comments[i].children, parentId, newComment);
			if (isAdded) {
				return true; // Propagate the success of adding the comment back up the recursion chain
			}
		}
		return false; // Return false if the parent comment is not found at all
	};

	addComment(comments, parentId, newComment);
	return comments;
};

const useTreeTraverse = () => {
	const addComment = (comments: Comment[], id: string, commentText: string) => {
		let newComment = {
			id: v4(),
			timestamp: new Date(),
			name: "fake user",
			text: commentText,
			like: 0,
			isEdited: false,
			children: [],
		};

		if (!id) {
			comments.unshift(newComment);
			return comments;
		}

		return addCommentToParent(comments, id, newComment);
	};

	const updateComment = (comments: Comment[], id: string, comment: object) => {
		const editComment = (
			comments: Comment[],
			parentId: string,
			comment: object
		): boolean => {
			for (let i = 0; i < comments.length; i++) {
				if (comments[i].id === parentId) {
					comments[i] = { ...comments[i], ...comment };
					return true;
				}

				const isUpdated = editComment(comments[i].children, parentId, comment);
				if (isUpdated) {
					return true;
				}
			}
			return false;
		};

		editComment(comments, id, comment);
		return comments;
	};

	const searchComment = () => {};

	const deleteComment = (comments: Comment[], id: string) => {
		const removeComment = (comments: Comment[], parentId: string): boolean => {
			for (let i = 0; i < comments.length; i++) {
				if (comments[i].id === parentId) {
					comments.splice(i, 1);
					return true;
				}
				const isDeleted = removeComment(comments[i].children, parentId);
				if (isDeleted) {
					return true;
				}
			}
			return false;
		};

		removeComment(comments, id);
		return comments;
	};

	return {
		addComment,
		updateComment,
		searchComment,
		deleteComment,
	};
};

export default useTreeTraverse;
