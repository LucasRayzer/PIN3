package PIN3.src.controller;

import PIN3.src.model.Projeto;
import PIN3.src.repository.ProjetoRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.concurrent.atomic.AtomicInteger;

@RestController
@RequestMapping("/projeto")
public class ControllerProjeto {
    @Autowired
    private ProjetoRepository projetoRepository;

    @PostMapping("/novoProjeto")
    public ResponseEntity<Projeto> createProjeto(@Valid @RequestBody Projeto projeto){
        Projeto savedProjeto = projetoRepository.save(projeto);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedProjeto.getProjetoId())
                .toUri();
        return ResponseEntity.created(location).build();
    }

    @GetMapping("/{id}")
    public Projeto getProjetoStatusById(@PathVariable int id)throws Exception{
        if(projetoRepository.existsById(id)) {
            Projeto temp =projetoRepository.findById(id).get();
            temp.getStatusProjeto();
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
}
