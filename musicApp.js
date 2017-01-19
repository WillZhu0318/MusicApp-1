//Switch navbar
var navbarList = document.querySelectorAll("#navbar-list li");
var sectionList = document.querySelectorAll(".main-section > section");
var iconList = document.querySelectorAll("#navbarIcon");
var iconTextList = document.querySelectorAll("#navbarIconText");

function navbarClickCallBack(index) {
    return function() {
        console.log(index + "!");
        for (var i = navbarList.length - 1; i >= 0; i--) {
            if(i !== index)
            {
                sectionList[i].style.display = "none";
                iconList[i].style.color = "#333";
                iconTextList[i].style.color = "#acacac";
            }
            else
            {
                sectionList[i].style.display = "block";
                iconList[i].style.color = "#810082";
                iconTextList[i].style.color = "#810082";
            }
        }
    }
}

var librarySectionIndex = 0;
var playlistSection = 1;
var searchSection = 2;
navbarList[librarySectionIndex].addEventListener('click', navbarClickCallBack(librarySectionIndex), false);
navbarList[playlistSection].addEventListener('click', navbarClickCallBack(playlistSection), false);
navbarList[searchSection].addEventListener('click', navbarClickCallBack(searchSection), false);
