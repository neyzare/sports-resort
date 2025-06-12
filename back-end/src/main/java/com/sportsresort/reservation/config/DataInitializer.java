package com.sportsresort.reservation.config;

// import com.sportsresort.reservation.entity.Creneau;
import com.sportsresort.reservation.entity.Role;
import com.sportsresort.reservation.entity.User;
// import com.sportsresort.reservation.entity.Sport;
// import com.sportsresort.reservation.repository.CreneauRepository;
import com.sportsresort.reservation.repository.RoleRepository;
// import com.sportsresort.reservation.repository.SportRepository;
import com.sportsresort.reservation.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

// import java.time.LocalDate;
// import java.time.LocalDateTime;
import java.util.Set;

@Configuration
@RequiredArgsConstructor
public class DataInitializer {

    private final RoleRepository roleRepository;
    private final UserRepository userRepository;
    // private final SportRepository sportRepository;
    // private final CreneauRepository creneauRepository;
    private final PasswordEncoder passwordEncoder;

    @Bean
    public CommandLineRunner initData() {
        return args -> {
            // Créer les rôles
            Role adminRole = createRoleIfNotExists("ADMIN");
            Role coachRole = createRoleIfNotExists("COACH");
            Role userRole = createRoleIfNotExists("USER");
            // Sport tennisSport = createSportIfNotExist("Tennis");

            // Créer l'admin par défaut
            createUserIfNotExists("admin@test.com", "admin", "Admin", "Test", Set.of(adminRole));

            // Créer un coach fictif
            createUserIfNotExists("coach@test.com", "coach", "Coach", "Test", Set.of(coachRole));

            // Créer un user fictif
            createUserIfNotExists("user@test.com", "user", "User", "Test", Set.of(userRole));

            // Créer des créneaux si vide
            // if (creneauRepository.count() == 0) {
            //     creneauRepository.save(
            //         Creneau.builder()
            //             .date(LocalDate.now().plusDays(1))
            //             .startTime(LocalDateTime.of(2025, 6, 10, 10, 0))
            //             .endTime(LocalDateTime.of(2025, 6, 10, 11, 0))
            //             .coach(coach)
            //             .sport((Sport) Set.of(tennisSport))
            //             .placesDispo(10)
            //             .build()
            //     );

            //     creneauRepository.save(
            //         Creneau.builder()
            //             .date(LocalDate.now().plusDays(2))
            //             .startTime(LocalDateTime.of(2025, 6, 10, 18, 0))
            //             .endTime(LocalDateTime.of(2025, 6, 10, 19, 0))
            //             .coach(coach)
            //             .sport((Sport) Set.of(tennisSport))
            //             .placesDispo(12)
            //             .build()
            //     );
            // }
        };
    }

    private Role createRoleIfNotExists(String name) {
        return roleRepository.findByName(name)
            .orElseGet(() -> roleRepository.save(Role.builder().name(name).build()));
    }

    // private Sport createSportIfNotExist(String name) {
    //     return sportRepository.findByName(name)
    //         .orElseGet(() -> sportRepository.save(Sport.builder().name(name).build()));
    // }

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
}
