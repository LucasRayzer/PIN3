package PIN3.src.model;

import java.util.Date;
import java.util.List;

public class Tarefa {

    private List<Documento> documentos;
    private String descricao;
    private Date dataEntrega;

    public Tarefa(List<Documento> documentos, String descricao, Date dataEntrega) {
        this.documentos = documentos;
        this.descricao = descricao;
        this.dataEntrega = dataEntrega;
    }

    public List<Documento> getDocumentos() {
        return documentos;
    }

    public void setDocumentos(List<Documento> documentos) {
        this.documentos = documentos;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Date getDataEntrega() {
        return dataEntrega;
    }

    public void setDataEntrega(Date dataEntrega) {
        this.dataEntrega = dataEntrega;
    }
}
