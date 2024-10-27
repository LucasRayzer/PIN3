package PIN3.src.controller;

import PIN3.src.model.RelatorioAdmin;
import PIN3.src.model.RelatorioCoordenador;
import PIN3.src.repository.RelAdmRepository;
import PIN3.src.repository.RelCoordRepository;
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
@RequestMapping("/relatorioCoord")
public class ControllerRelCoord {
    @Autowired
    private RelCoordRepository relCoordRepository;


    @PostMapping("/novoRelCoord")
    public ResponseEntity<RelatorioCoordenador> createRelCoord(@Valid @RequestBody RelatorioCoordenador relatorioCoordenador){
        RelatorioCoordenador savedRelCoord = relCoordRepository.save(relatorioCoordenador);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedRelCoord.getRelatorioId())
                .toUri();
        return ResponseEntity.created(location).build();
    }
}
