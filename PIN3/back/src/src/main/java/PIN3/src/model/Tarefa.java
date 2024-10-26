package PIN3.src.model;

import jakarta.persistence.*;

import java.util.Date;
import java.util.List;
@Entity
public class Tarefa {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int tarefa_id;
    @ManyToOne
    @JoinColumn(name = "projeto_id")
    private Projeto projeto;
    @OneToMany(mappedBy = "tarefa_id")
    private List<Documento> documentos;
    private String descricao;
    private Date dataEntrega;

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
