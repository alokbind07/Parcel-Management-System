package com.tcs.parcel;


import java.util.ArrayList;

import org.apache.log4j.Logger;

import com.tcs.parcel.Dao.BookingDAO;
import com.tcs.parcel.Dao.UserDao;
import com.tcs.parcel.Dao.UserIdAlreadyExist;
import com.tcs.parcel.Service.BookingService;
import com.tcs.parcel.Service.UserServices;
import com.tcs.parcel.model.Booking;
import com.tcs.parcel.model.User;

public class ParcelLogger {
	static Logger log = Logger.getLogger(ParcelLogger.class.getName());
	public static void main(String[] args) {
		BookingDAO dao = new BookingDAO();
		BookingService service = new BookingService();
		UserDao userdao=new UserDao();
		UserServices userservice=new UserServices();
		log.info("---------registerBooking()-----------");
		Booking b = new Booking("4002", "Amal Krishnan", "Edapally, Kochi, Kerala", "Vimal", "Ernakulam", "675443", "8005432180", 2565, "Electronics", "Premium", "Box", "2024-12-05 09:00:00", "2024-12-05 15:00:00", 800, "2024-12-04 20:00:00", 1078, "Confirmed");
		boolean c = service.registerBooking(b);
		if(c==true) {
			log.info("Registered successfully");
		} else {
			log.error("Registration failed");
		}
		
		log.info("--------searchBooking()-------------");
		Booking search = service.searchBooking(1077);
		if(search!= null) {
			log.info("Booking exists");
		} else {
			log.error("No such booking exist");
		}
		
		log.info("---------getPreviousBookingDetailsOfCustomer()---------");
		ArrayList<Booking> list = service.previousBooking("3457");
		if(list.size()>0) {
		for(Booking bk : list) {
			log.info(bk);
		}
		}
		else {
			log.error("No previous booking history exist");
		}
		
		log.info("---------getPreviousBookingDetailsOfallCustomersInAdminPage()---------");
		ArrayList<Booking> listt = service.previousAdminBooking();
		if(listt.size()>0) {
		for(Booking bk : listt) {
			log.info(bk);
		}
		}
		else {
			log.error("No previous booking history exist");
		}
		
		log.info("---------------updateDeliveryStatus()----------");
		boolean update = service.updatebookingAdmin(1078, "In-Transit");
		if(update==true) {
			log.info("Delivery status Updated successfully");
		} else {
			log.error("Delivery status Updation failed");
		}
		
		log.info("---------------updatePickupAndDroptime()----------");
		boolean updatee = service.schedulingbookingAdmin(1078, "2024-12-06 09:00:00", "2024-12-07 15:00:00");
		if(updatee==true) {
			log.info("PickupandDropTime Updated successfully");
		} else {
			log.error("PickupandDropTime Updation failed");
		}
		
		log.info("---------registerNewUser()-----------");
		User u = new User("Amal Krishnan", "amkr@gmail.com","+91", "7876543213", "Edapally", "Kochi", "Kerala", "652221", "4002", "amkri", "amkri", "customer");
		try {
			boolean bb = userservice.register(u,"4002");
			if(bb==true) {
				log.info("User Registered successfully");
			} else {
				log.error("User Registration failed");
			}
		} catch (UserIdAlreadyExist e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		log.info("---------LoginUser()-----------");
			User user = userservice.loginUser("4002", "amkri");
			if(user!=null) {
				log.info("Login successfully");
			} else {
				log.error("Login failed");
			}
		
//		log.info("---------getBookList()---------");
//		List<Library> llist = service.getBookList();
//		for(Library l : llist) {
//			log.info(l);
//		}
//		
//		log.info("--------searchBook()-------------");
//		Library search = service.searchBook("Book AJ");
//		if(search!= null) {
//			log.info("Book exists");
//		} else {
//			log.error("Book does not exist");
//		}
//		
//
//		log.info("---------registerBook()-----------");
//		Library r = new Library(1999, "Book OOOO", 3456.55, "available");
//		boolean b = service.registerBook(r);
//		if(b==true) {
//			log.info("Registered successfully");
//		} else {
//			log.error("Registration failed");
//		}
//		
//		log.info("---------------deleteBook()----------");
//		boolean delete = service.deleteBook(1262);
//		if(delete==true) {
//			log.info("Deleted successfully");
//		} else {
//			log.error("Deletion failed");
//		}
	}

}
