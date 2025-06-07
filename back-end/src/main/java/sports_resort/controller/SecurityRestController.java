package sports_resort.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sports_resort.model.entity.User;
import sports_resort.model.service.UserService;

@RestController
@RequestMapping("/api")
public class SecurityRestController {

    private final UserService userService;

    public SecurityRestController(UserService userService) {
        this.userService = userService;
    }

    // Endpoint POST /api/inscription pour recevoir un JSON avec les données utilisateur
    @PostMapping("/inscription")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        try {
            userService.registerUser(user);
            return ResponseEntity.status(HttpStatus.CREATED).body("Utilisateur enregistré avec succès !");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erreur lors de l'inscription : " + e.getMessage());
        }
    }
}