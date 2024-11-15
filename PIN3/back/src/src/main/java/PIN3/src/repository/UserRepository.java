package PIN3.src.repository;

import PIN3.src.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<Usuario, Integer> {

    Usuario findByNome(String nome);
}
