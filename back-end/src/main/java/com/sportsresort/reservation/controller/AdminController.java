package com.sportsresort.reservation.controller;

import com.sportsresort.reservation.entity.Creneau;
import com.sportsresort.reservation.entity.Sport;
import com.sportsresort.reservation.entity.User;
import com.sportsresort.reservation.repository.CreneauRepository;
import com.sportsresort.reservation.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import com.sportsresort.reservation.repository.SportRepository;
import java.util.List;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
@PreAuthorize("hasRole('ADMIN')")
public class AdminController {

    private final SportRepository sportRepository;

    private final UserRepository userRepository;
    private final CreneauRepository creneauRepository;

    AdminController(SportRepository sportRepository) {
        this.sportRepository = sportRepository;
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable Long id) {
        userRepository.deleteById(id);
    }

    @PostMapping("/creneaux")
    public Creneau addCreneau(@RequestBody Creneau creneau) {
        return creneauRepository.save(creneau);
    }

    @PutMapping("/creneaux/{id}")
    public Creneau updateCreneau(@PathVariable Long id, @RequestBody Creneau updated) {
        Creneau creneau = creneauRepository.findById(id).orElseThrow();
        creneau.setStartTime(updated.getStartTime());
        creneau.setEndTime(updated.getEndTime());
        creneau.setTypeCours(updated.getTypeCours());
        creneau.setCoach(updated.getCoach());
        return creneauRepository.save(creneau);
    }

    @DeleteMapping("/creneaux/{id}")
    public void deleteCreneau(@PathVariable Long id) {
        creneauRepository.deleteById(id);
    }

    // Liste tous les sports
@GetMapping("/sports")
public List<Sport> getAllSports() {
    return sportRepository.findAll();
}

// Ajoute un sport
@PostMapping("/sports")
public Sport addSport(@RequestBody Sport sport) {
    return sportRepository.save(sport);
}

// Met à jour un sport
@PutMapping("/sports/{id}")
public Sport updateSport(@PathVariable Long id, @RequestBody Sport updated) {
    Sport sport = sportRepository.findById(id).orElseThrow();
    sport.setName(updated.getName());
    sport.setDescription(updated.getDescription());
    sport.setImageUrl(updated.getImageUrl());
    sport.setLien(updated.getLien());
    sport.setEmojie(updated.getEmojie());
    return sportRepository.save(sport);
}

// Supprime un sport
@DeleteMapping("/sports/{id}")
public void deleteSport(@PathVariable Long id) {
    sportRepository.deleteById(id);
}
}
