function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/Add */
	this.urlHashMap["calculator:1"] = "msg=rtwMsg_reducedBlock&block=calculator:1";
	/* <Root>/Constant */
	this.urlHashMap["calculator:12"] = "msg=rtwMsg_CodeGenerationReducedBlock&block=calculator:12";
	/* <Root>/Constant1 */
	this.urlHashMap["calculator:13"] = "msg=rtwMsg_CodeGenerationReducedBlock&block=calculator:13";
	/* <Root>/Display */
	this.urlHashMap["calculator:11"] = "msg=rtwMsg_reducedBlock&block=calculator:11";
	/* <Root>/Divide */
	this.urlHashMap["calculator:3"] = "calculator.h:40&calculator_data.c:26";
	/* <Root>/Product */
	this.urlHashMap["calculator:4"] = "calculator.h:39&calculator_data.c:24";
	/* <Root>/Subtract */
	this.urlHashMap["calculator:2"] = "calculator.h:38&calculator_data.c:22";
	/* <Root>/Out2 */
	this.urlHashMap["calculator:7"] = "calculator.c:44&calculator.h:45";
	/* <Root>/Out3 */
	this.urlHashMap["calculator:8"] = "calculator.c:47&calculator.h:46";
	/* <Root>/Out4 */
	this.urlHashMap["calculator:9"] = "calculator.c:50&calculator.h:47";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "calculator"};
	this.sidHashMap["calculator"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<Root>/Add"] = {sid: "calculator:1"};
	this.sidHashMap["calculator:1"] = {rtwname: "<Root>/Add"};
	this.rtwnameHashMap["<Root>/Constant"] = {sid: "calculator:12"};
	this.sidHashMap["calculator:12"] = {rtwname: "<Root>/Constant"};
	this.rtwnameHashMap["<Root>/Constant1"] = {sid: "calculator:13"};
	this.sidHashMap["calculator:13"] = {rtwname: "<Root>/Constant1"};
	this.rtwnameHashMap["<Root>/Display"] = {sid: "calculator:11"};
	this.sidHashMap["calculator:11"] = {rtwname: "<Root>/Display"};
	this.rtwnameHashMap["<Root>/Divide"] = {sid: "calculator:3"};
	this.sidHashMap["calculator:3"] = {rtwname: "<Root>/Divide"};
	this.rtwnameHashMap["<Root>/Product"] = {sid: "calculator:4"};
	this.sidHashMap["calculator:4"] = {rtwname: "<Root>/Product"};
	this.rtwnameHashMap["<Root>/Subtract"] = {sid: "calculator:2"};
	this.sidHashMap["calculator:2"] = {rtwname: "<Root>/Subtract"};
	this.rtwnameHashMap["<Root>/Out2"] = {sid: "calculator:7"};
	this.sidHashMap["calculator:7"] = {rtwname: "<Root>/Out2"};
	this.rtwnameHashMap["<Root>/Out3"] = {sid: "calculator:8"};
	this.sidHashMap["calculator:8"] = {rtwname: "<Root>/Out3"};
	this.rtwnameHashMap["<Root>/Out4"] = {sid: "calculator:9"};
	this.sidHashMap["calculator:9"] = {rtwname: "<Root>/Out4"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
