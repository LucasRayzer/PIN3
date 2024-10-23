package PIN3.src.repository;


import PIN3.src.model.Documento;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DocumentoRepository  extends JpaRepository<Documento, Integer> {
}
