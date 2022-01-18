<?php
//Include Common Files @1-CEC982DE
define("RelativePath", ".");
define("PathToCurrentPage", "/");
define("FileName", "auth_q.php");
include_once(RelativePath . "/Common.php");
include_once(RelativePath . "/Template.php");
include_once(RelativePath . "/Sorter.php");
include_once(RelativePath . "/Navigator.php");
//End Include Common Files

class clsRecordPORTAL_AUTENTIFICACION { //PORTAL_AUTENTIFICACION Class @3-5EED4352

//Variables @3-9E315808

    // Public variables
    public $ComponentType = "Record";
    public $ComponentName;
    public $Parent;
    public $HTMLFormAction;
    public $PressedButton;
    public $Errors;
    public $ErrorBlock;
    public $FormSubmitted;
    public $FormEnctype;
    public $Visible;
    public $IsEmpty;

    public $CCSEvents = array();
    public $CCSEventResult;

    public $RelativePath = "";

    public $InsertAllowed = false;
    public $UpdateAllowed = false;
    public $DeleteAllowed = false;
    public $ReadAllowed   = false;
    public $EditMode      = false;
    public $ds;
    public $DataSource;
    public $ValidatingControls;
    public $Controls;
    public $Attributes;

    // Class variables
//End Variables

//Class_Initialize Event @3-FF5B48C7
    function __construct($RelativePath, & $Parent)
    {

        global $FileName;
        global $CCSLocales;
        global $DefaultDateFormat;
        $this->Visible = true;
        $this->Parent = & $Parent;
        $this->RelativePath = $RelativePath;
        $this->Errors = new clsErrors();
        $this->ErrorBlock = "Record PORTAL_AUTENTIFICACION/Error";
        $this->DataSource = new clsPORTAL_AUTENTIFICACIONDataSource($this);
        $this->ds = & $this->DataSource;
        $this->UpdateAllowed = true;
        $this->ReadAllowed = true;
        if($this->Visible)
        {
            $this->ComponentName = "PORTAL_AUTENTIFICACION";
            $this->Attributes = new clsAttributes($this->ComponentName . ":");
            $CCSForm = explode(":", CCGetFromGet("ccsForm", ""), 2);
            if(sizeof($CCSForm) == 1)
                $CCSForm[1] = "";
            list($FormName, $FormMethod) = $CCSForm;
            $this->EditMode = ($FormMethod == "Edit");
            $this->FormEnctype = "application/x-www-form-urlencoded";
            $this->FormSubmitted = ($FormName == $this->ComponentName);
            $Method = $this->FormSubmitted ? ccsPost : ccsGet;
            $this->AUTE_pregunta = new clsControl(ccsLabel, "AUTE_pregunta", "AUTE Pregunta", ccsText, "", CCGetRequestParam("AUTE_pregunta", $Method, NULL), $this);
            $this->AUTE_respuesta = new clsControl(ccsTextBox, "AUTE_respuesta", "AUTE Respuesta", ccsText, "", CCGetRequestParam("AUTE_respuesta", $Method, NULL), $this);
            $this->AUTE_pass_creada = new clsControl(ccsTextBox, "AUTE_pass_creada", "AUTE Pass Creada", ccsText, "", CCGetRequestParam("AUTE_pass_creada", $Method, NULL), $this);
            $this->txt_clave_nueva = new clsControl(ccsTextBox, "txt_clave_nueva", "txt_clave_nueva", ccsText, "", CCGetRequestParam("txt_clave_nueva", $Method, NULL), $this);
            $this->Button_Update = new clsButton("Button_Update", $Method, $this);
            $this->Button1 = new clsButton("Button1", $Method, $this);
        }
    }
//End Class_Initialize Event

//Initialize Method @3-0503DAA3
    function Initialize()
    {

        if(!$this->Visible)
            return;

        $this->DataSource->Parameters["sesq_rut"] = CCGetSession("q_rut", NULL);
    }
//End Initialize Method

//Validate Method @3-4B2F5DD5
    function Validate()
    {
        global $CCSLocales;
        $Validation = true;
        $Where = "";
        $Validation = ($this->AUTE_respuesta->Validate() && $Validation);
        $Validation = ($this->AUTE_pass_creada->Validate() && $Validation);
        $Validation = ($this->txt_clave_nueva->Validate() && $Validation);
        $this->CCSEventResult = CCGetEvent($this->CCSEvents, "OnValidate", $this);
        $Validation =  $Validation && ($this->AUTE_respuesta->Errors->Count() == 0);
        $Validation =  $Validation && ($this->AUTE_pass_creada->Errors->Count() == 0);
        $Validation =  $Validation && ($this->txt_clave_nueva->Errors->Count() == 0);
        return (($this->Errors->Count() == 0) && $Validation);
    }
//End Validate Method

//CheckErrors Method @3-604575AD
    function CheckErrors()
    {
        $errors = false;
        $errors = ($errors || $this->AUTE_pregunta->Errors->Count());
        $errors = ($errors || $this->AUTE_respuesta->Errors->Count());
        $errors = ($errors || $this->AUTE_pass_creada->Errors->Count());
        $errors = ($errors || $this->txt_clave_nueva->Errors->Count());
        $errors = ($errors || $this->Errors->Count());
        $errors = ($errors || $this->DataSource->Errors->Count());
        return $errors;
    }
//End CheckErrors Method

//MasterDetail @3-ED598703
function SetPrimaryKeys($keyArray)
{
    $this->PrimaryKeys = $keyArray;
}
function GetPrimaryKeys()
{
    return $this->PrimaryKeys;
}
function GetPrimaryKey($keyName)
{
    return $this->PrimaryKeys[$keyName];
}
//End MasterDetail

//Operation Method @3-FD64E2FF
    function Operation()
    {
        if(!$this->Visible)
            return;

        global $Redirect;
        global $FileName;

        $this->DataSource->Prepare();
        if(!$this->FormSubmitted) {
            $this->EditMode = $this->DataSource->AllParametersSet;
            return;
        }

        if($this->FormSubmitted) {
            $this->PressedButton = $this->EditMode ? "Button_Update" : "Button1";
            if($this->Button_Update->Pressed) {
                $this->PressedButton = "Button_Update";
            } else if($this->Button1->Pressed) {
                $this->PressedButton = "Button1";
            }
        }
        $Redirect = $FileName . "?" . CCGetQueryString("QueryString", array("ccsForm"));
        if($this->PressedButton == "Button1") {
            $Redirect = "index.php" . "?" . CCGetQueryString("QueryString", array("ccsForm"));
            if(!CCGetEvent($this->Button1->CCSEvents, "OnClick", $this->Button1)) {
                $Redirect = "";
            }
        } else if($this->Validate()) {
            if($this->PressedButton == "Button_Update") {
                $Redirect = "auth_recordar_conf.php" . "?" . CCGetQueryString("QueryString", array("ccsForm"));
                if(!CCGetEvent($this->Button_Update->CCSEvents, "OnClick", $this->Button_Update) || !$this->UpdateRow()) {
                    $Redirect = "";
                }
            }
        } else {
            $Redirect = "";
        }
        if ($Redirect)
            $this->DataSource->close();
    }
//End Operation Method

//UpdateRow Method @3-D8BE542B
    function UpdateRow()
    {
        $this->CCSEventResult = CCGetEvent($this->CCSEvents, "BeforeUpdate", $this);
        if(!$this->UpdateAllowed) return false;
        $this->DataSource->AUTE_pass_creada->SetValue($this->AUTE_pass_creada->GetValue(true));
        $this->DataSource->Update();
        $this->CCSEventResult = CCGetEvent($this->CCSEvents, "AfterUpdate", $this);
        return (!$this->CheckErrors());
    }
//End UpdateRow Method

//Show Method @3-00502B11
    function Show()
    {
        global $CCSUseAmp;
        global $Tpl;
        global $FileName;
        global $CCSLocales;
        $Error = "";

        if(!$this->Visible)
            return;

        $this->CCSEventResult = CCGetEvent($this->CCSEvents, "BeforeSelect", $this);


        $RecordBlock = "Record " . $this->ComponentName;
        $ParentPath = $Tpl->block_path;
        $Tpl->block_path = $ParentPath . "/" . $RecordBlock;
        $this->EditMode = $this->EditMode && $this->ReadAllowed;
        if($this->EditMode) {
            if($this->DataSource->Errors->Count()){
                $this->Errors->AddErrors($this->DataSource->Errors);
                $this->DataSource->Errors->clear();
            }
            $this->DataSource->Open();
            if($this->DataSource->Errors->Count() == 0 && $this->DataSource->next_record()) {
                $this->DataSource->SetValues();
                $this->AUTE_pregunta->SetValue($this->DataSource->AUTE_pregunta->GetValue());
            } else {
                $this->EditMode = false;
            }
        }
        if (!$this->FormSubmitted) {
        }

        if($this->FormSubmitted || $this->CheckErrors()) {
            $Error = "";
            $Error = ComposeStrings($Error, $this->AUTE_pregunta->Errors->ToString());
            $Error = ComposeStrings($Error, $this->AUTE_respuesta->Errors->ToString());
            $Error = ComposeStrings($Error, $this->AUTE_pass_creada->Errors->ToString());
            $Error = ComposeStrings($Error, $this->txt_clave_nueva->Errors->ToString());
            $Error = ComposeStrings($Error, $this->Errors->ToString());
            $Error = ComposeStrings($Error, $this->DataSource->Errors->ToString());
            $Tpl->SetVar("Error", $Error);
            $Tpl->Parse("Error", false);
        }
        $CCSForm = $this->EditMode ? $this->ComponentName . ":" . "Edit" : $this->ComponentName;
        $this->HTMLFormAction = $FileName . "?" . CCAddParam(CCGetQueryString("QueryString", ""), "ccsForm", $CCSForm);
        $Tpl->SetVar("Action", !$CCSUseAmp ? $this->HTMLFormAction : str_replace("&", "&amp;", $this->HTMLFormAction));
        $Tpl->SetVar("HTMLFormName", $this->ComponentName);
        $Tpl->SetVar("HTMLFormEnctype", $this->FormEnctype);
        $this->Button_Update->Visible = $this->EditMode && $this->UpdateAllowed;

        $this->CCSEventResult = CCGetEvent($this->CCSEvents, "BeforeShow", $this);
        $this->Attributes->Show();
        if(!$this->Visible) {
            $Tpl->block_path = $ParentPath;
            return;
        }

        $this->AUTE_pregunta->Show();
        $this->AUTE_respuesta->Show();
        $this->AUTE_pass_creada->Show();
        $this->txt_clave_nueva->Show();
        $this->Button_Update->Show();
        $this->Button1->Show();
        $Tpl->parse();
        $Tpl->block_path = $ParentPath;
        $this->DataSource->close();
    }
//End Show Method

} //End PORTAL_AUTENTIFICACION Class @3-FCB6E20C

