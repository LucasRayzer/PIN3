package PIN3.src.controller;


import PIN3.src.model.RelatorioAdmin;
import PIN3.src.repository.RelAdmRepository;
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
@RequestMapping("/relatorioAdm")
public class ControllerRelAdm {

    @Autowired
    private RelAdmRepository relAdmRepository;


    @PostMapping("/novoRelAdmin")
    public ResponseEntity<RelatorioAdmin> createRelAdmin(@Valid @RequestBody RelatorioAdmin relatorioAdmin){
        RelatorioAdmin savedRelAdmin = relAdmRepository.save(relatorioAdmin);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedRelAdmin.getRelatorioId())
                .toUri();
        return ResponseEntity.created(location).build();
    }
}
