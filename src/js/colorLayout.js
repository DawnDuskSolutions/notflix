//Color scheme file
var themeClr = "";

//Light - #ccb3ff,Dark - #aa80ff,Self -  #884dff,Menu - #ddccff

//#C8C8C8,#E8E8E8,#B8B8B8,#F5F5F5
var clr_grey = {
"grey_clrLight" : {colorID:"01",colorName:"grey_light",bgColor:"#e0ebeb"},
"grey_clrSelf" : {colorID: "02",colorName: "grey_self",bgColor: "#b3cccc"},
"grey_clrDark" : {colorID:"03",colorName:"grey_light",bgColor:"#75a3a3"},
"grey_clrMenu" : {colorID: "04",colorName: "grey_menu",bgColor: "#f0f5f5"}
}

var clr_blue = {
"blue_clrLight" : {colorID:"01",colorName:"blue_light",bgColor:" #ccebff"},
"blue_clrSelf" : {colorID: "02",colorName: "blue_self",bgColor: "#99d6ff"},
"blue_clrDark" : {colorID:"03",colorName:"blue_light",bgColor:"#074b83"},
"blue_clrMenu" : {colorID: "04",colorName: "blue_menu",bgColor: "#7bf"}
}

function getColorPalatte(strColor) {

//alert("Message Line : getColorPalatte ");
var tempclrX = null;

if (strColor == 'green' ) {
tempclrX = clr_green;
} else if (strColor == 'blue' ) {
tempclrX = clr_blue;
} else if (strColor == 'orange' ) {
tempclrX = clr_orange;
} else if (strColor == 'yellow' ) {
tempclrX = clr_yellow;
} else if (strColor == 'grey' ) {
tempclrX = clr_grey;
} else {
alert("invalid object");
}// if strcolor valid theme

//alert("color palatte obj : " + tempclrX);
return tempclrX;
} // end func

function setColorByElmntID(elmntName,strColor) {

//alert("Message Line : setColor_elmntByID");
document.getElementById(elmntName).style.backgroundColor = strColor;

} // end func

function toggleColorOnclick(strColor) {
var clrName = "";
var clrVal = "";

themeClr = getColorPalatte(strColor);

sessionStorage.clrSelected = strColor;

if (themeClr == null || themeClr == undefined) {
//skip
} else {

clrName = strColor + "_clrSelf";
clrVal = themeClr[clrName].bgColor;
setColorByElmntID("mnuRow",clrVal);
setColorByElmntID("ftrRow",clrVal);

clrName = strColor + "_clrLight";
clrVal = themeClr[clrName].bgColor;
setColorByElmntID("hdrRow",clrVal);
setColorByElmntID("dynaRow",clrVal);
} // if themeClr == null

} //end func

