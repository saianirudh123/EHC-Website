/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function validateCourseregform(form){
/* Fetch the Form field values */
var returnval     = true;
var lastId               = "";
var firstname            = alltrim(form.firstname.value);
var lastname             = alltrim(form.lastname.value);
var address              = alltrim(form.address.value);
var cityname             = alltrim(form.cityname.value);
var statename            = alltrim(form.statename.value);
var pincode              = alltrim(form.pincode.value);
var emailid              = alltrim(form.email.value);
var mobilenumber         = alltrim(form.mobile.value);
var homephone            = alltrim(form.landline.value);
var dob                  = alltrim(form.dob.value);
var additional           = alltrim(form.additional.value);
var achive               = alltrim(form.achieve.value);
var xthmark              = alltrim(form.xthmark.value);
var xiithmark            = alltrim(form.xiithmark.value);
var branch               = alltrim(form.branch.value);
var university           = alltrim(form.other.value);
var firstyearpercentage   = alltrim(form.firstyearpercentage.value);
var firstyearinformation  = alltrim(form.firstyearinformation.value);
var secondyearpercentage  = alltrim(form.secondyearpercentage.value);
var secondyearinformation = alltrim(form.secondyearinformation.value);
var thirdyearpercentage   = alltrim(form.thirdyearpercentage.value);
var thirdyearinformation  = alltrim(form.thirdyearinformation.value);
var classrank             = alltrim(form.classrank.value);
var numberofstudent       = alltrim(form.numberofstudent.value);
var degreedes             = alltrim(form.degreedes.value);
var majorcourse1          = alltrim(form.majorcourse1.value);
var majorcourse2          = alltrim(form.majorcourse2.value);
var majorcourse3          = alltrim(form.majorcourse3.value);
var majorcourse4          = alltrim(form.majorcourse4.value);
var assemply              = alltrim(form.assemply.value);
var anyotherlanguage      = alltrim(form.anyotherlanguage.value);
var extra                 = alltrim(form.extra.value);
var dateproblem           = alltrim(form.dateproblem.value);
var dateproblem1          = alltrim(form.dateproblem1.value);
//var fchoice               = alltrim(form.fchoice.value);
//var schoice               = alltrim(form.schoice.value);
//var tchoice               = alltrim(form.tchoice.value);
//var fochoice              = alltrim(form.fochoice.value);
//var fifchoice             = alltrim(form.fifchoice.value);
var collegeaddress        = alltrim(form.collegeaddress.value);
var collegecityname       = alltrim(form.collegecityname.value);
var collegestatename      = alltrim(form.collegestatename.value);
var collegepincode        = alltrim(form.collegepincode.value);
var pricipalname          = alltrim(form.pricipalname.value);
var principalemail        = alltrim(form.principalemail.value);
var hodname               = alltrim(form.hodname.value);
var hodemail              = alltrim(form.hodemail.value);
var url                   = alltrim(form.url.value);
var hobbies               = alltrim(form.hobbies.value);
var otherdegree           = alltrim(form.otherdegree.value);
var otherbranch           = alltrim(form.otherbranch.value);
var userinput             = alltrim(form.userinput.value);
var duration;
var collegename           = alltrim(form.collegename.value);
for(var i=0;i<document.summer.duration.length;i++) {
    if(document.summer.duration[i].checked) {
        duration = document.summer.duration[i].value;
    }
}
    /* Hide all error messages for the form */
    hideMsg("Efirstname");
    hideMsg("Elastname");
    hideMsg("Eaddress");
    hideMsg("Estatename");
    hideMsg("Ecity")
    hideMsg("Epincode");
    hideMsg("Eemail");
    hideMsg("Emobile");
    hideMsg("Ehomephone");
    hideMsg("Edob");
    hideMsg("Exthmark");
    hideMsg("Exiithmark");
    hideMsg("Ebranch");
    hideMsg("Euniversity");
    hideMsg("Efirstyearpercentage");
    hideMsg("Efirstyearinformation");
    hideMsg("Esecondyearpercentage");
    hideMsg("Esecondyearinformation");
    hideMsg("Ethirdyearpercentage");
    hideMsg("Ethirdyearinformation");
    hideMsg("Eclassrank");
    hideMsg("Enumberofclass");
    hideMsg("Edegreedes");
    hideMsg("Emajorcourse1");
    hideMsg("Emajorcourse2");
    hideMsg("Emajorcourse3");
    hideMsg("Emajorcourse4");
    hideMsg("Eassemply");
    hideMsg("Eanyother");
    //hideMsg("Efchoice");
    //hideMsg("Eschoice");
    //hideMsg("Etchoice");
    //hideMsg("Efochoice");
    //hideMsg("Efifchoice");
    hideMsg("Ecollegeaddress");
    hideMsg("Ecollegecityname");
    hideMsg("Ecollegestatename");
    hideMsg("Ecollegepincode");
    hideMsg("Epricipalname");
    hideMsg("Ehodname");
    hideMsg("Ehodemail");
    hideMsg("Eurl");
    hideMsg("Eextra");
    hideMsg("Ehobbies");
    hideMsg("Eotherdegree");
    hideMsg("Eotherbranch");
    hideMsg("Eadditional");
    hideMsg("Eachive");
    hideMsg("Edateproblem");
    hideMsg("Edateproblem1");
    hideMsg("Ecaptcha");

     
    /* Check form values and display error messages */
    returnval = validateFirstname(firstname) && returnval;
   
    returnval = validateLastname(lastname) && returnval;
   
    returnval = validateOfficeaddress(address) && returnval;

    returnval = validateCityothername(cityname) && returnval;

    returnval = validateStatename(statename) && returnval;

    returnval = validatePincode(pincode) && returnval;

    returnval = validateEmailid(emailid) && returnval;

    returnval = validateMobilenumber(mobilenumber) && returnval;

    returnval = validateHomephone(homephone) && returnval;

    returnval = validatedob(dob) && returnval;

    returnval = validateadditional(additional) && returnval;

    returnval = validateachive(achive) && returnval;

    returnval = validateXthMark(xthmark) && returnval;

    returnval = validateXIIthMark(xiithmark) && returnval;

    returnval = validateBranch(branch) && returnval;

    //returnval = validateotherbranch(otherbranch) && returnval;
    //returnval = validateotherdegree(otherdegree) && returnval;

   returnval = validatefirstyearpercentage(firstyearpercentage) && returnval;

    returnval = validatefirstyearinformation(firstyearinformation) && returnval;

    returnval = validatesecondyearpercentage(secondyearpercentage) && returnval;

    returnval = validatesecondyearinformation(secondyearinformation) && returnval;

    returnval = validatethirdyearpercentage(thirdyearpercentage) && returnval;

    returnval = validatethirdyearinformation(thirdyearinformation) && returnval;

    returnval = validateclassrank(classrank) && returnval;

    returnval = validatenumberofstudent(numberofstudent) && returnval;

    returnval = validatedegreedes(degreedes) && returnval;

    returnval = validatemajorcourse1(majorcourse1) && returnval;

    returnval = validatemajorcourse2(majorcourse2) && returnval;

    returnval = validatemajorcourse3(majorcourse3) && returnval;

    returnval = validatemajorcourse4(majorcourse4) && returnval;

    returnval = validateassembly(assemply) && returnval;

    returnval = validateanyother(anyotherlanguage) && returnval;

    returnval = validateextra(extra) && returnval;

    returnval = validatehobbies(hobbies) && returnval;

    returnval = validatedateproblem(dateproblem) && returnval;

    returnval = validatedateproblem1(dateproblem1) && returnval;

    //returnval = validatefchoice(fchoice) && returnval;

    //returnval = validateschoice(schoice,fchoice) && returnval;

    //returnval = validatetchoice(tchoice,fchoice,schoice) && returnval;

    //returnval = validatefochoice(tchoice,fchoice,schoice,fochoice) && returnval;

    //returnval = validatefifchoice(tchoice,fchoice,schoice,fochoice,fifchoice) && returnval;

    returnval = validateCollegeSelect(collegename) && returnval;

    if(collegename == "other" ){
        returnval = validateUniversity(university) && returnval;
    }
    returnval = validatecollegeaddress(collegeaddress) && returnval;

    returnval = validatecollegeCityothername(collegecityname) && returnval;
    returnval = validatecollegeStatename(collegestatename) && returnval;
    returnval = validatecollegePincode(collegepincode) && returnval;
    returnval = validatepricipalname(pricipalname) && returnval;
    returnval = validatepricipalemail(principalemail) && returnval;
    returnval = validatehodname(hodname) && returnval;
    returnval = validatehodemail(hodemail) && returnval;
    returnval = validatecaptcha(userinput) && returnval;

    returnval = validateurl(url) && returnval;
    if(duration == "none") {
        returnval = validateJoiningPeriod(dateproblem,dateproblem1) && returnval;
    }
    return(returnval);
}

