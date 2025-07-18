package com.sportsresort.reservation.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Creneau {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate date;

    private LocalDateTime startTime;
    private LocalDateTime endTime;

    private String sport;

    private boolean disponible = true;

    private int placesDispo;

    @ManyToOne
    private User coach;
}