class clsPORTAL_AUTENTIFICACIONDataSource extends clsDBusuarios_extranet {  //PORTAL_AUTENTIFICACIONDataSource Class @3-9C9A9284

//DataSource Variables @3-406DE185
    public $Parent = "";
    public $CCSEvents = array();
    public $CCSEventResult;
    public $ErrorBlock;
    public $CmdExecution;

    public $UpdateParameters;
    public $wp;
    public $AllParametersSet;

    public $UpdateFields = array();

    // Datasource fields
    public $AUTE_pregunta;
    public $AUTE_respuesta;
    public $AUTE_pass_creada;
    public $txt_clave_nueva;
//End DataSource Variables

//DataSourceClass_Initialize Event @3-FB73469C
    function __construct(& $Parent)
    {
        $this->Parent = & $Parent;
        $this->ErrorBlock = "Record PORTAL_AUTENTIFICACION/Error";
        $this->Initialize();
        $this->AUTE_pregunta = new clsField("AUTE_pregunta", ccsText, "");
        
        $this->AUTE_respuesta = new clsField("AUTE_respuesta", ccsText, "");
        
        $this->AUTE_pass_creada = new clsField("AUTE_pass_creada", ccsText, "");
        
        $this->txt_clave_nueva = new clsField("txt_clave_nueva", ccsText, "");
        

        $this->UpdateFields["aute_pass_creada"] = array("Name" => "aute_pass_creada", "Value" => "", "DataType" => ccsText, "OmitIfEmpty" => 1);
    }
//End DataSourceClass_Initialize Event

//Prepare Method @3-5EA34B30
    function Prepare()
    {
        global $CCSLocales;
        global $DefaultDateFormat;
        $this->wp = new clsSQLParameters($this->ErrorBlock);
        $this->wp->AddParameter("1", "sesq_rut", ccsInteger, "", "", $this->Parameters["sesq_rut"], 0, false);
        $this->AllParametersSet = $this->wp->AllParamsSet();
        $this->wp->Criterion[1] = $this->wp->Operation(opEqual, "aute_rut", $this->wp->GetDBValue("1"), $this->ToSQL($this->wp->GetDBValue("1"), ccsInteger),false);
        $this->Where = 
             $this->wp->Criterion[1];
    }
//End Prepare Method

//Open Method @3-35A195DE
    function Open()
    {
        $this->CCSEventResult = CCGetEvent($this->CCSEvents, "BeforeBuildSelect", $this->Parent);
        $this->SQL = "SELECT aupr_pregunta_txt, aute_pregunta \n\n" .
        "FROM portal_autentificacion \"PORTAL_AUTENTIFICACION\" INNER JOIN portal_autentificacion_preg \"PORTAL_AUTENTIFICACION_PREG\" ON\n\n" .
        "\"PORTAL_AUTENTIFICACION\".aute_pregunta = \"PORTAL_AUTENTIFICACION_PREG\".aupr_codigo_num {SQL_Where} {SQL_OrderBy}";
        $this->CCSEventResult = CCGetEvent($this->CCSEvents, "BeforeExecuteSelect", $this->Parent);
        $this->PageSize = 1;
        $this->query($this->OptimizeSQL(CCBuildSQL($this->SQL, $this->Where, $this->Order)));
        $this->CCSEventResult = CCGetEvent($this->CCSEvents, "AfterExecuteSelect", $this->Parent);
    }
//End Open Method

//SetValues Method @3-0BC8610B
    function SetValues()
    {
        $this->AUTE_pregunta->SetDBValue($this->f("aupr_pregunta_txt"));
    }
//End SetValues Method

//Update Method @3-6C5D3953
    function Update()
    {
        global $CCSLocales;
        global $DefaultDateFormat;
        $this->CmdExecution = true;
        $this->cp["aute_pass_creada"] = new clsSQLParameter("ctrlAUTE_pass_creada", ccsText, "", "", $this->AUTE_pass_creada->GetValue(true), NULL, false, $this->ErrorBlock);
        $wp = new clsSQLParameters($this->ErrorBlock);
        $wp->AddParameter("1", "sesq_rut", ccsInteger, "", "", CCGetSession("q_rut", NULL), 0, false);
        if(!$wp->AllParamsSet()) {
            $this->Errors->addError($CCSLocales->GetText("CCS_CustomOperationError_MissingParameters"));
        }
        $this->CCSEventResult = CCGetEvent($this->CCSEvents, "BeforeBuildUpdate", $this->Parent);
        if (!is_null($this->cp["aute_pass_creada"]->GetValue()) and !strlen($this->cp["aute_pass_creada"]->GetText()) and !is_bool($this->cp["aute_pass_creada"]->GetValue())) 
            $this->cp["aute_pass_creada"]->SetValue($this->AUTE_pass_creada->GetValue(true));
        $wp->Criterion[1] = $wp->Operation(opEqual, "aute_rut", $wp->GetDBValue("1"), $this->ToSQL($wp->GetDBValue("1"), ccsInteger),false);
        $Where = 
             $wp->Criterion[1];
        $this->UpdateFields["aute_pass_creada"]["Value"] = $this->cp["aute_pass_creada"]->GetDBValue(true);
        $this->SQL = CCBuildUpdate("portal_autentificacion", $this->UpdateFields, $this);
        $this->SQL .= strlen($Where) ? " WHERE " . $Where : $Where;
        $this->CCSEventResult = CCGetEvent($this->CCSEvents, "BeforeExecuteUpdate", $this->Parent);
        if($this->Errors->Count() == 0 && $this->CmdExecution) {
            $this->query($this->SQL);
            $this->CCSEventResult = CCGetEvent($this->CCSEvents, "AfterExecuteUpdate", $this->Parent);
        }
    }
//End Update Method

} //End PORTAL_AUTENTIFICACIONDataSource Class @3-FCB6E20C

