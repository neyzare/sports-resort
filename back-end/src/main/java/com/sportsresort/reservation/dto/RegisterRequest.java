package com.sportsresort.reservation.dto;

import lombok.Data;

@Data
public class RegisterRequest {
    private String firstname;
    private String lastname;
    private String email;
    private String address;
    private String password;
    private String dateofbirth;
    private String country;
    private String city;
    private String zipcode;
    private String phonenumber;
}
