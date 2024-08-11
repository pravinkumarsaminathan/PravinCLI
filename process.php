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
            load_comment('_help');
            break;
        case 'about':
            load_comment('_about');
            break;
        case 'info':
            load_comment('_info');
            break;
        case 'clear':
            echo "CLEAR_SCREEN";
            break;
        case 'projects':
            load_comment('_projects');
            break;
        case 'links':
            load_comment('_links');
            break;
        case 'skills':
            load_comment('_skills');
            break;
        case 'email':
            load_comment('_email');
            break;
        case 'welcome':
            load_comment("_welcome");
            break;
        default:
            echo "---\n";
            echo "Unknown command: $command\nType 'help' to see available commands.\n";
            echo "---";
            break;
    }
}
?>