import React from "react";
import Alert from "react-bootstrap/Alert";
const Success = ({ success }) => {
	return (
		<div>
			<Alert key="success" variant="success">
				{success}
			</Alert>
		</div>
	);
};

export default Success;
