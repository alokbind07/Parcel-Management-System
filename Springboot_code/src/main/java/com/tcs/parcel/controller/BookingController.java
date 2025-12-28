package com.tcs.parcel.controller;

import com.tcs.parcel.model.Booking;
import com.tcs.parcel.Service.BookingService;
import com.google.gson.Gson;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@CrossOrigin("http://localhost:4200")
@RestController
public class BookingController {

    /**
     * Retrieves a list of all bookings for admin.
     */
    @RequestMapping("/admin/bookings")
    public String getAdminBookings() {
        BookingService bookingService = new BookingService();
        ArrayList<Booking> bookings = bookingService.previousAdminBooking();
        Gson gson = new Gson();
        String response = gson.toJson(bookings);
        System.out.println(response);
        return response;
    }

    /**
     * Retrieves previous bookings for a specific user.
     */
    @RequestMapping(value = "/user/bookings/{userId}", method = RequestMethod.GET)
    public String getUserBookings(@PathVariable String userId) {
        BookingService bookingService = new BookingService();
        ArrayList<Booking> bookings = bookingService.previousBooking(userId);
        if(bookings.isEmpty()) {
        	bookings = null;
        }
        Gson gson = new Gson();
        String response = gson.toJson(bookings);
        System.out.println(response);
        return response;
    }

    /**
     * Searches for a booking by its ID.
     */
    @RequestMapping(value = "/bookings/search/{bookingId}", method = RequestMethod.GET)
    public String searchBooking(@PathVariable int bookingId) {
        BookingService bookingService = new BookingService();
        Booking booking = bookingService.searchBooking(bookingId);
        Gson gson = new Gson();
        String response = gson.toJson(booking);
        System.out.println(response);
        return response;
    }

    /**
     * Registers a new booking.
     */
    @RequestMapping(value = "/bookings/register", method = RequestMethod.POST)
    public String registerBooking(@RequestBody Booking booking) {
        System.out.println("Registering a new booking");
        BookingService bookingService = new BookingService();
        boolean result = bookingService.registerBooking(booking);
        String responseMessage = result ? "Booking registered successfully" : "Failed to register booking";
        Gson gson = new Gson();
        String response = gson.toJson(responseMessage);
        System.out.println(response);
        return response;
    }

    /**
     * Updates the status of a booking.
     */
    @RequestMapping(value = "/bookings/update-status", method = RequestMethod.POST)
    public String updateBookingStatus(@RequestParam int bookingId, @RequestParam String parStatus) {
        System.out.println("Updating booking status");
        BookingService bookingService = new BookingService();
        boolean result = bookingService.updatebookingAdmin(bookingId, parStatus);
        String responseMessage = result ? "Booking status updated successfully" : "Failed to update booking status";
        Gson gson = new Gson();
        String response = gson.toJson(responseMessage);
        System.out.println(response);
        return response;
    }

    /**
     * Schedules a booking with pickup and dropoff times.
     */
    @RequestMapping(value = "/bookings/schedule", method = RequestMethod.POST)
    public String scheduleBooking(@RequestParam int bookingId, @RequestParam String pickupTime, @RequestParam String dropoffTime) {
        System.out.println("Scheduling booking");
        BookingService bookingService = new BookingService();
        boolean result = bookingService.schedulingbookingAdmin(bookingId, pickupTime, dropoffTime);
        String responseMessage = result ? "Booking scheduled successfully" : "Failed to schedule booking";
        Gson gson = new Gson();
        String response = gson.toJson(responseMessage);
        System.out.println(response);
        return response;
    }
}
