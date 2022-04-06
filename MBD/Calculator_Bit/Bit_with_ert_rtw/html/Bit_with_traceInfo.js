function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/In2 */
	this.urlHashMap["Bit_with:12"] = "Bit_with.c:34,41,48,56&Bit_with.h:38";
	/* <Root>/In1 */
	this.urlHashMap["Bit_with:6"] = "Bit_with.c:33,40,47,55,62&Bit_with.h:39";
	/* <Root>/Bitwise
Operator */
	this.urlHashMap["Bit_with:1"] = "Bit_with.c:35";
	/* <Root>/Bitwise
Operator1 */
	this.urlHashMap["Bit_with:8"] = "Bit_with.c:42";
	/* <Root>/Bitwise
Operator2 */
	this.urlHashMap["Bit_with:9"] = "Bit_with.c:49";
	/* <Root>/Bitwise
Operator3 */
	this.urlHashMap["Bit_with:10"] = "Bit_with.c:57";
	/* <Root>/Bitwise
Operator4 */
	this.urlHashMap["Bit_with:11"] = "Bit_with.c:63";
	/* <Root>/Bitwise
Operator5 */
	this.urlHashMap["Bit_with:18"] = "Bit_with.c:50";
	/* <Root>/Out1 */
	this.urlHashMap["Bit_with:13"] = "Bit_with.c:32&Bit_with.h:44";
	/* <Root>/Out2 */
	this.urlHashMap["Bit_with:14"] = "Bit_with.c:39&Bit_with.h:45";
	/* <Root>/Out3 */
	this.urlHashMap["Bit_with:15"] = "Bit_with.c:46&Bit_with.h:46";
	/* <Root>/Out4 */
	this.urlHashMap["Bit_with:16"] = "Bit_with.c:54&Bit_with.h:47";
	/* <Root>/Out5 */
	this.urlHashMap["Bit_with:17"] = "Bit_with.c:61&Bit_with.h:48";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "Bit_with"};
	this.sidHashMap["Bit_with"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<Root>/In2"] = {sid: "Bit_with:12"};
	this.sidHashMap["Bit_with:12"] = {rtwname: "<Root>/In2"};
	this.rtwnameHashMap["<Root>/In1"] = {sid: "Bit_with:6"};
	this.sidHashMap["Bit_with:6"] = {rtwname: "<Root>/In1"};
	this.rtwnameHashMap["<Root>/Bitwise Operator"] = {sid: "Bit_with:1"};
	this.sidHashMap["Bit_with:1"] = {rtwname: "<Root>/Bitwise Operator"};
	this.rtwnameHashMap["<Root>/Bitwise Operator1"] = {sid: "Bit_with:8"};
	this.sidHashMap["Bit_with:8"] = {rtwname: "<Root>/Bitwise Operator1"};
	this.rtwnameHashMap["<Root>/Bitwise Operator2"] = {sid: "Bit_with:9"};
	this.sidHashMap["Bit_with:9"] = {rtwname: "<Root>/Bitwise Operator2"};
	this.rtwnameHashMap["<Root>/Bitwise Operator3"] = {sid: "Bit_with:10"};
	this.sidHashMap["Bit_with:10"] = {rtwname: "<Root>/Bitwise Operator3"};
	this.rtwnameHashMap["<Root>/Bitwise Operator4"] = {sid: "Bit_with:11"};
	this.sidHashMap["Bit_with:11"] = {rtwname: "<Root>/Bitwise Operator4"};
	this.rtwnameHashMap["<Root>/Bitwise Operator5"] = {sid: "Bit_with:18"};
	this.sidHashMap["Bit_with:18"] = {rtwname: "<Root>/Bitwise Operator5"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "Bit_with:13"};
	this.sidHashMap["Bit_with:13"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<Root>/Out2"] = {sid: "Bit_with:14"};
	this.sidHashMap["Bit_with:14"] = {rtwname: "<Root>/Out2"};
	this.rtwnameHashMap["<Root>/Out3"] = {sid: "Bit_with:15"};
	this.sidHashMap["Bit_with:15"] = {rtwname: "<Root>/Out3"};
	this.rtwnameHashMap["<Root>/Out4"] = {sid: "Bit_with:16"};
	this.sidHashMap["Bit_with:16"] = {rtwname: "<Root>/Out4"};
	this.rtwnameHashMap["<Root>/Out5"] = {sid: "Bit_with:17"};
	this.sidHashMap["Bit_with:17"] = {rtwname: "<Root>/Out5"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
