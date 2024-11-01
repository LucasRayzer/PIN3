package PIN3.src.resources;

import PIN3.src.model.Tarefa;
import PIN3.src.repository.TarefaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import PIN3.src.model.Documento;
import PIN3.src.repository.DocumentoRepository;

import java.io.IOException;

@Service
public class DocumentoService {

    @Autowired
    private DocumentoRepository documentoRepository;
    @Autowired
    private TarefaRepository tarefaRepository;

    // Salva um arquivo PDF no banco de dados
    public Documento salvarDocumento(MultipartFile arquivo, long tamanho, int id) throws IOException {
        Documento documento = new Documento();
        documento.setTamanho(tamanho);
        documento.setTarefa(tarefaRepository.findById(id).get());
        documento.setNomeArquivo(arquivo.getOriginalFilename());
        documento.setArquivo(arquivo.getBytes());
        return documentoRepository.save(documento);
    }

    // Recupera um documento pelo ID
    public Documento obterDocumento(Integer id) {
        return documentoRepository.findById(id).orElse(null);
    }
}
