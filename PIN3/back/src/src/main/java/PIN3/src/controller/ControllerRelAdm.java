package PIN3.src.controller;


import PIN3.src.model.Projeto;
import PIN3.src.model.RelatorioAdmin;
import PIN3.src.repository.ProjetoRepository;
import PIN3.src.repository.RelAdmRepository;
import PIN3.src.resources.RelatorioService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.core.Local;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.text.DateFormat;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/relatorioAdm")
public class ControllerRelAdm {

    @Autowired
    private RelAdmRepository relAdmRepository;
    @Autowired
    private ProjetoRepository projetoRepository;
    @Autowired
    private RelatorioService relatorioService;

    @PostMapping("/novoRelAdmin")
    public ResponseEntity<RelatorioAdmin> createRelAdmin(@Valid @RequestBody RelatorioAdmin relatorioAdmin){
        RelatorioAdmin savedRelAdmin = relAdmRepository.save(relatorioAdmin);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedRelAdmin.getRelatorioId())
                .toUri();
        return ResponseEntity.created(location).build();
    }
    @GetMapping("/projetos")
    public List<Projeto> getProjetosPorPeriodo(
            @RequestParam("dataInicio") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate dataInicio,
            @RequestParam("dataFim") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate dataFim) {

        return projetoRepository.findByDataInicioBetween(dataInicio, dataFim);
    }
    @GetMapping("/relatorios")
    public ResponseEntity<?> gerarRelatoriosPorPeriodo(
            @RequestParam("dataInicio") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate dataInicio,
            @RequestParam("dataFim") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate dataFim) {

        List<Projeto> projetos = projetoRepository.findByDataInicioBetween(dataInicio, dataFim);
        projetos.forEach(projeto -> {

            relatorioService.gerarRelatorioProjeto(projeto);
        });

        return ResponseEntity.ok("Relatórios gerados com sucesso!");
    }

}
