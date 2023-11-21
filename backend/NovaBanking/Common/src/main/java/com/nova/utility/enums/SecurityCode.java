package com.nova.utility.enums;


public enum SecurityCode{
	AUTHORIZATIONERROR(200,SecurityLevel.ERROR,"Contact Team if problem still persists"),
	RUNTIMEERROR(201,SecurityLevel.ERROR,"Contact support team if problem still persists"),
	UNEXPECTEDERROR(203,SecurityLevel.ERROR,"Contact support team if problem still persists"),
	FORBIDDENACCESS(403,SecurityLevel.WARN,"Contact support team if you are a valid user"),
	INVALIDARGUMENTS(503,SecurityLevel.WARN,"Invalid Arguments sent Please send appropriate Data");
	
	SecurityCode(int code, SecurityLevel level, String Description) {
		this.code = code;
		this.level = level;
		this.Description = Description;
		
	}

	private final int code;
	private final SecurityLevel level;
	private final String Description;
	
	public int getCode() {
		return code;
	}
	public SecurityLevel getLevel() {
		return level;
	}
	public String getDescription() {
		return Description;
	}
	
	
    

}
