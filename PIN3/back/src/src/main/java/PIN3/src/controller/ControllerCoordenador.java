package PIN3.src.controller;

import PIN3.src.model.Coordenador;
import PIN3.src.model.Projeto;
import PIN3.src.repository.CoordRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/coordenador")
public class ControllerCoordenador {
    @Autowired
    private CoordRepository coordRepository;
    @Autowired
    private ControllerProjeto controllerProjeto;

    @PostMapping("/novoCoordenador")
    public ResponseEntity<Coordenador> createCoordenador(@Valid @RequestBody Coordenador coordenador){
        Coordenador savedCoordenador = coordRepository.save(coordenador);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedCoordenador.getUser_id())
                .toUri();
        return ResponseEntity.created(location).build();
    }



}