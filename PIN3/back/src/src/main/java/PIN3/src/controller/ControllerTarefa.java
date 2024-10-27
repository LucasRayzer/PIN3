package PIN3.src.controller;


import PIN3.src.model.Tarefa;
import PIN3.src.repository.TarefaRepository;
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
@RequestMapping("/tarefa")
public class ControllerTarefa {

    @Autowired
    private TarefaRepository tarefaRepository;

    @PostMapping("/novaTarefa")
    public ResponseEntity<Tarefa> createTarefa(@Valid @RequestBody Tarefa tarefa){
       Tarefa savedTarefa = tarefaRepository.save(tarefa);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedTarefa.getTarefa_id())
                .toUri();
        return ResponseEntity.created(location).build();
    }
}
