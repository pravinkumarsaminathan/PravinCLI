<?php 
include_once 'libs/load.php'; ?>
<!DOCTYPE html>
<html lang="en">
<?php load_templates("_head"); ?>
<body>
    <div class="terminal">
        <div class="terminal-body" id="terminalBody">
            <?php load_templates("_welcome"); ?>
            <?php load_templates("_prompt"); ?>
        </div>
    </div>
    <script src="PravinCLI/js/script.js"></script>
</body>
</html>