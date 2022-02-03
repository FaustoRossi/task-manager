import { useTask } from "../components/context/taskContext";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
	const router = useRouter();
	// const { tasks } = useTask();

	return (
		<div className="bg-gray-900  overflow-x-auto h-screen text-white">
			<header className="flex  items-center bg-gray-800 px-8  py-5 md:px-64">
				<Link href="/">
					<a>
						<h1 className="font-black text-lg">
							Task Manager{" "}
							<FaTasks size="1.5rem" className="inline-flex ml-2" />
						</h1>
					</a>
				</Link>

				{/* <span className="ml-2 text-gray-400 font-bold">
					{tasks.length} tasks
				</span> */}

				<div className="flex-grow mt-2  text-right">
					<button
						onClick={() => {
							router.push("/new");
						}}
						className="bg-green-500  hover:bg-green-300 m-1 shadow-lg px-5 py-3 font-bold rounded-sm inline-flex items-center"
					>
						<AiOutlinePlusCircle className="mr-2 mt-1" size="2rem" /> Add Task
					</button>
				</div>
			</header>
			<main className="px-12 py-12 ">{children}</main>
		</div>
	);
};

export default Layout;
