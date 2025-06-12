package com.sportsresort.reservation.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Entity
@Getter @Setter @Builder
@NoArgsConstructor @AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstname;
    private String lastname;
    private String email;
    private String password;
    private String dateofbirth;
    private String country;
    private String city;
    private String zipcode;
    private String phonenumber;

    @ManyToMany
    @JoinTable(
        name = "coach_sports",
        joinColumns = @JoinColumn(name = "coach_id"),
        inverseJoinColumns = @JoinColumn(name = "sport_id")
    )
    private Set<Sport> sports;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
        name = "user_roles",
        joinColumns = @JoinColumn(name = "user_id"),
        inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private Set<Role> roles;
}
