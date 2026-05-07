function blockShortsPage() {
    chrome.storage.sync.get("enabled", (data) => {
        const enabled = data.enabled ?? true;

        if (!enabled) return;

        const isShorts = location.pathname.startsWith("/shorts");

        if (isShorts) {
            document.documentElement.innerHTML = `
                <head>
                    <title>Shorts Blocked</title>
                    <style>
                        body{
                            margin:0;
                            background:#0f0f0f;
                            color:white;
                            display:flex;
                            justify-content:center;
                            align-items:center;
                            height:100vh;
                            font-family:Arial,sans-serif;
                            text-align:center;
                            padding:20px;
                        }

                        .box{
                            max-width:500px;
                        }

                        h1{
                            color:#ff0000;
                            margin-bottom:10px;
                        }

                        p{
                            opacity:0.8;
                            line-height:1.5;
                        }
                    </style>
                </head>

                <body>
                    <div class="box">
                        <h1>🚫 Shorts Blocked</h1>

                        <p>
                            Study Mode is active.<br><br>
                            Go build your future instead of scrolling
                            infinite dopamine loops.
                        </p>
                    </div>
                </body>
            `;
        }
    });
}

blockShortsPage();

window.addEventListener("yt-navigate-finish", blockShortsPage);