<?php
//Include Common Files @1-4CFCA459
define("RelativePath", ".");
define("PathToCurrentPage", "/");
define("FileName", "solicitar_pass.php");
include_once(RelativePath . "/Common.php");
include_once(RelativePath . "/Template.php");
include_once(RelativePath . "/Sorter.php");
include_once(RelativePath . "/Navigator.php");
include_once("recaptchalib.php");

//End Include Common Files

class clsRecordportal_autentificacion { //portal_autentificacion Class @2-6DDD79E8

//Variables @2-9E315808

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

//Class_Initialize Event @2-EBA31373
    function __construct($RelativePath, & $Parent)
    {

        global $FileName;
        global $CCSLocales;
        global $DefaultDateFormat;
        $this->Visible = true;
        $this->Parent = & $Parent;
        $this->RelativePath = $RelativePath;
        $this->Errors = new clsErrors();
        $this->ErrorBlock = "Record portal_autentificacion/Error";
        $this->DataSource = new clsportal_autentificacionDataSource($this);
        $this->ds = & $this->DataSource;
        $this->InsertAllowed = true;
        if($this->Visible)
        {
            $this->ComponentName = "portal_autentificacion";
            $this->Attributes = new clsAttributes($this->ComponentName . ":");
            $CCSForm = explode(":", CCGetFromGet("ccsForm", ""), 2);
            if(sizeof($CCSForm) == 1)
                $CCSForm[1] = "";
            list($FormName, $FormMethod) = $CCSForm;
            $this->EditMode = ($FormMethod == "Edit");
            $this->FormEnctype = "application/x-www-form-urlencoded";
            $this->FormSubmitted = ($FormName == $this->ComponentName);
            $Method = $this->FormSubmitted ? ccsPost : ccsGet;
            $this->Button_Insert = new clsButton("Button_Insert", $Method, $this);
            $this->aute_pregunta = new clsControl(ccsListBox, "aute_pregunta", "Pregunta", ccsInteger, "", CCGetRequestParam("aute_pregunta", $Method, NULL), $this);
            $this->aute_pregunta->DSType = dsTable;
            $this->aute_pregunta->DataSource = new clsDBusuarios_extranet();
            $this->aute_pregunta->ds = & $this->aute_pregunta->DataSource;
            $this->aute_pregunta->DataSource->SQL = "SELECT * \n" .
"FROM portal_autentificacion_preg {SQL_Where} {SQL_OrderBy}";
            $this->aute_pregunta->DataSource->Order = "aupr_codigo_num";
            list($this->aute_pregunta->BoundColumn, $this->aute_pregunta->TextColumn, $this->aute_pregunta->DBFormat) = array("aupr_codigo_num", "aupr_pregunta_txt", "");
            $this->aute_pregunta->DataSource->Order = "aupr_codigo_num";
            $this->aute_respuesta = new clsControl(ccsTextBox, "aute_respuesta", "Respuesta", ccsText, "", CCGetRequestParam("aute_respuesta", $Method, NULL), $this);
            $this->aute_rut = new clsControl(ccsTextBox, "aute_rut", "aute_rut", ccsText, "", CCGetRequestParam("aute_rut", $Method, NULL), $this);
            $this->txt_dv = new clsControl(ccsTextBox, "txt_dv", "txt_dv", ccsText, "", CCGetRequestParam("txt_dv", $Method, NULL), $this);
            $this->aute_email = new clsControl(ccsTextBox, "aute_email", "E-mail", ccsText, "", CCGetRequestParam("aute_email", $Method, NULL), $this);
            $this->txt_email_conf = new clsControl(ccsTextBox, "txt_email_conf", "Confirmar E-mail", ccsText, "", CCGetRequestParam("txt_email_conf", $Method, NULL), $this);
            $this->aute_clave = new clsControl(ccsTextBox, "aute_clave", "Clave", ccsText, "", CCGetRequestParam("aute_clave", $Method, NULL), $this);
            $this->txt_clave_conf = new clsControl(ccsTextBox, "txt_clave_conf", "Confirmar Clave", ccsText, "", CCGetRequestParam("txt_clave_conf", $Method, NULL), $this);
            $this->chk_acepto = new clsControl(ccsCheckBox, "chk_acepto", "chk_acepto", ccsInteger, "", CCGetRequestParam("chk_acepto", $Method, NULL), $this);
            $this->chk_acepto->CheckedValue = $this->chk_acepto->GetParsedValue(1);
            $this->chk_acepto->UncheckedValue = $this->chk_acepto->GetParsedValue(0);
            $this->lb_ano = new clsControl(ccsListBox, "lb_ano", "lb_ano", ccsText, "", CCGetRequestParam("lb_ano", $Method, NULL), $this);
            $this->lb_mes = new clsControl(ccsListBox, "lb_mes", "lb_mes", ccsText, "", CCGetRequestParam("lb_mes", $Method, NULL), $this);
            $this->lb_dia = new clsControl(ccsListBox, "lb_dia", "lb_dia", ccsText, "", CCGetRequestParam("lb_dia", $Method, NULL), $this);
            $this->err_dv = new clsControl(ccsLabel, "err_dv", "err_dv", ccsText, "", CCGetRequestParam("err_dv", $Method, NULL), $this);
            $this->err_rut = new clsControl(ccsLabel, "err_rut", "err_rut", ccsText, "", CCGetRequestParam("err_rut", $Method, NULL), $this);
            $this->err_fec = new clsControl(ccsLabel, "err_fec", "err_fec", ccsText, "", CCGetRequestParam("err_fec", $Method, NULL), $this);
            $this->err_email = new clsControl(ccsLabel, "err_email", "err_email", ccsText, "", CCGetRequestParam("err_email", $Method, NULL), $this);
            $this->err_email_conf = new clsControl(ccsLabel, "err_email_conf", "err_email_conf", ccsText, "", CCGetRequestParam("err_email_conf", $Method, NULL), $this);
            $this->err_clave = new clsControl(ccsLabel, "err_clave", "err_clave", ccsText, "", CCGetRequestParam("err_clave", $Method, NULL), $this);
            $this->err_preg = new clsControl(ccsLabel, "err_preg", "err_preg", ccsText, "", CCGetRequestParam("err_preg", $Method, NULL), $this);
            $this->err_resp = new clsControl(ccsLabel, "err_resp", "err_resp", ccsText, "", CCGetRequestParam("err_resp", $Method, NULL), $this);
            $this->err_acepto = new clsControl(ccsLabel, "err_acepto", "err_acepto", ccsText, "", CCGetRequestParam("err_acepto", $Method, NULL), $this);
        }
    }
//End Class_Initialize Event

//Initialize Method @2-A3D0962E
    function Initialize()
    {

        if(!$this->Visible)
            return;

        $this->DataSource->Parameters["urlaute_rut"] = CCGetFromGet("aute_rut", NULL);
    }
//End Initialize Method

//Validate Method @2-56DFA576
    function Validate()
    {
        global $CCSLocales;
        $Validation = true;
        $Where = "";
        if(strlen($this->aute_email->GetText()) && !preg_match ("/^[\w\.-]{1,}\@([\da-zA-Z-]{1,}\.){1,}[\da-zA-Z-]+$/", $this->aute_email->GetText())) {
            $this->aute_email->Errors->addError($CCSLocales->GetText("CCS_MaskValidation", "E-mail"));
        }
        $Validation = ($this->aute_pregunta->Validate() && $Validation);
        $Validation = ($this->aute_respuesta->Validate() && $Validation);
        $Validation = ($this->aute_rut->Validate() && $Validation);
        $Validation = ($this->txt_dv->Validate() && $Validation);
        $Validation = ($this->aute_email->Validate() && $Validation);
        $Validation = ($this->txt_email_conf->Validate() && $Validation);
        $Validation = ($this->aute_clave->Validate() && $Validation);
        $Validation = ($this->txt_clave_conf->Validate() && $Validation);
        $Validation = ($this->chk_acepto->Validate() && $Validation);
        $Validation = ($this->lb_ano->Validate() && $Validation);
        $Validation = ($this->lb_mes->Validate() && $Validation);
        $Validation = ($this->lb_dia->Validate() && $Validation);
        $this->CCSEventResult = CCGetEvent($this->CCSEvents, "OnValidate", $this);
        $Validation =  $Validation && ($this->aute_pregunta->Errors->Count() == 0);
        $Validation =  $Validation && ($this->aute_respuesta->Errors->Count() == 0);
        $Validation =  $Validation && ($this->aute_rut->Errors->Count() == 0);
        $Validation =  $Validation && ($this->txt_dv->Errors->Count() == 0);
        $Validation =  $Validation && ($this->aute_email->Errors->Count() == 0);
        $Validation =  $Validation && ($this->txt_email_conf->Errors->Count() == 0);
        $Validation =  $Validation && ($this->aute_clave->Errors->Count() == 0);
        $Validation =  $Validation && ($this->txt_clave_conf->Errors->Count() == 0);
        $Validation =  $Validation && ($this->chk_acepto->Errors->Count() == 0);
        $Validation =  $Validation && ($this->lb_ano->Errors->Count() == 0);
        $Validation =  $Validation && ($this->lb_mes->Errors->Count() == 0);
        $Validation =  $Validation && ($this->lb_dia->Errors->Count() == 0);
        return (($this->Errors->Count() == 0) && $Validation);
    }
//End Validate Method

//CheckErrors Method @2-6653DEA6
    function CheckErrors()
    {
        $errors = false;
        $errors = ($errors || $this->aute_pregunta->Errors->Count());
        $errors = ($errors || $this->aute_respuesta->Errors->Count());
        $errors = ($errors || $this->aute_rut->Errors->Count());
        $errors = ($errors || $this->txt_dv->Errors->Count());
        $errors = ($errors || $this->aute_email->Errors->Count());
        $errors = ($errors || $this->txt_email_conf->Errors->Count());
        $errors = ($errors || $this->aute_clave->Errors->Count());
        $errors = ($errors || $this->txt_clave_conf->Errors->Count());
        $errors = ($errors || $this->chk_acepto->Errors->Count());
        $errors = ($errors || $this->lb_ano->Errors->Count());
        $errors = ($errors || $this->lb_mes->Errors->Count());
        $errors = ($errors || $this->lb_dia->Errors->Count());
        $errors = ($errors || $this->err_dv->Errors->Count());
        $errors = ($errors || $this->err_rut->Errors->Count());
        $errors = ($errors || $this->err_fec->Errors->Count());
        $errors = ($errors || $this->err_email->Errors->Count());
        $errors = ($errors || $this->err_email_conf->Errors->Count());
        $errors = ($errors || $this->err_clave->Errors->Count());
        $errors = ($errors || $this->err_preg->Errors->Count());
        $errors = ($errors || $this->err_resp->Errors->Count());
        $errors = ($errors || $this->err_acepto->Errors->Count());
        $errors = ($errors || $this->Errors->Count());
        $errors = ($errors || $this->DataSource->Errors->Count());
        return $errors;
    }
//End CheckErrors Method

//MasterDetail @2-ED598703
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

//Operation Method @2-BFA97C65
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
            $this->PressedButton = "Button_Insert";
            if($this->Button_Insert->Pressed) {
                $this->PressedButton = "Button_Insert";
            }
        }
        $Redirect = $FileName;
        if($this->Validate()) {
            if($this->PressedButton == "Button_Insert") {
                if(!CCGetEvent($this->Button_Insert->CCSEvents, "OnClick", $this->Button_Insert) || !$this->InsertRow()) {
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

//InsertRow Method @2-A808C88E
    function InsertRow()
    {
        $this->CCSEventResult = CCGetEvent($this->CCSEvents, "BeforeInsert", $this);
        if(!$this->InsertAllowed) return false;
        $this->DataSource->aute_pregunta->SetValue($this->aute_pregunta->GetValue(true));
        $this->DataSource->aute_respuesta->SetValue($this->aute_respuesta->GetValue(true));
        $this->DataSource->aute_email->SetValue($this->aute_email->GetValue(true));
        $this->DataSource->aute_clave->SetValue($this->aute_clave->GetValue(true));
        $this->DataSource->aute_rut->SetValue($this->aute_rut->GetValue(true));
        $this->DataSource->Insert();
        $this->CCSEventResult = CCGetEvent($this->CCSEvents, "AfterInsert", $this);
        return (!$this->CheckErrors());
    }
//End InsertRow Method

//Show Method @2-3BEDFE7D
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

        $this->aute_pregunta->Prepare();
        $this->lb_ano->Prepare();
        $this->lb_mes->Prepare();
        $this->lb_dia->Prepare();

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
                if(!$this->FormSubmitted){
                    $this->aute_pregunta->SetValue($this->DataSource->aute_pregunta->GetValue());
                    $this->aute_respuesta->SetValue($this->DataSource->aute_respuesta->GetValue());
                    $this->aute_email->SetValue($this->DataSource->aute_email->GetValue());
                    $this->aute_clave->SetValue($this->DataSource->aute_clave->GetValue());
                }
            } else {
                $this->EditMode = false;
            }
        }
        if (!$this->FormSubmitted) {
        }

        if($this->FormSubmitted || $this->CheckErrors()) {
            $Error = "";
            $Error = ComposeStrings($Error, $this->aute_pregunta->Errors->ToString());
            $Error = ComposeStrings($Error, $this->aute_respuesta->Errors->ToString());
            $Error = ComposeStrings($Error, $this->aute_rut->Errors->ToString());
            $Error = ComposeStrings($Error, $this->txt_dv->Errors->ToString());
            $Error = ComposeStrings($Error, $this->txt_email_conf->Errors->ToString());
            $Error = ComposeStrings($Error, $this->aute_clave->Errors->ToString());
            $Error = ComposeStrings($Error, $this->txt_clave_conf->Errors->ToString());
            $Error = ComposeStrings($Error, $this->chk_acepto->Errors->ToString());
            $Error = ComposeStrings($Error, $this->lb_ano->Errors->ToString());
            $Error = ComposeStrings($Error, $this->lb_mes->Errors->ToString());
            $Error = ComposeStrings($Error, $this->lb_dia->Errors->ToString());
            $Error = ComposeStrings($Error, $this->err_dv->Errors->ToString());
            $Error = ComposeStrings($Error, $this->err_rut->Errors->ToString());
            $Error = ComposeStrings($Error, $this->err_fec->Errors->ToString());
            $Error = ComposeStrings($Error, $this->err_email->Errors->ToString());
            $Error = ComposeStrings($Error, $this->err_email_conf->Errors->ToString());
            $Error = ComposeStrings($Error, $this->err_clave->Errors->ToString());
            $Error = ComposeStrings($Error, $this->err_preg->Errors->ToString());
            $Error = ComposeStrings($Error, $this->err_resp->Errors->ToString());
            $Error = ComposeStrings($Error, $this->err_acepto->Errors->ToString());
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
        $this->Button_Insert->Visible = !$this->EditMode && $this->InsertAllowed;

        $this->CCSEventResult = CCGetEvent($this->CCSEvents, "BeforeShow", $this);
        $this->Attributes->Show();
        if(!$this->Visible) {
            $Tpl->block_path = $ParentPath;
            return;
        }

        $this->err_email->SetText(ComposeStrings($this->err_email->GetText(), $this->aute_email->Errors->ToString()));
        $this->Button_Insert->Show();
        $this->aute_pregunta->Show();
        $this->aute_respuesta->Show();
        $this->aute_rut->Show();
        $this->txt_dv->Show();
        $this->aute_email->Show();
        $this->txt_email_conf->Show();
        $this->aute_clave->Show();
        $this->txt_clave_conf->Show();
        $this->chk_acepto->Show();
        $this->lb_ano->Show();
        $this->lb_mes->Show();
        $this->lb_dia->Show();
        $this->err_dv->Show();
        $this->err_rut->Show();
        $this->err_fec->Show();
        $this->err_email->Show();
        $this->err_email_conf->Show();
        $this->err_clave->Show();
        $this->err_preg->Show();
        $this->err_resp->Show();
        $this->err_acepto->Show();
        $Tpl->parse();
        $Tpl->block_path = $ParentPath;
        $this->DataSource->close();
    }
//End Show Method

} //End portal_autentificacion Class @2-FCB6E20C

