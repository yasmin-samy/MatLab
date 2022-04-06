function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/Chart */
	this.urlHashMap["trafficstateflow:2"] = "trafficstateflow.c:19,41,151,183&trafficstateflow.h:38,39,40,57,58,59";
	/* <Root>/Out1 */
	this.urlHashMap["trafficstateflow:3"] = "trafficstateflow.c:153&trafficstateflow.h:64";
	/* <Root>/Out2 */
	this.urlHashMap["trafficstateflow:4"] = "trafficstateflow.c:156&trafficstateflow.h:65";
	/* <Root>/Out3 */
	this.urlHashMap["trafficstateflow:5"] = "trafficstateflow.c:159&trafficstateflow.h:66";
	/* <S1>:4 */
	this.urlHashMap["trafficstateflow:2:4"] = "trafficstateflow.c:66,71,103";
	/* <S1>:3 */
	this.urlHashMap["trafficstateflow:2:3"] = "trafficstateflow.c:94,99,131";
	/* <S1>:1 */
	this.urlHashMap["trafficstateflow:2:1"] = "trafficstateflow.c:57,75,122,127";
	/* <S1>:5 */
	this.urlHashMap["trafficstateflow:2:5"] = "trafficstateflow.c:126";
	/* <S1>:2 */
	this.urlHashMap["trafficstateflow:2:2"] = "trafficstateflow.c:53";
	/* <S1>:7 */
	this.urlHashMap["trafficstateflow:2:7"] = "trafficstateflow.c:70";
	/* <S1>:6 */
	this.urlHashMap["trafficstateflow:2:6"] = "trafficstateflow.c:98";
	/* <S1>:1:1 */
	this.urlHashMap["trafficstateflow:2:1:1"] = "trafficstateflow.c:58,61,76,79,138";
	/* <S1>:7:1 */
	this.urlHashMap["trafficstateflow:2:7:1"] = "trafficstateflow.c:67,68";
	/* <S1>:4:1 */
	this.urlHashMap["trafficstateflow:2:4:1"] = "trafficstateflow.c:82,104,107";
	/* <S1>:4:3 */
	this.urlHashMap["trafficstateflow:2:4:3"] = "trafficstateflow.c:85";
	/* <S1>:4:4 */
	this.urlHashMap["trafficstateflow:2:4:4"] = "trafficstateflow.c:88";
	/* <S1>:6:1 */
	this.urlHashMap["trafficstateflow:2:6:1"] = "trafficstateflow.c:95,96";
	/* <S1>:3:1 */
	this.urlHashMap["trafficstateflow:2:3:1"] = "trafficstateflow.c:110,132,135";
	/* <S1>:3:3 */
	this.urlHashMap["trafficstateflow:2:3:3"] = "trafficstateflow.c:113";
	/* <S1>:3:4 */
	this.urlHashMap["trafficstateflow:2:3:4"] = "trafficstateflow.c:116";
	/* <S1>:5:1 */
	this.urlHashMap["trafficstateflow:2:5:1"] = "trafficstateflow.c:123,124";
	/* <S1>:1:3 */
	this.urlHashMap["trafficstateflow:2:1:3"] = "trafficstateflow.c:141";
	/* <S1>:1:4 */
	this.urlHashMap["trafficstateflow:2:1:4"] = "trafficstateflow.c:144";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "trafficstateflow"};
	this.sidHashMap["trafficstateflow"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "trafficstateflow:2"};
	this.sidHashMap["trafficstateflow:2"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<Root>/Chart"] = {sid: "trafficstateflow:2"};
	this.sidHashMap["trafficstateflow:2"] = {rtwname: "<Root>/Chart"};
	this.rtwnameHashMap["<Root>/Lamp"] = {sid: "trafficstateflow:6"};
	this.sidHashMap["trafficstateflow:6"] = {rtwname: "<Root>/Lamp"};
	this.rtwnameHashMap["<Root>/Lamp1"] = {sid: "trafficstateflow:7"};
	this.sidHashMap["trafficstateflow:7"] = {rtwname: "<Root>/Lamp1"};
	this.rtwnameHashMap["<Root>/Lamp2"] = {sid: "trafficstateflow:8"};
	this.sidHashMap["trafficstateflow:8"] = {rtwname: "<Root>/Lamp2"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "trafficstateflow:3"};
	this.sidHashMap["trafficstateflow:3"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<Root>/Out2"] = {sid: "trafficstateflow:4"};
	this.sidHashMap["trafficstateflow:4"] = {rtwname: "<Root>/Out2"};
	this.rtwnameHashMap["<Root>/Out3"] = {sid: "trafficstateflow:5"};
	this.sidHashMap["trafficstateflow:5"] = {rtwname: "<Root>/Out3"};
	this.rtwnameHashMap["<S1>:4"] = {sid: "trafficstateflow:2:4"};
	this.sidHashMap["trafficstateflow:2:4"] = {rtwname: "<S1>:4"};
	this.rtwnameHashMap["<S1>:3"] = {sid: "trafficstateflow:2:3"};
	this.sidHashMap["trafficstateflow:2:3"] = {rtwname: "<S1>:3"};
	this.rtwnameHashMap["<S1>:1"] = {sid: "trafficstateflow:2:1"};
	this.sidHashMap["trafficstateflow:2:1"] = {rtwname: "<S1>:1"};
	this.rtwnameHashMap["<S1>:5"] = {sid: "trafficstateflow:2:5"};
	this.sidHashMap["trafficstateflow:2:5"] = {rtwname: "<S1>:5"};
	this.rtwnameHashMap["<S1>:2"] = {sid: "trafficstateflow:2:2"};
	this.sidHashMap["trafficstateflow:2:2"] = {rtwname: "<S1>:2"};
	this.rtwnameHashMap["<S1>:7"] = {sid: "trafficstateflow:2:7"};
	this.sidHashMap["trafficstateflow:2:7"] = {rtwname: "<S1>:7"};
	this.rtwnameHashMap["<S1>:6"] = {sid: "trafficstateflow:2:6"};
	this.sidHashMap["trafficstateflow:2:6"] = {rtwname: "<S1>:6"};
	this.rtwnameHashMap["<S1>:1:1"] = {sid: "trafficstateflow:2:1:1"};
	this.sidHashMap["trafficstateflow:2:1:1"] = {rtwname: "<S1>:1:1"};
	this.rtwnameHashMap["<S1>:7:1"] = {sid: "trafficstateflow:2:7:1"};
	this.sidHashMap["trafficstateflow:2:7:1"] = {rtwname: "<S1>:7:1"};
	this.rtwnameHashMap["<S1>:4:1"] = {sid: "trafficstateflow:2:4:1"};
	this.sidHashMap["trafficstateflow:2:4:1"] = {rtwname: "<S1>:4:1"};
	this.rtwnameHashMap["<S1>:4:3"] = {sid: "trafficstateflow:2:4:3"};
	this.sidHashMap["trafficstateflow:2:4:3"] = {rtwname: "<S1>:4:3"};
	this.rtwnameHashMap["<S1>:4:4"] = {sid: "trafficstateflow:2:4:4"};
	this.sidHashMap["trafficstateflow:2:4:4"] = {rtwname: "<S1>:4:4"};
	this.rtwnameHashMap["<S1>:6:1"] = {sid: "trafficstateflow:2:6:1"};
	this.sidHashMap["trafficstateflow:2:6:1"] = {rtwname: "<S1>:6:1"};
	this.rtwnameHashMap["<S1>:3:1"] = {sid: "trafficstateflow:2:3:1"};
	this.sidHashMap["trafficstateflow:2:3:1"] = {rtwname: "<S1>:3:1"};
	this.rtwnameHashMap["<S1>:3:3"] = {sid: "trafficstateflow:2:3:3"};
	this.sidHashMap["trafficstateflow:2:3:3"] = {rtwname: "<S1>:3:3"};
	this.rtwnameHashMap["<S1>:3:4"] = {sid: "trafficstateflow:2:3:4"};
	this.sidHashMap["trafficstateflow:2:3:4"] = {rtwname: "<S1>:3:4"};
	this.rtwnameHashMap["<S1>:5:1"] = {sid: "trafficstateflow:2:5:1"};
	this.sidHashMap["trafficstateflow:2:5:1"] = {rtwname: "<S1>:5:1"};
	this.rtwnameHashMap["<S1>:1:3"] = {sid: "trafficstateflow:2:1:3"};
	this.sidHashMap["trafficstateflow:2:1:3"] = {rtwname: "<S1>:1:3"};
	this.rtwnameHashMap["<S1>:1:4"] = {sid: "trafficstateflow:2:1:4"};
	this.sidHashMap["trafficstateflow:2:1:4"] = {rtwname: "<S1>:1:4"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
