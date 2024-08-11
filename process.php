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
            $info  = "<div style=\"color: #b3b9c5;\">Available comments</span>\n\n";
            echo $info;
            echo "<span style=\"color: rgb(5, 206, 145);\">help</span>    | List all available commands            | help\n";
            echo "<span style=\"color: rgb(5, 206, 145);\">about</span>   | About Me.                              | about\n";
            echo "<span style=\"color: rgb(5, 206, 145);\">info</span>    | Information about me.                  | info\n";
            echo "<span style=\"color: rgb(5, 206, 145);\">project</span> | Projects I have worked on.             | projects\n";
            echo "<span style=\"color: rgb(5, 206, 145);\">links</span>   | Get all my important links and socials | links\n";
            echo "<span style=\"color: rgb(5, 206, 145);\">skills</span>  | Display programming skills.            | skills\n";
            echo "<span style=\"color: rgb(5, 206, 145);\">email</span>   | Send an email to me.                   | email\n";
            echo "<span style=\"color: rgb(5, 206, 145);\">welcome</span> | display hero section.                  | welcome\n";
            echo "<span style=\"color: rgb(5, 206, 145);\">clear</span>   | Clear the screen.                      | clear\n";
            echo "<span style=\"color: #b3b9c5;\">---</div>";
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