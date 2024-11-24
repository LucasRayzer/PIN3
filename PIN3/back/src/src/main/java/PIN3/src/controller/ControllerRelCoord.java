package PIN3.src.controller;

import PIN3.src.model.Projeto;
import PIN3.src.model.Relatorio;
import PIN3.src.model.RelatorioAdmin;
import PIN3.src.model.RelatorioCoordenador;
import PIN3.src.repository.ProjetoRepository;
import PIN3.src.repository.RelAdmRepository;
import PIN3.src.repository.RelCoordRepository;
import PIN3.src.resources.RelatorioService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/relatorioCoord")
@CrossOrigin
public class ControllerRelCoord {
    @Autowired
    private RelCoordRepository relCoordRepository;
    @Autowired
    private ProjetoRepository projetoRepository;
    @Autowired
    private RelatorioService relatorioService;

    @PostMapping("/novoRelCoord")
    public ResponseEntity<RelatorioCoordenador> createRelCoord(@Valid @RequestBody RelatorioCoordenador relatorioCoordenador){
        RelatorioCoordenador savedRelCoord = relCoordRepository.save(relatorioCoordenador);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedRelCoord.getRelatorioId())
                .toUri();

        return ResponseEntity.created(location).build();

    }
    @GetMapping("/relatorios/{id}")
    public ResponseEntity<?> gerarRelatorios(@PathVariable int id) {
            Projeto projeto = projetoRepository.findById(id).get();

            relatorioService.geraRelCoord(projeto);

            return ResponseEntity.ok("Relatório gerado com sucesso!");
    }
    @DeleteMapping("/deleteRelAdm/{id}")
    public void deleteRelatorio(@PathVariable int id){
        relCoordRepository.deleteById(id);
    }
    @GetMapping("/todosRel")
    public List<RelatorioCoordenador> getTodosRelAdm(){
        List<RelatorioCoordenador> relatorioCoordenador = relCoordRepository.findAll();
        relatorioCoordenador.forEach(relatorioCoord -> {
            relatorioCoord.setNomeCoordenador(null);
            relatorioCoord.setProjeto(null);
        });
        return relatorioCoordenador;
    }
    @GetMapping("/relPorId/{id}")
    public RelatorioCoordenador getRelatorio(@PathVariable int id){

        RelatorioCoordenador relTemp = relCoordRepository.findById(id).get();
        relTemp.setProjeto(null);
        return  relTemp;
    }
}
