package com.sportsresort.reservation.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalTime;

@Data
@Builder
public class ReservationDto {
    private Long id;
    private Long creneauId;
    private LocalTime startTime;
    private LocalTime endTime;
    private String sport;
    private boolean annulee;
    private String coachName;
}
