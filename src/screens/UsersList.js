import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loading from "../components/Loading";
import Error from "../components/Error";
import { deleteUser, getAllUsers } from "../actions/UserActions";
export default function Userslist() {
	const dispatch = useDispatch();
	const usersstate = useSelector((state) => state.getAllUsersReducer);
	const { error, loading, users } = usersstate;
	console.log("All users ..", usersstate);
	useEffect(() => {
		dispatch(getAllUsers());
	}, []);
	return (
		<div>
			<h1>Users list</h1>
			{loading && <Loading />}
			{error && <Error error="Something went wrong" />}
			<table className="table table-striped table-bordered table-responsive-sm">
				<thead className="thead-dark">
					<tr>
						<th>User Id</th>
						<th>Name</th>
						<th>Email</th>
						<th>Delete</th>
					</tr>
				</thead>

				<tbody>
					{users &&
						users.map((user) => {
							return (
								<tr>
									<td>{user._id}</td>
									<td>{user.name}</td>
									<td>{user.email}</td>
									<td>
										<button
											className="btn"
											onClick={() => {
												dispatch(deleteUser(user._id));
											}}
										>
											Delete User
										</button>
									</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		</div>
	);
}
