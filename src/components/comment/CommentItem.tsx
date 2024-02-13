import { Box, Collapse, Flex, Group, Text } from "@mantine/core";
import { IconUserCircle, IconMessages } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { Comment } from "../../data/config";
import Icon from "../Icon";
import Comments from "../Comments";
import Header from "./Header";
import Actions from "./Actions";
import InputComment from "./InputComment/InputComment";

type CommentProps = {
	comment: Comment;
	setComments: React.Dispatch<React.SetStateAction<Comment[]>>;
	handleAddComment: (id: string, text: string) => void;
	handleDeleteComment: (id: string) => void;
	handleUpdateComment: (id: string, comment: object) => void;
};

const CommentItem = ({
	comment,
	setComments,
	handleAddComment,
	handleDeleteComment,
	handleUpdateComment,
}: CommentProps) => {
	const [showPrevComment, { toggle: prevCommentToggle }] = useDisclosure(false);
	const [showInput, { toggle: showInputToggle }] = useDisclosure(false);
	const [isEditing, { toggle: isEditingToggle }] = useDisclosure(false);

	const showPreviousReply = (comment: any) => {
		return comment.children && comment.children.length;
	};

	const handleEditComment = () => {
		isEditingToggle();
		showInputToggle();
	};

	return (
		<Flex
			justify="flex-start"
			align="flex-start"
			direction="row"
			wrap="nowrap"
			gap="md"
			my="1rem">
			<Icon icon={<IconUserCircle size="2rem" />} />

			<Flex direction="column" mt="-.3rem" w="100%">
				<Header
					comment={comment}
					handleEditComment={handleEditComment}
					handleDeleteComment={handleDeleteComment}
				/>

				<Text size="sm">{comment.text}</Text>

				<Actions
					id={comment.id}
					like={comment.like}
					showInput={showInputToggle}
					handleUpdateComment={handleUpdateComment}
				/>

				{showInput && (
					<InputComment
						editCommentData={{ isEditing, text: comment.text, isEditingToggle }}
						id={comment.id}
						handleAddComment={handleAddComment}
						handleUpdateComment={handleUpdateComment}
						toggleInput={showInputToggle}
						prevCommentToggle={prevCommentToggle}
					/>
				)}

				{!!showPreviousReply(comment) && (
					<Box>
						<Group justify="flex-start" ml="-.8rem">
							<Icon
								left
								text={`Toggle previous reply (${showPreviousReply(comment)})`}
								onClick={prevCommentToggle}
								ml=".8rem"
								icon={<IconMessages size="1.4rem" />}
							/>
						</Group>

						<Collapse ml=".5rem" in={showPrevComment}>
							{comment.children.map((comment, idx) => {
								if (Array.isArray(comment) && comment.length) {
									return (
										<Comments
											key={`tree-id: ${comment.id}-subtree: ${idx}`}
											comments={comment}
											setComments={setComments}
										/>
									);
								} else {
									return (
										<CommentItem
											key={`tree-id: ${comment.id}-subtree: ${idx}`}
											comment={comment}
											setComments={setComments}
											handleAddComment={handleAddComment}
											handleDeleteComment={handleDeleteComment}
											handleUpdateComment={handleUpdateComment}
										/>
									);
								}
							})}
						</Collapse>
					</Box>
				)}
			</Flex>
		</Flex>
	);
};

export default CommentItem;
