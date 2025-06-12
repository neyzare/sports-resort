package com.sportsresort.reservation.service;

import com.sportsresort.reservation.entity.Creneau;
import com.sportsresort.reservation.repository.CreneauRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CreneauService {

    private final CreneauRepository creneauRepository;

    public List<Creneau> getCreneauxByDate(LocalDate date) {
        return creneauRepository.findByDate(date);
    }

    public List<Creneau> getAllCreneaux() {
        return creneauRepository.findAll();
    }
}