//Include Page implementation @21-8EACA429
include_once(RelativePath . "/header.php");
//End Include Page implementation

//Include Page implementation @22-EBA5EA16
include_once(RelativePath . "/footer.php");
//End Include Page implementation

//Initialize Page @1-9C20B13B
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
$TemplateFileName = "auth_q.html";
$BlockToParse = "main";
$TemplateEncoding = "UTF-8";
$ContentType = "text/html";
$PathToRoot = "./";
$Charset = $Charset ? $Charset : "utf-8";
//End Initialize Page

//Include events file @1-68C04522
include_once("./auth_q_events.php");
//End Include events file

//Before Initialize @1-E870CEBC
$CCSEventResult = CCGetEvent($CCSEvents, "BeforeInitialize", $MainPage);
//End Before Initialize

//Initialize Objects @1-15F5B59B
$DBusuarios_extranet = new clsDBusuarios_extranet();
$MainPage->Connections["usuarios_extranet"] = & $DBusuarios_extranet;
$Attributes = new clsAttributes("page:");
$MainPage->Attributes = & $Attributes;

// Controls
$lbTitle = new clsControl(ccsLabel, "lbTitle", "lbTitle", ccsText, "", CCGetRequestParam("lbTitle", ccsGet, NULL), $MainPage);
$PORTAL_AUTENTIFICACION = new clsRecordPORTAL_AUTENTIFICACION("", $MainPage);
$header = new clsheader("", "header", $MainPage);
$header->Initialize();
$footer = new clsfooter("", "footer", $MainPage);
$footer->Initialize();
$MainPage->lbTitle = & $lbTitle;
$MainPage->PORTAL_AUTENTIFICACION = & $PORTAL_AUTENTIFICACION;
$MainPage->header = & $header;
$MainPage->footer = & $footer;
if(!is_array($lbTitle->Value) && !strlen($lbTitle->Value) && $lbTitle->Value !== false)
    $lbTitle->SetText(titlePagina);
