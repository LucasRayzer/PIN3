package PIN3.src.model;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Entity
public class RelatorioAdmin implements Relatorio{

    private LocalDate dataInicio;
    private LocalDate dataFim;
    private double taxaConclusao;
    private int statusProjeto;
    private long diasRestantes;
    private String nomeCoordenador;
    private int totalTarefas;
    private double progressoProjeto;
    private List<String> participantes;
    private double tempoMedioConclusao;
    private double percentualDentroPrazo;
    private String nomeProjeto;
    private int countTarefaConcluida;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer relatorioId;

    @ManyToOne
    @JoinColumn(name = "projeto_Id")
    private Projeto projeto;


    @Override
    public void gerarRelatorio() {

    }
    @Override
    public Projeto getProjeto() {
        return projeto;
    }

    @Override
    public void setProjeto(Projeto projeto) {
        this.projeto = projeto;
    }
    public LocalDate getDataInicio() {
        return dataInicio;
    }

    public void setDataInicio(LocalDate dataInicio) {
        this.dataInicio = dataInicio;
    }

    public LocalDate getDataFim() {
        return dataFim;
    }

    public void setDataFim(LocalDate dataFim) {
        this.dataFim = dataFim;
    }

    public Integer getRelatorioId() {
        return relatorioId;
    }

    public void setRelatorioId(Integer relatorioId) {
        this.relatorioId = relatorioId;
    }

    public double getTaxaConclusao() {
        return taxaConclusao;
    }

    public void setTaxaConclusao(double taxaConclusao) {
        this.taxaConclusao = taxaConclusao;
    }

    public int getStatusProjeto() {
        return statusProjeto;
    }

    public void setStatusProjeto(int statusProjeto) {
        this.statusProjeto = statusProjeto;
    }

    public long getDiasRestantes() {
        return diasRestantes;
    }

    public void setDiasRestantes(long diasRestantes) {
        this.diasRestantes = diasRestantes;
    }

    public String getNomeCoordenador() {
        return nomeCoordenador;
    }

    public void setNomeCoordenador(String nomeCoordenador) {
        this.nomeCoordenador = nomeCoordenador;
    }

    public int getTotalTarefas() {
        return totalTarefas;
    }

    public void setTotalTarefas(int totalTarefas) {
        this.totalTarefas = totalTarefas;
    }

    public double getProgressoProjeto() {
        return progressoProjeto;
    }

    public void setProgressoProjeto(double progressoProjeto) {
        this.progressoProjeto = progressoProjeto;
    }

    public List<String> getParticipantes() {
        return participantes;
    }

    public void setParticipantes(List<String> participantes) {
        this.participantes = participantes;
    }

    public double getTempoMedioConclusao() {
        return tempoMedioConclusao;
    }

    public void setTempoMedioConclusao(double tempoMedioConclusao) {
        this.tempoMedioConclusao = tempoMedioConclusao;
    }

    public double getPercentualDentroPrazo() {
        return percentualDentroPrazo;
    }

    public void setPercentualDentroPrazo(double percentualDentroPrazo) {
        this.percentualDentroPrazo = percentualDentroPrazo;
    }

    public String getNomeProjeto() {
        return nomeProjeto;
    }

    public void setNomeProjeto(String nomeProjeto) {
        this.nomeProjeto = nomeProjeto;
    }

    public int getCountTarefaConcluida() {
        return countTarefaConcluida;
    }

    public void setCountTarefaConcluida(int countTarefaConcluida) {
        this.countTarefaConcluida = countTarefaConcluida;
    }
}
