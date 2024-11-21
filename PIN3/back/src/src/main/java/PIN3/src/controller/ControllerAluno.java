package PIN3.src.controller;

import PIN3.src.model.Aluno;
import PIN3.src.model.Coordenador;
import PIN3.src.model.Projeto;
import PIN3.src.model.ProjetoAluno;
import PIN3.src.repository.AlunoRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/aluno")
public class ControllerAluno {
    @Autowired
    private AlunoRepository alunoRepository;

    @PostMapping("/novoAluno")
    public ResponseEntity<Aluno> createAluno (@Valid @RequestBody Aluno aluno){
        Aluno savedAluno = alunoRepository.save(aluno);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedAluno.getUser_id())
                .toUri();
        return ResponseEntity.created(location).build();
    }
    @GetMapping("/projeto/{id}")
    public List<Projeto> getProjetoAlunoById(@PathVariable int id)throws Exception{
        if(alunoRepository.existsById(id)) {
            Aluno aluno = alunoRepository.findById(id).get();
            List<ProjetoAluno> projetoDoAluno = aluno.getProjetosAluno();
            List<Projeto> temp = new ArrayList<>();
            projetoDoAluno.forEach(projetoAluno -> {
                if (projetoAluno.getAluno()==aluno){
                    Projeto projeto = projetoAluno.getProjeto();
                    projeto.setParticipantes(null);
                    projeto.setCoordenador(null);
                    projeto.setTarefas(null);
                    projeto.setRelatoriosAdmin(null);
                    projeto.setRelatoriosCoord(null);
                    temp.add(projeto);
                }
            });
            return temp;
        } else
            throw new Exception("Não foi possível encontrar o projeto");
    }
    @GetMapping("/todosAlunos")
    public List<Aluno> getAllAlunos(){
        List<Aluno> aluno = alunoRepository.findAll();
        aluno.forEach(aluno1 -> {
            aluno1.setTarefas(null);
            aluno1.setProjetosAluno(null);
        });
        return aluno;
    }
}
