function checkSplitScreen() {
    var isSplitScreen = (window.innerWidth < screen.width * 0.875 || window.innerHeight < screen.height * 0.875);
    var isSmallSplitScreen = (window.innerWidth < screen.width * 0.625 || window.innerHeight < screen.height * 0.625);
    var currentSplitScreenState = document.cookie.replace(/(?:(?:^|.*;\s*)isSplitScreen\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    if (isSmallSplitScreen && currentSplitScreenState !== '2') {
        document.cookie = "isSplitScreen=2; path=/";
        location.reload();
    } else if (isSplitScreen && !isSmallSplitScreen && currentSplitScreenState !== '1') {
        document.cookie = "isSplitScreen=1; path=/";
        location.reload();
    } else if (!isSplitScreen && !isSmallSplitScreen && currentSplitScreenState !== '0') {
        document.cookie = "isSplitScreen=0; path=/";
        location.reload();
    }
}

window.onload = checkSplitScreen;
window.onresize = checkSplitScreen;

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

