package com.tcs.parcel;

	import static org.junit.Assert.assertFalse;
	import static org.junit.Assert.assertNotNull;
	import static org.junit.Assert.assertNull;
     import static org.junit.Assert.assertTrue;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

	import org.junit.Test;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.springframework.boot.test.context.SpringBootTest;

import com.tcs.parcel.Dao.BookingDAO;
	import com.tcs.parcel.Dao.UserDao;
	import com.tcs.parcel.Dao.UserIdAlreadyExist;
	import com.tcs.parcel.Service.BookingService;
	import com.tcs.parcel.Service.UserServices;
	import com.tcs.parcel.model.Booking;
	import com.tcs.parcel.model.User;
	//@SpringBootTest
	public class ParcelTesterJUnit {
		
		private BookingDAO bookingDAO;
		 

	    @BeforeAll
	    void setup() {
	        bookingDAO = new BookingDAO();
	        try (Connection conn = DriverManager.getConnection("jdbc:derby:C:\\Users\\2788145\\Downloads\\FinalProjectParcel\\parcel\\pDB;create=true"); Statement stmt = conn.createStatement()) {
	            // Setup test data
	            stmt.execute("INSERT INTO bookings (Booking_ID, User_ID, User_Name, Par_Status) VALUES (1078, '4002', 'Amal Krishnan', 'Confirmed')");
	        } catch (Exception e) {
	            e.printStackTrace();
	        }
	    }

	    @AfterAll
	    void cleanup() {
	        try (Connection conn = DriverManager.getConnection("jdbc:derby:C:/Users/dell/Downloads/FinalProjectParce"); Statement stmt = conn.createStatement()) {
	            stmt.execute("DELETE FROM bookings WHERE User_ID = '4002'");
	        } catch (Exception e) {
	            e.printStackTrace();
	        }
	    }
		@Test
		public void testRegisterBooking() {
			BookingDAO dao = new BookingDAO();
			BookingService service = new BookingService();
			Booking b = new Booking("4002", "Amal Krishnan", "Edapally, Kochi, Kerala", "Vimal", "Ernakulam", "675443", "8005432180", 2565, "Electronics", "Premium", "Box", "2024-12-05 09:00:00", "2024-12-05 15:00:00", 800, "2024-12-04 20:00:00", 1078, "Confirmed");
			boolean bk = service.registerBooking(b);
			assertTrue(bk);
		}
		
		@Test
		public void testRegisterBookingNegative() {
			BookingDAO dao = new BookingDAO();
			BookingService service = new BookingService();
			Booking b = new Booking("4002", "Amal Krishnan", "Edapally, Kochi, Kerala", "Vimal", "Ernakulam", "675043", "8005432180", 2568, "Electronics", "Premium", "Box", "2024-12-05 09:00:00", "2024-12-05 15:00:00", 800, "2024-12-04 20:00:00", 1078, "Confirmed");
			boolean bk = service.registerBooking(b);
			assertFalse(bk);
		}
		
		@Test
		public void testSearchBook() {
			BookingDAO dao = new BookingDAO();
			BookingService service = new BookingService();
			Booking search = service.searchBooking(1077);			
			assertNotNull(search);
		}
		
		@Test
		public void testSearchBookNegative() {
			BookingDAO dao = new BookingDAO();
			BookingService service = new BookingService();
			Booking search = service.searchBooking(1000);			
			assertNull(search);
		}
		@Test
		public void testGetBookingDetailOfCustomer() {
			BookingDAO dao = new BookingDAO();
			BookingService service = new BookingService();
			ArrayList<Booking> list = service.previousBooking("3457");			
     		assertTrue(list.size()>0);
		}
		
		@Test
		public void testGetBookingDetailOfCustomerNegative() {
			BookingDAO dao = new BookingDAO();
			BookingService service = new BookingService();
			ArrayList<Booking> list = service.previousBooking("8000");			
     		assertFalse(list.size()>0);
		}
		
		@Test
		public void testGetBookingDetailsOfAllCustomers() {
			BookingDAO dao = new BookingDAO();
			BookingService service = new BookingService();
			ArrayList<Booking> list = service.previousAdminBooking();			
     		assertTrue(list.size()>0);
		}
		
		@Test
		public void testGetBookingDetailsOfAllCustomersNegative() {
			BookingDAO dao = new BookingDAO();
			BookingService service = new BookingService();
			ArrayList<Booking> list = service.previousAdminBooking();			
     		assertFalse(list.size()>0);
		}
		
		@Test
		public void testUpdateDeliveryStatus() {
			BookingDAO dao = new BookingDAO();
			BookingService service = new BookingService();
			boolean update = service.updatebookingAdmin(1078, "In-Transit");
			assertTrue(update);
		}
		
		@Test
		public void testUpdateDeliveryStatusNegative() {
			BookingDAO dao = new BookingDAO();
			BookingService service = new BookingService();
			boolean update = service.updatebookingAdmin(5600, "In-Transit");
			assertFalse(update);
		}
		
		@Test
		public void testUpdatePickupAndDropTime() {
			BookingDAO dao = new BookingDAO();
			BookingService service = new BookingService();
			boolean updatee = service.schedulingbookingAdmin(1078, "2024-12-06 09:00:00", "2024-12-07 15:00:00");
			assertTrue(updatee);
		}
		
		@Test
		public void testUpdatePickupAndDropTimeNegative() {
			BookingDAO dao = new BookingDAO();
			BookingService service = new BookingService();
			boolean updatee = service.schedulingbookingAdmin(1078, "2024-12-06 09:00:00", "2024-12-07 15:00:00");
			assertFalse(updatee);
		}
		
		
		@Test
		public void testRegisterUser() {

			   UserDao userdao = new UserDao();

			   UserServices userservice = new UserServices();

			   User u = new User("Amal Krishnan", "amkr@gmail.com", "+91", "7876543213", "Edapally", "Kochi", "Kerala", "652221", "4002", "amkri", "amkri", "customer");

			   boolean bb;



			   try {

			       bb = userservice.register(u, "4002"); // Assuming "4002" already exists

			       assertTrue(bb); // You can assert true if the registration is successful

			   } catch (UserIdAlreadyExist e) {

			       // Handle the case where user ID already exists

			       e.printStackTrace();

			   }

			}
		
		@Test

		public void testRegisterUserNegative() {

		   UserDao userdao = new UserDao();

		   UserServices userservice = new UserServices();

		   User u = new User("Amal Krishnan", "amkr@gmail.com", "+91", "7876543213", "Edapally", "Kochi", "Kerala", "652221", "4002", "amkri", "amkri", "customer");

		   boolean bb;



		   try {

		       bb = userservice.register(u, "5000"); // Trying with a new user ID that shouldn't exist

		       assertFalse(bb); // Assert false as the registration should fail if the user ID already exists

		   } catch (UserIdAlreadyExist e) {

		       // Test expects this exception

		       e.printStackTrace();

		       assertTrue(true); // The test should pass as the exception is expected

		   }

		}


		
		
		@Test
		public void testLoginUser() {
			UserDao userdao=new UserDao();
			UserServices userservice=new UserServices();
			User user = userservice.loginUser("4002", "amkri");
			assertNotNull(user);
		}
		
		
		@Test
		public void testLoginUserNegative() {
			UserDao userdao=new UserDao();
			UserServices userservice=new UserServices();
			User user = userservice.loginUser("4572", "amkri");
			assertNull(user);
		}
}
