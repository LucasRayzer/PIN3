package PIN3.src.model;

import jakarta.persistence.*;


import java.util.List;

@Entity
public class Aluno extends Usuario {



    @OneToMany(mappedBy = "aluno")
    private List<Tarefa> tarefas;
    @OneToMany(mappedBy = "aluno", cascade = CascadeType.ALL)
    private List<ProjetoAluno> projetosAluno;

    public List<ProjetoAluno> getProjetosAluno() {
        return projetosAluno;
    }

    public void setProjetosAluno(List<ProjetoAluno> projetosAluno) {
        this.projetosAluno = projetosAluno;
    }

    public List<Tarefa> getTarefas() {
        return tarefas;
    }

    public void setTarefas(List<Tarefa> tarefas) {
        this.tarefas = tarefas;
    }
}
