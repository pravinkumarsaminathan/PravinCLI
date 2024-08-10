<?php
if (isset($_POST['command'])) {
    $command = trim($_POST['command']);
    handleCommand($command);
}

function handleCommand($command) {
    switch ($command) {
        case 'help':
            echo "help | List all available commands | help\n";
            echo "about | About Me. | about\n";
            break;
        case 'about':
            echo "This is Pravin's CLI personal website created using HTML, CSS, and PHP.";
            break;
        default:
            echo "Unknown command: $command\nType 'help' to see available commands.";
            break;
    }
}
?>