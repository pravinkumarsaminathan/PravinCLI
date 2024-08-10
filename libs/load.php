<?php

function load_templates($name)
{
    include $_SERVER['DOCUMENT_ROOT'].'/PravinCLI/_templates/'. $name .'.php';
}

function load_comment($name)
{
    include $_SERVER['DOCUMENT_ROOT'].'/PravinCLI/comments/'. $name .'.php';
}

function displaySkill($language, $percentage)
{
    $barLength = 50;
    $filledLength = round($barLength * ($percentage / 100));
    $bar = str_repeat("<span style='color: rgb(255, 255, 255)'>█</span>", $filledLength) . str_repeat("<span style='color: rgb(255, 255, 255)'>░</span>", $barLength - $filledLength);
    echo "$language: [$bar] $percentage%\n\n";
}