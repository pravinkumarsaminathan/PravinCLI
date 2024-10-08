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
    var commands = ['help', 'about', 'info', 'clear', 'projects', 'links', 'skills', 'email', 'welcome', 'exit', 'contact', 'source', 'github' ]; // List of available commands

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
            }
            else if (data.trim() === 'EXIT_COMMAND') {
                console.log("Exiting...");
                window.close();
                output.innerHTML += '<div class="command-output">---</div>'
                output.innerHTML += '<div class="command-output">Your browser restrict scripts from closing windows.</div>';
                output.innerHTML += '<div class="command-output">This is a security measure to prevent malicious behavior.</div>'
                output.innerHTML += '<div class="command-output">Please close this tab manually.</div>';
            }
            else if (data.trim() === 'OPEN_MAILBOX') {
                console.log("Opening mailbox...");
                output.innerHTML += '<div class="command-output">If you have not been redirected, Click below <br>  </div>';
                output.innerHTML += '<div style=\"font-family: Hack, Consolas, \'Courier New\', Courier, monospace; margin-left: 20px;\"><i class=\"fa fa-envelope\" aria-hidden=\"true\" style=\"color: #b3b9c5;\"></i> <strong><a href=\"mailto:pravinkumarsaminathan@gmail.com\" target=\"_blank\" rel=\"noreferrer\"><span style=\"color: #76d4d6;\">Mail</span></a></strong> <em style=\"color: #777c85;\">pravinkumarsaminathan@gmail.com</em></div>';
                output.innerHTML += '<div class=\"command-output\"><style>a { color: inherit; text-decoration: none; }</style></div>';
                window.location.href = 'mailto:pravinkumarsaminathan@gmail.com';
            }
            else if (command.trim() === 'source') {
                console.log("Opening GitHub repository...");
                window.open('https://github.com/pravinkumarsaminathan/PravinCLI', '_blank');
                output.innerHTML += '<div class="command-output">---</div>'
                output.innerHTML += '<div class="command-output">If you have not been redirected, Click below <br>  </div>';
                output.innerHTML += '<div style=\"font-family: Hack, Consolas, \'Courier New\', Courier, monospace; margin-left: 20px;\"><i class=\"fab fa-fw fa-github-alt\" aria-hidden=\"true\" style=\"color: #b3b9c5;\"></i> <strong><a href=\"https://github.com/pravinkumarsaminathan/PravinCLI\" target=\"_blank\" rel=\"noreferrer\"><span style=\"color: #76d4d6;\">PravinCLI</span></a></strong> <em style=\"color: #777c85;\">comment line interface in website</em></div>';
                output.innerHTML += '<div class=\"command-output\"><style>a { color: inherit; text-decoration: none; }</style></div>';}
            else if (command.trim() === 'github') {
                console.log("Opening GitHub ...");
                window.open('https://github.com/pravinkumarsaminathan', '_blank');
                output.innerHTML += '<div class="command-output">---</div>'
                output.innerHTML += '<div class="command-output">If you have not been redirected, Click below <br>  </div>';
                output.innerHTML += '<div style=\"font-family: Hack, Consolas, \'Courier New\', Courier, monospace; margin-left: 20px;\"><i class=\"fab fa-fw fa-github-alt\" aria-hidden=\"true\" style=\"color: #b3b9c5;\"></i> <strong><a href=\"https://github.com/pravinkumarsaminathan\" target=\"_blank\" rel=\"noreferrer\"><span style=\"color: #76d4d6;\">GitHub</span></a></strong> <em style=\"color: #777c85;\">PRAVIN KUMAR</em></div>';
                output.innerHTML += '<div class=\"command-output\"><style>a { color: inherit; text-decoration: none; }</style></div>';}
            else
            {
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

