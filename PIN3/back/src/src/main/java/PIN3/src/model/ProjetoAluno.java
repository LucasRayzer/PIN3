package PIN3.src.model;

import jakarta.persistence.*;

@Entity
public class ProjetoAluno {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer projetAluno_id;

    @ManyToOne
    @JoinColumn(name = "projeto_id")
    private Projeto projeto;

    @ManyToOne
    @JoinColumn(name = "aluno_id")
    private Aluno aluno;


    // Construtor padrão
    public ProjetoAluno() {}

    // Construtor com parâmetros
    public ProjetoAluno(Projeto projeto, Aluno aluno) {
        this.projeto = projeto;
        this.aluno = aluno;

    }

    public Integer getProjetAluno_id() {
        return projetAluno_id;
    }

    public void setProjetAluno_id(Integer projetAluno_id) {
        this.projetAluno_id = projetAluno_id;
    }

    public Projeto getProjeto() {
        return projeto;
    }

    public void setProjeto(Projeto projeto) {
        this.projeto = projeto;
    }

    public Aluno getAluno() {
        return aluno;
    }

    public void setAluno(Aluno aluno) {
        this.aluno = aluno;
    }
}
