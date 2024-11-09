package PIN3.src.controller;

import PIN3.src.model.*;
import PIN3.src.repository.CoordRepository;
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
        if(coordRepository.existsById(id)) {
            Coordenador coord = coordRepository.findById(id).get();
            List<Projeto> projetoDoCoord= coord.getProjetos();
            projetoDoCoord.forEach(projeto -> {
                if (projeto.getCoordenador()==coord){
                        projeto.setCoordenador(null);
                }
            });
            return projetoDoCoord;
        } else
            throw new Exception("Não foi possível encontrar o proojeto");
    }
    //fazer endpoint para criar o get de relatorios
    @GetMapping("/relatorios/{id}")
    public List<RelatorioCoordenador> getRelatorioCoord(@PathVariable int id)throws Exception{
        if (coordRepository.existsById(id)){

        }
        return List.of();
    }
    @GetMapping("/nomeCoord/{id}")
        public String getNomeCoord(@PathVariable int id)throws Exception{
            return coordRepository.findById(id).get().getNome();
    }

}