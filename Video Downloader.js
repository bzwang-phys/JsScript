// ==UserScript==
// @name         VideoDownloader
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Download various of videos.
// @include      *://www.koushare.com/video/*
// @grant        none
// @require      https://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
    var download = "<div href='javascript:void(0)' target='_blank' id='download' style='cursor:pointer;z-index:98;display:block;width:30px;height:30px;line-height:30px;position:fixed;left:0;top:300px;text-align:center;overflow:visible'><img src='https://cdn.80note.com/vip.gif' height='55' ></div>";
    if (location.href.indexOf("")!= -1)
    {
        var input = "<input id='video_name' type='text' style='z-index:1000;position:fixed;left:0;top:350px;width:90px;height:40px;background-color:red'> ";
        $("body").prepend(input);
    }
    $("body").append(download);
    var downloader = document.getElementById("download");
    downloader.onclick = DownloadClick;


    function DownloadClick()
    {
        var urlName = FindUrl();
        Download(urlName[0], urlName[1]);
    };


    function FindUrl()
    {
        var url = location.href;
        var downloadUrl = " ";
        var name = " ";

        if (url.indexOf("www.koushare.com")!= -1)
        {
            var videoTag = document.querySelector("video");
            downloadUrl = videoTag.getAttribute("src");
            name = document.querySelector("span.curr_info").innerText;
        }
        else if (url.indexOf("")!= -1)
        {
            
        };

        return [downloadUrl, name];
    }


    function Download(url, name)
    {
        var a = document.createElement('a');
        a.href = url;
        a.download = name;
        a.click();
    };

    function OpenWindow()
    {
        var source = " ";
    };

    function DisPlay(str)
    {
        var text = str;
        var textarea = "<div id='link_div' style='z-index:1000;position:fixed;overflow:visible;left:0;top:350px;width:50px;height:80px'> <textarea rows='5'>"+text+"</textarea> </div>";
        $("body").prepend(textarea);
    };
})();
