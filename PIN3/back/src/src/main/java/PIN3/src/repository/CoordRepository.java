package PIN3.src.repository;

import PIN3.src.model.Coordenador;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CoordRepository  extends JpaRepository<Coordenador, Integer> {
}
