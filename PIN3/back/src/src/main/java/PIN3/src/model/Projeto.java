package PIN3.src.model;


import java.util.List;

public class Projeto {
    private Coordenador coordenador;
    private List<Aluno> particpantes;
    private List<Tarefa> tarefas;
    private String nomeProjeto;
    private String descricaoProjeto;

    public Projeto(Coordenador coordenador, List<Aluno> particpantes, List<Tarefa> tarefas, String nomeProjeto, String descricaoProjeto) {
        this.coordenador = coordenador;
        this.particpantes = particpantes;
        this.tarefas = tarefas;
        this.nomeProjeto = nomeProjeto;
        this.descricaoProjeto = descricaoProjeto;
    }

    public Coordenador getCoordenador() {
        return coordenador;
    }

    public void setCoordenador(Coordenador coordenador) {
        this.coordenador = coordenador;
    }

    public List<Aluno> getParticpantes() {
        return particpantes;
    }

    public void setParticpantes(List<Aluno> particpantes) {
        this.particpantes = particpantes;
    }

    public List<Tarefa> getTarefas() {
        return tarefas;
    }

    public void setTarefas(List<Tarefa> tarefas) {
        this.tarefas = tarefas;
    }

    public String getNomeProjeto() {
        return nomeProjeto;
    }

    public void setNomeProjeto(String nomeProjeto) {
        this.nomeProjeto = nomeProjeto;
    }

    public String getDescricaoProjeto() {
        return descricaoProjeto;
    }

    public void setDescricaoProjeto(String descricaoProjeto) {
        this.descricaoProjeto = descricaoProjeto;
    }
}

