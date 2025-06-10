package com.sportsresort.reservation.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class ReservationDto {
    private Long id;
    private Long creneauId;
    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private String typeCours;
    private boolean annulee;
}
