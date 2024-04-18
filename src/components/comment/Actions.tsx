import { Box, Group, Text } from "@mantine/core";
import {
	IconArrowBigUp,
	IconArrowBigDown,
	IconMessageReply,
} from "@tabler/icons-react";
import Icon from "../Icon";
import { useState } from "react";

type ActionProps = {
	like: number;
	id: string;
	showInput: () => void;
	handleUpdateComment: (id: string, comment: object) => void;
};

const Actions = ({ id, like, showInput, handleUpdateComment }: ActionProps) => {
	const [count, setCount] = useState(like);

	const onCountUpdate = (type: string) => {
		switch (type) {
			case "inc":
				setCount((prevCount) => ++prevCount);
				break;
			case "dec":
				if (count === 0) return;
				setCount((prevCount) => --prevCount);
				break;
			default:
				return;
		}

		let tempCount = like;
		handleUpdateComment(id, {
			like: type === "inc" ? ++tempCount : --tempCount,
		});
	};

	return (
		<Group gap="md" ml="-.4rem">
			<Icon
				onClick={() => onCountUpdate("inc")}
				icon={<IconArrowBigUp size="1.1rem" />}
			/>
			<Box mr="-0.7rem" ml="-0.7rem" component="span">
				<Text variant="sm">{count}</Text>
			</Box>
			{count && (
				<Icon
					onClick={() => onCountUpdate("dec")}
					icon={<IconArrowBigDown size="1.1rem" />}
				/>
			)}
			<Icon
				left
				text="Reply"
				onClick={showInput}
				icon={<IconMessageReply size="1.1rem" />}
			/>
		</Group>
	);
};

export default Actions;
