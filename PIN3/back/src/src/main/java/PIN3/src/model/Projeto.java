package PIN3.src.model;


import jakarta.persistence.*;

import java.util.List;
@Entity
public class Projeto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer projeto_id;
    @ManyToOne
    @JoinColumn(name = "coord_id")
    private Coordenador coordenador;

    @OneToMany(mappedBy = "projeto_id", cascade = CascadeType.ALL)
    private List<ProjetoAluno> participantes;

    @OneToMany(mappedBy = "projeto_id")
    private List<Tarefa> tarefas;

    @OneToMany(mappedBy = "projeto_id")
    private List<RelatorioAdmin> relatoriosAdmin;
    @OneToMany(mappedBy = "projeto_id")
    private List<RelatorioCoordenador> relatoriosCoord;

    private String nomeProjeto;
    private String descricaoProjeto;


    public Coordenador getCoordenador() {
        return coordenador;
    }

    public void setCoordenador(Coordenador coordenador) {
        this.coordenador = coordenador;
    }

    public List<ProjetoAluno> getParticipantes() {
        return participantes;
    }

    public void setParticipantes(List<ProjetoAluno> participantes) {
        this.participantes = participantes;
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

    public Integer getProjeto_id() {
        return projeto_id;
    }

    public void setProjeto_id(Integer projeto_id) {
        this.projeto_id = projeto_id;
    }

    public List<RelatorioAdmin> getRelatoriosAdmin() {
        return relatoriosAdmin;
    }

    public void setRelatoriosAdmin(List<RelatorioAdmin> relatoriosAdmin) {
        this.relatoriosAdmin = relatoriosAdmin;
    }

    public List<RelatorioCoordenador> getRelatoriosCoord() {
        return relatoriosCoord;
    }

    public void setRelatoriosCoord(List<RelatorioCoordenador> relatoriosCoord) {
        this.relatoriosCoord = relatoriosCoord;
    }
}

