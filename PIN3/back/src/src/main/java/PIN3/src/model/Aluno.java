package PIN3.src.model;

import jakarta.persistence.*;


import java.util.List;

@Entity
public class Aluno extends Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer aluno_id;

    public Integer getAluno_id() {
        return aluno_id;
    }

    public void setAluno_id(Integer aluno_id) {
        this.aluno_id = aluno_id;
    }

    @OneToMany(mappedBy = "aluno", cascade = CascadeType.ALL)
    private List<ProjetoAluno> projetosAluno;

    public List<ProjetoAluno> getProjetosAluno() {
        return projetosAluno;
    }

    public void setProjetosAluno(List<ProjetoAluno> projetosAluno) {
        this.projetosAluno = projetosAluno;
    }
}
