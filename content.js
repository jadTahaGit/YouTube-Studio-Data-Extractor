// content.js

// Function to extract data from the YouTube Studio page
function extractData() {
  const videos = document.querySelectorAll(
    ".tb-suggested-shorts-spike-suggestion"
  );

  const extractedData = [];

  videos.forEach((video) => {
    const title = video.querySelector(
      ".tb-suggested-shorts-video-title"
    ).textContent;
    console.log(title);
    const duration = video.querySelector(
      ".tb-suggested-shorts-duration"
    ).textContent;
    console.log(duration);
    const retentionIncrease = video.querySelector(
      ".tb-suggested-shorts-retention-increase"
    ).textContent;
    console.log(retentionIncrease);

    const iframe = video.querySelector("iframe");

    const videoLink = iframe ? iframe.src : null;
    console.log(videoLink);

    extractedData.push({
      title,
      duration,
      retentionIncrease,
      videoLink,
    });
  });

  return extractedData;
}

// Send extracted data to the background script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "extractData") {
    const data = extractData();
    sendResponse({ data });
  }
});
