import React from "react";
import ReactLoading from "react-loading";

const Loading = () => {
	return (
		<div
			style={{
				display: "flex",
				height: "100vh",
				width: "100vw",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<ReactLoading
				type="bars"
				color="#3a86ff"
				height={80}
				width={100}
				// style={{ position: "absolute", top: "50%" }}
			/>
		</div>
	);
};

export default Loading;
