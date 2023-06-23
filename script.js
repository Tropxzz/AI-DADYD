function getResponse() {
  // Get the user's question from the input textbox
  var question = document.getElementById("question").value;

  // Process the question and get the response (for demonstration, let's assume a simple response)
  var response = "You asked: " + question;

  // Display the response in the label
  document.getElementById("responseLabel").textContent = response;
}
