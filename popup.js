// popup.js

// Function to display the extracted data in the popup window
function displayData(data) {
  const dataContainer = document.getElementById("dataContainer");
  dataContainer.innerHTML = "";

  const jsonData = JSON.stringify(data, null, 2);
  const div = document.createElement("div");
  div.innerHTML = jsonData;
  dataContainer.appendChild(div);

  //   data.forEach((item) => {
  //     const div = document.createElement("div");
  //     div.innerHTML = `
  //         <p>Title: ${item.title}</p>
  //         <p>Duration: ${item.duration}</p>
  //         <p>Retention Increase: ${item.retentionIncrease}</p>
  //         <p>Video Link: ${item.videoLink}</p>
  //         <hr>
  //       `;
  //     div.innerHTML = `
  //         <p>Title: ${item.title}</p>
  //         <p>Duration: ${item.duration}</p>
  //         <p>Retention Increase: ${item.retentionIncrease}</p>
  //         <p>Video Link: ${item.videoLink}</p>
  //         <hr>
  //       `;
  //     dataContainer.appendChild(div);
  //   });
}

// Get data from content script when popup is opened
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  chrome.tabs.sendMessage(
    tabs[0].id,
    { action: "extractData" },
    function (response) {
      displayData(response.data);
    }
  );
});
