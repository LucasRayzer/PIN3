package PIN3.src.model;

import jakarta.persistence.*;

import java.util.Date;
@Entity
public class RelatorioAdmin implements Relatorio{

    private Date dataInicio;
    private Date dataFim;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer relatorioId;

    @ManyToOne
    @JoinColumn(name = "projeto_id")
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
    public Date getDataInicio() {
        return dataInicio;
    }

    public void setDataInicio(Date dataInicio) {
        this.dataInicio = dataInicio;
    }

    public Date getDataFim() {
        return dataFim;
    }

    public void setDataFim(Date dataFim) {
        this.dataFim = dataFim;
    }
}
