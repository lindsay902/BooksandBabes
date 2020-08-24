let book1Votes = 0;
let book2Votes = 0;
let book3Votes = 0;

const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', function() {
    alert("Thanks for voting!");
});

const selectResponse = function() {
    if (document.getElementById("book-1")) {
        book1Votes += 1;
    }
}