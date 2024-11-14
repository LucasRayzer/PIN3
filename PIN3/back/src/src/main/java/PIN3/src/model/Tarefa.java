package PIN3.src.model;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.List;
import java.util.concurrent.TimeUnit;

@Entity
public class Tarefa {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int tarefa_id;
    @ManyToOne
    @JoinColumn(name = "projetoId")
    private Projeto projeto;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private Aluno aluno;
    @OneToMany(mappedBy = "tarefa")
    private List<Documento> documentos;

    private String nomeTarefa;
    private String descricao;
    private LocalDate dataEntrega;
    private LocalDate dataInicio;
    private LocalDate dataFim;
    private Integer statusTarefa;

    public List<Documento> getDocumentos() {
        return documentos;
    }

    public void setDocumentos(List<Documento> documentos) {
        this.documentos = documentos;
    }

    public String getNomeTarefa() {
        return nomeTarefa;
    }

    public void setNomeTarefa(String nomeTarefa) {
        this.nomeTarefa = nomeTarefa;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public LocalDate getDataEntrega() {
        return dataEntrega;
    }

    public LocalDate getDataInicio() {
        return dataInicio;
    }

    public void setDataInicio() {
        this.dataInicio = LocalDate.now();
    }

    public LocalDate getDataFim() {
        return dataFim;
    }

    public void setDataFim(LocalDate dataFim) {
        this.dataFim = dataFim;
    }

    public void setDataEntrega(Integer statusTarefa) {
        this.statusTarefa = statusTarefa;

        // Define a data de entrega automaticamente se o status for "concluído"
        if (statusTarefa != null && statusTarefa == 1) { // Supondo que 1 representa "concluído"
            this.dataEntrega = LocalDate.now();
        }
    }

    public int getTarefa_id() {
        return tarefa_id;
    }

    public void setTarefa_id(int tarefa_id) {
        this.tarefa_id = tarefa_id;
    }

    public Projeto getProjeto() {
        return projeto;
    }

    public void setProjeto(Projeto projeto) {
        this.projeto = projeto;
    }

    public Aluno getAluno() {
        return aluno;
    }

    public void setAluno(Aluno aluno) {
        this.aluno = aluno;
    }

    public Integer getStatusTarefa() {
        return statusTarefa;
    }

    public void setStatusTarefa(Integer statusTarefa) {
        this.statusTarefa = statusTarefa;
    }

    public Long getPrazoEmDias() {
        if (getDataFim() != null && getDataInicio() != null) {
            return ChronoUnit.DAYS.between(getDataInicio(), getDataFim());
        }
        return null;
    }
}