/* function to check valid first name */
function validateFirstname(firstname)
{
    /* firstname should be at least 1 character long (at most 15) with alphabets and .- */
    
    var result = false;
    if(firstname != null && firstname != "" && firstname.length>=1 && firstname.length<=15) {
        result = true;
    }
    
    var firstnameExp = /^[a-zA-Z][a-zA-Z\.]+[a-zA-Z\.]+$/;
    if(result && firstname.match(firstnameExp)){
        var previous = firstname.charAt(0);
        var current;
        for(i=1;i<firstname.length;i++) {
            
            current = firstname.charAt(i);
            if(previous == current && (previous == '.' || previous == '_')) {
                result = false;
                
            } else if(previous == '.' && current == '_') {
                result = false;
               
            } else if(previous == '_' && current == '.') {
                result = false;
               
            }
            previous = current;
        }
    } else {
        result = false;
    }
    if (result == false) {displayMsg("Efirstname")};
    return result;
}

/* function to check valid last name */
function validateLastname(lastname)
{
    /* lastname should be at least 1 character long (at most 15) with alphabets and .- */
    var result = false;
    if(lastname != null && lastname != "" && lastname.length>=1 && lastname.length<=15) {
        result = true;
    }

    var lastnameExp = /^[a-zA-Z][a-zA-Z\.]+[a-zA-Z\.]+$/;
    if(result && lastname.match(lastnameExp)){
        var previous = lastname.charAt(0);
        var current;
        for(i=1;i<lastname.length;i++) {

            current = lastname.charAt(i);
            if(previous == current && (previous == '.' || previous == '_')) {
                result = false;

            } else if(previous == '.' && current == '_') {
                result = false;

            } else if(previous == '_' && current == '.') {
                result = false;

            }
            previous = current;
        }
    } else {
        result = false;
    }
    if (result == false) displayMsg("Elastname");
    return result;
}

