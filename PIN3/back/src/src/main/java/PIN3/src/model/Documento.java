package PIN3.src.model;

import jakarta.persistence.*;

import java.io.File;
@Entity
public class Documento {

    @ManyToOne
    @JoinColumn(name = "tarefa_id")
    private Tarefa tarefa;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer documento_id;

    private long tamanho;
    private File arquivo;



    public long getTamanho() {
        return tamanho;
    }

    public void setTamanho(Integer tamanho) {
        this.tamanho = tamanho;
    }

    public File getArquivo() {
        return arquivo;
    }

    public void setArquivo(File arquivo) {
        this.arquivo = arquivo;
    }

    public Integer getDocumento_id() {
        return documento_id;
    }

    public void setDocumento_id(Integer documento_id) {
        this.documento_id = documento_id;
    }
}
