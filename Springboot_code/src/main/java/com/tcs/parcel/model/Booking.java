package com.tcs.parcel.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Booking {
	
	@JsonProperty("User_ID")
	private String User_ID;
	
	@JsonProperty("User_Name")
	private String User_Name;
	
	 @JsonProperty("User_Address")
	private String User_Address;
	 
	 @JsonProperty("Rec_Name") 
	private String Rec_Name;
	 
	 @JsonProperty("Rec_Address")
	private String Rec_Address;
	 
	    @JsonProperty("Rec_Pin")
	private String Rec_Pin;
	    
	    @JsonProperty("Rec_Mobile")
	private String Rec_Mobile;
	    
	    @JsonProperty("Par_Weight_Gram")
	private int Par_Weight_Gram;
	 
	    @JsonProperty("Par_Contents_Description")    
	private String Par_Contents_Description;
	    
	 @JsonProperty("Par_Delivery_Type")  
	private String Par_Delivery_Type;
	 
	 @JsonProperty("Par_Packing_Preference")
	private String Par_Packing_Preference;
	 
	 @JsonProperty("Par_PickupTime")
	private String Par_PickupTime;
	 
	 @JsonProperty("Par_DropoffTime")
	private String Par_DropoffTime;
	 
	 @JsonProperty("Par_ServiceCost")
	private int Par_ServiceCost;
	 
	 @JsonProperty("Par_PaymentTime")
	private String Par_PaymentTime;
	 
	 @JsonProperty("Booking_ID")
	private int Booking_ID;
	 @JsonProperty("Par_Status")
	private String Par_Status;
	
	public Booking(String user_ID, String user_Name, String user_Address, String rec_Name, String rec_Address,
			String rec_Pin, String rec_Mobile, int par_Weight_Gram, String par_Contents_Description,
			String par_Delivery_Type, String par_Packing_Preference, String par_PickupTime, String par_DropoffTime,
			int par_ServiceCost, String par_PaymentTime, int booking_ID, String par_Status) {
		super();
		User_ID = user_ID;
		User_Name = user_Name;
		User_Address = user_Address;
		Rec_Name = rec_Name;
		Rec_Address = rec_Address;
		Rec_Pin = rec_Pin;
		Rec_Mobile = rec_Mobile;
		Par_Weight_Gram = par_Weight_Gram;
		Par_Contents_Description = par_Contents_Description;
		Par_Delivery_Type = par_Delivery_Type;
		Par_Packing_Preference = par_Packing_Preference;
		Par_PickupTime = par_PickupTime;
		Par_DropoffTime = par_DropoffTime;
		Par_ServiceCost = par_ServiceCost;
		Par_PaymentTime = par_PaymentTime;
		Booking_ID = booking_ID;
		Par_Status = par_Status;
	}

	public String getUser_ID() {
		return User_ID;
	}

	public void setUser_ID(String user_ID) {
		User_ID = user_ID;
	}

	public String getUser_Name() {
		return User_Name;
	}

	public void setUser_Name(String user_Name) {
		User_Name = user_Name;
	}

	public String getUser_Address() {
		return User_Address;
	}

	public void setUser_Address(String user_Address) {
		User_Address = user_Address;
	}

	public String getRec_Name() {
		return Rec_Name;
	}

	public void setRec_Name(String rec_Name) {
		Rec_Name = rec_Name;
	}

	public String getRec_Address() {
		return Rec_Address;
	}

	public void setRec_Address(String rec_Address) {
		Rec_Address = rec_Address;
	}

	public String getRec_Pin() {
		return Rec_Pin;
	}

	public void setRec_Pin(String rec_Pin) {
		Rec_Pin = rec_Pin;
	}

	public String getRec_Mobile() {
		return Rec_Mobile;
	}

	public void setRec_Mobile(String rec_Mobile) {
		Rec_Mobile = rec_Mobile;
	}

	public int getPar_Weight_Gram() {
		return Par_Weight_Gram;
	}

	public void setPar_Weight_Gram(int par_Weight_Gram) {
		Par_Weight_Gram = par_Weight_Gram;
	}

	public String getPar_Contents_Description() {
		return Par_Contents_Description;
	}

	public void setPar_Contents_Description(String par_Contents_Description) {
		Par_Contents_Description = par_Contents_Description;
	}

	public String getPar_Delivery_Type() {
		return Par_Delivery_Type;
	}

	public void setPar_Delivery_Type(String par_Delivery_Type) {
		Par_Delivery_Type = par_Delivery_Type;
	}

	public String getPar_Packing_Preference() {
		return Par_Packing_Preference;
	}

	public void setPar_Packing_Preference(String par_Packing_Preference) {
		Par_Packing_Preference = par_Packing_Preference;
	}

	public String getPar_PickupTime() {
		return Par_PickupTime;
	}

	public void setPar_PickupTime(String par_PickupTime) {
		Par_PickupTime = par_PickupTime;
	}

	public String getPar_DropoffTime() {
		return Par_DropoffTime;
	}

	public void setPar_DropoffTime(String par_DropoffTime) {
		Par_DropoffTime = par_DropoffTime;
	}

	public int getPar_ServiceCost() {
		return Par_ServiceCost;
	}

	public void setPar_ServiceCost(int par_ServiceCost) {
		Par_ServiceCost = par_ServiceCost;
	}

	public String getPar_PaymentTime() {
		return Par_PaymentTime;
	}

	public void setPar_PaymentTime(String par_PaymentTime) {
		Par_PaymentTime = par_PaymentTime;
	}

	public int getBooking_ID() {
		return Booking_ID;
	}

	public void setBooking_ID(int booking_ID) {
		Booking_ID = booking_ID;
	}

	public String getPar_Status() {
		return Par_Status;
	}

	public void setPar_Status(String par_Status) {
		Par_Status = par_Status;
	}

	@Override
	public String toString() {
		return "Booking [User_ID=" + User_ID + ", User_Name=" + User_Name + ", User_Address=" + User_Address
				+ ", Rec_Name=" + Rec_Name + ", Rec_Address=" + Rec_Address + ", Rec_Pin=" + Rec_Pin + ", Rec_Mobile="
				+ Rec_Mobile + ", Par_Weight_Gram=" + Par_Weight_Gram + ", Par_Contents_Description="
				+ Par_Contents_Description + ", Par_Delivery_Type=" + Par_Delivery_Type + ", Par_Packing_Preference="
				+ Par_Packing_Preference + ", Par_PickupTime=" + Par_PickupTime + ", Par_DropoffTime=" + Par_DropoffTime
				+ ", Par_ServiceCost=" + Par_ServiceCost + ", Par_PaymentTime=" + Par_PaymentTime + ", Booking_ID="
				+ Booking_ID + ", Par_Status=" + Par_Status + "]";
	}

}
