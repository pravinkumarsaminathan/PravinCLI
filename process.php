<?php
include_once 'libs/load.php';
if (isset($_POST['command'])) {
    $command = trim($_POST['command']);
    handleCommand($command);
}

function handleCommand($command)
{
    switch ($command) {
        case 'help':
            echo "---\n";
            echo "help | List all available commands | help\n";
            echo "about | About Me. | about\n";
            echo "info | Information about me. | info\n";
            echo "---";
            break;
        case 'about':
            echo "---\n";
            echo "This is Pravin's CLI personal website created using HTML, CSS, and PHP.";
            echo "---";
            break;
        case 'info':
            load_comment('_info');
            break;
        case 'clear':
            echo "CLEAR_SCREEN"; // ANSI escape codes to clear the screen
            break;
        default:
            echo "---\n";
            echo "Unknown command: $command\nType 'help' to see available commands.\n";
            echo "---";
            break;
    }
}
?>