package PIN3.src.model;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity
@Table(name="projeto_aluno")
public class ProjetoAluno implements Serializable {

    @EmbeddedId
    private ProjetoAlunoId projetoAluno_id;


    @ManyToOne
    @MapsId("projetoId")
    @JoinColumn(name = "projeto_id")
    private Projeto projeto;

    @ManyToOne
    @MapsId("alunoId")
    @JoinColumn(name = "user_id")
    private Aluno aluno;


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

    public ProjetoAlunoId getProjetoAluno_id() {
        return projetoAluno_id;
    }

    public void setProjetoAluno_id(ProjetoAlunoId projetoAluno_id) {
        this.projetoAluno_id = projetoAluno_id;
    }
}
