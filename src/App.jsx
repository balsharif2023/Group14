import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import axios from "axios";
import { usePlaidLink } from "react-plaid-link";
import TransactionList from "./Comps/TransactionList";

axios.defaults.baseURL = "http://localhost:8000";

function PlaidAuth({ publicToken }) {
	const [account, setAccount] = useState();
	const [transactions, setTransactions] = useState();

	useEffect(() => {
		async function fetchData() {
			let accessToken = await axios.post("/exchange_public_token", {
				public_token: publicToken,
			});
			console.log("accessToken", accessToken.data);
			const auth = await axios.post("/auth", {
				access_token: accessToken.data.accessToken,
			});
			console.log("auth data ", auth.data);
			setAccount(auth.data.numbers.ach[0]);
			const _transactions = await axios.post("/transactions", {
				access_token: accessToken.data.accessToken,
			});
			setTransactions(_transactions);

			if (transactions && transaction.data) {
				console.log(transactions.data);
				// console.log(_transactions);
			}
		}
		fetchData();
	}, []);
	return (
		account &&
		transactions &&
		transactions.data && (
			<>
				<p>Account number: {account.account}</p>
				<p>Routing number: {account.routing}</p>
				<TransactionList transactions={transactions.data} />
			</>
		)
	);
}

function App() {
	const [linkToken, setLinkToken] = useState();
	const [publicToken, setPublicToken] = useState();

	useEffect(() => {
		async function fetch() {
			const response = await axios.post("/create_link_token");
			setLinkToken(response.data.link_token);
		}
		fetch();
	}, []);

	const { open, ready } = usePlaidLink({
		token: linkToken,
		onSuccess: (public_token, metadata) => {
			setPublicToken(public_token);
			console.log("success", public_token, metadata);
			// send public_token to server
		},
	});

	return publicToken ? (
		<PlaidAuth publicToken={publicToken} />
	) : (
		<button onClick={() => open()} disabled={!ready}>
			Connect a bank account
		</button>
	);
}

export default App;