/* function to check valid designation */
function validateDesigination(desigination)
{
    /* designation should be at least 5 character long (at most 15) with alphabets and (),.- */
    var result = (desigination != null) && (desigination.length >= 5) && (desigination.length <= 15) && (desigination.match("^[A-Za-z (),.-]*$") != null);
    if (result == false) displayMsg("Edesigination");
    return result;
}

/* function to check valid organization */
function validateOrganization(organization)
{
    /* organization should be at least 3 character long (at most 15) with alphabets and .- */
    var result = (organization != null) && (organization.length >= 3) && (organization.length <= 15) && (organization.match("^[A-Za-z .-]*$") != null);
    if (result == false) displayMsg("Eorganization");
    return result;
}

/* function to check valid Home addrss */
function validateHomeaddress(homeaddress)
{
    /* homeaddress should be at least 10 character long (at most 120) with alphabets, digits and (),.- */
    var result = (homeaddress != null) && (homeaddress.length >= 10) && (homeaddress.length <= 120) && (homeaddress.match("^[A-Za-z0-9():\\/\'\",.-]*$") != null);
    if (result == false) displayMsg("Ehomeaddress");
    return result;
}

/* function to check valid Office Address */
function validateOfficeaddress(address)
{
    /* officeaddress should be at least 10 character long (at most 120) with alphabets,digits and (),.- */
    var result = (address != null) && (address.length >= 10) && (address.length <= 120) && (address.match("^[A-Za-z0-9 .\\/\'\"\\r\n//(),:_–-]*$") != null);
    if (result == false) displayMsg("Eaddress");
    return result;
}

/* function to check valid homeaddres */
function validateHomeaddres(homeaddres)
{
    /* Homeaddress should be at least 10 character long (at most 150) with alphabets, digits and (),.- */
    var result = ( homeaddres!= null) && (homeaddres.length >= 10) && (homeaddres.length <= 120) && (homeaddres.match("^[A-Za-z0-9 ()\'\":,._-]*$") != null);
    if (result == false) displayMsg("Edetails");
    return result;
}

/* function to check valid homeaddres */
function validateHeadaddress(headaddress)
{
    /* Headaddress should be at least 10 character long (at most 120) with alphabets and .- */
    var result = ( headaddress!= null) && (headaddress.length >= 1) && (headaddress.length <= 15) && (headaddress.match("^[A-Za-z0-9 (),.-]*$") != null);
    if (result == false) displayMsg("Eheadaddres");
    return result;
}

/* function to check valid phone*/
function validateHeadphone(headphone)
{
    /* headphone should be at least 10 digits long (at most 15) beginning with 0 */
    var result=(headphone!=null) && (headphone.length >= 10) && (headphone.length <= 15) && (headphone.match("^[0][0-9]*$")!=null);
    if (result == false) displayMsg("Ehomephone");
    return result;
}

/* function to check valid phone */
function validateOfficephone(officephone)
{
    /* officephone should be at least 10 digits long (at most 15) beginning with 0 */
    var result=(officephone!=null) && (officephone.length >= 10) && (officephone.length <= 15) && (officephone.match("^[0][0-9]*$")!=null);
    if (result == false) displayMsg("Eofficephone");
    return result;
}

/* function to check valid Home Phone */
function validateHomephone(homephone)
{
    /* homephone should be at least 10 digits long (at most 15) beginning with 0 */
    var result=true;

    if ( (homephone != null) && (homephone != "") )
    {
      result = (homephone!=null) && (homephone.length >= 10) && (homephone.length <= 15) && (homephone.match("^[0][0-9]*$")!=null);
    }
    if (result == false) displayMsg("Ehomephone");
    return result;
}

/* function to check valid first name */
function validateMobilenumber(mobilenumber)
{
    /* mobilenumber should be 10 digits (beginning 9/8/7) long (at most 11 if beginning 0) */
    var result = (mobilenumber != null) && (mobilenumber.length > 0) &&
                   (  ((mobilenumber.length == 10) && (mobilenumber.match("^[7-9][0-9]*$") != null)) ||
                      ((mobilenumber.length == 11) && (mobilenumber.match("^[0][7-9][0-9]*$") != null)) );
    if (result == false) displayMsg("Emobile");
    return result;
}

/* function to check valid faxnumber */
function validateFaxnumber(faxnumber)
{
var result=true;

    if ( (faxnumber != null) && (faxnumber != "") )
    {
        /* FaxNumber should be at least 10 number long (at most 15) */
       result = (faxnumber.length >= 10) && (faxnumber.length <= 15) && (faxnumber.match("^[0][0-9]*$")!=null);
    }
    if (result == false) displayMsg("Efaxnumber");

    return result;
}

