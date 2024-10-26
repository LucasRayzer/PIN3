package PIN3.src.model;


import jakarta.persistence.*;

import java.util.List;
@Entity
public class Admin extends Usuario{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer admin_id;

    @OneToMany(mappedBy = "admin_id")
    private List<Coordenador> listCoord;


    public List<Coordenador> getListCoord() {
        return listCoord;
    }

    public void setListCoord(List<Coordenador> listCoord) {
        this.listCoord = listCoord;
    }

    public Integer getAdmin_id() {
        return admin_id;
    }

    public void setAdmin_id(Integer admin_id) {
        this.admin_id = admin_id;
    }
}
