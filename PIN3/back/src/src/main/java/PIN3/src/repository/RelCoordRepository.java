package PIN3.src.repository;


import PIN3.src.model.RelatorioCoordenador;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RelCoordRepository extends JpaRepository<RelatorioCoordenador, Integer> {
}