/* function to check valid emailid */
function validateEmailid(emailid)
{
    /* email id should be at least 5 characters (at most 50) long  with alphabets and numerics and  @.-_ */
   var result=(emailid!=null) && (emailid.length >= 5) && (emailid.length <= 50) && (emailid.match("^[_A-Za-z0-9-]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[_A-Za-z0-9-]+)")!=null);
    if (result == false) displayMsg("Eemail");
    return result;
}

function validateHeademailid(heademail)
{
    /* email id  should be at least 5 characters (at most 50) long  with alphabets and numerics and  @.-_ */
   var result=(heademail!=null) && (heademail.length >= 5) && (heademail.length <= 50) && (heademail.match("^[_A-Za-z0-9-]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[_A-Za-z0-9-]+)") != null);
    if (result == false) displayMsg("Eheademail");
    return result;
}


/* function to check remote center Selected or not*/
function validateRemote(remote)
{
    /* remote center not equal to 0 */
    var result = (remote != "0");
    if (result == false) displayMsg("Eremote");
    return result;
}

/* function to check state Selected or not*/
function validateStatename(statename)
{
    /* remote center not equal to 0 */
    var result = (statename != "0");
    if (result == false) displayMsg("Estatename");
    return result;
}
/* function to check marital Selected or not*/
function validateMarital(marital)
{
    /* marital  not equal to 0 */
    var result = (marital != "0");
    if (result == false) displayMsg("Emarital");
    return result;
}
/* function to check City Selected or not*/
function validateCityothername(cityname)
{
   /* Should be at least 1 character (at most 15 character)*/
    var result = (cityname.length >= 1) && (cityname.length <= 15) && (cityname.match("^[A-Za-z]*$") != null);
    if (result == false) displayMsg("Ecity");
    return result;
}

/* function to check valid first name */
function validateHeadname(headname)
{
    /* headname should be at least 7 character long (at most 31) with alphabets and .- */
    var result = (headname != null) && (headname.length >= 7) && (headname.length <= 31) && (headname.match("^[A-Za-z .-]*$") != null);
    if (result == false) displayMsg("Eheadname");
    return result;
}

/* function to check valid designation */
function validateHeaddesignation(headdesignation)
{
    /* headdesignation should be at least 5 character long (at most 15) with alphabets and .- */
    var result = (headdesignation != null) && (headdesignation.length >=5 ) && (headdesignation.length <= 15) && (headdesignation.match("^[A-Za-z (),.-]*$") != null);
    if (result == false) displayMsg("Eheaddesignation");
    return result;
}
/* function to check valid Pincode*/
function validatePincode(pincode)
{
    /*  should be at 6 digits  */
    var result=(pincode!=null) && (pincode.length >= 6) && (pincode.match("^[0-9]*$")!=null);
    if (result == false) displayMsg("Epincode");
    return result;
}

function validatedob(dob)
{
    var result=(dob!=null) && (dob.length > 0 ) && (dob.match("^[0-9./]*$")!=null);
    if (result == false) displayMsg("Edob");
    return result;
}

function validateXthboard(xthboard)
{
     /* xthboard should be at least any one option */

    var result = (xthboard != "0");
    if (result == false) displayMsg("Exthboard");
    return result;
}

function validateXthMark(xthmark)
{

     /* xthMarks should be at least 3 digits(value should not be more than 100) */
    var result = (xthmark != null)  &&  (xthmark.length > 1) && (xthmark < 100) && (xthmark.match("^[0-9].*$")!=null);
    if (result == false) displayMsg("Exthmark");
    return result;

}

function validateXIIthboard(xiithboard)
{
     /* xiithboard should be at any one option */
    var result = (xiithboard != "0");
    if (result == false) displayMsg("Exiithboard");
    return result;
}

function validateXIIthMark(xiithmark)
{
     /* xiithMarks should be at least 3 digits(value should not be more than 100) */
    var result = (xiithmark!=null) && (xiithmark.length > 1) && (xiithmark < 100) && (xiithmark.match("^[0-9].*$")!=null);
    if (result == false) displayMsg("Exiithmark");
    return result;
}

function validateBranch(branch)
{
    /* marital  not equal to 0 */
    var result = (branch != "0");
    if (result == false) displayMsg("Ebranch");
    return result;
}

function validateDegree(degree)
{
    /* marital  not equal to 0 */
    var result = (degree != "0");
    if (result == false) displayMsg("Edegree");
    return result;
}

function validateFchoice(fchoice)
{
    /* marital  not equal to 0 */
    var result = (fchoice != "0");
    if (result == false) displayMsg("Efchoice");
    return result;
}

function validateSchoice(schoice)
{
    /* marital  not equal to 0 */
    var result = (schoice != "0");
    if (result == false) displayMsg("Eschoice");
    return result;
}

function validateTchoice(tchoice)
{
    /* marital  not equal to 0 */
    var result = (tchoice != "0");
    if (result == false) displayMsg("Etchoice");
    return result;
}

function validateFochoice(fochoice)
{
    /* marital  not equal to 0 */
    var result = (fochoice != "0");
    if (result == false) displayMsg("Efochoice");
    return result;
}

