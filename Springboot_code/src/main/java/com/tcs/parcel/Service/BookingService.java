package com.tcs.parcel.Service;

import java.util.ArrayList;

import com.tcs.parcel.model.*;
import com.tcs.parcel.Dao.*;
public class BookingService {
	
	
	public boolean registerBooking(Booking booking){
		BookingDAO dao = new BookingDAO();
        return dao.registerBooking(booking);
    }

	public Booking searchBooking(int Booking_ID) {
		BookingDAO dao = new BookingDAO();
        return dao.searchBooking(Booking_ID);
	}

	public ArrayList<Booking> previousBooking(String User_ID) {
		BookingDAO dao = new BookingDAO();
        return dao.previousBooking(User_ID);
	}

	public ArrayList<Booking> previousAdminBooking() {
		BookingDAO dao = new BookingDAO();
        return dao.previousAdminBooking();
	}

	public boolean updatebookingAdmin(int Booking_ID, String par_Status) {
		BookingDAO dao = new BookingDAO();
        return dao.updatebookingAdmin(Booking_ID,par_Status);
	}

	public boolean schedulingbookingAdmin(int Booking_ID, String par_PickupTime, String par_DropoffTime) {
		BookingDAO dao = new BookingDAO();
        return dao.schedulingbookingAdmin(Booking_ID,par_PickupTime,par_DropoffTime);
	}
	

}
