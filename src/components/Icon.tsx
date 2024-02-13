import { ActionIcon, Flex, Group, Text } from "@mantine/core";
import { cloneElement, forwardRef } from "react";

const Icon = forwardRef((props: any, ref) => {
	const iconProps = props.icon;

	const iconWithProps = cloneElement(iconProps, {
		size: iconProps.props.size || "2rem", // Default size if not provided
		stroke: iconProps.props.stroke || 1.2, // Default stroke if not provided
	});

	return (
		<ActionIcon
			ref={ref}
			variant="transparent"
			color="gray"
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
