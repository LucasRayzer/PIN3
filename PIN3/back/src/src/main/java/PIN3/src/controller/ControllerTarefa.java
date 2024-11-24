package PIN3.src.controller;


import PIN3.src.model.*;
import PIN3.src.repository.AlunoRepository;
import PIN3.src.repository.CoordRepository;
import PIN3.src.repository.ProjetoRepository;
import PIN3.src.repository.TarefaRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.auditing.CurrentDateTimeProvider;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.time.LocalDate;
import java.util.*;

@RestController
@RequestMapping("/tarefa")
@CrossOrigin
public class ControllerTarefa {

    @Autowired
    private TarefaRepository tarefaRepository;
    @Autowired
    private AlunoRepository alunoRepository;
    @Autowired
    private ProjetoRepository projetoRepository;

    @PostMapping("/novaTarefa")
    public ResponseEntity<Map<String, Object>> createTarefa(@Valid @RequestBody Tarefa tarefa){
       Tarefa savedTarefa = tarefaRepository.save(tarefa);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedTarefa.getTarefa_id())
                .toUri();
        // Prepara o JSON de resposta com o ID do projeto criado
        Map<String, Object> responseBody = new HashMap<>();
        responseBody.put("id", savedTarefa.getTarefa_id());

        // Retorna o status 201 com o ID do projeto no corpo da resposta e a URI no cabeçalho
        return ResponseEntity.created(location).body(responseBody);
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
    @GetMapping("/todasTarefas")
    public List<Tarefa> getAllTasks(){
        return tarefaRepository.findAll();
    }
    @GetMapping("/tarefas/{id}/{idProjeto}")
    public List<String> getAllTasksAluno(@PathVariable int id,@PathVariable int idProjeto)throws Exception{
        Aluno alunoTemp = alunoRepository.findById(id).get();
        List<Tarefa> tarefasAluno = tarefaRepository.findByAluno(alunoTemp);
        List<String> temp = new ArrayList<>();
        Projeto ptemp =projetoRepository.findById(idProjeto).get();

        tarefasAluno.forEach(tarefa -> {
            ptemp.getTarefas().forEach(taP->{
                if (taP==tarefa){
                    String fd = "";
                    fd += tarefa.getTarefa_id()+" "+tarefa.getNomeTarefa()+" "+ tarefa.getStatusTarefa();
                    temp.add(fd);
                }
            });

        });
        return temp;
    }
    //puxar na tela de details project do coord
    @GetMapping("/allTarefasProjeto/{id}")
    public List<Tarefa> getAllTasksProjeto(@PathVariable int id)throws Exception{
        Projeto projeto = projetoRepository.findById(id).get();
        List<Tarefa> tarefasAll = tarefaRepository.findByProjeto(projeto);
        tarefasAll.forEach(tarefa -> {
            tarefa.setProjeto(null);
            tarefa.setAluno(null);
            tarefa.setDocumentos(null);
        });
        return tarefasAll;
    }
    @GetMapping("/detalhesTarefa/{id}")
    public Tarefa getDetalhesTarefaById(@PathVariable int id)throws Exception{
        Tarefa tarefa = tarefaRepository.findById(id).get();
        tarefa.setDocumentos(null);
        tarefa.setProjeto(null);
        tarefa.getAluno().setTarefas(null);
        tarefa.getAluno().setProjetosAluno(null);
        return tarefa;
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
    @PutMapping("/{id}/update")
    public ResponseEntity<Tarefa> updateTarefa(@PathVariable int id, @Valid @RequestBody Tarefa tarefaAtualizada) {
        Optional<Tarefa> tarefaExistenteOpt = tarefaRepository.findById(id);
        LocalDate CurrentDateTimeProvider= LocalDate.now();
        if (tarefaExistenteOpt.isPresent()) {
            Tarefa tarefaExistente = tarefaExistenteOpt.get();

            // Atualizando os campos da tarefa existente com os valores da nova tarefa
            if (tarefaAtualizada.getNomeTarefa() != null) {
                tarefaExistente.setNomeTarefa(tarefaAtualizada.getNomeTarefa());
            }
            if (tarefaAtualizada.getDescricao() != null) {
                tarefaExistente.setDescricao(tarefaAtualizada.getDescricao());
            }
            if (tarefaAtualizada.getDataFim() != null) {
                tarefaExistente.setDataFim(tarefaAtualizada.getDataFim());
            }
            if (tarefaAtualizada.getStatusTarefa() != null) {
                tarefaExistente.setStatusTarefa(tarefaAtualizada.getStatusTarefa());
            }
            if (tarefaAtualizada.getAluno() != null) {
                tarefaExistente.setAluno(tarefaAtualizada.getAluno());
            }
            if (tarefaAtualizada.getDocumentos() != null && !tarefaAtualizada.getDocumentos().isEmpty()) {
                tarefaExistente.setDocumentos(tarefaAtualizada.getDocumentos());
            }

            tarefaExistente.setDataEntrega(tarefaAtualizada.getStatusTarefa());


            tarefaRepository.save(tarefaExistente);

            return ResponseEntity.ok(tarefaExistente);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
