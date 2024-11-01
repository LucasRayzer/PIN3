package PIN3.src.controller;


import PIN3.src.model.Documento;
import PIN3.src.model.Projeto;
import PIN3.src.model.Tarefa;
import PIN3.src.repository.TarefaRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

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
    @GetMapping("/{id}")
    public Tarefa getTarefaStatusById(@PathVariable int id)throws Exception{
        if(tarefaRepository.existsById(id)) {
            Tarefa temp =tarefaRepository.findById(id).get();
            temp.getStatusTarefa();
            return temp;
        } else
            throw new Exception("Não foi possível encontrar a tarefa");
    }
    @GetMapping("/{id}/status/{status}")
    public Tarefa setTarefaStatusById(@PathVariable int id, @PathVariable int status)throws Exception {
        if(tarefaRepository.existsById(id)) {
            Tarefa tarefa =  tarefaRepository.findById(id).get();
            tarefa.setStatusTarefa(status);
            tarefaRepository.save(tarefa);
            return tarefa;
        } else
            throw new Exception("Não foi possível encontrar a tarefa");

    }
    @GetMapping("/{id}/documentos")
    public ResponseEntity<List<Documento>> getDocumentosByTarefaId(@PathVariable int id) throws Exception {
        if (tarefaRepository.existsById(id)) {
            Tarefa tarefa = tarefaRepository.findById(id).get();
            List<Documento> documentos = tarefa.getDocumentos();
            return ResponseEntity.ok(documentos);
        } else
            throw new Exception("Não foi possível encontrar a tarefa");
    }

}
