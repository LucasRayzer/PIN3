package PIN3.src.repository;


import PIN3.src.model.Tarefa;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TarefaRepository  extends JpaRepository<Tarefa, Integer> {
}
