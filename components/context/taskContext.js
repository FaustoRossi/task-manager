import { createContext, useContext, useState } from "react";

import { v4 as uuid } from "uuid";

export const TaskContext = createContext();
export const useTask = () => {
	// este hook permite que no tenga que llamar useContext cada vez
	return useContext(TaskContext);
};

const TaskProvider = ({ children }) => {
	const [tasks, setTasks] = useState([
		{ id: 1, title: "First Task", description: "First Description" },
	]);
	const createTask = (title, description) => {
		setTasks([...tasks, { title, description, id: uuid() }]);
	};

	const updateTask = (id, updatedTask) =>
		setTasks([
			...tasks.map((task) =>
				task.id === id ? { ...task, ...updatedTask } : task
			),
		]);
	const deleteTask = (id) =>
		setTasks([...tasks.filter((task) => task.id !== id)]);

	// lo que se encuentra aca es lo que pudeo exportar a otros comps

	return (
		<TaskContext.Provider value={{ tasks, createTask, updateTask, deleteTask }}>
			{children}
		</TaskContext.Provider>
	);
};

export default TaskProvider;