class clsportal_autentificacionDataSource extends clsDBusuarios_extranet {  //portal_autentificacionDataSource Class @2-42FD77EF

//DataSource Variables @2-A77BBA55
    public $Parent = "";
    public $CCSEvents = array();
    public $CCSEventResult;
    public $ErrorBlock;
    public $CmdExecution;

    public $InsertParameters;
    public $wp;
    public $AllParametersSet;

    public $InsertFields = array();

    // Datasource fields
    public $aute_pregunta;
    public $aute_respuesta;
    public $aute_rut;
    public $txt_dv;
    public $aute_email;
    public $txt_email_conf;
    public $aute_clave;
    public $txt_clave_conf;
    public $chk_acepto;
    public $lb_ano;
    public $lb_mes;
    public $lb_dia;
    public $err_dv;
    public $err_rut;
    public $err_fec;
    public $err_email;
    public $err_email_conf;
    public $err_clave;
    public $err_preg;
    public $err_resp;
    public $err_acepto;
//End DataSource Variables

//DataSourceClass_Initialize Event @2-982EDB60
    function __construct(& $Parent)
    {
        $this->Parent = & $Parent;
        $this->ErrorBlock = "Record portal_autentificacion/Error";
        $this->Initialize();
        $this->aute_pregunta = new clsField("aute_pregunta", ccsInteger, "");
        
        $this->aute_respuesta = new clsField("aute_respuesta", ccsText, "");
        
        $this->aute_rut = new clsField("aute_rut", ccsText, "");
        
        $this->txt_dv = new clsField("txt_dv", ccsText, "");
        
        $this->aute_email = new clsField("aute_email", ccsText, "");
        
        $this->txt_email_conf = new clsField("txt_email_conf", ccsText, "");
        
        $this->aute_clave = new clsField("aute_clave", ccsText, "");
        
        $this->txt_clave_conf = new clsField("txt_clave_conf", ccsText, "");
        
        $this->chk_acepto = new clsField("chk_acepto", ccsInteger, "");
        
        $this->lb_ano = new clsField("lb_ano", ccsText, "");
        
        $this->lb_mes = new clsField("lb_mes", ccsText, "");
        
        $this->lb_dia = new clsField("lb_dia", ccsText, "");
        
        $this->err_dv = new clsField("err_dv", ccsText, "");
        
        $this->err_rut = new clsField("err_rut", ccsText, "");
        
        $this->err_fec = new clsField("err_fec", ccsText, "");
        
        $this->err_email = new clsField("err_email", ccsText, "");
        
        $this->err_email_conf = new clsField("err_email_conf", ccsText, "");
        
        $this->err_clave = new clsField("err_clave", ccsText, "");
        
        $this->err_preg = new clsField("err_preg", ccsText, "");
        
        $this->err_resp = new clsField("err_resp", ccsText, "");
        
        $this->err_acepto = new clsField("err_acepto", ccsText, "");
        

        $this->InsertFields["aute_pregunta"] = array("Name" => "aute_pregunta", "Value" => "", "DataType" => ccsInteger, "OmitIfEmpty" => 1);
        $this->InsertFields["aute_respuesta"] = array("Name" => "aute_respuesta", "Value" => "", "DataType" => ccsText, "OmitIfEmpty" => 1);
        $this->InsertFields["aute_email"] = array("Name" => "aute_email", "Value" => "", "DataType" => ccsText, "OmitIfEmpty" => 1);
        $this->InsertFields["aute_pass_creada"] = array("Name" => "aute_pass_creada", "Value" => "", "DataType" => ccsText, "OmitIfEmpty" => 1);
        $this->InsertFields["aute_rut"] = array("Name" => "aute_rut", "Value" => "", "DataType" => ccsInteger, "OmitIfEmpty" => 1);
        $this->InsertFields["aute_nivel"] = array("Name" => "aute_nivel", "Value" => "", "DataType" => ccsInteger);
        $this->InsertFields["aute_nombre"] = array("Name" => "aute_nombre", "Value" => "", "DataType" => ccsText, "OmitIfEmpty" => 1);
        $this->InsertFields["aute_fecha_nacimiento"] = array("Name" => "aute_fecha_nacimiento", "Value" => "", "DataType" => ccsDate, "OmitIfEmpty" => 1);
        $this->InsertFields["aute_nombres"] = array("Name" => "aute_nombres", "Value" => "", "DataType" => ccsText, "OmitIfEmpty" => 1);
        $this->InsertFields["aute_dv_rut"] = array("Name" => "aute_dv_rut", "Value" => "", "DataType" => ccsText, "OmitIfEmpty" => 1);
        $this->InsertFields["aute_ap_paterno"] = array("Name" => "aute_ap_paterno", "Value" => "", "DataType" => ccsText, "OmitIfEmpty" => 1);
        $this->InsertFields["aute_ap_materno"] = array("Name" => "aute_ap_materno", "Value" => "", "DataType" => ccsText, "OmitIfEmpty" => 1);
    }
//End DataSourceClass_Initialize Event

//Prepare Method @2-F47A8750
    function Prepare()
    {
        global $CCSLocales;
        global $DefaultDateFormat;
        $this->wp = new clsSQLParameters($this->ErrorBlock);
        $this->wp->AddParameter("1", "urlaute_rut", ccsInteger, "", "", $this->Parameters["urlaute_rut"], "", false);
        $this->AllParametersSet = $this->wp->AllParamsSet();
        $this->wp->Criterion[1] = $this->wp->Operation(opEqual, "aute_rut", $this->wp->GetDBValue("1"), $this->ToSQL($this->wp->GetDBValue("1"), ccsInteger),false);
        $this->Where = 
             $this->wp->Criterion[1];
    }
//End Prepare Method

//Open Method @2-D6DC442A
    function Open()
    {
        $this->CCSEventResult = CCGetEvent($this->CCSEvents, "BeforeBuildSelect", $this->Parent);
        $this->SQL = "SELECT * \n\n" .
        "FROM portal_autentificacion {SQL_Where} {SQL_OrderBy}";
        $this->CCSEventResult = CCGetEvent($this->CCSEvents, "BeforeExecuteSelect", $this->Parent);
        $this->PageSize = 1;
        $this->query($this->OptimizeSQL(CCBuildSQL($this->SQL, $this->Where, $this->Order)));
        $this->CCSEventResult = CCGetEvent($this->CCSEvents, "AfterExecuteSelect", $this->Parent);
    }
//End Open Method

//SetValues Method @2-6D68606B
    function SetValues()
    {
        $this->aute_pregunta->SetDBValue(trim($this->f("aute_pregunta")));
        $this->aute_respuesta->SetDBValue($this->f("aute_respuesta"));
        $this->aute_email->SetDBValue($this->f("AUTE_email"));
        $this->aute_clave->SetDBValue($this->f("AUTE_pass_creada"));
    }
//End SetValues Method

//Insert Method @2-D71BBA7C
    function Insert()
    {
        global $CCSLocales;
        global $DefaultDateFormat;
        $this->CmdExecution = true;
        $this->cp["aute_pregunta"] = new clsSQLParameter("ctrlaute_pregunta", ccsInteger, "", "", $this->aute_pregunta->GetValue(true), NULL, false, $this->ErrorBlock);
        $this->cp["aute_respuesta"] = new clsSQLParameter("ctrlaute_respuesta", ccsText, "", "", $this->aute_respuesta->GetValue(true), NULL, false, $this->ErrorBlock);
        $this->cp["aute_email"] = new clsSQLParameter("ctrlaute_email", ccsText, "", "", $this->aute_email->GetValue(true), NULL, false, $this->ErrorBlock);
        $this->cp["aute_pass_creada"] = new clsSQLParameter("ctrlaute_clave", ccsText, "", "", $this->aute_clave->GetValue(true), NULL, false, $this->ErrorBlock);
        $this->cp["aute_rut"] = new clsSQLParameter("ctrlaute_rut", ccsInteger, "", "", $this->aute_rut->GetValue(true), NULL, false, $this->ErrorBlock);
        $this->cp["aute_nivel"] = new clsSQLParameter("expr28", ccsInteger, "", "", 1, 1, false, $this->ErrorBlock);
        $this->cp["aute_nombre"] = new clsSQLParameter("expr29", ccsText, "", "", $gbl_nombre, NULL, false, $this->ErrorBlock);
        $this->cp["aute_fecha_nacimiento"] = new clsSQLParameter("expr30", ccsDate, array("dd", "/", "mm", "/", "yyyy"), array("yyyy", "-", "mm", "-", "dd"), $gbl_fecha_nacimiento, NULL, false, $this->ErrorBlock);
        $this->cp["aute_nombres"] = new clsSQLParameter("expr54", ccsText, "", "", $gbl_n_nombre, NULL, false, $this->ErrorBlock);
        $this->cp["aute_dv_rut"] = new clsSQLParameter("expr55", ccsText, "", "", $gbl_n_dv, NULL, false, $this->ErrorBlock);
        $this->cp["aute_ap_paterno"] = new clsSQLParameter("expr56", ccsText, "", "", $gbl_n_paterno, NULL, false, $this->ErrorBlock);
        $this->cp["aute_ap_materno"] = new clsSQLParameter("expr57", ccsText, "", "", $gbl_n_materno, NULL, false, $this->ErrorBlock);
        $this->CCSEventResult = CCGetEvent($this->CCSEvents, "BeforeBuildInsert", $this->Parent);
        if (!is_null($this->cp["aute_pregunta"]->GetValue()) and !strlen($this->cp["aute_pregunta"]->GetText()) and !is_bool($this->cp["aute_pregunta"]->GetValue())) 
            $this->cp["aute_pregunta"]->SetValue($this->aute_pregunta->GetValue(true));
        if (!is_null($this->cp["aute_respuesta"]->GetValue()) and !strlen($this->cp["aute_respuesta"]->GetText()) and !is_bool($this->cp["aute_respuesta"]->GetValue())) 
            $this->cp["aute_respuesta"]->SetValue($this->aute_respuesta->GetValue(true));
        if (!is_null($this->cp["aute_email"]->GetValue()) and !strlen($this->cp["aute_email"]->GetText()) and !is_bool($this->cp["aute_email"]->GetValue())) 
            $this->cp["aute_email"]->SetValue($this->aute_email->GetValue(true));
        if (!is_null($this->cp["aute_pass_creada"]->GetValue()) and !strlen($this->cp["aute_pass_creada"]->GetText()) and !is_bool($this->cp["aute_pass_creada"]->GetValue())) 
            $this->cp["aute_pass_creada"]->SetValue($this->aute_clave->GetValue(true));
        if (!is_null($this->cp["aute_rut"]->GetValue()) and !strlen($this->cp["aute_rut"]->GetText()) and !is_bool($this->cp["aute_rut"]->GetValue())) 
            $this->cp["aute_rut"]->SetValue($this->aute_rut->GetValue(true));
        if (!is_null($this->cp["aute_nivel"]->GetValue()) and !strlen($this->cp["aute_nivel"]->GetText()) and !is_bool($this->cp["aute_nivel"]->GetValue())) 
            $this->cp["aute_nivel"]->SetValue(1);
        if (!strlen($this->cp["aute_nivel"]->GetText()) and !is_bool($this->cp["aute_nivel"]->GetValue(true))) 
            $this->cp["aute_nivel"]->SetText(1);
        if (!is_null($this->cp["aute_nombre"]->GetValue()) and !strlen($this->cp["aute_nombre"]->GetText()) and !is_bool($this->cp["aute_nombre"]->GetValue())) 
            $this->cp["aute_nombre"]->SetValue($gbl_nombre);
        if (!is_null($this->cp["aute_fecha_nacimiento"]->GetValue()) and !strlen($this->cp["aute_fecha_nacimiento"]->GetText()) and !is_bool($this->cp["aute_fecha_nacimiento"]->GetValue())) 
            $this->cp["aute_fecha_nacimiento"]->SetValue($gbl_fecha_nacimiento);
        if (!is_null($this->cp["aute_nombres"]->GetValue()) and !strlen($this->cp["aute_nombres"]->GetText()) and !is_bool($this->cp["aute_nombres"]->GetValue())) 
            $this->cp["aute_nombres"]->SetValue($gbl_n_nombre);
        if (!is_null($this->cp["aute_dv_rut"]->GetValue()) and !strlen($this->cp["aute_dv_rut"]->GetText()) and !is_bool($this->cp["aute_dv_rut"]->GetValue())) 
            $this->cp["aute_dv_rut"]->SetValue($gbl_n_dv);
        if (!is_null($this->cp["aute_ap_paterno"]->GetValue()) and !strlen($this->cp["aute_ap_paterno"]->GetText()) and !is_bool($this->cp["aute_ap_paterno"]->GetValue())) 
            $this->cp["aute_ap_paterno"]->SetValue($gbl_n_paterno);
        if (!is_null($this->cp["aute_ap_materno"]->GetValue()) and !strlen($this->cp["aute_ap_materno"]->GetText()) and !is_bool($this->cp["aute_ap_materno"]->GetValue())) 
            $this->cp["aute_ap_materno"]->SetValue($gbl_n_materno);
        $this->InsertFields["aute_pregunta"]["Value"] = $this->cp["aute_pregunta"]->GetDBValue(true);
        $this->InsertFields["aute_respuesta"]["Value"] = $this->cp["aute_respuesta"]->GetDBValue(true);
        $this->InsertFields["aute_email"]["Value"] = $this->cp["aute_email"]->GetDBValue(true);
        $this->InsertFields["aute_pass_creada"]["Value"] = $this->cp["aute_pass_creada"]->GetDBValue(true);
        $this->InsertFields["aute_rut"]["Value"] = $this->cp["aute_rut"]->GetDBValue(true);
        $this->InsertFields["aute_nivel"]["Value"] = $this->cp["aute_nivel"]->GetDBValue(true);
        $this->InsertFields["aute_nombre"]["Value"] = $this->cp["aute_nombre"]->GetDBValue(true);
        $this->InsertFields["aute_fecha_nacimiento"]["Value"] = $this->cp["aute_fecha_nacimiento"]->GetDBValue(true);
        $this->InsertFields["aute_nombres"]["Value"] = $this->cp["aute_nombres"]->GetDBValue(true);
        $this->InsertFields["aute_dv_rut"]["Value"] = $this->cp["aute_dv_rut"]->GetDBValue(true);
        $this->InsertFields["aute_ap_paterno"]["Value"] = $this->cp["aute_ap_paterno"]->GetDBValue(true);
        $this->InsertFields["aute_ap_materno"]["Value"] = $this->cp["aute_ap_materno"]->GetDBValue(true);
        $this->SQL = CCBuildInsert("portal_autentificacion", $this->InsertFields, $this);
        $this->CCSEventResult = CCGetEvent($this->CCSEvents, "BeforeExecuteInsert", $this->Parent);
        if($this->Errors->Count() == 0 && $this->CmdExecution) {
            $this->query($this->SQL);
            $this->CCSEventResult = CCGetEvent($this->CCSEvents, "AfterExecuteInsert", $this->Parent);
        }
    }
//End Insert Method

} //End portal_autentificacionDataSource Class @2-FCB6E20C

