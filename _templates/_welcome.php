<?php
$isLaptop = false;
$isSplitScreen = false;
$isSmallSplitScreen = false;

// Check if the screen width and height meet the criteria for a full-screen laptop
// if ($_SERVER['HTTP_USER_AGENT'] && preg_match('/(?i)msie [1-8]/',$_SERVER['HTTP_USER_AGENT']) === 0) {
//     $isLaptop = true;
// }
if (isset($_COOKIE['isSplitScreen'])) {
    if ($_COOKIE['isSplitScreen'] === '1') {
        $isSplitScreen = true;
    } elseif ($_COOKIE['isSplitScreen'] === '2') {
        $isSmallSplitScreen = true;
    }
}

if ($isLaptop && !$isSplitScreen && !$isSmallSplitScreen) { ?>
<div class="output" id="output">
                <div class="command-output">
██████  ██████   █████  ██    ██ ██ ███    ██ ██   ██ ██    ██ ███    ███  █████  ██████                              ,##,,eew,
██   ██ ██   ██ ██   ██ ██    ██ ██ ████   ██ ██  ██  ██    ██ ████  ████ ██   ██ ██   ██                           ,##############C
██████  ██████  ███████ ██    ██ ██ ██ ██  ██ █████   ██    ██ ██ ████ ██ ███████ ██████                         a###############@##
██      ██   ██ ██   ██  ██  ██  ██ ██  ██ ██ ██  ██  ██    ██ ██  ██  ██ ██   ██ ██   ██                       7####^`^"7W7^"@####
██      ██   ██ ██   ██   ████   ██ ██   ████ ██   ██  ██████  ██      ██ ██   ██ ██   ██                       @#@b`         ^@#@^
                                                                                                                 ##^,,,,   ,,,,^#^
                                                                                                                ,,@######"#######=</div>
                <div class="command-output">I’m currently studying Computer Science and Engineering,                                                         .''555"` '5555b|</div>
                <div class="command-output">and I love diving into new coding challenges.                                                                    T"@  ,,,^,mg,@,*</div>
                <div class="command-output">                                                                                                                    %p||`~~'.#`</div>
                <div class="command-output">When I’m not coding, you can find me making playlists, socializing,                                                 ^Wp  ,#T</div>
                <div class="command-output">or overthinking the next big idea.                                                                                  :b''@@b^}</div>
                <div class="command-output">---                                                                                                              ,^     ` 'b 3-</div>
                <div class="command-output">This is my website.A portal to new ideas                                                                     .<` 'p   ^v   #   b   *.</div>
                <div class="command-output">I designed this website to resemble a terminal because                                                     {      }   #"GpGb   [</div>
                <div class="command-output">I have a deep love for the command line interface (CLI).                                                   C      3 * @#######Nl      `</div>
                <div class="command-output">---                                                                                                        '            ^@##b     ($    !</div>
                <div class="command-output">Type 'help' to see a list of commands.</div>
            </div>
<?php } elseif ($isSmallSplitScreen) { ?>
<div class="output" id="output">
<div class="command-output">I’m currently studying Computer Science and Engineering,</div>
<div class="command-output">and I love diving into new coding challenges.</div>
<div class="command-output"></div>
<div class="command-output">When I’m not coding, you can find me making playlists, socializing,</div>
<div class="command-output">or overthinking the next big idea.</div>
<div class="command-output">---</div>
<div class="command-output">This is my website.A portal to new ideas</div>
<div class="command-output">I designed this website to resemble a terminal because</div>
<div class="command-output">I have a deep love for the command line interface (CLI).</div>
<div class="command-output">---</div>
<div class="command-output">Type 'help' to see a list of commands.</div>
</div>
<?php } else { ?>
<div class="output" id="output">
<div class="command-output">
██████  ██████   █████  ██    ██ ██ ███    ██ ██   ██ ██    ██ ███    ███  █████  ██████
██   ██ ██   ██ ██   ██ ██    ██ ██ ████   ██ ██  ██  ██    ██ ████  ████ ██   ██ ██   ██
██████  ██████  ███████ ██    ██ ██ ██ ██  ██ █████   ██    ██ ██ ████ ██ ███████ ██████
██      ██   ██ ██   ██  ██  ██  ██ ██  ██ ██ ██  ██  ██    ██ ██  ██  ██ ██   ██ ██   ██
██      ██   ██ ██   ██   ████   ██ ██   ████ ██   ██  ██████  ██      ██ ██   ██ ██   ██                                                                                
</div>
<div class="command-output">I’m currently studying Computer Science and Engineering,</div>
<div class="command-output">and I love diving into new coding challenges.</div>
<div class="command-output"></div>
<div class="command-output">When I’m not coding, you can find me making playlists, socializing,</div>
<div class="command-output">or overthinking the next big idea.</div>
<div class="command-output">---</div>
<div class="command-output">This is my website.A portal to new ideas</div>
<div class="command-output">I designed this website to resemble a terminal because</div>
<div class="command-output">I have a deep love for the command line interface (CLI).</div>
<div class="command-output">---</div>
<div class="command-output">Type 'help' to see a list of commands.</div>
</div>
<?php } ?>
