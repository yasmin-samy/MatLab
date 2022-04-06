function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/In1 */
	this.urlHashMap["Grading_system:53"] = "Grading_system.c:35&Grading_system.h:37";
	/* <Root>/Constant2 */
	this.urlHashMap["Grading_system:26"] = "msg=rtwMsg_CodeGenerationReducedBlock&block=Grading_system:26";
	/* <Root>/Constant3 */
	this.urlHashMap["Grading_system:37"] = "msg=rtwMsg_CodeGenerationReducedBlock&block=Grading_system:37";
	/* <Root>/Constant4 */
	this.urlHashMap["Grading_system:47"] = "Grading_system.c:56";
	/* <Root>/Constant5 */
	this.urlHashMap["Grading_system:48"] = "Grading_system.c:67";
	/* <Root>/Constant6 */
	this.urlHashMap["Grading_system:49"] = "Grading_system.c:78";
	/* <Root>/If */
	this.urlHashMap["Grading_system:11"] = "Grading_system.c:34,48";
	/* <Root>/If Action
Subsystem */
	this.urlHashMap["Grading_system:12"] = "msg=rtwMsg_CodeGenerationReducedBlock&block=Grading_system:12";
	/* <Root>/If Action
Subsystem1 */
	this.urlHashMap["Grading_system:18"] = "Grading_system.c:40,45";
	/* <Root>/If Action
Subsystem2 */
	this.urlHashMap["Grading_system:28"] = "Grading_system.c:74,83";
	/* <Root>/If Action
Subsystem3 */
	this.urlHashMap["Grading_system:32"] = "msg=rtwMsg_CodeGenerationReducedBlock&block=Grading_system:32";
	/* <Root>/If Action
Subsystem4 */
	this.urlHashMap["Grading_system:39"] = "Grading_system.c:52,61";
	/* <Root>/If Action
Subsystem5 */
	this.urlHashMap["Grading_system:43"] = "Grading_system.c:63,72";
	/* <Root>/If1 */
	this.urlHashMap["Grading_system:27"] = "Grading_system.c:50,86";
	/* <Root>/Merge */
	this.urlHashMap["Grading_system:55"] = "msg=rtwMsg_CodeGenerationReducedBlock&block=Grading_system:55";
	/* <Root>/Out1 */
	this.urlHashMap["Grading_system:54"] = "Grading_system.c:55,66,77&Grading_system.h:42";
	/* <S2>/In1 */
	this.urlHashMap["Grading_system:19"] = "Grading_system.c:36";
	/* <S2>/Action Port */
	this.urlHashMap["Grading_system:20"] = "Grading_system.c:41";
	/* <S3>/In1 */
	this.urlHashMap["Grading_system:29"] = "Grading_system.c:79";
	/* <S3>/Action Port */
	this.urlHashMap["Grading_system:30"] = "Grading_system.c:75";
	/* <S5>/In1 */
	this.urlHashMap["Grading_system:40"] = "Grading_system.c:57";
	/* <S5>/Action Port */
	this.urlHashMap["Grading_system:41"] = "Grading_system.c:53";
	/* <S6>/In1 */
	this.urlHashMap["Grading_system:44"] = "Grading_system.c:68";
	/* <S6>/Action Port */
	this.urlHashMap["Grading_system:45"] = "Grading_system.c:64";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "Grading_system"};
	this.sidHashMap["Grading_system"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "Grading_system:12"};
	this.sidHashMap["Grading_system:12"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<S2>"] = {sid: "Grading_system:18"};
	this.sidHashMap["Grading_system:18"] = {rtwname: "<S2>"};
	this.rtwnameHashMap["<S3>"] = {sid: "Grading_system:28"};
	this.sidHashMap["Grading_system:28"] = {rtwname: "<S3>"};
	this.rtwnameHashMap["<S4>"] = {sid: "Grading_system:32"};
	this.sidHashMap["Grading_system:32"] = {rtwname: "<S4>"};
	this.rtwnameHashMap["<S5>"] = {sid: "Grading_system:39"};
	this.sidHashMap["Grading_system:39"] = {rtwname: "<S5>"};
	this.rtwnameHashMap["<S6>"] = {sid: "Grading_system:43"};
	this.sidHashMap["Grading_system:43"] = {rtwname: "<S6>"};
	this.rtwnameHashMap["<Root>/In1"] = {sid: "Grading_system:53"};
	this.sidHashMap["Grading_system:53"] = {rtwname: "<Root>/In1"};
	this.rtwnameHashMap["<Root>/Constant2"] = {sid: "Grading_system:26"};
	this.sidHashMap["Grading_system:26"] = {rtwname: "<Root>/Constant2"};
	this.rtwnameHashMap["<Root>/Constant3"] = {sid: "Grading_system:37"};
	this.sidHashMap["Grading_system:37"] = {rtwname: "<Root>/Constant3"};
	this.rtwnameHashMap["<Root>/Constant4"] = {sid: "Grading_system:47"};
	this.sidHashMap["Grading_system:47"] = {rtwname: "<Root>/Constant4"};
	this.rtwnameHashMap["<Root>/Constant5"] = {sid: "Grading_system:48"};
	this.sidHashMap["Grading_system:48"] = {rtwname: "<Root>/Constant5"};
	this.rtwnameHashMap["<Root>/Constant6"] = {sid: "Grading_system:49"};
	this.sidHashMap["Grading_system:49"] = {rtwname: "<Root>/Constant6"};
	this.rtwnameHashMap["<Root>/If"] = {sid: "Grading_system:11"};
	this.sidHashMap["Grading_system:11"] = {rtwname: "<Root>/If"};
	this.rtwnameHashMap["<Root>/If Action Subsystem"] = {sid: "Grading_system:12"};
	this.sidHashMap["Grading_system:12"] = {rtwname: "<Root>/If Action Subsystem"};
	this.rtwnameHashMap["<Root>/If Action Subsystem1"] = {sid: "Grading_system:18"};
	this.sidHashMap["Grading_system:18"] = {rtwname: "<Root>/If Action Subsystem1"};
	this.rtwnameHashMap["<Root>/If Action Subsystem2"] = {sid: "Grading_system:28"};
	this.sidHashMap["Grading_system:28"] = {rtwname: "<Root>/If Action Subsystem2"};
	this.rtwnameHashMap["<Root>/If Action Subsystem3"] = {sid: "Grading_system:32"};
	this.sidHashMap["Grading_system:32"] = {rtwname: "<Root>/If Action Subsystem3"};
	this.rtwnameHashMap["<Root>/If Action Subsystem4"] = {sid: "Grading_system:39"};
	this.sidHashMap["Grading_system:39"] = {rtwname: "<Root>/If Action Subsystem4"};
	this.rtwnameHashMap["<Root>/If Action Subsystem5"] = {sid: "Grading_system:43"};
	this.sidHashMap["Grading_system:43"] = {rtwname: "<Root>/If Action Subsystem5"};
	this.rtwnameHashMap["<Root>/If1"] = {sid: "Grading_system:27"};
	this.sidHashMap["Grading_system:27"] = {rtwname: "<Root>/If1"};
	this.rtwnameHashMap["<Root>/Merge"] = {sid: "Grading_system:55"};
	this.sidHashMap["Grading_system:55"] = {rtwname: "<Root>/Merge"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "Grading_system:54"};
	this.sidHashMap["Grading_system:54"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<S1>/In1"] = {sid: "Grading_system:13"};
	this.sidHashMap["Grading_system:13"] = {rtwname: "<S1>/In1"};
	this.rtwnameHashMap["<S1>/Action Port"] = {sid: "Grading_system:14"};
	this.sidHashMap["Grading_system:14"] = {rtwname: "<S1>/Action Port"};
	this.rtwnameHashMap["<S1>/Out1"] = {sid: "Grading_system:15"};
	this.sidHashMap["Grading_system:15"] = {rtwname: "<S1>/Out1"};
	this.rtwnameHashMap["<S2>/In1"] = {sid: "Grading_system:19"};
	this.sidHashMap["Grading_system:19"] = {rtwname: "<S2>/In1"};
	this.rtwnameHashMap["<S2>/Action Port"] = {sid: "Grading_system:20"};
	this.sidHashMap["Grading_system:20"] = {rtwname: "<S2>/Action Port"};
	this.rtwnameHashMap["<S2>/Out1"] = {sid: "Grading_system:21"};
	this.sidHashMap["Grading_system:21"] = {rtwname: "<S2>/Out1"};
	this.rtwnameHashMap["<S3>/In1"] = {sid: "Grading_system:29"};
	this.sidHashMap["Grading_system:29"] = {rtwname: "<S3>/In1"};
	this.rtwnameHashMap["<S3>/Action Port"] = {sid: "Grading_system:30"};
	this.sidHashMap["Grading_system:30"] = {rtwname: "<S3>/Action Port"};
	this.rtwnameHashMap["<S3>/Out1"] = {sid: "Grading_system:31"};
	this.sidHashMap["Grading_system:31"] = {rtwname: "<S3>/Out1"};
	this.rtwnameHashMap["<S4>/In1"] = {sid: "Grading_system:33"};
	this.sidHashMap["Grading_system:33"] = {rtwname: "<S4>/In1"};
	this.rtwnameHashMap["<S4>/Action Port"] = {sid: "Grading_system:34"};
	this.sidHashMap["Grading_system:34"] = {rtwname: "<S4>/Action Port"};
	this.rtwnameHashMap["<S4>/Out1"] = {sid: "Grading_system:35"};
	this.sidHashMap["Grading_system:35"] = {rtwname: "<S4>/Out1"};
	this.rtwnameHashMap["<S5>/In1"] = {sid: "Grading_system:40"};
	this.sidHashMap["Grading_system:40"] = {rtwname: "<S5>/In1"};
	this.rtwnameHashMap["<S5>/Action Port"] = {sid: "Grading_system:41"};
	this.sidHashMap["Grading_system:41"] = {rtwname: "<S5>/Action Port"};
	this.rtwnameHashMap["<S5>/Out1"] = {sid: "Grading_system:42"};
	this.sidHashMap["Grading_system:42"] = {rtwname: "<S5>/Out1"};
	this.rtwnameHashMap["<S6>/In1"] = {sid: "Grading_system:44"};
	this.sidHashMap["Grading_system:44"] = {rtwname: "<S6>/In1"};
	this.rtwnameHashMap["<S6>/Action Port"] = {sid: "Grading_system:45"};
	this.sidHashMap["Grading_system:45"] = {rtwname: "<S6>/Action Port"};
	this.rtwnameHashMap["<S6>/Out1"] = {sid: "Grading_system:46"};
	this.sidHashMap["Grading_system:46"] = {rtwname: "<S6>/Out1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
