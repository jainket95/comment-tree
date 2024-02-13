import { Flex, Text, Title } from "@mantine/core";
import ModeButton from "./ModeButton/ModeButton";

const Header = () => {
	return (
		<>
			<Flex justify="space-between" align="center" gap="md">
				<Title size="3rem" my="1rem">
					Simple Recursive Comment Section (
					<Text span c="blue" inherit>
						Tree Data Structure
					</Text>
					)
				</Title>
				<ModeButton />
			</Flex>
			<Text fz="1.5rem">
				Simple Recursive Comment Section is just a Recursive UI Section with
				basic CRUD functionality implementing recursion on Frontend and Backend
				with Tree Data Structure.
			</Text>
		</>
	);
};

export default Header;
