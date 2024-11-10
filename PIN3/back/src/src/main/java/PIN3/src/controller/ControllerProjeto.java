package PIN3.src.controller;

import PIN3.src.model.Aluno;
import PIN3.src.model.Projeto;
import PIN3.src.model.ProjetoAluno;
import PIN3.src.model.ProjetoAlunoId;
import PIN3.src.repository.AlunoRepository;
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
public class ControllerProjeto {
    @Autowired
    private ProjetoRepository projetoRepository;
    @Autowired
    private AlunoRepository alunoRepository;
    @Autowired
    private ProjetoAlunoRepository projetoAlunoRepository;
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

    @GetMapping("/{id}")
    public Projeto getProjetoStatusById(@PathVariable int id)throws Exception{
        if(projetoRepository.existsById(id)) {
            Projeto temp =projetoRepository.findById(id).get();
            temp.getStatusProjeto();
            temp.setCoordenador(null);
            temp.setParticipantes(null);
            return temp;
        } else
            throw new Exception("Não foi possível encontrar o proojeto");
    }
    @GetMapping("/update/{id}")
    public AtomicInteger updateProjetoStatusById(@PathVariable int id)throws Exception{
        AtomicInteger concluida= new AtomicInteger();
        AtomicInteger parada= new AtomicInteger();
        AtomicInteger emAnalise= new AtomicInteger();
        AtomicInteger emAndamento= new AtomicInteger();
        projetoRepository.findTarefaByProjetoId(id).forEach(tarefa -> {
           if (tarefa.getStatusTarefa()==1){
               concluida.getAndIncrement();
           }
           if (tarefa.getStatusTarefa()==2){
               parada.getAndIncrement();
           }
            if (tarefa.getStatusTarefa()==3){
                emAnalise.getAndIncrement();
            }
            if (tarefa.getStatusTarefa()==4){
                emAndamento.getAndIncrement();
            }

       });
        if(concluida.get()>=parada.get()&& concluida.get()>=emAnalise.get()&&concluida.get()>=emAndamento.get()){
            return concluida;
        }else if (parada.get()>=concluida.get()&&parada.get()>=emAnalise.get()&&parada.get()>=emAndamento.get()){
            return parada;
        }else if (emAnalise.get()>=concluida.get()&&emAnalise.get()>=parada.get()&&emAnalise.get()>=emAndamento.get()){
            return emAnalise;
        }else return emAndamento;

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
}
