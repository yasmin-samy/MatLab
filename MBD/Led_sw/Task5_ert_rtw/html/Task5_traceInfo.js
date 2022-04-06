function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/Chart */
	this.urlHashMap["Task5:12"] = "Task5.c:35,65,90&Task5.h:47,48";
	/* <Root>/Constant */
	this.urlHashMap["Task5:9"] = "Task5.c:36";
	/* <Root>/Function-Call
Subsystem */
	this.urlHashMap["Task5:3"] = "Task5.c:55,60";
	/* <Root>/Out1 */
	this.urlHashMap["Task5:8"] = "Task5.c:67&Task5.h:53";
	/* <S1>:1 */
	this.urlHashMap["Task5:12:1"] = "Task5.c:53";
	/* <S1>:2 */
	this.urlHashMap["Task5:12:2"] = "Task5.c:50";
	/* <S1>:4 */
	this.urlHashMap["Task5:12:4"] = "Task5.c:56";
	/* <S1>:6 */
	this.urlHashMap["Task5:12:6"] = "Task5.c:57";
	/* <S2>/In1 */
	this.urlHashMap["Task5:4"] = "Task5.c:37&Task5.h:38";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "Task5"};
	this.sidHashMap["Task5"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "Task5:12"};
	this.sidHashMap["Task5:12"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<S2>"] = {sid: "Task5:3"};
	this.sidHashMap["Task5:3"] = {rtwname: "<S2>"};
	this.rtwnameHashMap["<Root>/Chart"] = {sid: "Task5:12"};
	this.sidHashMap["Task5:12"] = {rtwname: "<Root>/Chart"};
	this.rtwnameHashMap["<Root>/Constant"] = {sid: "Task5:9"};
	this.sidHashMap["Task5:9"] = {rtwname: "<Root>/Constant"};
	this.rtwnameHashMap["<Root>/Function-Call Subsystem"] = {sid: "Task5:3"};
	this.sidHashMap["Task5:3"] = {rtwname: "<Root>/Function-Call Subsystem"};
	this.rtwnameHashMap["<Root>/Lamp"] = {sid: "Task5:7"};
	this.sidHashMap["Task5:7"] = {rtwname: "<Root>/Lamp"};
	this.rtwnameHashMap["<Root>/Toggle Switch"] = {sid: "Task5:14"};
	this.sidHashMap["Task5:14"] = {rtwname: "<Root>/Toggle Switch"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "Task5:8"};
	this.sidHashMap["Task5:8"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<S1>:1"] = {sid: "Task5:12:1"};
	this.sidHashMap["Task5:12:1"] = {rtwname: "<S1>:1"};
	this.rtwnameHashMap["<S1>:2"] = {sid: "Task5:12:2"};
	this.sidHashMap["Task5:12:2"] = {rtwname: "<S1>:2"};
	this.rtwnameHashMap["<S1>:4"] = {sid: "Task5:12:4"};
	this.sidHashMap["Task5:12:4"] = {rtwname: "<S1>:4"};
	this.rtwnameHashMap["<S1>:6"] = {sid: "Task5:12:6"};
	this.sidHashMap["Task5:12:6"] = {rtwname: "<S1>:6"};
	this.rtwnameHashMap["<S2>/In1"] = {sid: "Task5:4"};
	this.sidHashMap["Task5:4"] = {rtwname: "<S2>/In1"};
	this.rtwnameHashMap["<S2>/function"] = {sid: "Task5:5"};
	this.sidHashMap["Task5:5"] = {rtwname: "<S2>/function"};
	this.rtwnameHashMap["<S2>/Out1"] = {sid: "Task5:6"};
	this.sidHashMap["Task5:6"] = {rtwname: "<S2>/Out1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
