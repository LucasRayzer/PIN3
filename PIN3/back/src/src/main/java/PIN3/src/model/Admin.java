package PIN3.src.model;


import jakarta.persistence.*;

import java.util.List;
@Entity
public class Admin extends Usuario{


    @OneToMany(mappedBy = "user_id")
    private List<Coordenador> listCoord;


    public List<Coordenador> getListCoord() {
        return listCoord;
    }

    public void setListCoord(List<Coordenador> listCoord) {
        this.listCoord = listCoord;
    }

}
