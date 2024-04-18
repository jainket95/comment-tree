import {
	ActionIcon,
	Flex,
	Group,
	Text,
	useComputedColorScheme,
} from "@mantine/core";
import { cloneElement, forwardRef } from "react";

const Icon = forwardRef((props: any, ref) => {
	const iconProps = props.icon;
	const computedColorScheme = useComputedColorScheme("light", {
		getInitialValueInEffect: true,
	});

	const iconWithProps = cloneElement(iconProps, {
		size: iconProps.props.size || "2rem", // Default size if not provided
		stroke: iconProps.props.stroke || 1.5, // Default stroke if not provided
	});

	return (
		<ActionIcon
			ref={ref}
			variant="transparent"
			p="md"
			color={computedColorScheme === "dark" ? "gray" : "black"}
			radius="xs"
			w={props.text && "auto"}
			{...props}>
			{props.text ? (
				<Flex
					direction={props.left ? "row" : props.right ? "row-reverse" : "row"}
					justify="center"
					align="center"
					gap="sm">
					{iconWithProps}
					{props.text ? <Text size="sm">{props.text}</Text> : ""}
				</Flex>
			) : (
				<Group justify="center" align="center" gap="sm">
					{iconWithProps}
				</Group>
			)}
		</ActionIcon>
	);
});

export default Icon;
