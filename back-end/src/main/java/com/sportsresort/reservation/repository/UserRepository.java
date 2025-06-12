package com.sportsresort.reservation.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.sportsresort.reservation.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    boolean existsByEmail(String email);

    @Query("SELECT u FROM User u JOIN u.roles r WHERE r.name = :roleName")
    List<User> findByRoleName(String roleName);

    @Query("SELECT u FROM User u JOIN u.roles r JOIN u.sports s WHERE r.name = 'COACH' AND s.id = :sportId")
    List<User> findCoachesBySportId(Long sportId);
}
