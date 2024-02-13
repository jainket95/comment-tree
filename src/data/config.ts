import { v4 } from "uuid";
import {
	getRandomNumber,
	getRandomComments,
	getRandomNames,
	getRandomDate,
} from "../utils";

export type Comment = {
	id: string;
	name: string;
	text: string;
	like: number;
	timestamp: Date;
	isEdited: Boolean;
	children: Comment[];
};

export const commentsConfig: Comment[] = [
	{
		id: v4(),
		timestamp: getRandomDate(),
		name: getRandomNames(),
		text: getRandomComments(),
		like: getRandomNumber(),
		isEdited: false,
		children: [
			{
				id: v4(),
				timestamp: getRandomDate(),
				name: getRandomNames(),
				text: getRandomComments(),
				like: getRandomNumber(),
				isEdited: false,
				children: [],
			},
			{
				id: v4(),
				timestamp: getRandomDate(),
				name: getRandomNames(),
				text: getRandomComments(),
				like: getRandomNumber(),
				isEdited: false,
				children: [
					{
						id: v4(),
						timestamp: getRandomDate(),
						name: getRandomNames(),
						text: getRandomComments(),
						like: getRandomNumber(),
						isEdited: false,
						children: [],
					},
				],
			},
			{
				id: v4(),
				timestamp: getRandomDate(),
				name: getRandomNames(),
				text: getRandomComments(),
				like: getRandomNumber(),
				isEdited: false,
				children: [
					{
						id: v4(),
						timestamp: getRandomDate(),
						name: getRandomNames(),
						text: getRandomComments(),
						like: getRandomNumber(),
						isEdited: false,
						children: [],
					},
					{
						id: v4(),
						timestamp: getRandomDate(),
						name: getRandomNames(),
						text: getRandomComments(),
						like: getRandomNumber(),
						isEdited: false,
						children: [],
					},
					{
						id: v4(),
						timestamp: getRandomDate(),
						name: getRandomNames(),
						text: getRandomComments(),
						like: getRandomNumber(),
						isEdited: false,
						children: [],
					},
				],
			},
		],
	},
	{
		id: v4(),
		timestamp: getRandomDate(),
		name: getRandomNames(),
		text: getRandomComments(),
		like: getRandomNumber(),
		isEdited: false,
		children: [],
	},
	{
		id: v4(),
		timestamp: getRandomDate(),
		name: getRandomNames(),
		text: getRandomComments(),
		like: getRandomNumber(),
		isEdited: false,
		children: [],
	},
];
