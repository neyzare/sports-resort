package com.sportsresort.reservation.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sportsresort.reservation.entity.Creneau;
import com.sportsresort.reservation.repository.CreneauRepository;
import lombok.RequiredArgsConstructor;

import java.time.LocalDate;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/api/creneaux")
@RequiredArgsConstructor
public class CreneauxController {

    private final CreneauRepository creneauRepository;

    @GetMapping
    public List<Creneau> getAllCreneaux() {
        return creneauRepository.findAll();
    }

    

    @GetMapping("/{date}/{court}")
    public List<Creneau> getCreneauxByDateAndCourt(
            @PathVariable
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date,
            @PathVariable int court) {

        return creneauRepository.findAllByDateAndCourt(date, court);
    }
}
