import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";

const TransactionList = ({ transactions }) => {
	const [_transactions, _setTransactions] = useState(transactions);

	useEffect(() => {
		_setTransactions(transactions);
	}, []);

	return (
		<div>
			<h1>Transaction List</h1>
			<ul>
				{_transactions &&
					_transactions.map((transaction, index) => (
						<li key={index}>
							<p>
								<strong>Transaction Name:</strong> {transaction.name}
							</p>
							<p>
								<strong>Merchant Name:</strong> {transaction.merchant_name}
							</p>
							<p>
								<strong>Authorized Date:</strong> {transaction.authorized_date}
							</p>
							<p>
								<strong>Amount:</strong> {transaction.amount}
							</p>
							<p>
								<strong>Category:</strong> {transaction.category.join(", ")}
							</p>
							<p>
								<strong>Transaction Type:</strong>{" "}
								{transaction.transaction_type}
							</p>
						</li>
					))}
			</ul>

			<h2>Pie Chart</h2>
			{/* <PieChart data={transactions} /> */}
		</div>
	);
};

export default TransactionList;
