package PIN3.src.model;

import java.util.Date;

public class RelatorioAdmin implements Relatorio{
    private Date dataInicio;
    private Date dataFim;

    public RelatorioAdmin(Date dataInicio, Date dataFim) {
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
    }

    @Override
    public void gerarRelatorio() {

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
