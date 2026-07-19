const record = {
  capturedAt: new Date().toISOString(),
  method: $request.method,
  url: $request.url,
  headers: $request.headers,
  body: $request.body || null,
};

const output = JSON.stringify(record, null, 2);

// View this entry in Shadowrocket's debug log.
console.log("[request-capture]\n" + output);

// Keep the latest captured request in Shadowrocket's internal key-value store.
$persistentStore.write(output, "captured.lastRequest");

// Continue the original request without modifying it.
$done({});
