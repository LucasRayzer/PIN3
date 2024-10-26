package PIN3.src.model;

import jakarta.persistence.Entity;

@Entity
public interface Relatorio {

    Projeto getProjeto();
    void setProjeto(Projeto projeto);
    void gerarRelatorio();

}
