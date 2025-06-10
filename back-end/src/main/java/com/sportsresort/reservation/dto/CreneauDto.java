package com.sportsresort.reservation.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class CreneauDto {
    private Long id;
    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private String typeCours;
    private boolean disponible;
    private String coachName;
}