function validateFifchoice(fifchoice)
{
    /* marital  not equal to 0 */
    var result = (fifchoice != "0");
    if (result == false) displayMsg("Efifchoice");
    return result;
}

function validatePeriod(period)
{
    /* marital  not equal to 0 */
    var result = (period != "0");
    if (result == false) displayMsg("Eperiod");
    return result;
}

function validateFirstyear(firstyear)
{
     /* xiithMarks should be at least 3 digits(value should not be more than 100) */
    var result = (firstyear != null) && (firstyear.length >=1 ) && (firstyear < 101) && (firstyear.match("^[0-9]*$")!=null);
    if (result == false) displayMsg("Efirstyear");
    return result;
}

function validateSecondyear(secondyear)
{
     /* xiithMarks should be at least 3 digits(value should not be more than 100) */
    var result = (secondyear != null) && (secondyear.length >=1 ) && (secondyear < 101) && (secondyear.match("^[0-9]*$")!=null);
    if (result == false) displayMsg("Esecondyear");
    return result;
}

function validateThirdyear(thirdyear)
{
     /* xiithMarks should be at least 3 digits(value should not be more than 100) */
    var result = (thirdyear != null) && (thirdyear.length >=1 ) && (thirdyear < 101) && (thirdyear.match("^[0-9]*$")!=null);
    if (result == false) displayMsg("Ethirdyear");
    return result;
}

function validateFinalyear(finalyear)
{
     /* xiithMarks should be at least 3 digits(value should not be more than 100) */
    var result = (finalyear != null)&& (finalyear.length >=1 ) && (finalyear < 101) && (finalyear.match("^[0-9]*$")!=null);
    if (result == false) displayMsg("Efinalyear");
    return result;
}

/* function to check City Selected or not*/
function validateUniversity(university)
{
    /* Should be at least 1 character (at most 15 character)*/
    var result = (university != null) && (university.length >= 5) && (university.length <= 70) && (university.match("^[A-Za-z .-]*$") != null);
    if (result == false) displayMsg("Euniversity");
    return result;
}
/* function to check City Selected or not*/
function validateCollegeSelect(collegename)
{
    /* Should be at least 1 character (at most 15 character)*/
    var result = true;
    if(collegename=="select") {
        result = false;
        displayMsg("ecollegename");
    }
    return result;
}

function validatefirstyearpercentage(firstyearpercentage)
{
    var result = (firstyearpercentage != null)  &&  (firstyearpercentage.length > 0) && (firstyearpercentage < 100) && (firstyearpercentage.match("^[0-9].*$")!=null);
    if (result == false) displayMsg("Efirstyearpercentage");
    return result;
}

function validatefirstyearinformation(firstyearinformation)
{
    var result = (firstyearinformation != null)  &&  (firstyearinformation.length > 0) && (firstyearinformation < 100) && (firstyearinformation.match("^[0-9].*$")!=null);
    if (result == false) displayMsg("Efirstyearinformation");
    return result;
}

function validatesecondyearpercentage(secondyearpercentage)
{
    var result = (secondyearpercentage != null)  &&  (secondyearpercentage.length > 0) && (secondyearpercentage < 100) && (secondyearpercentage.match("^[0-9].*$")!=null);
    if (result == false) displayMsg("Esecondyearpercentage");
    return result;
}

function validatesecondyearinformation(secondyearinformation)
{

     var result ;
     if (secondyearinformation.length == 0)
     {
         result = true;
     }
     else
     {
     result = (secondyearinformation != null)  &&  (secondyearinformation.length > 0) && (secondyearinformation < 100) && (secondyearinformation.match("^[0-9].*$")!=null);
    }
    if (result == false) displayMsg("Esecondyearinformation");
    return result;
}

function validatethirdyearpercentage(thirdyearpercentage)
{
    var result ;
     if (thirdyearpercentage.length == 0)
     {
         result = true;
     }
     else
     {
     result = (thirdyearpercentage != null)  &&  (thirdyearpercentage.length > 0) && (thirdyearpercentage < 100) && (thirdyearpercentage.match("^[0-9].*$")!=null);
     }
    if (result == false) displayMsg("Ethirdyearpercentage");
    return result;
}

function validatethirdyearinformation(thirdyearinformation)
{
    var result ;
     if (thirdyearinformation.length == 0)
     {
         result = true;
     }
     else
     {
    result = (thirdyearinformation != null)  &&  (thirdyearinformation.length > 0) && (thirdyearinformation < 100) && (thirdyearinformation.match("^[0-9].*$")!=null);
     }
    if (result == false) displayMsg("Ethirdyearinformation");
    return result;
}

function validateclassrank(classrank)
{
    var result = (classrank != null)  &&  (classrank.length >= 1) && (classrank < 500) && (classrank.match("^[0-9]*$")!=null);
    if (result == false) displayMsg("Eclassrank");
    return result;
}

function validatenumberofstudent(numberofstudent)
{
    var result = (numberofstudent != null)  &&  (numberofstudent.length >= 1) && (numberofstudent < 500) && (numberofstudent.match("^[0-9]*$")!=null);
    if (result == false) displayMsg("Enumberofclass");
    return result;
}

