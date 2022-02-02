import "../styles/globals.css";
import TaskProvider from "../components/context/taskContext";
import Layout from "./Layout";

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<TaskProvider>
				<Component {...pageProps} />
			</TaskProvider>
		</Layout>
	);
}

export default MyApp;
