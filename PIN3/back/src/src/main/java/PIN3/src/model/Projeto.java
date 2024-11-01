package PIN3.src.model;


import jakarta.persistence.*;

import java.util.List;
@Entity
public class Projeto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer projetoId;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private Coordenador coordenador;

    @OneToMany(mappedBy = "projeto", cascade = CascadeType.ALL)
    private List<ProjetoAluno> participantes;

    @OneToMany(mappedBy = "projeto")
    private List<Tarefa> tarefas;

    @OneToMany(mappedBy = "projeto")
    private List<RelatorioAdmin> relatoriosAdmin;
    @OneToMany(mappedBy = "projeto")
    private List<RelatorioCoordenador> relatoriosCoord;

    private String nomeProjeto;
    private String descricaoProjeto;
    private Integer statusProjeto;

    public Integer getStatusProjeto() {
        return statusProjeto;
    }

    public void setStatusProjeto(Integer statusProjeto) {
        this.statusProjeto = statusProjeto;
    }

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

    public Integer getProjetoId() {
        return projetoId;
    }

    public void setProjetoId(Integer projetoId) {
        this.projetoId = projetoId;
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

