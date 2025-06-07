package sports_resort.model.repository;

import org.springframework.data.repository.CrudRepository;
import sports_resort.model.entity.User;

public interface UserRepository extends CrudRepository<User, Integer> {
    User findByUsername(String username);
}