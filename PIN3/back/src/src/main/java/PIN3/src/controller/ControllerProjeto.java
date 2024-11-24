package PIN3.src.controller;

import PIN3.src.model.*;
import PIN3.src.repository.AlunoRepository;
import PIN3.src.repository.CoordRepository;
import PIN3.src.repository.ProjetoAlunoRepository;
import PIN3.src.repository.ProjetoRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;

@RestController
@RequestMapping("/projeto")
@CrossOrigin
public class ControllerProjeto {
    @Autowired
    private ProjetoRepository projetoRepository;
    @Autowired
    private AlunoRepository alunoRepository;
    @Autowired
    private ProjetoAlunoRepository projetoAlunoRepository;
    @Autowired
    private CoordRepository coordRepository;
    @PostMapping("/novoProjeto")
    public ResponseEntity<Map<String, Object>> createProjeto(@Valid @RequestBody Projeto projeto){
        Projeto savedProjeto = projetoRepository.save(projeto);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedProjeto.getProjetoId())
                .toUri();
        // Prepara o JSON de resposta com o ID do projeto criado
        Map<String, Object> responseBody = new HashMap<>();
        responseBody.put("id", savedProjeto.getProjetoId());

        // Retorna o status 201 com o ID do projeto no corpo da resposta e a URI no cabeçalho
        return ResponseEntity.created(location).body(responseBody);
    }
    @GetMapping("/associar/{idProjeto}/{idAluno}")
    public ProjetoAluno associarProjetoAluno(@PathVariable int idProjeto, @PathVariable int idAluno){
        ProjetoAluno projetoAluno = new ProjetoAluno();
        Projeto projeto =projetoRepository.findById(idProjeto).get();
        Aluno aluno = alunoRepository.findById(idAluno).get();
        ProjetoAlunoId projetoAlunoId = new ProjetoAlunoId();
        projetoAluno.setProjetoAluno_id(projetoAlunoId);
        projetoAluno.setProjeto(projeto);
        projetoAluno.setAluno(aluno);
        projetoAlunoRepository.save(projetoAluno);

        return projetoAluno;
    }
    @DeleteMapping("/deleteProjetoAluno/{projetoId}/{alunoId}")
    public void deleteProjetoAluno(@PathVariable int projetoId, @PathVariable int alunoId) {
        ProjetoAlunoId id = new ProjetoAlunoId(alunoId, projetoId);
        projetoAlunoRepository.deleteById(id);
    }

    @GetMapping("/{id}")
    public Projeto getProjetoStatusById(@PathVariable int id)throws Exception{
        if(projetoRepository.existsById(id)) {
            Projeto temp =projetoRepository.findById(id).get();
            temp.getStatusProjeto();
            temp.setCoordenador(null);
            temp.setParticipantes(null);
            temp.setTarefas(null);
            temp.setRelatoriosCoord(null);
            temp.setRelatoriosAdmin(null);
            return temp;
        } else
            throw new Exception("Não foi possível encontrar o proojeto");
    }
    @GetMapping("/update/{id}")
    public void updateProjetoStatusById(@PathVariable int id) {
        Projeto projTemp = projetoRepository.findById(id).get();

        AtomicInteger concluida = new AtomicInteger();
        AtomicInteger parada = new AtomicInteger();
        AtomicInteger emAnalise = new AtomicInteger();
        AtomicInteger emAndamento = new AtomicInteger();

        List<Tarefa> tarefas = projetoRepository.findTarefaByProjetoId(id);
        tarefas.forEach(tarefa -> {
            switch (tarefa.getStatusTarefa()) {
                case 1 -> concluida.getAndIncrement();
                case 4 -> parada.getAndIncrement();
                case 2 -> emAnalise.getAndIncrement();
                case 3 -> emAndamento.getAndIncrement();
            }
        });

        if ( parada.get()==0 &&emAnalise.get()==0 && emAndamento.get()==0 && concluida.get()>=1) {
            projTemp.setStatusProjeto(1);
        } else if (parada.get() >= concluida.get() && parada.get() >= emAnalise.get() && parada.get() >= emAndamento.get()) {
            projTemp.setStatusProjeto(4);
        } else if (emAnalise.get() >= concluida.get() && emAnalise.get() >= parada.get() && emAnalise.get() >= emAndamento.get()) {
            projTemp.setStatusProjeto(2);
        } else {
            projTemp.setStatusProjeto(3);
        }

        projetoRepository.save(projTemp);
    }
    @GetMapping("/participantes/{id}")
    public List<Aluno> getProjetoDetailsById(@PathVariable int id)throws Exception{
        if(projetoRepository.existsById(id)) {
            Projeto temp =projetoRepository.findById(id).get();
            temp.setCoordenador(null);
            List<ProjetoAluno> participantes=temp.getParticipantes();
            List<Aluno> tempAluno = new ArrayList<>();
            participantes.forEach(projetoAluno -> {
                if (projetoAluno.getProjeto()==temp) {
                    Aluno aluno = projetoAluno.getAluno();
                    aluno.setTarefas(null);
                    aluno.setProjetosAluno(null);
                    tempAluno.add(aluno);

                }
            });
            return tempAluno;
        } else
            throw new Exception("Não foi possível encontrar o proojeto");
    }
    @GetMapping("/participantesTask")
    public List<Aluno> getTaskDetailsById(@RequestParam int projectId)throws Exception{
        if(projetoRepository.existsById(projectId)) {
            Projeto temp =projetoRepository.findById(projectId).get();
            temp.setCoordenador(null);
            List<ProjetoAluno> participantes=temp.getParticipantes();
            List<Aluno> tempAluno = new ArrayList<>();
            participantes.forEach(projetoAluno -> {
                if (projetoAluno.getProjeto()==temp) {
                    Aluno aluno = projetoAluno.getAluno();
                    aluno.setTarefas(null);
                    aluno.setProjetosAluno(null);
                    tempAluno.add(aluno);

                }
            });
            return tempAluno;
        } else
            throw new Exception("Não foi possível encontrar o proojeto");
    }
    @GetMapping("/todosProjetos")
    public List<Projeto> getTodosProjetos(){
        List<Projeto> todos = projetoRepository.findAll();
    return todos;
    }
}
