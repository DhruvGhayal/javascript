let count = 0;

function increaseCount() {
  count++; // Increment the count by 1
  displayCount(); // Display the count
  checkCountValue(); // Check count value and display messages

}

function checkCountValue() {
  if (count === 10) {
    alert("Your Instagram post gained 10 followers! Congratulations!");
  } else if (count === 20) {
    alert("Your Instagram post gained 20 followers! Keep it up!");
  } 
}

function resetCount(){
document.getElementById('countDisplay').innerText = 0; // Reset the count in the HTML
alert("Followers count has been reset")
}

function displayCount() {
document.getElementById('countDisplay').innerText=count; // Display the count in the HTML
}