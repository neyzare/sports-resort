package com.sportsresort.reservation.controller;

import com.sportsresort.reservation.dto.ReservationDto;
import com.sportsresort.reservation.entity.Creneau;
import com.sportsresort.reservation.entity.Reservation;
import com.sportsresort.reservation.entity.User;
import com.sportsresort.reservation.repository.CreneauRepository;
import com.sportsresort.reservation.repository.ReservationRepository;
import com.sportsresort.reservation.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserReservationController {

    private final UserRepository userRepository;
    private final CreneauRepository creneauRepository;
    private final ReservationRepository reservationRepository;

    @PostMapping("/reserver/{creneauId}")
    public String reserver(@AuthenticationPrincipal UserDetails userDetails,
                           @PathVariable Long creneauId) {
        User user = userRepository.findByEmail(userDetails.getUsername()).orElseThrow();
        Creneau creneau = creneauRepository.findById(creneauId).orElseThrow();

        if (!creneau.isDisponible()) {
            return "Ce créneau est déjà réservé.";
        }

        Reservation reservation = Reservation.builder()
                .user(user)
                .creneau(creneau)
                .annulee(false)
                .build();

        reservationRepository.save(reservation);

        creneau.setDisponible(false);
        creneauRepository.save(creneau);

        return "Réservation réussie.";
    }

    @GetMapping("/mes-reservations")
    public List<ReservationDto> mesReservations(@AuthenticationPrincipal UserDetails userDetails) {
        User user = userRepository.findByEmail(userDetails.getUsername()).orElseThrow();

        return reservationRepository.findByUserId(user.getId())
                .stream()
                .map(r -> ReservationDto.builder()
                        .id(r.getId())
                        .creneauId(r.getCreneau().getId())
                        .startTime(r.getCreneau().getStartTime())
                        .endTime(r.getCreneau().getEndTime())
                        .typeCours(r.getCreneau().getTypeCours())
                        .annulee(r.isAnnulee())
                        .build())
                .collect(Collectors.toList());
    }

    @Transactional
    @DeleteMapping("/annuler/{reservationId}")
    public String annulerReservation(@AuthenticationPrincipal UserDetails userDetails,
                                     @PathVariable Long reservationId) {
        User user = userRepository.findByEmail(userDetails.getUsername()).orElseThrow();
        Reservation reservation = reservationRepository.findById(reservationId).orElseThrow();

        if (!reservation.getUser().getId().equals(user.getId())) {
            return "Vous ne pouvez annuler que vos propres réservations.";
        }

        reservation.setAnnulee(true);
        reservationRepository.save(reservation);

        reservation.getCreneau().setDisponible(true);
        return "Réservation annulée.";
    }

    @GetMapping("/creneaux-disponibles")
    public List<Creneau> getCreneauxDisponibles() {
        return creneauRepository.findAll().stream()
                .filter(Creneau::isDisponible)
                .collect(Collectors.toList());
    }
}
