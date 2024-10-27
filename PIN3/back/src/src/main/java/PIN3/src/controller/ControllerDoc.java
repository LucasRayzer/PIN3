package PIN3.src.controller;

import PIN3.src.model.Documento;

import PIN3.src.repository.DocumentoRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/documento")
public class ControllerDoc {

    @Autowired
    private DocumentoRepository documentoRepository;

    @PostMapping("/novoDocumento")
    public ResponseEntity<Documento> createDocumento(@Valid @RequestBody Documento documento){
        Documento savedDocumento = documentoRepository.save(documento);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedDocumento.getDocumento_id())
                .toUri();
        return ResponseEntity.created(location).build();
    }
}
