<?php

function load_templates($name)
{
    include $_SERVER['DOCUMENT_ROOT'].'/PravinCLI/_templates/'. $name .'.php';
}