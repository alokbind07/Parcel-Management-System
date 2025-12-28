package com.tcs.parcel.Dao;


import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.tcs.parcel.model.*;
import com.tcs.parcel.util.*;

public class BookingDAO {
	
	
	public boolean registerBooking(Booking booking) {
        boolean status = false;
        try {
            Connection cn = DBUtil.getConnect();
            PreparedStatement ps = cn.prepareStatement("INSERT INTO Booking values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? ,?, ?, ?)");
            ps.setString(1, booking.getUser_ID());
            ps.setString(2, booking.getUser_Name());
            ps.setString(3, booking.getUser_Address());
            ps.setString(4, booking.getRec_Name());
            ps.setString(5, booking.getRec_Address());
            ps.setString(6, booking.getRec_Pin());
            ps.setString(7, booking.getRec_Mobile());
            ps.setInt(8, booking.getPar_Weight_Gram());
            ps.setString(9, booking.getPar_Contents_Description());
            ps.setString(10, booking.getPar_Delivery_Type());
            ps.setString(11, booking.getPar_Packing_Preference());
            ps.setString(12, booking.getPar_PickupTime());
            ps.setString(13, booking.getPar_DropoffTime());
            ps.setInt(14, booking.getPar_ServiceCost());
            ps.setString(15, booking.getPar_PaymentTime());
            ps.setInt(16, booking.getBooking_ID());
            ps.setString(17, booking.getPar_Status());
            int rowsAffected = ps.executeUpdate();
            status = rowsAffected > 0;
            DBUtil.closeAll(cn, ps, null);
            
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return status;
    }

	public Booking searchBooking(int booking_ID) {
		Booking b = null;
		try {
			Connection cn = DBUtil.getConnect();
			PreparedStatement ps = cn.prepareStatement("SELECT * FROM Booking WHERE booking_ID = ?");
			ps.setInt(1, booking_ID);
			ResultSet rs = ps.executeQuery();
			while(rs.next()) {
				b = new Booking(rs.getString("User_ID"),rs.getString("User_Name"),rs.getString("User_Address"),rs.getString("Rec_Name"),rs.getString("Rec_Address"),rs.getString("Rec_Pin"),rs.getString("Rec_Mobile"),rs.getInt("Par_Weight_Gram"),rs.getString("Par_Contents_Description"),rs.getString("Par_Delivery_Type"),rs.getString("Par_Packing_Preference"),rs.getString("Par_PickupTime"),rs.getString("Par_DropoffTime"),rs.getInt("Par_ServiceCost"),rs.getString("Par_PaymentTime"),rs.getInt("Booking_ID"),rs.getString("Par_Status"));
			}
			DBUtil.closeAll(cn, ps, null);
		}catch(SQLException e){
			e.printStackTrace();
		}
		return b;
	}

	public ArrayList<Booking> previousBooking(String User_ID) {
		ArrayList<Booking> b = new ArrayList<>();
		try {
			Connection cn = DBUtil.getConnect();
			PreparedStatement ps = cn.prepareStatement("Select * from Booking where User_ID=? ORDER BY Par_PaymentTime DESC");
			ps.setString(1, User_ID);
			ResultSet rs = ps.executeQuery();
			while(rs.next()) {
				b.add(new Booking(rs.getString("User_ID"),rs.getString("User_Name"),rs.getString("User_Address"),rs.getString("Rec_Name"),rs.getString("Rec_Address"),rs.getString("Rec_Pin"),rs.getString("Rec_Mobile"),rs.getInt("Par_Weight_Gram"),rs.getString("Par_Contents_Description"),rs.getString("Par_Delivery_Type"),rs.getString("Par_Packing_Preference"),rs.getString("Par_PickupTime"),rs.getString("Par_DropoffTime"),rs.getInt("Par_ServiceCost"),rs.getString("Par_PaymentTime"),rs.getInt("Booking_ID"),rs.getString("Par_Status")));
			}
			DBUtil.closeAll(cn, ps, null);
		}catch(SQLException e){
			e.printStackTrace();
		}
		return b;
	}

	public ArrayList<Booking> previousAdminBooking() {
		ArrayList<Booking> b = new ArrayList<>();
		try {
			Connection cn = DBUtil.getConnect();
			PreparedStatement ps = cn.prepareStatement("Select * from Booking ORDER BY Par_PaymentTime DESC");
			
			ResultSet rs = ps.executeQuery();
			while(rs.next()) {
				b.add(new Booking(rs.getString("User_ID"),rs.getString("User_Name"),rs.getString("User_Address"),rs.getString("Rec_Name"),rs.getString("Rec_Address"),rs.getString("Rec_Pin"),rs.getString("Rec_Mobile"),rs.getInt("Par_Weight_Gram"),rs.getString("Par_Contents_Description"),rs.getString("Par_Delivery_Type"),rs.getString("Par_Packing_Preference"),rs.getString("Par_PickupTime"),rs.getString("Par_DropoffTime"),rs.getInt("Par_ServiceCost"),rs.getString("Par_PaymentTime"),rs.getInt("Booking_ID"),rs.getString("Par_Status")));
			}
			DBUtil.closeAll(cn, ps, null);
		}catch(SQLException e){
			e.printStackTrace();
		}
		return b;
	}

	public boolean updatebookingAdmin(int Booking_ID, String par_Status) {
		boolean ans = false;
		try {
			Connection cn = DBUtil.getConnect();
			PreparedStatement ps = cn.prepareStatement("Update booking Set par_Status=? WHERE Booking_ID = ?");
			ps.setString(1, par_Status);
			ps.setInt(2, Booking_ID);
			
			int result = ps.executeUpdate();
			
			if(result > 0) {
				ans = true;
			}
			
			DBUtil.closeAll(cn, ps, null);
		}catch(SQLException e){
			e.printStackTrace();
		}
		return ans;
	}

	public boolean schedulingbookingAdmin(int booking_ID, String par_PickupTime, String par_DropoffTime) {
		boolean ans = false;
		try {
			Connection cn = DBUtil.getConnect();
			PreparedStatement ps = cn.prepareStatement("Update booking Set par_PickupTime=?,par_DropoffTime =? WHERE booking_ID = ?");
			ps.setString(1, par_PickupTime);
			ps.setString(2, par_DropoffTime);
			ps.setInt(3, booking_ID);
			
			int result = ps.executeUpdate();
			
			if(result > 0) {
				ans = true;
			}
			
			DBUtil.closeAll(cn, ps, null);
		}catch(SQLException e){
			e.printStackTrace();
		}
		return ans;
	}

}
