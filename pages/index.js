import Head from "next/head";
import { useTask } from "../components/context/taskContext";
import New from "./new";
import { BsTrash } from "react-icons/bs";

import { useRouter } from "next/router";

export default function Home() {
	const { tasks, deleteTask } = useTask();
	const { push } = useRouter();

	return (
		<>
			<Head>
				<title>Task Manager | List </title>
				<meta name="description" content="task" />
			</Head>
			<div className="flex justify-center">
				{tasks.length === 0 ? (
					<h2>No tasks available</h2>
				) : (
					<div className="w-full sm:w-6/12">
						{tasks.map((task, index) => (
							<div
								key={task.id}
								className="bg-gray-700  hover:bg-gray-600 cursor-pointer shadow-xl rounded-md  px-20 py-5 m-2 flex justify-between"
								onClick={() => push("/edit/" + task.id)}
							>
								<span className="text-5xl -ml-12  mr-10 items-center">
									{index}
								</span>
								<div className="w-full">
									<div className="inline-flex sm:flex justify-between  ">
										<h1 className="font-bold ">{task.title}</h1>

										<button
											className="bg-red-700 hover:bg-red-600 shadow-md  px-2 py-1 rounded-md -mr-24 sm:-mr-12 ml-12 w-18 h-6 sm:h-auto inline-flex items-center"
											onClick={(e) => {
												e.stopPropagation();
												deleteTask(task.id);
											}}
										>
											<BsTrash className="mr-2 " />
											Delete
										</button>
									</div>

									<p className="text-gray-300">{task.description}</p>
									<span className="text-gray-400"> {task.id}</span>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</>
	);
}
