package com.tcs.parcel.Dao;


import java.sql.*;
import com.tcs.parcel.model.*;
import com.tcs.parcel.util.*;

public class UserDao {

	public boolean register(User user, String userID) throws UserIdAlreadyExist {
		   int ans = 0;
		   Connection cn = null;
		   PreparedStatement ps = null;
		   ResultSet rs = null;
		   try {
		      cn = DBUtil.getConnect();
		       // Check if userID already exists
		       ps = cn.prepareStatement("Select userID from Register where userID = ?");
		       ps.setString(1, user.getUserID());
		       rs = ps.executeQuery();
		       if (rs.next()) {
		          throw new UserIdAlreadyExist("userId already Exist.");
		       }
		       
		       // Insert new user into the Register table
		       ps = cn.prepareStatement("INSERT INTO Register (name, email, countrycode, mobNo, street, city, state, postal_code, userID, password, cPassword, role) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)");
		       ps.setString(1, user.getName());
		       ps.setString(2, user.getEmail());
		       ps.setString(3, user.getCountrycode());
		       ps.setString(4, user.getMobNo());
		       ps.setString(5, user.getStreet());
		       ps.setString(6, user.getCity());
		       ps.setString(7, user.getState());
		       ps.setString(8, user.getPostal_code());
		       ps.setString(9, user.getUserID());
		       ps.setString(10, user.getPassword());
		       ps.setString(11, user.getCPassword());
		       ps.setString(12, "customer");

		       ans = ps.executeUpdate();
		   } catch (SQLException e1) {
		       e1.printStackTrace();
		       throw new RuntimeException("Database error: " + e1.getMessage());
		   } finally {
		      DBUtil.closeAll(cn, ps, null);
		   }

		   return ans > 0;
		}

	public User loginUser(String userID, String password) {
		User ans = null;
		try {
			Connection cn = DBUtil.getConnect();
			PreparedStatement ps = cn.prepareStatement("Select * from Register where userID=? And password=?");
			ps.setString(1, userID);
			ps.setString(2, password);
				
			ResultSet rs = ps.executeQuery();
			while(rs.next()) {
				ans = new User(rs.getString("name"),rs.getString("email"),rs.getString("countrycode"),rs.getString("mobNo"),rs.getString("street"),rs.getString("city"),rs.getString("state"),rs.getString("postal_code"),rs.getString("userID"),rs.getString("password"),rs.getString("cPassword"),rs.getString("role"));
			}
			DBUtil.closeAll(cn, ps, null);
		}catch(SQLException e){
			e.printStackTrace();
		}
		return ans;
	}

}
