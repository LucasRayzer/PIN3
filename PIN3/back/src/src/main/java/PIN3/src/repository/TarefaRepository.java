package PIN3.src.repository;


import PIN3.src.model.Aluno;
import PIN3.src.model.Projeto;
import PIN3.src.model.Tarefa;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TarefaRepository  extends JpaRepository<Tarefa, Integer> {

    List<Tarefa> findByAluno(Aluno aluno);
    List<Tarefa> findByProjeto(Projeto projeto);



}
