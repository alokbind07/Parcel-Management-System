

INSERT INTO Register(NAME, email, mobNo, street, city, state, postal_code, userID, password, cPassword, role) 
VALUES 
('Rahul Verma', 'rv@gmail.com', '+919876543210', 'Sector 10', 'Gurgaon', 'Haryana', '122001', '2', 'rv', 'rv', 'customer'),
('Neha Sharma', 'ns@gmail.com', '+919812345678', 'Park Street', 'Kolkata', 'West Bengal', '700016', '3', 'ns', 'ns', 'customer'),
('Anjali Gupta', 'ag@gmail.com', '+918765432109', 'MG Road', 'Bangalore', 'Karnataka', '560001', '4', 'ag', 'ag', 'admin');


INSERT INTO Booking(User_ID, User_Name, User_Address, Rec_Name, Rec_Address, Rec_Pin, Rec_Mobile, Par_Weight_Gram, 
                    Par_Contents_Description, Par_Delivery_Type, Par_Packing_Preference, Par_PickupTime, Par_DropoffTime, 
                    Par_ServiceCost, Par_PaymentTime, Booking_ID, Par_Status) 
VALUES 
('1', 'Kumar Raja', 'Jamalpur, Khagaria, Bihar', 'Recipient A', 'Recipient Address A', '851204', '+917766554434', 500, 'Documents', 'Standard', 'Box', '2024-12-01 10:00:00', '2024-12-02 18:00:00', 200, '2024-12-01 09:00:00', 101, 'Confirmed'),
('2', 'Rahul Verma', 'Sector 10, Gurgaon, Haryana', 'Recipient B', 'Recipient Address B', '122002', '+919876543211', 1000, 'Parcel', 'Express', 'Envelope', '2024-12-03 08:00:00', '2024-12-03 12:00:00', 500, '2024-12-02 18:00:00', 102, 'In Progress'),
('3', 'Neha Sharma', 'Park Street, Kolkata, West Bengal', 'Recipient C', 'Recipient Address C', '700017', '+919812345679', 750, 'Gift Items', 'Standard', 'Box', '2024-12-04 14:00:00', '2024-12-05 10:00:00', 300, '2024-12-04 10:00:00', 103, 'Delivered'),
('4', 'Anjali Gupta', 'MG Road, Bangalore, Karnataka', 'Recipient D', 'Recipient Address D', '560002', '+918765432108', 250, 'Electronics', 'Premium', 'Box', '2024-12-05 09:00:00', '2024-12-05 15:00:00', 700, '2024-12-04 20:00:00', 104, 'Confirmed');


select * from Booking;