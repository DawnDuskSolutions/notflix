
<html>
<script>
//alert(sessionStorage.clickcount);
//document.write(sessionStorage.clickcount + "<br><br>");
</script>

<?php

include 'connsrvr.php';
$mnuInfo = "";

function funcBindInsertStmt($srvrConn) {
//if ($_SERVER["REQUEST_METHOD"] == "POST") {
//echo "Testing post method <br>";

$GLOBALS['mnuInfo'] = $_POST['lblMnuVal'];

$rowCnt = count($_POST['idVal']);
//echo $rowCnt;

for ($i=0; $i<$rowCnt; $i++) 
{

$idVal = $_POST['idVal'][$i];
$dbVal = $_POST['dbVal'][$i];
$keyVal = $_POST['keyVal'][$i];
$updateVal = $_POST['updateVal'][$i];
//$dateVal = funcGetDateString();
$dateVal = getCurrDateString();

//echo $dateVal;

/*
echo "<p style='padding:20px;'>";
echo "idVal: " .$idVal ."<br>";
echo "dbVal: " .$dbVal ."<br>";
echo "keyVal: " .$keyVal ."<br>";
echo "updateVal: " .$updateVal ."<br>";
echo "dateVal: " .$dateVal ."<br>";
echo "</p>";
*/

$arr = explode($GLOBALS['dlmtr2'],$dbVal);
$dbName = $arr[0];
$tranMode = $arr[1];

$arr = explode($GLOBALS['dlmtr2'],$keyVal);
$keyCol = $arr[1];
$keyID = $arr[2];

if ($tranMode == "Delete") {
$rsnVal1 = $updateVal;
$rsnVal2 = "";
} else {
$arr = explode($GLOBALS['dlmtr3'],$updateVal);
$rsnVal1 = addslashes($arr[0]);
$rsnVal2 = $arr[1];
}

/*
echo "<br><br>";
echo $rsnVal1;
echo "<br><br>";

echo "<br><br>";
echo $rsnVal2;
echo "<br><br>";
*/

//echo "dbName : " .$dbName ." tranMode: " .$tranMode ." KeyCol: " .$keyCol ." KeyID: " .$keyID ." Reason: " .$rsnVal1;   
//echo "<br><br>";

$testSQL = "";
if ($dbName == "auditlog" && $tranMode == "Delete") {
//skip insertion of audit log
} else {
//'" .$GLOBALS['auditIDPrefix'] ."
//$testSQL = "INSERT INTO JWLAudit (auditPrefix,dbInfo,keyInfo,updateInfo,auditDate) VALUES ('" .$GLOBALS['auditIDPrefix'] ."','" .$dbVal ."','" .$keyVal ."','" .$rsnVal1 ."','" .$dateVal ."')";
$testSQL = "INSERT INTO auditlog (AuditLogID,DBInfo,KeyColInfo,LogMessage,LogDate) VALUES ";
$testSQL = $testSQL ."('" .$idVal ."','" .$dbVal ."','" .$keyVal ."','" .$rsnVal1 ."','" .$dateVal ."')";
//echo $testSQL;
//echo "<br><br>";
funcEntityInsertQuery($srvrConn,$testSQL);
}

$testSQL = "";
if ($tranMode == "Delete") {
$testSQL = "DELETE FROM " . $dbName ." WHERE " .$keyCol ." = '" .$keyID ."'";
} else if ($tranMode == "Edit") { 
/*
echo "<br><br>";
echo $rsnVal2;
echo "<br><br>";
*/

$arr = "";
$arr = explode($GLOBALS['dlmtr1'],$rsnVal2);

$sqlVal = "UPDATE " .$dbName ." SET ";

$cnt = count($arr);
/*
echo "<br><br>";
echo $cnt;
echo "<br><br>";
*/

for ($j=0;$j<$cnt;$j++) {

/*
echo "<br><br>";
echo $arr[$j];
echo "<br><br>";
*/

$tempVal = addslashes($arr[$j]);

$valArr = explode($GLOBALS['dlmtr2'],$tempVal);

/*
echo count($valArr);
echo "<br><br>";
echo $valArr[0];
echo "<br><br>";
echo $valArr[2];
echo "<br><br>";
*/

if ($valArr[0] == "UserPwd") {
$hash = base64_encode ($valArr[2]);
$valArr[2] = $hash;
}

if ($valArr[2] == "NA") {
$valArr[2] = "";
}
if ($j == ($cnt-1)) {
$sqlVal = $sqlVal .$valArr[0] ." = '" .$valArr[2] ."' ";
} else {
$sqlVal = $sqlVal .$valArr[0] ." = '" .$valArr[2] ."', ";
}

} // for loop
$sqlVal = $sqlVal ." WHERE " .$keyCol . " = '" .$keyID ."' "; 

//echo $sqlVal;
//echo "<br><br>";
$testSQL = $sqlVal;
} else if ($tranMode == "Append") {

//echo $tranMode;
//echo "<br><br>";

/*
echo "<br><br>";
echo $updateVal;
echo "<br><br>";
*/

$arr = "";
//$arr = explode($GLOBALS['dlmtr1'],$updateVal);
$arr = explode($GLOBALS['dlmtr1'],$rsnVal2);

$sqlVal = "INSERT INTO " .$dbName ." (";

$cnt = count($arr);

/*
echo "<br><br>";
echo $cnt;
echo "<br><br>";
*/

for ($j=0;$j<$cnt;$j++) {

/*
echo "<br><br>";
echo $arr[$j];
echo "<br><br>";
*/

$tempVal = $arr[$j];

$valArr = explode($GLOBALS['dlmtr2'],$tempVal);

/*
echo count($valArr);
echo "<br><br>";
echo $valArr[0];
echo "<br><br>";
echo $valArr[2];
echo "<br><br>";
*/

if ($j == ($cnt-1)) {
$sqlVal = $sqlVal .$valArr[0] .") ";
} else {
$sqlVal = $sqlVal .$valArr[0] .", ";
}

} // for loop

$sqlVal = $sqlVal ." Values (";

$cnt = count($arr);
/*
echo "<br><br>";
echo $cnt;
echo "<br><br>";
*/

for ($j=0;$j<$cnt;$j++) {

/*
echo "<br><br>";
echo $arr[$j];
echo "<br><br>";
*/
$tempVal = addslashes($arr[$j]);

$valArr = explode($GLOBALS['dlmtr2'],$tempVal);

/*
echo count($valArr);
echo "<br><br>";
echo $valArr[0];
echo "<br><br>";
echo $valArr[2];
echo "<br><br>";
*/

if ($valArr[0] == "UserPwd") {
$hash = base64_encode ($valArr[2]);
$valArr[2] = $hash;
}

if ($valArr[2] == "NA") {
$valArr[2] = "";
}
if ($j == ($cnt-1)) {
$sqlVal = $sqlVal ."'" .$valArr[2] ."') ";
} else {
$sqlVal = $sqlVal ."'" .$valArr[2] ."', ";
}

}

$testSQL = $sqlVal;
}
//echo $testSQL;
//echo "<br><br>";

funcEntityInsertQuery($srvrConn,$testSQL);

} //for loop

//} // end if

} // end func