$PORTAL_AUTENTIFICACION->Initialize();

BindEvents();

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

//Execute Components @1-1F14732E
$PORTAL_AUTENTIFICACION->Operation();
$header->Operations();
$footer->Operations();
//End Execute Components

//Go to destination page @1-DDA4BEAC
if($Redirect)
{
    $CCSEventResult = CCGetEvent($CCSEvents, "BeforeUnload", $MainPage);
    $DBusuarios_extranet->close();
    header("Location: " . $Redirect);
    unset($PORTAL_AUTENTIFICACION);
    $header->Class_Terminate();
    unset($header);
    $footer->Class_Terminate();
    unset($footer);
    unset($Tpl);
    exit;
}
//End Go to destination page

//Show Page @1-1D939542
$PORTAL_AUTENTIFICACION->Show();
$header->Show();
$footer->Show();
$lbTitle->Show();
$Tpl->block_path = "";
$Tpl->Parse($BlockToParse, false);
if (!isset($main_block)) $main_block = $Tpl->GetVar($BlockToParse);
$main_block = CCConvertEncoding($main_block, $FileEncoding, $TemplateEncoding);
$CCSEventResult = CCGetEvent($CCSEvents, "BeforeOutput", $MainPage);
if ($CCSEventResult) echo $main_block;
//End Show Page

//Unload Page @1-8A780C60
$CCSEventResult = CCGetEvent($CCSEvents, "BeforeUnload", $MainPage);
$DBusuarios_extranet->close();
unset($PORTAL_AUTENTIFICACION);
$header->Class_Terminate();
unset($header);
$footer->Class_Terminate();
unset($footer);
unset($Tpl);
//End Unload Page


?>
