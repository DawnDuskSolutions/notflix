
//bind mnuRow  elements
var mnuElmntDef = "";
mnuElmntDef = "mnuRow|mnuCol01|td";
mnuElmntDef = mnuElmntDef + "||" + "mnuRow|mnuCol02|td";
mnuElmntDef = mnuElmntDef + "||" + "mnuRow|mnuCol03|td";
mnuElmntDef = mnuElmntDef + "||" + "mnuRow|mnuCol04|td";
mnuElmntDef = mnuElmntDef + "||" + "mnuRow|mnuCol05|td";
mnuElmntDef = mnuElmntDef + "||" + "mnuRow|mnuCol06|td";
mnuElmntDef = mnuElmntDef + "||" + "mnuRow|mnuCol07|td";

//mnuBtn
mnuElmntDef = mnuElmntDef + "||" + "mnuCol01|mnuLbl01|label";

mnuElmntDef = mnuElmntDef + "||" + "mnuCol02|imgLogo|img";
mnuElmntDef = mnuElmntDef + "||" + "mnuCol03|logoLbl|label";

mnuElmntDef = mnuElmntDef + "||" + "mnuCol04|mnuHome|button";

mnuElmntDef = mnuElmntDef + "||" + "mnuCol05|mnuLogin|img";

mnuElmntDef = mnuElmntDef + "||" + "mnuCol06|mnuTrack|img";

mnuElmntDef = mnuElmntDef + "||" + "mnuCol07|mnuAdmin|img";

mnuElmntDef = mnuElmntDef + "||" + "mnuCol07|divAdmin|div";
mnuElmntDef = mnuElmntDef + "||" + "divAdmin|mnuUserAdm|button";
mnuElmntDef = mnuElmntDef + "||" + "divAdmin|adminSep01|br";
mnuElmntDef = mnuElmntDef + "||" + "divAdmin|mnuTrackAdm|button";
mnuElmntDef = mnuElmntDef + "||" + "divAdmin|adminSep01|br";
mnuElmntDef = mnuElmntDef + "||" + "divAdmin|mnuTrackAudit|button";
mnuElmntDef = mnuElmntDef + "||" + "divAdmin|adminSep02|br";

//bind mnuRow elmnt attributes
mnuAttrDef = "mnuCol01|colspan|1";

mnuAttrDef = mnuAttrDef + "||" + "mnuCol01|style|width:10%;text-align:center;";

mnuAttrDef = mnuAttrDef + "||" + "mnuCol02|style|width:4%;"; //background-color: cyan;";
mnuAttrDef = mnuAttrDef + "||" + "mnuCol03|style|width:46%;"; //background-color: cyan;";

mnuAttrDef = mnuAttrDef + "||" + "mnuCol04|style|width:10%;"; //background-color:lightgrey;";

mnuAttrDef = mnuAttrDef + "||" + "mnuCol05|style|width:10%;";

mnuAttrDef = mnuAttrDef + "||" + "mnuCol06|style|width:10%;";
mnuAttrDef = mnuAttrDef + "||" + "mnuCol06|onmouseleave|callHidePopupMenu('Track')";
mnuAttrDef = mnuAttrDef + "||" + "mnuCol06|onmouseover|callShowPopupMenu('Track')";

mnuAttrDef = mnuAttrDef + "||" + "mnuCol07|style|width:10%;";

mnuAttrDef = mnuAttrDef + "||" + "mnuCol07|style|width:10%;position:relative;text-align:center;";
mnuAttrDef = mnuAttrDef + "||" + "mnuCol07|onmouseleave|callHidePopupMenu('Admin')";
mnuAttrDef = mnuAttrDef + "||" + "mnuCol07|onmouseover|callShowPopupMenu('Admin')";
mnuAttrDef = mnuAttrDef + "||" + "divAdmin|class|clsMnuCnt";

mnuAttrDef = mnuAttrDef + "||" + "mnuLbl01|innerHTML|&nbsp;";

mnuAttrDef = mnuAttrDef + "||" + "imgLogo|alt|Logo";
mnuAttrDef = mnuAttrDef + "||" + "imgLogo|src|icons/logo-icn.png";
mnuAttrDef = mnuAttrDef + "||" + "imgLogo|style|width:40px;height:40px;border-radius:50%;";

mnuAttrDef = mnuAttrDef + "||" + "logoLbl|style|font-size:20px;";
mnuAttrDef = mnuAttrDef + "||" + "logoLbl|innerHTML|NotFLIX";

mnuAttrDef = mnuAttrDef + "||" + "mnuHome|innerHTML|HOME";
mnuAttrDef = mnuAttrDef + "||" + "mnuHome|onclick|onHomeBtnClick()";

mnuAttrDef = mnuAttrDef + "||" + "mnuLogin|alt|Login";
mnuAttrDef = mnuAttrDef + "||" + "mnuLogin|src|icons/login-icn.png";
mnuAttrDef = mnuAttrDef + "||" + "mnuLogin|onclick|funcShowLoginFrm('login')";

//mnuAttrDef = mnuAttrDef + "||" + "mnuTrack|innerHTML|TRACK";
mnuAttrDef = mnuAttrDef + "||" + "mnuTrack|alt|Track";
mnuAttrDef = mnuAttrDef + "||" + "mnuTrack|src|icons/track-icn.png";
mnuAttrDef = mnuAttrDef + "||" + "mnuTrack|style|border-radius:50%";
mnuAttrDef = mnuAttrDef + "||" + "mnuTrack|onclick|onTrackImgClick('track')";

mnuAttrDef = mnuAttrDef + "||" + "mnuAdmin|innerHTML|ADMIN";

mnuAttrDef = mnuAttrDef + "||" + "mnuUserAdm|innerHTML|USER ACCT";
mnuAttrDef = mnuAttrDef + "||" + "mnuUserAdm|onclick|new onAdminImgClick('user')";
mnuAttrDef = mnuAttrDef + "||" + "mnuTrackAdm|innerHTML|VIDEOTRACK";
mnuAttrDef = mnuAttrDef + "||" + "mnuTrackAdm|onclick|new onAdminImgClick('track')";
mnuAttrDef = mnuAttrDef + "||" + "mnuTrackAudit|innerHTML|TRACK AUDIT";
mnuAttrDef = mnuAttrDef + "||" + "mnuTrackAudit|onclick|new onAdminImgClick('trackaudit')";

mnuAttrDef = mnuAttrDef + "||" + "mnuAdmin|alt|Admin";
mnuAttrDef = mnuAttrDef + "||" + "mnuAdmin|src|icons/admin-icn.png";
mnuAttrDef = mnuAttrDef + "||" + "mnuAdmin|style|border-radius:50%";


function callHidePopupMenu(mnuClicked) {
var tempX = "";
if (mnuClicked == "Admin") {
tempX = document.getElementById("divAdmin");
funcHideAdminMenu(tempX);
} else {
//skip
}
}

function callShowPopupMenu(mnuClicked) {
var divX = "";
if (mnuClicked == "Admin") {
divX = document.getElementById("divAdmin");
funcShowAdminMenu(divX);
} else {
//skip
}
}

function bindMenuLayout() {

//alert("function - bindMenuLayout");

//alert("function - bindMenuLayout : " + mnuElmntDef);

bindElmntDef(2,mnuElmntDef);

//alert("function - bindMenuLayout : " + mnuAttrDef );

bindElmntAttrRule(2,mnuAttrDef);

mnuElmntDef="";
mnuAttrDef="";
} // end func
