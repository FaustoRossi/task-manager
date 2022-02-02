import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTask } from "../components/context/taskContext";
import Head from "next/head";

const NewTask = () => {
	const [task, setTask] = useState({ title: "", description: "" });

	const { createTask, updateTask, tasks } = useTask();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setTask({ ...task, [name]: value });
	};

	const { push, query } = useRouter();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!query.id) {
			createTask(task.title, task.description);
		} else {
			updateTask(query.id, task);
		}
		push("/");
	};

	useEffect(() => {
		if (query.id) {
			const taskFound = tasks.find((task) => task.id === query.id);
			if (taskFound)
				setTask({ title: taskFound.title, description: taskFound.description });
		}
	}, [query.id, tasks]);

	return (
		<>
			<Head>
				<title>Create| Edit Task</title>
				<meta name="description" content="task" />
			</Head>
			<div className="flex justify-center items-center h-full">
				{" "}
				<div className="bg-gray-700 p-2 h-2/4">
					<form onSubmit={handleSubmit} className="bg-gray-700 p-10 mt-4 h-2/4">
						<h1 className="text-3xl mb-7">
							{query.id ? "Update a task" : "Create a task"}
						</h1>
						<input
							onChange={handleChange}
							type="text"
							name="title"
							value={task.title}
							placeholder="Place a Title"
							className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5"
						/>
						<textarea
							onChange={handleChange}
							name="description"
							value={task.description}
							rows="2"
							placeholder="Description here"
							className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5"
						></textarea>
						<button
							className="bg-green-500 hover:bg-green-400  px-4 py-2 rounded-sm disabled:opacity-30"
							disabled={!task.title}
						>
							Save
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default NewTask;
