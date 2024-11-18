package PIN3.src.repository;

import PIN3.src.model.Projeto;
import PIN3.src.model.RelatorioAdmin;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface RelAdmRepository extends JpaRepository<RelatorioAdmin, Integer> {
    List<RelatorioAdmin> findByDataInicioBetween(LocalDate dataInicio, LocalDate dataFim);
}
