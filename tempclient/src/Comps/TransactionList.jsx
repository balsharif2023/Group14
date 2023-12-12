import React, { useState, useEffect } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const COLORS = [
	"#0f332f",
	"#00C49F",
	"#FFBB28",
	"#c0de2a",
	"#a434eb",
	"#385e5a",
];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
	cx,
	cy,
	midAngle,
	innerRadius,
	outerRadius,
	percent,
	index,
}) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
	const x = cx + radius * Math.cos(-midAngle * RADIAN);
	const y = cy + radius * Math.sin(-midAngle * RADIAN);

	return (
		<text
			x={x}
			y={y}
			fill="white"
			textAnchor={x > cx ? "start" : "end"}
			dominantBaseline="central"
		>
			{`${(percent * 100).toFixed(0)}%`}
		</text>
	);
};

const TransactionList = ({ transactions }) => {
	console.log(transactions);
	const [_transactions, _setTransactions] = useState(transactions);
	const [transactionArray, setTransactionArray] = useState([]);
	useEffect(() => {
		// Remove the _transactions state and use transactions directly
		let dict = {};
		let tempArr = [];
		for (let i = 0; i < transactions.length; i++) {
			if (transactions[i].category[0] in dict && transactions[i].amount > 0)
				dict[transactions[i].category[0]] += transactions[i].amount;
			else if (
				!(transactions[i].category[0] in dict) &&
				transactions[i].amount > 0
			)
				dict[transactions[i].category[0]] = transactions[i].amount;
		}
		const keysToCombine = ["Community", "Travel", "Bank Fees"];
		keysToCombine.forEach((key) => {
			if (dict[key] && dict.Recreation) {
				// Add the value to the 'recreation' key
				dict.Recreation += dict[key];
				// Remove the key from the object
				delete dict[key];
			}
		});
		for (let key in dict) {
			if (dict.hasOwnProperty(key)) {
				let tempVal = 0;
				tempArr.push({ key: key, value: dict[key] });
			}
		}
		// Use the entire array when setting state
		if (tempArr.length > 0) setTransactionArray(tempArr);

		console.log(dict);
		console.log(tempArr);
	}, []); // Add transactions as a dependency

	return (
		<React.Fragment>
			<h2>Pie Chart</h2>
			{transactionArray.length > 0 ? (
				<React.Fragment>
					<PieChart width={800} height={800}>
						<Pie
							data={transactionArray}
							cx="50%"
							cy="50%"
							labelLine={false}
							label={renderCustomizedLabel}
							outerRadius={350}
							fill="#8884d8"
							dataKey="value"
						>
							{transactionArray.map((entry, index) => (
								<Cell
									key={`cell-${index}`}
									fill={COLORS[index % COLORS.length]}
								/>
							))}
						</Pie>
					</PieChart>
					<div style={{ display: "flex", justifyContent: "center" }}>
						<ul style={{ listStyleType: "none", padding: 0 }}>
							{transactionArray.map((entry, index) => (
								<li key={`legend-${index}`} style={{ margin: "0 10px" }}>
									<span
										style={{
											display: "inline-block",
											width: "12px",
											height: "12px",
											backgroundColor: COLORS[index % COLORS.length],
											marginRight: "5px",
											borderRadius: "50%",
										}}
									></span>
									{entry.key}
								</li>
							))}
						</ul>
					</div>
				</React.Fragment>
			) : (
				<React.Fragment>Couldn't load Pie Chart</React.Fragment>
			)}
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
								<strong>Category:</strong>{" "}
								{transaction &&
									transaction.category &&
									transaction.category.join(", ")}
							</p>
							<p>
								<strong>Transaction Type:</strong>{" "}
								{transaction.transaction_type}
							</p>
						</li>
					))}
			</ul>
		</React.Fragment>
	);
};

export default TransactionList;
