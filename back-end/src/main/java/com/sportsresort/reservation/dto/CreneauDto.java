package com.sportsresort.reservation.dto;

import lombok.Data;

import java.time.LocalTime;

@Data
public class CreneauDto {
    private Long id;
    private LocalTime startTime;
    private LocalTime endTime;
    private String sport;
    private boolean disponible;
    private String coachName;
    private int cours;
}
