package PIN3.src.repository;

import PIN3.src.model.Projeto;
import PIN3.src.model.Tarefa;
import org.springframework.cglib.core.Local;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

public interface ProjetoRepository  extends JpaRepository<Projeto, Integer> {
    @Query("SELECT t FROM Tarefa t WHERE t.projeto.id = :projetoId")
    List<Tarefa> findTarefaByProjetoId(@Param("projetoId") int projetoId);
    List<Projeto> findByDataInicioBetween(LocalDate dataInicio, LocalDate dataFim);
}
