package com.tcs.parcel.model;


public class User {
	private String name;
	private String email;
	private String countrycode;
	private String mobNo;
	private String street;
	private String city;
	private String state;
	private String postal_code;
	private String userID;
	private String password;
	private String cPassword;
	private String role;
	
	
	public User(String name, String email,String countrycode, String mobNo, String street, String city, String state, String postal_code, String userID, String password,
			String cPassword,String role) {
		super();
		this.name = name;
		this.email = email;
		this.countrycode =countrycode;
		this.mobNo = mobNo;
		this.street = street;
		this.city = city;
		this.state = state;
		this.postal_code = postal_code;
		this.userID = userID;
		this.password = password;
		this.cPassword = cPassword;
		this.role = role;
	}



	public User() {
		super();
		// TODO Auto-generated constructor stub
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}

	public String getCountrycode() {
		return countrycode;
	}


	public void setCountrycode(String countrycode) {
		this.countrycode = countrycode;
	}

	public String getMobNo() {
		return mobNo;
	}


	public void setMobNo(String mobNo) {
		this.mobNo = mobNo;
	}

	
	public String getStreet() {
		return street;
	}


	public void setStreet(String street) {
		this.street = street;
	}


	public String getCity() {
		return city;
	}


	public void setCity(String city) {
		this.city = city;
	}


	public String getState() {
		return state;
	}


	public void setState(String state) {
		this.state = state;
	}


	public String getPostal_code() {
		return postal_code;
	}


	public void setPostal_code(String postal_code) {
		this.postal_code = postal_code;
	}


	public String getUserID() {
		return userID;
	}


	public void setUserID(String userID) {
		this.userID = userID;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getCPassword() {
		return cPassword;
	}


	public void setCpassword(String cPassword) {
		this.cPassword = cPassword;
	}
	
	public String getRole() {
		return role;
	}


	public void setRole(String role) {
		this.role = role;
	}
}