//=======================================
//=======================================

function funcBindVideoFileUpload($srvrConn) {

$rowCnt = count($_POST['trckRowID']);

/*
 echo "<br><br>";
 echo "rowCnt : " .$rowCnt;
 echo "<br><br>";

//var_dump($_FILES['fileObj']);

if(empty($_FILES['fileObj'])){
  echo "<br><br>";
echo "hello";
  echo "<br><br>";
}

echo "<br><br>";
print_r($_FILES);
echo "<br><br>";

//echo $_FILES[$_POST['fileObj']]['error'];
*/

for ($i=0; $i<$rowCnt; $i++) {

/*
 $target_dir = "videosrc/";
 $name = basename($_FILES["fileObj"]["name"][$i]);
 $target_file = $target_dir .$name;

 echo "<br><br>";
 echo "targetFile : " .$target_file; 
 echo "<br><br>";
*/

 $trckName = $_POST['trckName'][$i];
 $itemID = $_POST['trckID'][$i];
 //$itemCatg = $_POST['stckCatg'][$i];
 $itemFromSrc = $_POST['trckFromSrc'][$i];
 $itemDestSrc = $_POST['trckToSrc'][$i];
 $rsnVal = $_POST['trckReason'][$i];

/*
 echo "<br><br>";
 echo "trck name : " .$trckName; 
 echo "<br><br>";
 echo "track id : " .$itemID;
 //echo "<br><br>";
 //echo "img category : " .$itemCatg;
 echo "<br><br>";
 echo "track from src : " .$itemFromSrc;
 echo "<br><br>";
 echo "track dest src : " .$itemDestSrc;
 echo "<br><br>";
 echo "reason : " .$rsnVal;
 echo "<br><br>";
*/

uploadImgFile($srvrConn,$trckName,$itemID,$itemFromSrc,$itemDestSrc,$rsnVal,$i);

} // for loop

} // end func


function uploadImgFile($srvrConn,$trckName,$trckID,$trckFrmSrc,$trckDstSrc,$rsnVal,$key) {
 //$target_dir = "notflix/src/php/videosrc";
 $target_dir = "videosrc/";
 $name = basename($_FILES["fileObj"]["name"][$key]);
 $target_file = $target_dir .$name;

/*
 echo "<br><br>";
 echo "target file : " .$target_file;
 echo "<br><br>";
*/

$uploadOk = 1;
$videoFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
/*
  $check = getimagesize($_FILES["fileObj"]["tmp_name"][$key]);
  if($check !== false) {
    //echo "File is an image - " . $check["mime"] . ".";
    $uploadOk = 1;
  } else {
    echo "File is not an image.";
    $uploadOk = 0;
  }
*/
$uploadOk = 1;
}

// Check if file already exists
if (file_exists($target_file)) {
  echo "Sorry, file already exists.";
  $uploadOk = 0;
}

