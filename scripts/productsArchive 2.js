const sendSerial = document.querySelector("#sendSerial");

// Timeout is set for fetchWithTimeout
// -------------- Time out shold be millisecond --------------------
let timeOutMill = 5000;

// Requests function
// I set time out default to 5000 millisecond you can change it in timeOutMill
// After 5000 millisecond request will be failed
async function fetchWithTimeout(resource, options = {}) {
  const { timeout = 8000 } = options;

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  const response = await fetch(resource, {
    ...options,
    signal: controller.signal,
  });
  clearTimeout(id);

  return response;
}

// Send data to back when submited
sendSerial.addEventListener("submit", (e) => {
  // For remove refresh default forms when submited
  e.preventDefault();

  // Set here api URL
  let api = "#";

  // Send data to api
  fetchWithTimeout("url", { timeout: timeOutMill });
});
