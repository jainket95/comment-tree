import { Comment } from "../data/config";
import CommentItem from "./comment/CommentItem";
import InputComment from "./comment/InputComment/InputComment";
import useTreeTraverse from "../hooks/use-traverse-tree";

type CommentsProps = {
	comments: Comment[];
	setComments: React.Dispatch<React.SetStateAction<Comment[]>>;
};

const Comments = ({ comments, setComments }: CommentsProps) => {
	const { addComment, updateComment, deleteComment } = useTreeTraverse();

	const handleAddComment = (id: string, text: string) => {
		setComments((prevComments) => {
			return addComment([...prevComments], id, text);
		});
	};

	const handleUpdateComment = (id: string, comment: object) => {
		setComments((prevComments) => {
			return updateComment([...prevComments], id, comment);
		});
	};

	const handleDeleteComment = (id: string) => {
		setComments((prevComments) => {
			return deleteComment([...prevComments], id);
		});
	};

	return (
		<>
			{Array.isArray(comments) &&
				comments.length > 0 &&
				comments.map((data) => (
					<CommentItem
						key={data.id}
						comment={data}
						setComments={setComments}
						handleAddComment={handleAddComment}
						handleDeleteComment={handleDeleteComment}
						handleUpdateComment={handleUpdateComment}
					/>
				))}

			<InputComment
				handleAddComment={handleAddComment}
				handleUpdateComment={handleUpdateComment}
			/>
		</>
	);
};

export default Comments;
