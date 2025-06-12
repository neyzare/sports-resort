package com.sportsresort.reservation.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter @Setter @Builder
@NoArgsConstructor @AllArgsConstructor
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private User user;

    @ManyToOne
    private Creneau creneau;

    @ManyToOne
    private User coach; // Coach choisi pour cette réservation (optionnel)

    private boolean annulee = false;
}
