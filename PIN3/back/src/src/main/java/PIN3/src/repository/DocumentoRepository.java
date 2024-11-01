package PIN3.src.repository;


import PIN3.src.model.Documento;
import PIN3.src.model.Tarefa;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DocumentoRepository  extends JpaRepository<Documento, Integer> {

    List<Documento> findByTarefa (Tarefa tarefa);

}
