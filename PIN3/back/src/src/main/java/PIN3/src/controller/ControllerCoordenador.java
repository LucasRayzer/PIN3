package PIN3.src.controller;

import PIN3.src.model.*;
import PIN3.src.repository.CoordRepository;
import PIN3.src.repository.ProjetoRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/coordenador")
public class ControllerCoordenador {
    @Autowired
    private CoordRepository coordRepository;
    @Autowired
    private ControllerProjeto controllerProjeto;
    @Autowired
    private ProjetoRepository projetoRepository;

    @PostMapping("/novoCoordenador")
    public ResponseEntity<Coordenador> createCoordenador(@Valid @RequestBody Coordenador coordenador){
        Coordenador savedCoordenador = coordRepository.save(coordenador);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedCoordenador.getUser_id())
                .toUri();
        return ResponseEntity.created(location).build();
    }

    @GetMapping("/projeto/{id}")
    public List<Projeto> getProjetoCoordById(@PathVariable int id)throws Exception{
        List<Projeto> projeto = projetoRepository.findAll();
        List <Projeto> projTemp = new ArrayList<>();

        projeto.forEach(projeto1 -> {
            if (projeto1.getCoordenador()==coordRepository.findById(id).get()){
                projeto1.setCoordenador(null);
                projeto1.setParticipantes(null);
                projeto1.setTarefas(null);
                projeto1.setRelatoriosAdmin(null);
                projeto1.setRelatoriosCoord(null);
                projTemp.add(projeto1);

            }
        });

            return projTemp;

    }
    //fazer endpoint para criar o get de relatorios
    @GetMapping("/relatorios/{id}")
    public List<RelatorioCoordenador> getRelatorioCoord(@PathVariable int id)throws Exception{
        if (coordRepository.existsById(id)){

        }
        return List.of();
    }


}