/*
// Check file size
if ($_FILES["fileObj"]["size"][$key] > 500000) {
  echo "Sorry, your file is too large.";
  $uploadOk = 0;
}
*/

// Allow certain file formats
if($videoFileType != "mp4" && $videoFileType != "mov" && $videoFileType != "wmv"
&& $videoFileType != "flv" ) {
  echo "Sorry, only MP4, MOV, WMV & FLV files are allowed.";
  $uploadOk = 0;
}

// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
  echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
  if (move_uploaded_file($_FILES["fileObj"]["tmp_name"][$key], $target_file)) {
    //echo "The file ". htmlspecialchars( basename( $_FILES["fileObj"]["name"][$key])). " has been uploaded.";
  } else {
    echo "Sorry, there was an error uploading your file.";
  }
}

$fileExtVal = get_extension($target_file);
$fileNameVal = $trckName ."." .$fileExtVal;
$destSrc = $target_dir .$fileNameVal;

/*
echo "<br><br>";
$destFileSrc;
echo "<br><br>";
*/
rename($target_file,$destSrc);

appendStckImgAudit($srvrConn,$trckName,$trckID,$trckFrmSrc,$trckDstSrc,$rsnVal);
} // end func

function get_extension($file) {
 $extension = end(explode(".", $file));
 return $extension ? $extension : false;
}

function appendStckImgAudit($srvrConn,$trckName,$trckID,$trckFrmSrc,$trckDstSrc,$rsnVal) {

//$imgDate = funcGetDateString();
$trckDate = getCurrDateString();

//echo $imgCat ."<br><br>";
//echo $imgSrcPath ."<br><br>";
//echo $imgDate ."<br><br>";

//$stmtSQL = "INSERT INTO tracksrclog (TrackSrcID,TrackID,TrackFromSrcPath,TrackDestSrcPath,Reason,UpdateDate) VALUES ('" .$trckName ."','" .$trckID ."','" .$trckFrmSrc ."','" .$trckDstSrc ."','" .$rsnVal ."','" .$trckDate ."')";
$stmtSQL = "INSERT INTO tracksrclog (TrackSrcID,TrackID,TrackFromSrcPath,TrackDestSrcPath,Reason,UpdateDate) VALUES ";
$stmtSQL = $stmtSQL ."('" .$trckName ."','" .$trckID ."','" .$trckFrmSrc ."','" .$trckDstSrc ."','" .$rsnVal ."','" .$trckDate ."')";
/*
echo "<br><br>";
echo "SQL stmt : " .$stmtSQL;
echo "<br><br>";
*/

funcEntityInsertQuery($srvrConn,$stmtSQL);

//echo "<br><br>";
//echo "target file : " .$imgSrcPath;
//echo "<br><br>";
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {

$srvrConn = connMySQL($servername,$username,$password,$schemaname);

if(empty($_FILES['fileObj'])){
/*
  //echo "<br><br>";
//echo "hello";
  //echo "<br><br>";
*/

//skip
} else {
funcBindVideoFileUpload($srvrConn);
}

funcBindInsertStmt($srvrConn);

mysqli_close($srvrConn);

} // end if 

//echo $mnuInfo;
//echo "<br><br>";
?>

<script>
//alert(sessionStorage.clickcount);
 if (sessionStorage.clickcount) {
      sessionStorage.clickcount = 0;
    } else {
      sessionStorage.clickcount = 0;
    }

//alert(sessionStorage.clickcount);
//document.write(sessionStorage.clickcount + "<br><br>");

//var urlPath = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port;
var urlPath = sessionStorage.siteDomainName;
//document.write(urlPath + "<br><br>");
//var urlFile = "php-srcFiles/phpDataCntxt.php?name=" + '<?php echo $mnuInfo ?>';

var tempX = parent.document.getElementById("lblUsrName");
var usrName = tempX.innerHTML;
var tempX = parent.document.getElementById("lblUsrPwd");
var usrPwd = tempX.value;

var mnuVal = '<?php echo $mnuInfo ?>';
//alert(mnuVal);
if (mnuVal == 'usracct' ) {
var urlFile = "src/php/validateLogin.php?txtUsr=" + usrName + "&txtPwd=" + usrPwd + "&txtPage=" + mnuVal;
} else if (mnuVal == 'usrchgpwd' || mnuVal == 'usrreg') {
if (mnuVal == 'usrchgpwd') {
msgVal = "msg|Password changes sucessfully, Try to login with new password|no" 
} else {
msgVal = "msg|New member registration sucessful, Try to login|no" 
}
var urlFile = "src/php/welcome.php?usrMsg=" + msgVal + "&mnuOpt=login";
} else {
var urlFile = "src/php/datacontext.php?name=" + mnuVal;
}
//document.write(urlFile + "<br><br>");
//var hrefVal = urlPath + "/" + urlFile;
var hrefVal = urlPath + urlFile;
//document.write(hrefVal + "<br><br>");
//alert(hrefVal);
window.location.href = hrefVal;
</script>

</html>