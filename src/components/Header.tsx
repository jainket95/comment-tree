import { Flex, Text, Title } from "@mantine/core";
import ModeButton from "./ModeButton/ModeButton";

const Header = () => {
	return (
		<>
			<Flex
				justify="space-between"
				align="center"
				gap="md"
				mt="1rem"
				mb="0.5rem">
				<Title size="2.8rem" c="blue">
					NestedDialogues {"  "}
					<Text span c="white" fz="1.8rem">
						Building a Hierarchical Comment Section
					</Text>
				</Title>
				<ModeButton />
			</Flex>
			<Text fz="1.2rem">
				The{" "}
				<Text span c="blue" fs="italic" inherit>
					NestedDialogues
				</Text>{" "}
				is essentially a Recursive UI Section that incorporates basic Create,
				Read, Update, Delete (CRUD) operations.
				<br /> It employs recursion in both the frontend and backend, utilizing
				a tree data structure for organization.
			</Text>
		</>
	);
};

export default Header;
