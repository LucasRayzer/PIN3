package PIN3.src.model;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.Date;
@Entity
public class RelatorioAdmin implements Relatorio{

    private LocalDate dataInicio;
    private LocalDate dataFim;

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
}
