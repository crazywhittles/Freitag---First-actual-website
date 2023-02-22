import React from "react";
import "./header.css";

export default function header() {
    return (
        <div>
             <header class="header">
                <a href="/">
                    <img 
                    class="logo" 
                    src="https://cdn.discordapp.com/attachments/625006276002185249/731568701215735918/fnaf_9.png" 
                    alt="logo">
                    </img>
                </a>
                <h2 class="header-title"><a href="/">Freitag</a></h2>
                <h5 class="header-list"><a href="/aboutme">About Me</a></h5>
                <h5 class="header-list"><a href="/channels">My Channels</a></h5>
                <h5 class="header-list"><a href="/junkcars">Junk Cars</a></h5>
                <h5 class="header-list"><a href="/people">People</a></h5>
                <h5 class="header-list"><a href="/contact">Contact</a></h5>
            </header>
        </div>
    );
}