//Include Page implementation @43-8EACA429
include_once(RelativePath . "/header.php");
//End Include Page implementation

//Include Page implementation @44-EBA5EA16
include_once(RelativePath . "/footer.php");
//End Include Page implementation

//Initialize Page @1-066093B2
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
$TemplateFileName = "solicitar_pass.html";
$BlockToParse = "main";
$TemplateEncoding = "UTF-8";
$ContentType = "text/html";
$PathToRoot = "./";
$Charset = $Charset ? $Charset : "utf-8";
//End Initialize Page

//Include events file @1-F963DBB1
include_once("./solicitar_pass_events.php");
//End Include events file

//Before Initialize @1-E870CEBC
$CCSEventResult = CCGetEvent($CCSEvents, "BeforeInitialize", $MainPage);
//End Before Initialize

//Initialize Objects @1-FAC2B4DF
$DBusuarios_extranet = new clsDBusuarios_extranet();
$MainPage->Connections["usuarios_extranet"] = & $DBusuarios_extranet;
$Attributes = new clsAttributes("page:");
$MainPage->Attributes = & $Attributes;

// Controls
$portal_autentificacion = new clsRecordportal_autentificacion("", $MainPage);
$header = new clsheader("", "header", $MainPage);
$header->Initialize();
$footer = new clsfooter("", "footer", $MainPage);
$footer->Initialize();
$lbTitle = new clsControl(ccsLabel, "lbTitle", "lbTitle", ccsText, "", CCGetRequestParam("lbTitle", ccsGet, NULL), $MainPage);
$MainPage->portal_autentificacion = & $portal_autentificacion;
$MainPage->header = & $header;
$MainPage->footer = & $footer;
$MainPage->lbTitle = & $lbTitle;
if(!is_array($lbTitle->Value) && !strlen($lbTitle->Value) && $lbTitle->Value !== false)
    $lbTitle->SetText(titlePagina);
$portal_autentificacion->Initialize();

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

//Execute Components @1-D11AC174
$portal_autentificacion->Operation();
$header->Operations();
$footer->Operations();
//End Execute Components

//Go to destination page @1-EF8225BC
if($Redirect)
{
    $CCSEventResult = CCGetEvent($CCSEvents, "BeforeUnload", $MainPage);
    $DBusuarios_extranet->close();
    header("Location: " . $Redirect);
    unset($portal_autentificacion);
    $header->Class_Terminate();
    unset($header);
    $footer->Class_Terminate();
    unset($footer);
    unset($Tpl);
    exit;
}
//End Go to destination page

//Show Page @1-8BDF1F25
$portal_autentificacion->Show();
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

//Unload Page @1-DB328374
$CCSEventResult = CCGetEvent($CCSEvents, "BeforeUnload", $MainPage);
$DBusuarios_extranet->close();
unset($portal_autentificacion);
$header->Class_Terminate();
unset($header);
$footer->Class_Terminate();
unset($footer);
unset($Tpl);
//End Unload Page


?>
