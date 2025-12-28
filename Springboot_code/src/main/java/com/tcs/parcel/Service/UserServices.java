package com.tcs.parcel.Service;

import com.tcs.parcel.model.*;
import com.tcs.parcel.Dao.*;

public class UserServices {

	public boolean register(User user,String userID) throws UserIdAlreadyExist {
		UserDao dao = new UserDao();
		return dao.register(user,userID);
	}

	public User loginUser(String userID, String password) {
		UserDao dao = new UserDao();
		return dao.loginUser(userID,password);
	}

}