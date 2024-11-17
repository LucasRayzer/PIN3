package PIN3.src.repository;

import PIN3.src.model.Coordenador;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CoordRepository  extends JpaRepository<Coordenador, Integer> {

}
