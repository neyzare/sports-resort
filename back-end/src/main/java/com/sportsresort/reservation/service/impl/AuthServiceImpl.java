package com.sportsresort.reservation.service.impl;

import com.sportsresort.reservation.dto.JwtResponse;
import com.sportsresort.reservation.dto.LoginRequest;
import com.sportsresort.reservation.dto.RegisterRequest;
import com.sportsresort.reservation.entity.Role;
import com.sportsresort.reservation.entity.User;
import com.sportsresort.reservation.repository.RoleRepository;
import com.sportsresort.reservation.repository.UserRepository;
import com.sportsresort.reservation.security.JwtUtil;
import com.sportsresort.reservation.service.AuthService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class AuthServiceImpl implements AuthService {

    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    @Override
    public JwtResponse login(LoginRequest request) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
            );
        } catch (BadCredentialsException e) {
            throw new RuntimeException("Email ou mot de passe incorrect");
        }

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));

        String token = generateJwtForUser(user);
        return new JwtResponse(token);
    }

    @Override
    public JwtResponse register(RegisterRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email déjà utilisé");
        }

        Role userRole = roleRepository.findByName("USER")
                .orElseThrow(() -> new RuntimeException("Role USER non trouvé en base"));

        User user = User.builder()
                .firstname(request.getFirstname())
                .lastname(request.getLastname())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .roles(Collections.singleton(userRole))
                .dateofbirth(request.getDateofbirth())
                .country(request.getCountry())
                .city(request.getCity())
                .zipcode(request.getZipcode())
                .phonenumber(request.getPhonenumber())
                .build();

        userRepository.save(user);

        String token = generateJwtForUser(user);
        return new JwtResponse(token);
    }

    private String generateJwtForUser(User user) {
        Set<String> roles = user.getRoles().stream()
                .map(Role::getName)
                .collect(Collectors.toSet());

        return jwtUtil.generateToken(user.getEmail(), roles);
    }
}
