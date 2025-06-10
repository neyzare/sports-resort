package com.sportsresort.reservation.service;

import com.sportsresort.reservation.dto.LoginRequest;
import com.sportsresort.reservation.dto.RegisterRequest;
import com.sportsresort.reservation.dto.JwtResponse;

public interface AuthService {
    JwtResponse login(LoginRequest request);
    JwtResponse register(RegisterRequest request);
}
