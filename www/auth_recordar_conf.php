<?php
//Include Common Files @1-35EF19A3
define("RelativePath", ".");
define("PathToCurrentPage", "/");
define("FileName", "auth_recordar_conf.php");
include_once(RelativePath . "/Common.php");
include_once(RelativePath . "/Template.php");
include_once(RelativePath . "/Sorter.php");
include_once(RelativePath . "/Navigator.php");
//End Include Common Files

//Include Page implementation @2-8EACA429
include_once(RelativePath . "/header.php");
//End Include Page implementation
ghj
//Include Page implementation @3-EBA5EA16
include_once(RelativePath . "/footer.php");
//End Include Page implementation

//Initialize Page @1-410C1661
// Variables
$FileName = "";
$Redirect = "";
$Tpl = "";
$TemplateFileName = "";
$BlockToParse = "";
$ComponentName = "";
$Attributes = "";

// Events;
$CCSEvents = array();
$CCSEventResult = "";

$FileName = FileName;
$Redirect = "";
$TemplateFileName = "auth_recordar_conf.html";
$BlockToParse = "main";
$TemplateEncoding = "UTF-8";
$ContentType = "text/html";
$PathToRoot = "./";
$Charset = $Charset ? $Charset : "utf-8";
//End Initialize Page

//Before Initialize @1-E870CEBC
$CCSEventResult = CCGetEvent($CCSEvents, "BeforeInitialize", $MainPage);
//End Before Initialize

//Initialize Objects @1-7A9917E0
$Attributes = new clsAttributes("page:");
$MainPage->Attributes = & $Attributes;

// Controls
$inc_header = new clsheader("", "inc_header", $MainPage);
$inc_header->Initialize();
$inc_footer = new clsfooter("", "inc_footer", $MainPage);
$inc_footer->Initialize();
$MainPage->inc_header = & $inc_header;
$MainPage->inc_footer = & $inc_footer;

$CCSEventResult = CCGetEvent($CCSEvents, "AfterInitialize", $MainPage);

if ($Charset) {
    header("Content-Type: " . $ContentType . "; charset=" . $Charset);
} else {
    header("Content-Type: " . $ContentType);
}
//End Initialize Objects

//Initialize HTML Template @1-51EC165D
$CCSEventResult = CCGetEvent($CCSEvents, "OnInitializeView", $MainPage);
$Tpl = new clsTemplate($FileEncoding, $TemplateEncoding);
$Tpl->LoadTemplate(PathToCurrentPage . $TemplateFileName, $BlockToParse, "UTF-8");
$Tpl->block_path = "/$BlockToParse";
$CCSEventResult = CCGetEvent($CCSEvents, "BeforeShow", $MainPage);
$Attributes->SetValue("pathToRoot", "");
$Attributes->Show();
//End Initialize HTML Template

//Execute Components @1-DCBE5AC7
$inc_header->Operations();
$inc_footer->Operations();
//End Execute Components

//Go to destination page @1-25976DB3
if($Redirect)
{
    $CCSEventResult = CCGetEvent($CCSEvents, "BeforeUnload", $MainPage);
    header("Location: " . $Redirect);
    $inc_header->Class_Terminate();
    unset($inc_header);
    $inc_footer->Class_Terminate();
    unset($inc_footer);
    unset($Tpl);
    exit;
}
//End Go to destination page

//Show Page @1-3DEAFC1E
$inc_header->Show();
$inc_footer->Show();
$Tpl->block_path = "";
$Tpl->Parse($BlockToParse, false);
if (!isset($main_block)) $main_block = $Tpl->GetVar($BlockToParse);
$main_block = CCConvertEncoding($main_block, $FileEncoding, $TemplateEncoding);
$CCSEventResult = CCGetEvent($CCSEvents, "BeforeOutput", $MainPage);
if ($CCSEventResult) echo $main_block;
//End Show Page

//Unload Page @1-FCD28BDA
$CCSEventResult = CCGetEvent($CCSEvents, "BeforeUnload", $MainPage);
$inc_header->Class_Terminate();
unset($inc_header);
$inc_footer->Class_Terminate();
unset($inc_footer);
unset($Tpl);
//End Unload Page


?>
