package com.sportsresort.reservation.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sportsresort.reservation.entity.Creneau;

public interface CreneauRepository extends JpaRepository<Creneau, Long> {
    List<Creneau> findAllByDateAndCourt(LocalDate date, int court);
}
