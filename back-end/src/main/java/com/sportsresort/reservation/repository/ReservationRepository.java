package com.sportsresort.reservation.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sportsresort.reservation.entity.Reservation;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    List<Reservation> findByUserId(Long userId);
}
