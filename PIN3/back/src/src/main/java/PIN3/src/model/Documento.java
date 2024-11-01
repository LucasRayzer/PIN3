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
    private String nomeArquivo;
    private long tamanho;

    @Lob  // Define o campo para armazenar um grande objeto binário
    private byte[] arquivo;

    public byte[] getArquivo() {
        return arquivo;
    }

    public void setArquivo(byte[] arquivo) {
        this.arquivo = arquivo;
    }

    public Tarefa getTarefa() {
        return tarefa;
    }

    public void setTarefa(Tarefa tarefa) {
        this.tarefa = tarefa;
    }

    public void setTamanho(long tamanho) {
        this.tamanho = tamanho;
    }

    public long getTamanho() {
        return tamanho;
    }

    public void setTamanho(Integer tamanho) {
        this.tamanho = tamanho;
    }



    public Integer getDocumento_id() {
        return documento_id;
    }

    public void setDocumento_id(Integer documento_id) {
        this.documento_id = documento_id;
    }

    public void setNomeArquivo(String nomeArquivo) {
        this.nomeArquivo = nomeArquivo;
    }

    public String getNomeArquivo() {
        return nomeArquivo;
    }
}