function validatedegreedes(degreedes)
{
     var result ;
     if (degreedes.length == 0)
     {
         result = true;
     }
     else
      {
          result = (degreedes.length >= 20) && (degreedes.length <= 1000) && (degreedes.match("^[A-Za-z0-9 .\r\n\\/(),_+-]*$") != null);
      }

     if (result == false) displayMsg("Edegreedes");
     return result;

}

function validatemajorcourse1(majorcourse1)
{
    var result = (majorcourse1 != null) && (majorcourse1.length >= 1) && (majorcourse1.length <= 31) && (majorcourse1.match("^[A-Za-z .-]*$") != null);
    if (result == false) displayMsg("Emajorcourse1");
    return result;

}

function validatemajorcourse2(majorcourse2)
{
    var result = (majorcourse2 != null) && (majorcourse2.length >= 1) && (majorcourse2.length <= 31) && (majorcourse2.match("^[A-Za-z .-]*$") != null);
    if (result == false) displayMsg("Emajorcourse2");
    return result;

}

function validatemajorcourse3(majorcourse3)
{
    var result = (majorcourse3 != null) && (majorcourse3.length >= 1) && (majorcourse3.length <= 31) && (majorcourse3.match("^[A-Za-z .-]*$") != null);
    if (result == false) displayMsg("Emajorcourse3");
    return result;

}

function validatemajorcourse4(majorcourse4)
{
    var result = (majorcourse4 != null) && (majorcourse4.length >= 1) && (majorcourse4.length <= 31) && (majorcourse4.match("^[A-Za-z .-]*$") != null);
    if (result == false) displayMsg("Emajorcourse4");
    return result;

}

function validateassembly(assemply)
{
     var result ;
     if (assemply.length == 0)
     {
         result = true;
     }
     else
      {
       result = (assemply != null) && (assemply.length >= 1) && (assemply.length <= 31) && (assemply.match("^[A-Za-z0-9 (),.-]*$") != null);
      }
    if (result == false) displayMsg("Eassemply");
    return result;

}

function validateanyother(anyotherlanguage)
{
     var result ;
     if (anyotherlanguage.length == 0)
     {
         result = true;
     }
     else
     {
     result = (anyotherlanguage != null) && (anyotherlanguage.length >= 1) && (anyotherlanguage.length <= 31) && (anyotherlanguage.match("^[A-Za-z0-9 (),.-]*$") != null);
     }
    if (result == false) displayMsg("Eanyother");
    return result;

}

function validateproblemdate(dob)
{
    var result ;
     if (degreedes.length == 0)
     {
         result = true;
     }
     else
      {
      var result=(dob!=null) && (dob.length > 0 ) && (dob.match("^[0-9./]*$")!=null);
      }
    if (result == false) displayMsg("Edob");
    return result;
}

function validatedateproblem(dateproblem)
{
    var result ;
    if (dateproblem.length == 0)
    {
        result = true;
    }
    else
     {
    var result=(dateproblem != null) && (dateproblem.length > 0 ) && (dateproblem.match("^[0-9./]*$")!=null) ;
     }
    if (result == false) displayMsg("Edateproblem");
    return result;
}

function validatedateproblem1(dateproblem1)
{
    var result ;
    if (dateproblem1.length == 0)
    {
        result = true;
    }
    else
     {
    var result=(dateproblem1 != null) && (dateproblem1.length > 0 ) && (dateproblem1.match("^[0-9./]*$")!=null) ;
     }
    if (result == false) displayMsg("Edateproblem1");
    return result;
}

function validatefchoice(fchoice)
{
   var result=(fchoice!="select") && (fchoice.length > 0 );
    if (result == false) displayMsg("Efchoice");
    return result;
}

function validateschoice(schoice,fchoice)
{
   var result=(schoice!="select") && (schoice != fchoice );
    if (result == false) displayMsg("Eschoice");
    return result;
}

function validatetchoice(tchoice,fchoice,schoice)
{
   var result=(tchoice!="select")  && (tchoice != fchoice) && (tchoice != schoice) ;
    if (result == false) displayMsg("Etchoice");
    return result;
}

function validatefochoice(tchoice, fchoice, schoice, fochoice)
{
   var result=(fochoice!="select")  && (fochoice != fchoice) && (fochoice != schoice) && (fochoice != tchoice) ;
   if (result == false) displayMsg("Efochoice");
    return result;
}

function validatefifchoice(tchoice, fchoice, schoice, fochoice, fifchoice)
{
   var result=(fifchoice!="select")  && (fifchoice != fchoice) && (fifchoice != schoice) && (fifchoice != tchoice) && (fifchoice != fochoice);
 }

function validatecollegeaddress(collegeaddress)
{
    /* officeaddress should be at least 10 character long (at most 150) with alphabets,digits and (),.- */
    var result = (collegeaddress != null) && (collegeaddress.length >= 10) && (collegeaddress.length <= 150) && (collegeaddress.match("^[A-Za-z0-9 .\"\'\\r\n//()+,:_–-]*$") != null);
    if (result == false) displayMsg("Ecollegeaddress");
    return result;
}

