package PIN3.src.repository;

import PIN3.src.model.ProjetoAluno;
import PIN3.src.model.ProjetoAlunoId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjetoAlunoRepository extends JpaRepository<ProjetoAluno, ProjetoAlunoId> {

}
