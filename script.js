document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault(); 


   const nameInput = document.getElementById('nameInput').value SubmitEvent;
   document.getElementById('userName').innerText = nameInput;

    document.getElementById('thankYouMessage').classList.remove('hidden');
    document.getElementById('nameform').reset();

});