package com.sportsresort.reservation.config;

import com.sportsresort.reservation.entity.Creneau;
import com.sportsresort.reservation.entity.Role;
import com.sportsresort.reservation.entity.Sport;
import com.sportsresort.reservation.entity.User;
import com.sportsresort.reservation.repository.CreneauRepository;
import com.sportsresort.reservation.repository.RoleRepository;
import com.sportsresort.reservation.repository.SportRepository;
import com.sportsresort.reservation.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Set;

@Configuration
@RequiredArgsConstructor
public class DataInitializer {

    private final RoleRepository roleRepository;
    private final UserRepository userRepository;
    private final SportRepository sportRepository;
    private final CreneauRepository creneauRepository;
    private final PasswordEncoder passwordEncoder;

    @Bean
    public CommandLineRunner initData() {
        return args -> {
            // Créer les rôles si absents
            Role adminRole = createRoleIfNotExists("ADMIN");
            Role coachRole = createRoleIfNotExists("COACH");
            Role userRole = createRoleIfNotExists("USER");

            // Créer utilisateurs
            createUserIfNotExists("admin@test.com", "admin", "Admin", "Test", Set.of(adminRole));
            User coach = createUserIfNotExists("coach@test.com", "coach", "Coach", "Test", Set.of(coachRole));
            createUserIfNotExists("user@test.com", "user", "User", "Test", Set.of(userRole));

            // Créer sport si non existant
            Sport tennis = createSportIfNotExists("Tennis", "Sport de raquette classique", "/uploads/sports/default-tennis.png", "https://fr.wikipedia.org/wiki/Tennis", "🎾");

            // Créer créneaux si aucun
            if (creneauRepository.count() == 0) {
                Creneau c1 = Creneau.builder()
                        .sport(tennis)
                        .coach(coach)
                        .date(LocalDate.now().plusDays(1))
                        .startTime(LocalTime.of(10, 0))
                        .endTime(LocalTime.of(11, 0))
                        .placesDispo(10)
                        .build();

                Creneau c2 = Creneau.builder()
                        .sport(tennis)
                        .coach(coach)
                        .date(LocalDate.now().plusDays(2))
                        .startTime(LocalTime.of(18, 0))
                        .endTime(LocalTime.of(19, 0))
                        .placesDispo(12)
                        .build();

                creneauRepository.save(c1);
                creneauRepository.save(c2);
            }
        };
    }

    private Role createRoleIfNotExists(String name) {
        return roleRepository.findByName(name)
                .orElseGet(() -> roleRepository.save(Role.builder().name(name).build()));
    }

    private User createUserIfNotExists(String email, String rawPassword, String firstname, String lastname, Set<Role> roles) {
        return userRepository.findByEmail(email).orElseGet(() -> {
            User user = User.builder()
                    .email(email)
                    .password(passwordEncoder.encode(rawPassword))
                    .firstname(firstname)
                    .lastname(lastname)
                    .roles(roles)
                    .build();
            return userRepository.save(user);
        });
    }

    private Sport createSportIfNotExists(String name, String description, String imageUrl, String lien, String emojie) {
        return sportRepository.findByName(name).orElseGet(() ->
            sportRepository.save(Sport.builder()
                .name(name)
                .description(description)
                .imageUrl(imageUrl)
                .lien(lien)
                .emojie(emojie)
                .build())
        );
    }
}
