package PIN3.src.model;

import java.io.File;

public class Documento {

    private long tamanho;
    private File arquivo;

    public Documento(long tamanho, File arquivo) {
        this.tamanho = tamanho;
        this.arquivo = arquivo;
    }

    public long getTamanho() {
        return tamanho;
    }

    public void setTamanho(long tamanho) {
        this.tamanho = tamanho;
    }

    public File getArquivo() {
        return arquivo;
    }

    public void setArquivo(File arquivo) {
        this.arquivo = arquivo;
    }
}
