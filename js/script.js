document.getElementById('commandInput').addEventListener('keydown', function(event) {
    var input = document.getElementById('commandInput');
    var output = document.getElementById('output');
    var commands = ['help', 'about', 'info', 'clear', 'projects', 'links', 'skills']; // List of available commands

    if (event.key === 'Enter') {
        event.preventDefault();
        var command = input.value;
        output.innerHTML += '<div class="user-input"><span class="prompt">you@/PravinCLI:~$</span> ' + command + '</div>';
        
        // Send the command to the PHP script and get the response
        fetch('/PravinCLI/process.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'command=' + encodeURIComponent(command)
        })
        .then(response => response.text())
        .then(data => {
            if (data === 'CLEAR_SCREEN') {
                output.innerHTML = '';
            } else {
                output.innerHTML += '<div class="command-output">' + data.replace(/\n/g, '<br>') + '</div>';
            }
            input.value = '';
            document.getElementById('terminalBody').scrollTop = document.getElementById('terminalBody').scrollHeight;
            commandHistory.push(command); // Add the command to the history
            historyIndex = commandHistory.length; // Reset the history index
        });
    } else if (event.key === 'Tab' || (event.ctrlKey && event.key === 'i')) {
        event.preventDefault();
        var currentInput = input.value;
        var matchingCommands = commands.filter(cmd => cmd.startsWith(currentInput));
        if (matchingCommands.length === 1) {
            input.value = matchingCommands[0];
        }
    } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        if (historyIndex > 0) {
            historyIndex--;
            input.value = commandHistory[historyIndex];
        }
    } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        if (historyIndex < commandHistory.length - 1) {
            historyIndex++;
            input.value = commandHistory[historyIndex];
        } else {
            historyIndex = commandHistory.length;
            input.value = '';
        }
    }
});

// Initialize command history and history index
var commandHistory = [];
var historyIndex = 0;

