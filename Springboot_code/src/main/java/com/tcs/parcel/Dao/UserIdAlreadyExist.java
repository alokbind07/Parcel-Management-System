package com.tcs.parcel.Dao;


public class UserIdAlreadyExist extends Exception{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public UserIdAlreadyExist(String message) {
		super(message);
	}
}
