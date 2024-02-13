import { useEffect, useState } from "react";
import { Box, Group, Input } from "@mantine/core";
import { IconUserCircle, IconMessagePlus } from "@tabler/icons-react";
import Icon from "../../Icon";

type InputProps = {
	id?: string;
	editCommentData?: {
		isEditing: boolean;
		text: string;
		isEditingToggle: () => void;
	};
	handleAddComment: (id: string, text: string) => void;
	handleUpdateComment: (id: string, comment: object) => void;
	toggleInput?: () => void;
	prevCommentToggle?: () => void;
};

const InputComment = ({
	id,
	editCommentData,
	handleAddComment,
	handleUpdateComment,
	toggleInput,
	prevCommentToggle,
}: InputProps) => {
	const [comment, setComment] = useState("");

	useEffect(() => {
		if (editCommentData?.isEditing && editCommentData?.text)
			setComment(editCommentData?.text);
	}, []);

	const handleAdd = () => {
		//add comment
		if (!id) return;
		if (editCommentData?.isEditing && comment !== editCommentData.text) {
			handleUpdateComment(id, { text: comment, isEdited: true });
		} else {
			handleAddComment(id, comment);
		}
		editCommentData?.isEditingToggle();
		setComment("");
		if (toggleInput) toggleInput();
		if (prevCommentToggle && !editCommentData?.isEditing) prevCommentToggle();
	};

	return (
		<Box mb=".8rem">
			<Group justify="flex-start" align="center" gap="md" w="100%">
				<Icon icon={<IconUserCircle size="2rem" />} />
				<Input
					w="90%"
					size="md"
					radius="xl"
					value={comment}
					onChange={(e) => setComment(e.target.value)}
					// rightSection={
					// 	<Group justify="flex-end" gap="xs" grow>
					// 		<Icon icon={<IconMoodSmile size="1.4rem" />} />
					// 		<Icon icon={<IconLibraryPhoto size="1.4rem" />} />
					// 	</Group>
					// }
					rightSectionWidth="6rem"
					placeholder="write a comment..."
				/>
			</Group>
			{!!comment.length && (
				<Icon
					bg="gray"
					right
					text="Add Comment"
					onClick={handleAdd}
					mt="1rem"
					ml="3rem"
					p="1rem"
					disabled={comment.length < 5}
					icon={<IconMessagePlus size="1.4rem" />}
				/>
			)}
		</Box>
	);
};

export default InputComment;
