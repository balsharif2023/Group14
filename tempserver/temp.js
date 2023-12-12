const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Configuration, PlaidApi, PlaidEnvironments } = require("plaid");
require("dotenv").config();

const APP_PORT = process.env.PORT || 8000;
const PLAID_CLIENT_ID = process.env.PLAID_CLIENT_ID;
const PLAID_SECRET = process.env.PLAID_SECRET;
const PLAID_ENV = process.env.PLAID_ENV || "production";

const configuration = new Configuration({
  basePath: PlaidEnvironments.production,
  baseOptions: {
    headers: {
      "PLAID-CLIENT-ID": PLAID_CLIENT_ID,
      "PLAID-SECRET": PLAID_SECRET,
    },
  },
});

const plaidClient = new PlaidApi(configuration);
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/transactions", async function (request, response) {
  console.log("hello");

  let added = [];
  let modified = [];
  // Removed transaction ids
  let removed = [];
  let hasMore = true;
  const access_token = request.body.access_token;
  // Iterate through each page of new transaction updates for item
  // while (hasMore) {
  const req = {
    access_token: access_token,
    cursor: null,
  };
  const res = await plaidClient.transactionsSync(req);
  const data = res.data;
  // Add this page of results
  added = added.concat(data.added);
  modified = modified.concat(data.modified);
  removed = removed.concat(data.removed);
  hasMore = data.has_more;
  // Update cursor to the next cursor
  cursor = data.next_cursor;
  // }
  console.log(added);
  response.json(added);
});

app.post("/create_link_token", async function (request, response) {
  const plaidRequest = {
    user: {
      // This should correspond to a unique id for the current user.
      client_user_id: "1213123",
    },
    client_name: "Plaid Test saApp",
    products: ["transactions"],
    language: "en",
    country_codes: ["US"],
  };
  console.log("bye");

  try {
    const createTokenResponse = await plaidClient.linkTokenCreate(plaidRequest);
    response.json(createTokenResponse.data);
  } catch (error) {
    response.status(500).send("failure");
    // handle error
  }
});

app.post("/auth", async function (request, response) {
  try {
    const access_token = request.body.access_token;
    const plaidRequest = {
      access_token: access_token,
    };
    const plaidResponse = await plaidClient.authGet(plaidRequest);
    response.json(plaidResponse.data);
  } catch (e) {
    response.status(500).send("failed");
  }
});

app.post("/exchange_public_token", async function (request, response, next) {
  const publicToken = request.body.public_token;
  try {
    const plaidResponse = await plaidClient.itemPublicTokenExchange({
      public_token: publicToken,
    });
    const accessToken = plaidResponse.data.access_token;
    response.json({ accessToken });
  } catch (error) {
    response.status(500).send("failed");
  }
});

app.listen(APP_PORT, () => {
  console.log("server has started");
});
