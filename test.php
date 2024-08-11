<?php
echo "<html><body>";
echo "<a id=\"emailLink\" href=\"mailto:example@example.com\" style=\"color: rgb(5, 206, 145);\">example@example.com</a>";
echo "<script type=\"text/javascript\">
        document.addEventListener('DOMContentLoaded', function() {
            console.log('JavaScript is running');
            alert('JavaScript is running');
            document.getElementById('emailLink').click();
        });
      </script>";
echo "</body></html>";
?>