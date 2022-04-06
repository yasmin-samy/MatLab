function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/In1 */
	this.urlHashMap["Task2_Lec2:1"] = "Task2_Lec2.c:33,40,47,54&Task2_Lec2.h:38";
	/* <Root>/In2 */
	this.urlHashMap["Task2_Lec2:2"] = "Task2_Lec2.c:34,41,48,55&Task2_Lec2.h:39";
	/* <Root>/Out1 */
	this.urlHashMap["Task2_Lec2:7"] = "Task2_Lec2.c:32&Task2_Lec2.h:44";
	/* <Root>/Out2 */
	this.urlHashMap["Task2_Lec2:8"] = "Task2_Lec2.c:39&Task2_Lec2.h:45";
	/* <Root>/Out3 */
	this.urlHashMap["Task2_Lec2:9"] = "Task2_Lec2.c:46&Task2_Lec2.h:46";
	/* <Root>/Out4 */
	this.urlHashMap["Task2_Lec2:10"] = "Task2_Lec2.c:53&Task2_Lec2.h:47";
	/* <S1>/Add */
	this.urlHashMap["Task2_Lec2:3"] = "Task2_Lec2.c:35";
	/* <S1>/Divide */
	this.urlHashMap["Task2_Lec2:4"] = "Task2_Lec2.c:56";
	/* <S1>/Product */
	this.urlHashMap["Task2_Lec2:5"] = "Task2_Lec2.c:49";
	/* <S1>/Subtract */
	this.urlHashMap["Task2_Lec2:6"] = "Task2_Lec2.c:42";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "Task2_Lec2"};
	this.sidHashMap["Task2_Lec2"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "Task2_Lec2:11"};
	this.sidHashMap["Task2_Lec2:11"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<Root>/In1"] = {sid: "Task2_Lec2:1"};
	this.sidHashMap["Task2_Lec2:1"] = {rtwname: "<Root>/In1"};
	this.rtwnameHashMap["<Root>/In2"] = {sid: "Task2_Lec2:2"};
	this.sidHashMap["Task2_Lec2:2"] = {rtwname: "<Root>/In2"};
	this.rtwnameHashMap["<Root>/Subsystem"] = {sid: "Task2_Lec2:11"};
	this.sidHashMap["Task2_Lec2:11"] = {rtwname: "<Root>/Subsystem"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "Task2_Lec2:7"};
	this.sidHashMap["Task2_Lec2:7"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<Root>/Out2"] = {sid: "Task2_Lec2:8"};
	this.sidHashMap["Task2_Lec2:8"] = {rtwname: "<Root>/Out2"};
	this.rtwnameHashMap["<Root>/Out3"] = {sid: "Task2_Lec2:9"};
	this.sidHashMap["Task2_Lec2:9"] = {rtwname: "<Root>/Out3"};
	this.rtwnameHashMap["<Root>/Out4"] = {sid: "Task2_Lec2:10"};
	this.sidHashMap["Task2_Lec2:10"] = {rtwname: "<Root>/Out4"};
	this.rtwnameHashMap["<S1>/In1"] = {sid: "Task2_Lec2:12"};
	this.sidHashMap["Task2_Lec2:12"] = {rtwname: "<S1>/In1"};
	this.rtwnameHashMap["<S1>/In2"] = {sid: "Task2_Lec2:13"};
	this.sidHashMap["Task2_Lec2:13"] = {rtwname: "<S1>/In2"};
	this.rtwnameHashMap["<S1>/Add"] = {sid: "Task2_Lec2:3"};
	this.sidHashMap["Task2_Lec2:3"] = {rtwname: "<S1>/Add"};
	this.rtwnameHashMap["<S1>/Divide"] = {sid: "Task2_Lec2:4"};
	this.sidHashMap["Task2_Lec2:4"] = {rtwname: "<S1>/Divide"};
	this.rtwnameHashMap["<S1>/Product"] = {sid: "Task2_Lec2:5"};
	this.sidHashMap["Task2_Lec2:5"] = {rtwname: "<S1>/Product"};
	this.rtwnameHashMap["<S1>/Subtract"] = {sid: "Task2_Lec2:6"};
	this.sidHashMap["Task2_Lec2:6"] = {rtwname: "<S1>/Subtract"};
	this.rtwnameHashMap["<S1>/Out1"] = {sid: "Task2_Lec2:14"};
	this.sidHashMap["Task2_Lec2:14"] = {rtwname: "<S1>/Out1"};
	this.rtwnameHashMap["<S1>/Out2"] = {sid: "Task2_Lec2:15"};
	this.sidHashMap["Task2_Lec2:15"] = {rtwname: "<S1>/Out2"};
	this.rtwnameHashMap["<S1>/Out3"] = {sid: "Task2_Lec2:16"};
	this.sidHashMap["Task2_Lec2:16"] = {rtwname: "<S1>/Out3"};
	this.rtwnameHashMap["<S1>/Out4"] = {sid: "Task2_Lec2:17"};
	this.sidHashMap["Task2_Lec2:17"] = {rtwname: "<S1>/Out4"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
