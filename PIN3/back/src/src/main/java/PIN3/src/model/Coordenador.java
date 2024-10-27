package PIN3.src.model;

import jakarta.persistence.*;

import java.util.List;
@Entity
public class Coordenador extends Usuario {


    @OneToMany(mappedBy = "projetoId")
    private List<Projeto> projetos;

    @ManyToOne
    @JoinColumn(name = "userCoord_id")
    private Admin adm;


    public List<Projeto> getProjetos() {
        return projetos;
    }

    public void setProjetos(List<Projeto> projetos) {
        this.projetos = projetos;
    }
}
