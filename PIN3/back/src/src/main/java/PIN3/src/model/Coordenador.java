package PIN3.src.model;

import jakarta.persistence.*;

import java.util.List;
@Entity
public class Coordenador extends Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer coord_id;

    @OneToMany(mappedBy = "coord_id")
    private List<Projeto> projetos;

    @ManyToOne
    @JoinColumn(name = "admin_id")
    private Admin adm;

    public Integer getCoord_id() {
        return coord_id;
    }

    public void setCoord_id(Integer coord_id) {
        this.coord_id = coord_id;
    }

    public List<Projeto> getProjetos() {
        return projetos;
    }

    public void setProjetos(List<Projeto> projetos) {
        this.projetos = projetos;
    }
}
