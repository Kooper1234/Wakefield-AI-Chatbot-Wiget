<script type="text/javascript"> window.DocsBotAI = window.DocsBotAI || {}; DocsBotAI.init = function(config) {
return new Promise(function(resolve, reject) {
// Create a new script element for loading the DocsBot script var script = document.createElement("script");
script.type = "text/javascript";
script.async = true;
script.src = "https://widget.docsbot.ai/chat.js";
// Insert the script element into the document
 var firstScript = document.getElementsByTagName("script")[0]; firstScript.parentNode.insertBefore(script, firstScript);
// Event listener for when the script is loaded script.addEventListener("load", function() {
// Initialize DocsBot with provided config window.DocsBotAI.mount({
id: config.id,
supportCallback: config.supportCallback,
identify: config.identify,
options: config.options || {}, // Ensure options are provided or default to an empty object signature: config.signature
});
// Function to wait for the DocsBotAI root element var waitForElement = function(selector) {
return new Promise(function(resolve) { if (document.querySelector(selector)) {
return resolve(document.querySelector(selector)); }
var observer = new MutationObserver(function(mutations) { if (document.querySelector(selector)) {
resolve(document.querySelector(selector));
observer.disconnect(); }
});

observer.observe(document.body, { childList: true, subtree: true }); });
};
// Once the DocsBot root is loaded, resolve the promise waitForElement("#docsbotai-root").then(resolve).catch(reject);
});
// Event listener for script loading errors script.addEventListener("error", function(event) {
reject(event.message); });
}); };
</script>
<script type="text/javascript">
DocsBotAI.init({
id: "xwIbVScaj0QaHNNbXE88/P74zTGsUaCHeM4r70HUj", options: {
contextItems: 20, // Set context items to 20 
}); </script>
