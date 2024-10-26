package PIN3.src.model;

import jakarta.persistence.*;

@Entity
public class RelatorioCoordenador implements Relatorio{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer relatorioId;

    @ManyToOne
    @JoinColumn(name = "projeto_id") // Nome da coluna de chave estrangeira na tabela RelatorioImpl
    private Projeto projeto;

    @Override
    public Projeto getProjeto() {
        return projeto;
    }

    @Override
    public void setProjeto(Projeto projeto) {
        this.projeto = projeto;
    }
    @Override
    public void gerarRelatorio() {

    }
}
