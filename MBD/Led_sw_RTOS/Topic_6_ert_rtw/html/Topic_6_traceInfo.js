function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/In1 */
	this.urlHashMap["Topic_6:3"] = "Topic_6.c:35&Topic_6.h:37";
	/* <Root>/CheckSwitchStatus */
	this.urlHashMap["Topic_6:1"] = "Topic_6.c:34,57";
	/* <Root>/LedState */
	this.urlHashMap["Topic_6:2"] = "Topic_6.c:59,83";
	/* <Root>/Out1 */
	this.urlHashMap["Topic_6:4"] = "Topic_6.c:69,77&Topic_6.h:42";
	/* <S1>:1 */
	this.urlHashMap["Topic_6:1:1"] = "Topic_6.c:40";
	/* <S1>:2 */
	this.urlHashMap["Topic_6:1:2"] = "Topic_6.c:45";
	/* <S1>:3 */
	this.urlHashMap["Topic_6:1:3"] = "Topic_6.c:52";
	/* <S1>:4 */
	this.urlHashMap["Topic_6:1:4"] = "Topic_6.c:46";
	/* <S1>:5 */
	this.urlHashMap["Topic_6:1:5"] = "Topic_6.c:50";
	/* <S1>:6 */
	this.urlHashMap["Topic_6:1:6"] = "Topic_6.c:60";
	/* <S1>:2:1 */
	this.urlHashMap["Topic_6:1:2:1"] = "Topic_6.c:42,43";
	/* <S1>:4:1 */
	this.urlHashMap["Topic_6:1:4:1"] = "Topic_6.c:47";
	/* <S1>:3:1 */
	this.urlHashMap["Topic_6:1:3:1"] = "Topic_6.c:53";
	/* <S2>:1 */
	this.urlHashMap["Topic_6:2:1"] = "Topic_6.c:64";
	/* <S2>:2 */
	this.urlHashMap["Topic_6:2:2"] = "Topic_6.c:70";
	/* <S2>:3 */
	this.urlHashMap["Topic_6:2:3"] = "Topic_6.c:78";
	/* <S2>:4 */
	this.urlHashMap["Topic_6:2:4"] = "Topic_6.c:71";
	/* <S2>:5 */
	this.urlHashMap["Topic_6:2:5"] = "Topic_6.c:75";
	/* <S2>:6 */
	this.urlHashMap["Topic_6:2:6"] = "Topic_6.c:84";
	/* <S2>:2:1 */
	this.urlHashMap["Topic_6:2:2:1"] = "Topic_6.c:66,67";
	/* <S2>:4:1 */
	this.urlHashMap["Topic_6:2:4:1"] = "Topic_6.c:72";
	/* <S2>:3:1 */
	this.urlHashMap["Topic_6:2:3:1"] = "Topic_6.c:79";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "Topic_6"};
	this.sidHashMap["Topic_6"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "Topic_6:1"};
	this.sidHashMap["Topic_6:1"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<S2>"] = {sid: "Topic_6:2"};
	this.sidHashMap["Topic_6:2"] = {rtwname: "<S2>"};
	this.rtwnameHashMap["<Root>/In1"] = {sid: "Topic_6:3"};
	this.sidHashMap["Topic_6:3"] = {rtwname: "<Root>/In1"};
	this.rtwnameHashMap["<Root>/CheckSwitchStatus"] = {sid: "Topic_6:1"};
	this.sidHashMap["Topic_6:1"] = {rtwname: "<Root>/CheckSwitchStatus"};
	this.rtwnameHashMap["<Root>/LedState"] = {sid: "Topic_6:2"};
	this.sidHashMap["Topic_6:2"] = {rtwname: "<Root>/LedState"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "Topic_6:4"};
	this.sidHashMap["Topic_6:4"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<S1>:1"] = {sid: "Topic_6:1:1"};
	this.sidHashMap["Topic_6:1:1"] = {rtwname: "<S1>:1"};
	this.rtwnameHashMap["<S1>:2"] = {sid: "Topic_6:1:2"};
	this.sidHashMap["Topic_6:1:2"] = {rtwname: "<S1>:2"};
	this.rtwnameHashMap["<S1>:3"] = {sid: "Topic_6:1:3"};
	this.sidHashMap["Topic_6:1:3"] = {rtwname: "<S1>:3"};
	this.rtwnameHashMap["<S1>:4"] = {sid: "Topic_6:1:4"};
	this.sidHashMap["Topic_6:1:4"] = {rtwname: "<S1>:4"};
	this.rtwnameHashMap["<S1>:5"] = {sid: "Topic_6:1:5"};
	this.sidHashMap["Topic_6:1:5"] = {rtwname: "<S1>:5"};
	this.rtwnameHashMap["<S1>:6"] = {sid: "Topic_6:1:6"};
	this.sidHashMap["Topic_6:1:6"] = {rtwname: "<S1>:6"};
	this.rtwnameHashMap["<S1>:2:1"] = {sid: "Topic_6:1:2:1"};
	this.sidHashMap["Topic_6:1:2:1"] = {rtwname: "<S1>:2:1"};
	this.rtwnameHashMap["<S1>:4:1"] = {sid: "Topic_6:1:4:1"};
	this.sidHashMap["Topic_6:1:4:1"] = {rtwname: "<S1>:4:1"};
	this.rtwnameHashMap["<S1>:3:1"] = {sid: "Topic_6:1:3:1"};
	this.sidHashMap["Topic_6:1:3:1"] = {rtwname: "<S1>:3:1"};
	this.rtwnameHashMap["<S2>:1"] = {sid: "Topic_6:2:1"};
	this.sidHashMap["Topic_6:2:1"] = {rtwname: "<S2>:1"};
	this.rtwnameHashMap["<S2>:2"] = {sid: "Topic_6:2:2"};
	this.sidHashMap["Topic_6:2:2"] = {rtwname: "<S2>:2"};
	this.rtwnameHashMap["<S2>:3"] = {sid: "Topic_6:2:3"};
	this.sidHashMap["Topic_6:2:3"] = {rtwname: "<S2>:3"};
	this.rtwnameHashMap["<S2>:4"] = {sid: "Topic_6:2:4"};
	this.sidHashMap["Topic_6:2:4"] = {rtwname: "<S2>:4"};
	this.rtwnameHashMap["<S2>:5"] = {sid: "Topic_6:2:5"};
	this.sidHashMap["Topic_6:2:5"] = {rtwname: "<S2>:5"};
	this.rtwnameHashMap["<S2>:6"] = {sid: "Topic_6:2:6"};
	this.sidHashMap["Topic_6:2:6"] = {rtwname: "<S2>:6"};
	this.rtwnameHashMap["<S2>:2:1"] = {sid: "Topic_6:2:2:1"};
	this.sidHashMap["Topic_6:2:2:1"] = {rtwname: "<S2>:2:1"};
	this.rtwnameHashMap["<S2>:4:1"] = {sid: "Topic_6:2:4:1"};
	this.sidHashMap["Topic_6:2:4:1"] = {rtwname: "<S2>:4:1"};
	this.rtwnameHashMap["<S2>:3:1"] = {sid: "Topic_6:2:3:1"};
	this.sidHashMap["Topic_6:2:3:1"] = {rtwname: "<S2>:3:1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
