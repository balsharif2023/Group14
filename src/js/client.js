const initializeLink = async function () {
  linkTokenData = await callMyServer("/server/generate_link_token", true);
  showOutput(`Received link token data ${JSON.stringify(linkTokenData)}`);
  if (linkTokenData != null) {
    document.querySelector("#startLink").removeAttribute("disabled");
  }
};

const startLink = function () {
  if (linkTokenData === undefined) {
    return;
  }
  const handler = Plaid.create({
    token: linkTokenData.link_token,
    onSuccess: async (publicToken, metadata) => {
      console.log(`ONSUCCESS: Metadata ${JSON.stringify(metadata)}`);
      showOutput(
        `I have a public token: ${publicToken} I should exchange this`
      );
      publicTokenToExchange = publicToken;
      document.querySelector("#exchangeToken").removeAttribute("disabled");
    },
    onExit: (err, metadata) => {
      console.log(
        `Exited early. Error: ${JSON.stringify(err)} Metadata: ${JSON.stringify(
          metadata
        )}`
      );
      showOutput(`Link existed early with status ${metadata.status}`)
    },
    onEvent: (eventName, metadata) => {
      console.log(`Event ${eventName}, Metadata: ${JSON.stringify(metadata)}`);
    },
  });
  handler.open();
};
