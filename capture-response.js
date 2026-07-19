const record = {
  capturedAt: new Date().toISOString(),
  request: {
    method: $request.method,
    url: $request.url,
    headers: $request.headers,
  },
  response: {
    status: $response.status || $response.statusCode || null,
    headers: $response.headers,
    body: $response.body || null,
  },
};

const output = JSON.stringify(record, null, 2);

// View this entry in Shadowrocket's debug log.
console.log("[response-capture]\n" + output);

// Keep the latest captured response in Shadowrocket's internal key-value store.
$persistentStore.write(output, "captured.lastResponse");

// Continue with the original response without modifying it.
$done({});
