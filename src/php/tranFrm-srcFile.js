
//var urlVal = location.protocol +"//"+  location.hostname + ":" + location.port +"/";
var urlVal = sessionStorage.siteDomainName;

window.onclick = function(event) {
var divX = document.getElementById("popupDiv");
  if (event.target == divX) {
     divX.style.display = "none";
  }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function funcReplaceStrVal(strVal,srchVal,newVal) {
//var newVal = strVal.replace(/\|/g," ");
//strVal.replace(/[^A-Za-z]/g,'');
//str.match(/ain/g);
//alert(strVal);
var valX = "";

if (strVal == null || strVal == undefined || strVal == "") {
//skip
} else {
var i=0;
var strLength = strVal.length;
for(i=0; i < strLength; i++) {
 if (newVal == "" || newVal == " "){
 strVal = strVal.replace(srchVal," ");
 } else {
 strVal = strVal.replace(srchVal,newVal);
 }
}
valX =strVal;
}
return valX;
}

function getCounter() {
var rowCnt = 0;
if (sessionStorage.clickcount) {
rowCnt = sessionStorage.clickcount;
} else {
rowCnt = 0;
}
return rowCnt;
} // end func

function resetCounter() {
if (sessionStorage.clickcount) {
      sessionStorage.clickcount = 0;
    } else {
      //skip
    }
}

function increaseCounter() {
    if (sessionStorage.clickcount) {
      sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
    } else {
      sessionStorage.clickcount = 0;
    }
}

function decreaseCounter() {
    if (sessionStorage.clickcount) {
      sessionStorage.clickcount = Number(sessionStorage.clickcount)-1;
    } else {
      sessionStorage.clickcount = 0;
    }
}

function closePopupFrm() {
var divX = document.getElementById("popupDiv");
divX.style.display = "none";

var divY = document.getElementById("popupFrm");
if (divY == null || divY == "" || divY == undefined) {
//skip
} else {
removeAllChildNodes(divY);
divX.removeChild(divY);
}
}

/*
function funcZoomImgOnclick(trckSrcVal,prodName){
var divX = document.getElementById("popupDiv");
divX.style.paddingTop = "10px";
divX.style.display = "block";

var divY = document.getElementById("popupFrm");
if (divY == null || divY == "" || divY == undefined) {
//skip
} else {
removeAllChildNodes(divY);
divX.removeChild(divY);
}

divY = document.createElement("div");
divY.setAttribute("id","popupFrm");
divY.setAttribute("class","modal-content");
divY.setAttribute("text-align","center");
divY.style.width = "70%";

var spanX = "";
spanX = document.createElement("span");
spanX.setAttribute("class","close");
spanX.innerHTML = "&times";
spanX.setAttribute("onclick","closePopupFrm()");
divY.appendChild(spanX);

var elmntX = "";
elmntX = document.createElement("center");

var elmntY = "";
elmntY = document.createElement("label");
elmntY.setAttribute("style","font-size:16px;padding:10px;");
//var strVal = prodName.replace(/\|/g, " ");
var strVal = funcReplaceStrVal(prodName,"|"," ");
elmntY.innerHTML = strVal;
elmntX.appendChild(elmntY);

elmntY = "";
elmntY = document.createElement("br");
elmntX.appendChild(elmntY);

var elmntZ = "";
elmntZ = document.createElement("video");
elmntZ.setAttribute("src",trckSrcVal);
elmntZ.setAttribute("width","600px");
elmntZ.setAttribute("height","500px");
elmntZ.setAttribute("controls","controls");
elmntX.appendChild(elmntZ);

divY.appendChild(elmntX);

divX.appendChild(divY);
}
*/

function funcBindElmntEvent(dbX,dbCol,selIndx) {

var strID = dbX+dbCol+selIndx;
//alert(document.getElementById(strID));

var tempX = "";
var blnVal = true;
tempX = document.getElementById(strID);

if (dbCol == "TrackSrc") {
var tmpID = dbX+dbCol+selIndx+"-tmp";
var tempY = document.getElementById(tmpID);
var valX = tempY.innerHTML;
if (valX == "NA") {
//
} else {
tempX = tempY;
blnVal = false;
}
} 
//alert(tempX.innerHTML);

var parentX = tempX.parentElement;
var txtVal = "";

if (tempX.tagName.toLowerCase() == "label") {
txtVal = tempX.innerHTML;
} else {
txtVal = tempX.value;
}

if (dbCol == "TrackSrc") {
funcShowImageView(parentX,txtVal,blnVal);
} else {
funcReadMultiLineTxt(parentX,txtVal);
}

} // end func

function funcHideImageView() {
var divX = document.getElementById("divImgSrc");

if (divX == null || divX == undefined || divX == "") {
//skip
} else {
removeAllChildNodes(divX);
var tempX = divX.parentElement;
tempX.removeChild(divX);
}
} // end func

function funcShowImageView(parentX,dataVal,blnAppdSiteURL) {

funcHideImageView();

var divX = "";
divX = document.createElement("div");
divX.setAttribute("id","divImgSrc");
divX.style.minWidth = "210px";
divX.style.minHeight = "210px";

elmntX = document.createElement("video");
elmntX.setAttribute("id","trckView");
if (blnAppdSiteURL == true) {
srcX = urlVal + dataVal;
} else {
srcX = dataVal;
}
//alert(srcX);
elmntX.setAttribute("src",srcX);
elmntX.setAttribute("width","200px");
elmntX.setAttribute("height","200px");
divX.appendChild(elmntX);

elmntX = document.createElement("p");
divX.appendChild(elmntX);

elmntX = document.createElement("button");
elmntX.setAttribute("id","btnClose");
elmntX.setAttribute("style","padding:10px;outline:none;border:0px;border-radius:5px;background-color:#e6f5ff;");               
elmntX.setAttribute("onclick","funcHideImageView()");
elmntX.innerHTML = "Close";
divX.appendChild(elmntX);

parentX.appendChild(divX);
}

function funcHideMultiLineTxt() {
var divX = document.getElementById("divMultiLn");

if (divX == null || divX == undefined || divX == "") {
//skip
} else {
removeAllChildNodes(divX);
var tempX = divX.parentElement;
tempX.removeChild(divX);
}
} // end func

function funcReadMultiLineTxt(parentX,dataVal) {

funcHideMultiLineTxt();

var divX = "";
divX = document.createElement("div");
divX.setAttribute("id","divMultiLn");
divX.style.minWidth = "200px";

elmntX = document.createElement("p");
elmntX.setAttribute("id","multiLnTxt");
elmntX.setAttribute("style","text-align:left;padding:10px;border:0px solid #FAEBD7;border-radius:5px;background-color:#e6f5ff");
var valX = "";
valX = funcReplaceStrVal(dataVal,"\n","<br>");
//valX = valX.replace(/\n/g, '<br/>');
elmntX.innerHTML = valX; //"Multiline text display" + selNodeIndx;
divX.appendChild(elmntX);

elmntX = document.createElement("button");
elmntX.setAttribute("id","btnClose");
elmntX.setAttribute("style","padding:10px;outline:none;border:0px;border-radius:5px;background-color:#e6f5ff;");               
elmntX.setAttribute("onclick","funcHideMultiLineTxt()");
elmntX.innerHTML = "Close";
divX.appendChild(elmntX);

parentX.appendChild(divX);
} // end func
