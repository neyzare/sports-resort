package com.sportsresort.reservation.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.sportsresort.reservation.entity.Sport;

public interface SportRepository extends JpaRepository<Sport, Long> {
  Optional<Sport> findByName(String name);
  boolean existsByName(String name);
}
