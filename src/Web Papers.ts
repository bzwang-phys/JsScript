// ==UserScript==
// @name         PapersCollection
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *arxiv.org/*
// @grant        none
// ==/UserScript==


(function() {
    'use strict';

    let clickDiv:HTMLElement = document.createElement("div")
    clickDiv.innerHTML = "<div href='javascript:void(0)' target='_blank' id='clickButton' style='cursor:pointer;z-index:98;display:block;width:30px;height:30px;line-height:30px;position:fixed;left:0;top:300px;text-align:center;overflow:visible'><img src='https://cdn.80note.com/vip.gif' height='55' ></div>";

    if (location.href.indexOf("xxx.com/v/")!= -1)
    {
        var input = "<input id='video_name' type='text' style='z-index:1000;position:fixed;left:0;top:350px;width:90px;height:40px;background-color:red'> ";
        document.body.prepend(input);
    }
    document.body.append(clickDiv);
    var clickButton = document.getElementById("clickButton") as HTMLElement;
    clickButton.onclick = SendPostClick;


    function SendPostClick():void
    {
        var url = "http://127.0.0.1:8000/newpapers"
        var paperInfo = GetPapersInfo()
        SendPost(url, paperInfo)
    };


    function GetPapersInfo():object{
        var html = getHtml()
        var paperInfo = parseHtml(html)
        return paperInfo
    }


    function SendPost(url:string, items:object)
    {
        var iframe = document.createElement("iframe");
        var uniqueString = "iframeToPost";
        document.body.appendChild(iframe);
        iframe.style.display = "none";
        iframe.contentWindow.name = uniqueString;
        // construct a form with hidden inputs, targeting the iframe
        var form = document.createElement("form");
        form.target = uniqueString;
        form.action = url;
        form.method = "POST";
        // repeat for each parameters (names)
        for (const [key, val] of Object.entries(items)) {
            var input = document.createElement("input");
            input.type = "hidden";
            input.name = key;
            input.value = val;
            form.appendChild(input);
          }
        document.body.appendChild(form);
        form.submit();
    }


    function getHtml() {
        if (typeof window.getSelection == 'undefined') { throw "Does not support window.getSelection" }
        if (location.href.indexOf("arxiv.org") != -1) { return ['arxiv',getHtmlArxiv()] }
        else if (location.href.indexOf("aps.org") != -1) { return ['aps',getHtmlAps()] }
        
    }

    function parseHtml(html):object {
        var [paperType, htmlItem] = html
        if (paperType === 'arxiv') {
            var authors = htmlItem.getElementsByClassName('list-authors')[0].getElementsByTagName('a')
            authors = Array.from(authors).map(item => {return item.textContent})
            var title = htmlItem.querySelector('div.list-title').innerText
            var item = htmlItem.previousElementSibling.querySelector('[title="Abstract"]')
            var url = item.href
            var identifier = item.textContent
            var dict = {'url':url, 'identifier':identifier, 'title':title, 'authors':authors}
            return dict
        } else if (paperType === 'aps') {
            
        }

    }

    function getHtmlAps():string{
        return ""
    }

    function getHtmlArxiv() {
        let selection = window.getSelection();
        if (selection == null) {
            alert("Please select something.");
            throw new Error();
        }
        var itemNode;
        var selectElement:Node = selection.getRangeAt(0).startContainer;
        while ( (selectElement.nodeName != "DD") && (selectElement.nodeName != "DT") ) {
            selectElement = selectElement.parentElement!;
        }
        if (selectElement.nodeName === "DT") { itemNode = selectElement.nextElementSibling }
        else if (selectElement.nodeName === "DD") { itemNode = selectElement }
        return itemNode
    }

    function DisPlay(str)
    {
        var text = str;
        var textarea = "<div id='link_div' style='z-index:1000;position:fixed;overflow:visible;left:0;top:350px;width:50px;height:80px'> <textarea rows='5'>"+text+"</textarea> </div>";
        $("body").prepend(textarea);
    };

    $("div.meta").mouseover(function(e){
        var x = 8;
        var y = 8;
        var tooltip = "<div id='suspend' style='position:fixed; overflow:visible; width:100px; top:8px; height:100px' > \
                       <img src='https://pic2.zhimg.com/80/v2-75835280b3121297bc8bf3cbfe1b2865_720w.jpg'/> <\/div>";
        $("body").append(tooltip); //????????????????????????
        $("#suspend")
         .css({
          "left":  (e.pageX+7) + "px"
         }).show("fast");   //??????x?????????y?????????????????????
          }).mouseout(function(){
        this.title = this.myTitle;
        $("#suspend").remove();  //??????
          }).mousemove(function(e){
        $("#suspend")
         .css({
          "left":  (e.pageX+7) + "px"
         });
       });

})();
