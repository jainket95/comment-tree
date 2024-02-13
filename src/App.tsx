import "@mantine/core/styles.css";
import { Container, MantineProvider } from "@mantine/core";
import { useState } from "react";
import Header from "./components/Header";
import Comments from "./components/Comments";
import { Comment, commentsConfig } from "./data/config";

const App = () => {
	const [comments, setComments] = useState<Comment[]>(commentsConfig);

	return (
		<MantineProvider defaultColorScheme="dark">
			<Container fluid h="100vh" px="8rem">
				<Header />
				<Comments comments={comments} setComments={setComments} />
			</Container>
		</MantineProvider>
	);
};

export default App;
