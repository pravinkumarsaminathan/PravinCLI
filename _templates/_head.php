<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PravinCLI</title>
    <link rel="icon" href="/PravinCLI/assests/icon.svg">
    <?php if (file_exists($_SERVER['DOCUMENT_ROOT']."/PravinCLI/css/".basename($_SERVER['PHP_SELF'],".php").".css"))
    { ?>
    <link 
        href="/PravinCLI/css/<?php print(basename($_SERVER['PHP_SELF'],".php"))?>.css"
        rel="stylesheet">
    <?php } ?>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
</head>