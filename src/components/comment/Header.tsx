import { Box, Group, Menu, Text, Title } from "@mantine/core";

import {
	IconDots,
	IconMessageExclamation,
	IconTrash,
	IconSearch,
} from "@tabler/icons-react";
import Icon from "../Icon";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import { Comment } from "../../data/config";
dayjs.extend(relativeTime);

type HeaderProps = {
	comment: Comment;
	handleEditComment: () => void;
	handleDeleteComment: (id: string) => void;
};

const Header = ({
	comment: { id, name, timestamp, isEdited },
	handleEditComment,
	handleDeleteComment,
}: HeaderProps) => {
	const handleDelete = (e: any) => {
		e.preventDefault();
		handleDeleteComment(id);
	};
	const handleEdit = () => {
		handleEditComment();
	};
	return (
		<Group gap="xs" mb=".3rem">
			<Title mr=".5rem" order={5}>
				{name}
			</Title>
			<Text mr=".5rem" size="0.7rem">
				{dayjs(timestamp).fromNow(true)}
			</Text>
			{isEdited && (
				<Text size="0.7rem" fs="italic">
					edited
				</Text>
			)}

			<Box ml="auto">
				<Menu position="right" shadow="md" withArrow offset={12}>
					<Menu.Target>
						<Icon icon={<IconDots size="1.1rem" />} />
					</Menu.Target>
					<Menu.Dropdown>
						<Menu.Label>Operations</Menu.Label>
						<Menu.Item
							leftSection={<IconMessageExclamation size="1.1rem" />}
							onClick={handleEdit}>
							Edit
						</Menu.Item>
						<Menu.Item leftSection={<IconSearch size="1.1rem" />}>
							Search
						</Menu.Item>
						<Menu.Item
							leftSection={<IconTrash size="1.1rem" />}
							onClick={handleDelete}>
							Delete
						</Menu.Item>
					</Menu.Dropdown>
				</Menu>
			</Box>
		</Group>
	);
};

export default Header;
