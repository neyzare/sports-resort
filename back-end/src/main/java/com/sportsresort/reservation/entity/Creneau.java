package com.sportsresort.reservation.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalTime;

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

    private LocalTime startTime;
    private LocalTime endTime;

    private int cours;

    @ManyToOne
    private Sport sport;

    private boolean disponible;

    private int placesDispo;

    @ManyToOne
    private User coach;
}
