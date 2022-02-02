import { useTask } from "../components/context/taskContext";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
	const router = useRouter();
	// const { tasks } = useTask();

	return (
		<div className="bg-gray-900 h-screen text-white">
			<header className="flex bg-gray-800  px-28 py-5">
				<Link href="/">
					<a>
						<h1 className="font-black text-lg"> Task Manager</h1>
					</a>
				</Link>

				{/* <span className="ml-2 text-gray-400 font-bold">
					{tasks.length} tasks
				</span> */}

				<div className="flex-grow text-right">
					<button
						onClick={() => {
							router.push("/new");
						}}
						className="bg-green-500 hover:bg-green-300 px-5 py-3 font-bold rounded-sm inline-flex items-center"
					>
						<AiOutlinePlusCircle className="mr-2 mt-1" /> Add Task
					</button>
				</div>
			</header>
			<main className="px-28 py-12">{children}</main>
		</div>
	);
};

export default Layout;
