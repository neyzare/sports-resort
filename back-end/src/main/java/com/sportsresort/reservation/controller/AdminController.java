package com.sportsresort.reservation.controller;

import com.sportsresort.reservation.entity.Creneau;
import com.sportsresort.reservation.entity.Role;
import com.sportsresort.reservation.entity.Sport;
import com.sportsresort.reservation.entity.User;
import com.sportsresort.reservation.repository.CreneauRepository;
import com.sportsresort.reservation.repository.RoleRepository;
import com.sportsresort.reservation.repository.SportRepository;
import com.sportsresort.reservation.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
@PreAuthorize("hasRole('ADMIN')")
public class AdminController {

    private final SportRepository sportRepository;
    private final UserRepository userRepository;
    private final CreneauRepository creneauRepository;
    private final PasswordEncoder passwordEncoder;
    private final RoleRepository roleRepository;

    private final String uploadDir = "/Users/lucas/Desktop/sport-resort/sports-resort/back-end/src/main/java/com/sportsresort/uploads/sports";

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @PostMapping("/users")
    public ResponseEntity<?> addUser(@RequestBody User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        if (user.getRoles() != null && !user.getRoles().isEmpty()) {
            List<Role> rolesFromDb = roleRepository.findAll();
            Set<Role> userRoles = rolesFromDb.stream()
                    .filter(roleFromDb -> user.getRoles().stream()
                            .anyMatch(inputRole -> inputRole.getName().equalsIgnoreCase(roleFromDb.getName())))
                    .collect(Collectors.toSet());
            user.setRoles(userRoles);
        }
        if (user.getSports() != null && !user.getSports().isEmpty()) {
            Set<Sport> validSports = sportRepository.findAllById(
                user.getSports().stream().map(Sport::getId).toList()
            ).stream().collect(Collectors.toSet());

            user.setSports(validSports);
        }

        User savedUser = userRepository.save(user);
        return ResponseEntity.ok(savedUser);
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<?> updateUser(@PathVariable Long id, @RequestBody User updated) {
        Optional<User> optionalUser = userRepository.findById(id);
        if (optionalUser.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        User user = optionalUser.get();

        user.setFirstname(updated.getFirstname());
        user.setLastname(updated.getLastname());
        user.setEmail(updated.getEmail());
        user.setCity(updated.getCity());
        user.setCountry(updated.getCountry());
        user.setDateofbirth(updated.getDateofbirth());
        user.setPhonenumber(updated.getPhonenumber());
        user.setZipcode(updated.getZipcode());

        if (updated.getPassword() != null && !updated.getPassword().isBlank()) {
            user.setPassword(passwordEncoder.encode(updated.getPassword()));
        }

        if (updated.getRoles() != null && !updated.getRoles().isEmpty()) {
            List<Role> allRoles = roleRepository.findAll();
            Set<Role> matchedRoles = allRoles.stream()
                .filter(dbRole -> updated.getRoles().stream()
                    .anyMatch(inputRole -> inputRole.getName().equalsIgnoreCase(dbRole.getName())))
                .collect(Collectors.toSet());
            user.setRoles(matchedRoles);
        }
        if (user.getSports() != null && !user.getSports().isEmpty()) {
            Set<Sport> validSports = sportRepository.findAllById(
                user.getSports().stream().map(Sport::getId).toList()
            ).stream().collect(Collectors.toSet());

            user.setSports(validSports);
        }

        User savedUser = userRepository.save(user);
        return ResponseEntity.ok(savedUser);
    }


    @DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable Long id) {
        userRepository.deleteById(id);
    }

    @GetMapping("/coachs")
    public List<User> getAllCoaches() {
        return userRepository.findByRoleName("COACH");
    }

    @PostMapping("/creneaux")
    public Creneau addCreneau(@RequestBody Creneau creneau) {
        return creneauRepository.save(creneau);
    }

    @PutMapping("/creneaux/{id}")
    public Creneau updateCreneau(@PathVariable Long id, @RequestBody Creneau updated) {
        Creneau creneau = creneauRepository.findById(id).orElseThrow();
        creneau.setStartTime(updated.getStartTime());
        creneau.setEndTime(updated.getEndTime());
        creneau.setSport(updated.getSport());
        creneau.setCoach(updated.getCoach());
        return creneauRepository.save(creneau);
    }

    @DeleteMapping("/creneaux/{id}")
    public void deleteCreneau(@PathVariable Long id) {
        creneauRepository.deleteById(id);
    }

    @PostMapping("/sports/upload")
    public ResponseEntity<?> addSportWithImage(
            @RequestParam("name") String name,
            @RequestParam("description") String description,
            @RequestParam(value = "lien", required = false) String lien,
            @RequestParam(value = "emojie", required = false) String emojie,
            @RequestParam("image") MultipartFile image) {

        try {
            File dir = new File(uploadDir);
            if (!dir.exists()) dir.mkdirs();

            String rawFilename = image.getOriginalFilename();
            String originalFilename = StringUtils.cleanPath(rawFilename != null ? rawFilename : "uploaded_image");
            String extension = originalFilename.substring(originalFilename.lastIndexOf('.'));
            String baseName = originalFilename.substring(0, originalFilename.lastIndexOf('.'));
            String timestamp = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddHHmmss"));
            String finalFileName = baseName + "_" + timestamp + extension;

            Path filePath = Paths.get(uploadDir, finalFileName);
            Files.write(filePath, image.getBytes());

            String imageUrl = "/uploads/sports/" + finalFileName;

            Sport sport = Sport.builder()
                    .name(name)
                    .description(description)
                    .imageUrl(imageUrl)
                    .lien(lien)
                    .emojie(emojie)
                    .build();

            sportRepository.save(sport);
            return ResponseEntity.ok(sport);

        } catch (IOException e) {
            return ResponseEntity.status(500).body("Erreur lors de l'upload de l'image : " + e.getMessage());
        }
    }

    @GetMapping("/sports")
    public List<Sport> getAllSports() {
        return sportRepository.findAll();
    }

    @PostMapping("/sports")
    public Sport addSport(@RequestBody Sport sport) {
        return sportRepository.save(sport);
    }

    @PutMapping("/sports/{id}")
    public ResponseEntity<?> updateSport(
            @PathVariable Long id,
            @RequestParam("name") String name,
            @RequestParam("description") String description,
            @RequestParam(value = "lien", required = false) String lien,
            @RequestParam(value = "emojie", required = false) String emojie,
            @RequestParam(value = "image", required = false) MultipartFile image) {

        Optional<Sport> sportOptional = sportRepository.findById(id);
        if (sportOptional.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Sport sport = sportOptional.get();
        sport.setName(name);
        sport.setDescription(description);
        sport.setLien(lien);
        sport.setEmojie(emojie);

        if (image != null && !image.isEmpty()) {
            try {
                if (sport.getImageUrl() != null) {
                    String oldImagePath = uploadDir + sport.getImageUrl().replace("/uploads/sports/", "");
                    Files.deleteIfExists(Paths.get(oldImagePath));
                }

                String originalFilename = StringUtils.cleanPath(image.getOriginalFilename());
                String extension = originalFilename.substring(originalFilename.lastIndexOf('.'));
                String baseName = originalFilename.substring(0, originalFilename.lastIndexOf('.'));
                String timestamp = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddHHmmss"));
                String finalFileName = baseName + "_" + timestamp + extension;

                Path filePath = Paths.get(uploadDir, finalFileName);
                Files.write(filePath, image.getBytes());

                String imageUrl = "/uploads/sports/" + finalFileName;
                sport.setImageUrl(imageUrl);

            } catch (IOException e) {
                return ResponseEntity.status(500).body("Erreur lors de l'upload de la nouvelle image : " + e.getMessage());
            }
        }

        sportRepository.save(sport);
        return ResponseEntity.ok(sport);
    }

    @DeleteMapping("/sports/{id}")
    public ResponseEntity<?> deleteSport(@PathVariable Long id) {
        Optional<Sport> sportOptional = sportRepository.findById(id);
        if (sportOptional.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Sport sport = sportOptional.get();
        if (sport.getImageUrl() != null) {
            String imagePath = uploadDir + sport.getImageUrl().replace("/uploads/sports/", "");
            try {
                Files.deleteIfExists(Paths.get(imagePath));
            } catch (IOException e) {
                return ResponseEntity.status(500).body("Erreur lors de la suppression de l'image.");
            }
        }

        sportRepository.deleteById(id);
        return ResponseEntity.ok("Sport supprimé.");
    }

    @GetMapping("/roles")
    public List<Role> getAllRoles() {
        return roleRepository.findAll();
    }
}
