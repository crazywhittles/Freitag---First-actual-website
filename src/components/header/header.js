import React from "react";
import "./header.css";

export default function header() {
    return (
        <div>
             <header class="header">
                <a href="/"><img class="logo" src="https://cdn.discordapp.com/attachments/625006276002185249/731568701215735918/fnaf_9.png" alt="logo" /></a>
                <h2 class="header-title"><a href="/">Freitag</a></h2>
                <h5 class="header-list"><a href="/aboutme">About Me</a></h5>
                <h5 class="header-list"><a href="">My Channels</a></h5>
                <h5 class="header-list"><a href="">Junk Cars</a></h5>
                <h5 class="header-list"><a href="">People</a></h5>
                <h5 class="header-list"><a href="">Contact</a></h5>
            </header>
        </div>
    );
}