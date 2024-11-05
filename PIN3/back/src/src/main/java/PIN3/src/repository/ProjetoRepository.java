package PIN3.src.repository;

import PIN3.src.model.Projeto;
import PIN3.src.model.Tarefa;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface ProjetoRepository  extends JpaRepository<Projeto, Integer> {

    List<Tarefa> findTarefaByProjetoId(int projetoId);
    List<Projeto> findByDataInicioBetween(LocalDate dataInicio, LocalDate dataFim);
}
