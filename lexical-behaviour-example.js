#type1
var eventTypes = {
	"floatingip.create.end":'Created'
}
checkFloatingEvent(event)

function checkFloatingEvent(event){
	var floatingip = event["payload"]["floatingip"]
	
	var timestamp = event["timestamp"]
	var fIPUserId = event["_context_user_id"]
	var fIPProjectId = event["_context_tenant_id"]
	var fIprequestId = event["_context_request_id"]
	var eventType = event["event_type"]

	var fIPAddr = floatingip["floating_ip_address"]
	var fIPStatus = floatingip["status"] 
	console.log(eventTypes)
	console.log(eventType)
	var action = eventTypes[eventType]
	console.log(action)
	console.log({timestamp,fIPUserId,fIPProjectId,fIprequestId,fIPAddr,fIPStatus,action})
}

#type2
checkFloatingEvent(event)
var eventTypes = {
	"floatingip.create.end":'Created'
}

function checkFloatingEvent(event){
	var floatingip = event["payload"]["floatingip"]
	
	var timestamp = event["timestamp"]
	var fIPUserId = event["_context_user_id"]
	var fIPProjectId = event["_context_tenant_id"]
	var fIprequestId = event["_context_request_id"]
	var eventType = event["event_type"]

	var fIPAddr = floatingip["floating_ip_address"]
	var fIPStatus = floatingip["status"] 
	console.log(eventTypes)
	console.log(eventType)
	var action = eventTypes[eventType]
	console.log(action)
	console.log({timestamp,fIPUserId,fIPProjectId,fIprequestId,fIPAddr,fIPStatus,action})
}
