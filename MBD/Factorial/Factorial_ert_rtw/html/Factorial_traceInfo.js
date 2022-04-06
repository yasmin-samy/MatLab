function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/In1 */
	this.urlHashMap["Factorial:18"] = "Factorial.c:41,53&Factorial.h:37";
	/* <Root>/For Iterator
Subsystem */
	this.urlHashMap["Factorial:14"] = "Factorial.c:35,54";
	/* <Root>/Out1 */
	this.urlHashMap["Factorial:19"] = "Factorial.c:43&Factorial.h:42";
	/* <S1>/For Iterator */
	this.urlHashMap["Factorial:16"] = "Factorial.c:36";
	/* <S1>/Product */
	this.urlHashMap["Factorial:21"] = "Factorial.c:44";
	/* <S1>/Unit Delay */
	this.urlHashMap["Factorial:22"] = "Factorial.c:38,45,49";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "Factorial"};
	this.sidHashMap["Factorial"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "Factorial:14"};
	this.sidHashMap["Factorial:14"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<Root>/In1"] = {sid: "Factorial:18"};
	this.sidHashMap["Factorial:18"] = {rtwname: "<Root>/In1"};
	this.rtwnameHashMap["<Root>/For Iterator Subsystem"] = {sid: "Factorial:14"};
	this.sidHashMap["Factorial:14"] = {rtwname: "<Root>/For Iterator Subsystem"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "Factorial:19"};
	this.sidHashMap["Factorial:19"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<S1>/In1"] = {sid: "Factorial:15"};
	this.sidHashMap["Factorial:15"] = {rtwname: "<S1>/In1"};
	this.rtwnameHashMap["<S1>/For Iterator"] = {sid: "Factorial:16"};
	this.sidHashMap["Factorial:16"] = {rtwname: "<S1>/For Iterator"};
	this.rtwnameHashMap["<S1>/Product"] = {sid: "Factorial:21"};
	this.sidHashMap["Factorial:21"] = {rtwname: "<S1>/Product"};
	this.rtwnameHashMap["<S1>/Unit Delay"] = {sid: "Factorial:22"};
	this.sidHashMap["Factorial:22"] = {rtwname: "<S1>/Unit Delay"};
	this.rtwnameHashMap["<S1>/Out1"] = {sid: "Factorial:17"};
	this.sidHashMap["Factorial:17"] = {rtwname: "<S1>/Out1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
