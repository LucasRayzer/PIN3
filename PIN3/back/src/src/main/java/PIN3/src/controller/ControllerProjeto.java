package PIN3.src.controller;

import PIN3.src.model.Projeto;
import PIN3.src.repository.ProjetoRepository;
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
@RequestMapping("/projeto")
public class ControllerProjeto {
    @Autowired
    private ProjetoRepository projetoRepository;

    @PostMapping("/novoProjeto")
    public ResponseEntity<Projeto> createProjeto(@Valid @RequestBody Projeto projeto){
        Projeto savedProjeto = projetoRepository.save(projeto);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedProjeto.getProjetoId())
                .toUri();
        return ResponseEntity.created(location).build();
    }

}