function validatecollegeCityothername(collegecityname)
{
   /* Should be at least 1 character (at most 15 character)*/
    var result = (collegecityname.length >= 1) && (collegecityname.length <= 15) && (collegecityname.match("^[A-Za-z]*$") != null);
    if (result == false) displayMsg("Ecollegecityname");
    return result;
}

function validatecollegeStatename(collegestatename)
{
    /* remote center not equal to 0 */
    var result = (collegestatename != "0");
    if (result == false) displayMsg("Ecollegestatename");
    return result;
}

function validatecollegePincode(collegepincode)
{
    /*  should be at 6 digits  */
    var result=(collegepincode!=null) && (collegepincode.length >= 6) && (collegepincode.match("^[0-9]*$")!=null);
    if (result == false) displayMsg("Ecollegepincode");
    return result;
}

function validatepricipalname(pricipalname)
{
    var result = false;
    if(pricipalname != null && pricipalname != "" && pricipalname.length>=1 && pricipalname.length<=30) {
        result = true;
    }

    var principalnameExp = /^[a-zA-Z][a-zA-Z\. ]+[a-zA-Z\.]+$/;
    if(result && pricipalname.match(principalnameExp)){
        var previous = pricipalname.charAt(0);
        var current;
        for(i=1;i<pricipalname.length;i++) {

            current = pricipalname.charAt(i);
            if(previous == current && (previous == '.' || previous == '_')) {
                result = false;

            } else if(previous == '.' && current == '_') {
                result = false;

            } else if(previous == '_' && current == '.') {
                result = false;

            }
            previous = current;
        }
    } else {
        result = false;
    }
    if (result == false) displayMsg("Epricipalname");
    return result;
}

function validatepricipalemail(pricipalemail)
{
    /* email id should be at least 5 characters (at most 30) long  with alphabets and numerics and  @.-_ */
   var result=(pricipalemail!=null) && (pricipalemail.length >= 5) && (pricipalemail.length <= 30) && (pricipalemail.match("^[_A-Za-z0-9-]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[_A-Za-z0-9-]+)")!=null);
    if (result == false) displayMsg("Eprincipalemail");
    return result;
}  

function validatehodname(hodname)
{
   var result = false;
    if(hodname != null && hodname != "" && hodname.length>=1 && hodname.length<=30) {
        result = true;
    }

    var hodnameExp = /^[a-zA-Z][a-zA-Z\. ]+[a-zA-Z\.]+$/;
    if(result && hodname.match(hodnameExp)){
        var previous = hodname.charAt(0);
        var current;
        for(i=1;i<hodname.length;i++) {

            current = hodname.charAt(i);
            if(previous == current && (previous == '.' || previous == '_')) {
                result = false;

           } else if(previous == '.' && current == '_') {
                result = false;
           } else if(previous == '_' && current == '.') {
                result = false;

            }
            previous = current;
        }
    } else {
        result = false;
    }
    if (result == false) displayMsg("Ehodname");
    return result;
}

function validatehodemail(hodemail)
{
    /* email id should be at least 5 characters (at most 50) long  with alphabets and numerics and  @.-_ */
   var result=(hodemail!=null) && (hodemail.length >= 5) && (hodemail.length <= 50) && (hodemail.match("^[_A-Za-z0-9-]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[_A-Za-z0-9-]+)")!=null);
    if (result == false) displayMsg("Ehodemail");
    return result;
}

function validateurl(url)
{
    /* url should be at least 1 character long (at most 30) with alphabets and . */

    var result = (url != null) && (url.length >= 1) && (url.length <= 50) && (url.match("^[A-Za-z /\\-:_..]*$") != null);
    if (result == false) displayMsg("Eurl");
    return result;
}

function validateextra(extra)
{
    /* officeaddress should be at least 20 character long (at most 1000) with alphabets,digits and (),.- */
     var result ;
     if (extra.length == 0)
     {         
         result = true;
     }
     else
     {
         result = (extra != null) && (extra.length >= 5) && (extra.length <= 150) && (extra.match("^[A-Za-z0-9 .\\;\"\\r\n//()+,:_–-]*$") != null);
     }
    if (result == false) displayMsg("Eextra");
    return result;
}

function validatehobbies(hobbies)
{
     var result ;
     if (hobbies.length == 0)
         {
         result = true;
     }
     else
     {
     result = (hobbies != null) && (hobbies.length >= 5) && (hobbies.length <= 150) && (hobbies.match("^[A-Za-z0-9 .\\;\"\\r\n//()+,:_–-]*$") != null);
     }
     if (result == false) displayMsg("Ehobbies");
     return result;
}

function validateotherdegree(otherdegree)
{   /* url should be at least 1 character long (at most 30) with alphabets and . */

    var result = (otherdegree != null) && (otherdegree.length >= 1) && (otherdegree.length <= 30) && (otherdegree.match("^[A-Za-z ..]*$") != null);
    if (result == false) displayMsg("Eotherdegree");
    return result;
}

function validateotherbranch(otherbranch)
{
    /* url should be at least 1 character long (at most 30) with alphabets and . */

    var result =(otherbranch != null) && (otherbranch.length >= 1) && (otherbranch.length <= 30) && (otherbranch.match("^[A-Za-z ..]*$") != null);
    if (result == false) displayMsg("Eotherbranch");
    return result;
}

