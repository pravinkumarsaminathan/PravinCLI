<?php

function load_templates($name)
{
    include $_SERVER['DOCUMENT_ROOT'].'/PravinCLI/_templates/'. $name .'.php';
}

function load_comment($name)
{
    include $_SERVER['DOCUMENT_ROOT'].'/PravinCLI/comments/'. $name .'.php';
}