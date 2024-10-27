package PIN3.src.controller;

import PIN3.src.model.Aluno;
import PIN3.src.model.Coordenador;
import PIN3.src.repository.AlunoRepository;
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


}
