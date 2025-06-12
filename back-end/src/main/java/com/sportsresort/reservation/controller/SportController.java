package com.sportsresort.reservation.controller;

import com.sportsresort.reservation.entity.Sport;
import com.sportsresort.reservation.repository.SportRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/sports")
@RequiredArgsConstructor
public class SportController {

    private final SportRepository sportRepository;

    @GetMapping
    public List<Sport> getAllSports() {
        return sportRepository.findAll();
    }

    @GetMapping("/{id}")
    public Sport getSportById(@PathVariable Long id) {
        return sportRepository.findById(id).orElseThrow(() -> new RuntimeException("Sport non trouvé"));
    }
}
