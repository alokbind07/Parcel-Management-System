package com.tcs.parcel.controller;

import com.tcs.parcel.model.User;
import com.tcs.parcel.Service.UserServices;
import com.google.gson.Gson;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:4200")
@RestController
public class UserController {

    /**
     * Handles user login.
     */
	@RequestMapping(value="/users/login", method=RequestMethod.POST)

	  public String loginUser(@RequestBody User user) {

	    System.out.println("Processing login request");

	    // Simulating a service to handle user authentication

	    UserServices service = new UserServices();

	    User authenticatedUser = service.loginUser(user.getUserID(), user.getPassword());

	    Gson gson = new Gson();

	    if (authenticatedUser != null) {

	      // If login is successful, return the authenticated user object (including the role)

	      String response = gson.toJson(authenticatedUser);

	      System.out.println(response);

	      return response;

	    } else {

	      // If credentials are invalid, return an error message

	      String responseMessage = "Invalid credentials";

	      System.out.println(responseMessage);

	      return gson.toJson(responseMessage);

	    }

	  }

    /**
     * Handles user registration.
     */
    @RequestMapping(value = "/users/register", method = RequestMethod.POST)
    public String registerUser(@RequestBody User user) {
        System.out.println("Processing registration request");
        UserServices service = new UserServices();
        String responseMessage;
        try {
            boolean isRegistered = service.register(user, null);
            responseMessage = isRegistered ? "Registration successful" : "User ID already exists";
        } catch (Exception e) {
            responseMessage = "An error occurred: " + e.getMessage();
        }
        Gson gson = new Gson();
        String response = gson.toJson(responseMessage);
        System.out.println(response);
        return response;
    }
}
