# 📦 Parcel Management System (PMS)

## 📖 Project Overview
The **Parcel Management System (PMS)** is a web-based application designed to manage parcel booking, tracking, invoicing, and delivery operations. The system supports two types of users: **Customer** and **Officer**, each having role-specific functionalities. PMS provides an end-to-end solution starting from user registration to parcel delivery status updates.

---

## 👥 User Roles
- **Customer**
- **Officer**

Each role has access to different menus and operations based on authorization.

---

## ✨ Features

### 🔐 Authentication & User Management
- Customer Registration
- Login using Username and Password
- Role-based dashboards (Customer / Officer)
- Secure Logout

---

### 🏠 Home Pages
- **Customer Home**: Displays menus relevant to customer role
- **Officer Home**: Displays menus relevant to officer role

---

### 📦 Booking Services

#### Customer Booking
Customers can book a parcel by providing:
- Receiver Name
- Receiver Address
- Receiver PIN
- Receiver Mobile
- Parcel Weight (grams)
- Parcel Contents Description
- Delivery Type
- Packing Preference
- Pickup Time
- Drop-off Time  

System-calculated fields:
- Parcel Service Cost
- Payment Time (System date & time)

---

#### Officer Booking
Officers can also book parcels on behalf of customers with proper input validations and status messages.

---

### 🧾 Invoice Generation
- Generate invoice using **Booking ID**
- Invoice displays:
  - Booking ID
  - Sender & Receiver details
  - Parcel details
  - Delivery & packing preferences
  - Pickup & Drop timings
  - Service cost
  - Payment time

---

### 🚚 Tracking Status

#### Customer Tracking
- Track parcel using Booking ID
- View booking details and current parcel status

#### Officer Tracking
- Track any parcel using Booking ID
- View complete parcel and customer information

---

### ⏱ Pickup & Drop Scheduling (Officer)
- Update Pickup Time and Drop Time
- View booking and parcel details before updating

---

### 📬 Delivery Status Update (Officer)
Officers can update delivery status as:
- Booked
- In Transit
- Delivered
- Returned  

Proper validation and confirmation messages are shown.

---

### 📜 Booking History

#### Customer Booking History
- View personal booking history
- Displayed in **descending order of booking date**
- Includes:
  - Booking ID
  - Booking Date
  - Receiver Name
  - Delivered Address
  - Amount
  - Status

#### Officer Booking History
- View all bookings
- Search by Booking ID or Booking Date
- Results shown in descending order of booking date

---

## 🛠️ Technologies Used
- **Frontend**: Angular
- **Backend**: Java Spring Boot
- **Database**: Apache Derby
- **Architecture**: RESTful MVC Architecture
- **Authentication**: Role-Based Access Control

---

## 🚀 How to Run the Project

### Backend (Spring Boot)
1. Clone the repository  
   ```bash
   git clone <repository-url>
2. Import backend project into IDE (IntelliJ / Eclipse)  
3. Configure Derby database  
4. Run Spring Boot application  

### Frontend (Angular)  
1. Navigate to Angular project folder  
2. Install dependencies
   npm install
3. Run Angular application  
   ng serve  

Access application at  
http://localhost:4200  

### 📌 Conclusion  
The Parcel Management System provides a complete solution for managing parcel operations with role-based access, real-time tracking, invoice generation, and delivery management using Angular, Spring Boot, and Derby database.  

### 📄 License  
This project is developed for educational and training purposes.

