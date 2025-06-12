package com.sportsresort.reservation.controller;

import com.sportsresort.reservation.entity.Creneau;
import com.sportsresort.reservation.service.CreneauService;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/creneaux")
@RequiredArgsConstructor
public class CreneauController {

    private final CreneauService creneauService;

    @GetMapping
    public List<Creneau> getAllCreneaux() {
        return creneauService.getAllCreneaux();
    }

    @GetMapping("/date")
    public List<Creneau> getCreneauxByDate(
            @RequestParam("date") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date) {
        return creneauService.getCreneauxByDate(date);
    }
}
