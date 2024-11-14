package PIN3.src.controller;

import PIN3.src.model.Aluno;
import PIN3.src.model.Documento;

import PIN3.src.model.Tarefa;
import PIN3.src.repository.DocumentoRepository;
import PIN3.src.repository.TarefaRepository;
import PIN3.src.resources.DocumentoService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.print.Doc;
import java.io.IOException;
import java.net.URI;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/documento")
public class ControllerDoc {

    @Autowired
    DocumentoService documentoService;

    @Autowired
    DocumentoRepository documentoRepository;
    @Autowired
    TarefaRepository tarefaRepository;


    @PostMapping("/upload/{tarefaId}")
    public ResponseEntity<String>uploadDocumento(@RequestParam("arquivo") MultipartFile arquivo,@PathVariable int tarefaId) throws Exception {
        try {
            long tamanho = arquivo.getSize();
            documentoService.salvarDocumento(arquivo, tamanho,tarefaId);
            return ResponseEntity.status(HttpStatus.OK).body("Arquivo carregado com sucesso!");
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao carregar o arquivo.");
        }
    }


    @GetMapping("/download/{id}")
    public ResponseEntity<byte[]> downloadDocumento(@PathVariable Integer id) {
        Documento documento = documentoService.obterDocumento(id);
        if (documento != null) {
            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"documento_" + documento.getDocumento_id() + ".pdf\"")
                    .contentType(MediaType.APPLICATION_PDF)
                    .body(documento.getArquivo());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }
    @GetMapping("/tarefa/{id}")
    @Transactional
    public List<Documento> getDocumentByTarefaId(@PathVariable int id) throws Exception {
        if (tarefaRepository.existsById(id)) {
            List<Documento> documentos = documentoRepository.findByTarefa(tarefaRepository.findById(id).get());
            List<Documento> nomesArquivos = new ArrayList<>();

            documentos.forEach(documento -> {
                Documento temp = new Documento();
                temp.setNomeArquivo(documento.getNomeArquivo());
                temp.setDocumento_id(documento.getDocumento_id());
                nomesArquivos.add(temp);

            });

            return nomesArquivos;
        } else {
            throw new Exception("Não foi possível encontrar a tarefa");
        }
    }



}
