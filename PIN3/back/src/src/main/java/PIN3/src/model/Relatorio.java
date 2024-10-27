package PIN3.src.model;

import jakarta.persistence.Entity;


public interface Relatorio {

    Projeto getProjeto();
    void setProjeto(Projeto projeto);
    void gerarRelatorio();

}
