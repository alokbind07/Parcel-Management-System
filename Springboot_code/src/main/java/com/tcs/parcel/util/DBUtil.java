package com.tcs.parcel.util;

import java.sql.*;
import java.sql.DriverManager;

public class DBUtil {
	public static Connection getConnect() {
		Connection con = null;
		try {
			// Register the driver
			Class.forName("org.apache.derby.jdbc.EmbeddedDriver");
			
			// Creating connection 
			con = DriverManager.getConnection("jdbc:derby:C:\\Users\\USER\\Downloads\\PMS\\PMS\\_Codebase\\Parcel Management System\\Springboot_code\\pDB;create=true");
		} catch (ClassNotFoundException | SQLException e) {
			e.printStackTrace();
		}
		return con;
	}
	
	// Method to close connection, prepared statement, and result set
	public static void closeAll(Connection con, PreparedStatement ps, ResultSet rs) {
		try {
			if (con != null) {
				con.close();
			}
			if (ps != null) {
				ps.close();
			}
			if (rs != null) {
				rs.close();
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	public static void main(String[] args) {
		try {
			Connection cn = DBUtil.getConnect();
			PreparedStatement ps = null;
			int result =0;
//			ps = cn.prepareStatement("CREATE TABLE Register(NAME VARCHAR(25),email VARCHAR(30),countrycode VARCHAR(5),mobNo VARCHAR(11),street VARCHAR(20),city VARCHAR(20),state VARCHAR(20),postal_code VARCHAR(10),userID VARCHAR(55),password VARCHAR(30),cPassword VARCHAR(30),role VARCHAR(30) DEFAULT 'customer', PRIMARY KEY(userID))");
//			result = ps.executeUpdate();
//			
//			ps = cn.prepareStatement("Insert into Register values('Admin','admin@gmail.com','+91','7766554433','Jamalpur','Khagaria','Bihar','851203','admin','@12345Kr','@12345Kr','admin')");
//		result = ps.executeUpdate();	
		
		String sql = "CREATE TABLE Booking (" +
				   "User_ID VARCHAR(55), " +
                "User_Name VARCHAR(40), " +
                "User_Address VARCHAR(255), " +
				   "Rec_Name VARCHAR(50), " +							
				   "Rec_Address VARCHAR(255), " +							
				   "Rec_Pin VARCHAR(10), " +							
				   "Rec_Mobile VARCHAR(15), " +						
				   "Par_Weight_Gram INT, " +							
				   "Par_Contents_Description VARCHAR(255), " +							
				   "Par_Delivery_Type VARCHAR(20), " +						
				   "Par_Packing_Preference VARCHAR(20), " +						
				   "Par_PickupTime VARCHAR(60), " +						
				   "Par_DropoffTime VARCHAR(60), " +						
				   "Par_ServiceCost INT, " +						
				   "Par_PaymentTime TIMESTAMP, " +							
				   "Booking_ID INT, " +							
				   "Par_Status VARCHAR(20)" +")";

					ps = cn.prepareStatement(sql);
					ps.executeUpdate();
								
		}catch(SQLException e){
			e.printStackTrace();
		}
	}
}