function validateadditional(additional)
{
    /* officeaddress should be at least 10 character long (at most 1000) with alphabets,digits and (),.- */
    var result=true;
    if ( (additional != null) && (additional != "") )
    {
     result = (additional != null) && (additional.length >= 5) && (additional.length <= 150) && (additional.match("^[A-Za-z0-9 .\"\\r\n//()\\;+,:_–-]*$") != null);
    }
    if (result == false) displayMsg("Eadditional");
    return result;
}

function validateachive(achive)
{
    /* achive should be at least 10 character long (at most 1000) with alphabets,digits and (),.- */
    var result=true;
    if ( (achive != null) && (achive != "") )
    {
    result = (achive != null) && (achive.length >= 5) && (achive.length <= 150) && (achive.match("^[A-Za-z0-9 .\"\\r\n//()\\;+,:_–-]*$") != null);
    }
    if (result == false) displayMsg("Eachive");
    return result;
}

function validatecaptcha(userinput)
{
    /* achive should be at least 20 character long (at most 150) with alphabets,digits and (),.- */

    var result = (userinput != null) && (userinput.length != 0) ;
    if (result == false) displayMsg("Ecaptcha");
    return result;
}

function validatedate(userinput)
{
    /* achive should be at least 20 character long (at most 150) with alphabets,digits and (),.- */

    var result = (userinput != null) && (userinput.length != 0) ;
    if (result == false) displayMsg("Ecaptcha");
    return result;
}
/* to check white space and remove  */
function alltrim(str)
{
    return str.replace(/^\s+|\s+$/g, '');
}


function displayMsg(id)
{
    document.getElementById(id).style.display = "inline";
}

function hideMsg(id)
{
    document.getElementById(id).style.display = "none";
}

function showRequiredInfo(id) {
    lastId = id;
    document.getElementById(id).style.display = "inline";
}

function hideRequiredInfo() {
    document.getElementById(lastId).style.display = "none";
}
function validateBdate(bday, bmonth, byear)
{
var returnval = true;
var curdate = new Date();
var curyear = curdate.getFullYear();
var curmonth = curdate.getMonth() + 1;
var curday = curdate.getDate();
var day = new Array(31,28,31,30,31,30,31,31,30,31,30,31);

    if ( ((byear % 400) == 0) || (((byear % 4) == 0) && ((byear % 100) != 0)) ) day[1]=29;
    if ( (bmonth < 1) || (bmonth > 12) ) returnval = false;
    else if ( (bday < 1) || (bday > day[bmonth-1]) ) returnval = false;
    else if ( (byear < (curyear - 20)) || (byear > curyear) ) returnval = false;
    else if ( (byear == curyear) && ((bmonth > curmonth) || ((bmonth == curmonth) && (bday > curday))) ) returnval = false;

    return(returnval);
}

function validateJoiningPeriod(startDate, endDate) {
    var result = true;
    var sDate = new Date(startDate);
    var eDate = new Date(endDate);
    var lastDate = new Date();
    lastDate.setFullYear(2015,6,5);
    lastDate.setHours(0, 0, 0, 0);
    var beginDate = new Date();
    beginDate.setFullYear(2015, 4, 9);
    beginDate.setHours(0, 0, 0, 0);
    var one_day=1000*60*60*24

    if(sDate.getFullYear()!=2015 || eDate.getFullYear()!=2015) {
        result = false;
    }else if(eDate>lastDate || sDate<beginDate || sDate>eDate){
        result = false;
    }else if(((eDate.getTime()-sDate.getTime())/one_day) < 42 || ((eDate.getTime()-sDate.getTime())/one_day) > 58) {
        result = false;
    }
    if(result == false) {
        displayMsg('Edateproblem1');
   }
   return result;
}

function toggleField() {
    var collegename =  document.summer.collegename.value;
    var o = document.getElementById('other');
    var ol = document.getElementById('otherlabel');
    if(collegename == 'other') {
        o.style.display = 'block';
        ol.style.display = 'block';
    } else {
           o.style.display = 'none';
        ol.style.display = 'none';
    }
}

function emailValidator(email){
    var result = false;
    var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    if(email.match(emailExp)){
        result = true;
    }
    return result;
}

/*
     * isStringValid() method is used to check that the given string is not null and
     * it's length is in a given range.
     * If given string is not null and it's length is in a given range return true otherwise false.
     * It has one parameter, a string that is to be checked for validity.
     * it returns true or false depending on the validity of the string.
*/
function isStringValid(str) {
    var result = true;
    //str = trim(str);
    if(str == "" || str == null || str == undefined) {
        result = false;
    }
    return result;
}

function validateLoginForm() {
    var email = document.login.email.value;
    var password = document.login.password.value;
    var result = true;
    resetLoginForm();
    if(!isStringValid(email) || !emailValidator(email)) {
        document.getElementById("emailerror").style.display = "inline";
        result = false;
    }
    if(!isStringValid(password) || password.length < 5 || password.length > 15) {
        document.getElementById("passworderror").style.display = "inline";
        result = false;
    }
    return result;
}

function resetLoginForm() {
    document.getElementById("emailerror").style.display = "none";
    document.getElementById("passworderror").style.display = "none";
}
