document.getElementById('commandInput').addEventListener('keydown', function(event) {
    // Attaching an event listener to the element with the ID commandInput.Event Triggered:keydown, which occurs whenever a key is pressed down while the input field is focused.
    if (event.key === 'Enter') {
        event.preventDefault();
        var input = document.getElementById('commandInput').value;
        var output = document.getElementById('output');
        output.innerHTML += '<div class="user-input"><span class="prompt">you@/PRavinCLI:~$</span> ' + input + '</div>';
        // Appending the user's input to the output display area with a custom prompt (you@/PravinCLI:~$) to mimic a terminal environment.
        
        // Send the command to the PHP script and get the response
        fetch('process.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                //Specifies that the content type is application/x-www-form-urlencoded, which is a standard way to send form data in POST requests.
            },
            body: 'command=' + encodeURIComponent(input)
            //Encodes the user's command as a URL-encoded string (command=...) and sends it in the request body.
        })
        .then(response => response.text())
        .then(data => {
            output.innerHTML += '<div class="command-output">' + data.replace(/\n/g, '<br>') + '</div>';
            document.getElementById('commandInput').value = '';
            document.getElementById('terminalBody').scrollTop = document.getElementById('terminalBody').scrollHeight; // Scroll to the bottom
        });
        //1. Converts the response to plain text.
        //2. Adds the response to the terminal output, replacing any newline characters (\n) with HTML line breaks (<br>) for proper formatting.
        //3.  Resets the input field so the user can type a new command.
        //4. Ensures that the terminal window scrolls to the bottom, so the latest output is always visible.
    }
});