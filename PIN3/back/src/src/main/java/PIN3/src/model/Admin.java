package PIN3.src.model;


import java.util.List;

public class Admin extends Usuario{

     private List<Coordenador> listCoord;

    public Admin(String usuario, String senha, String nome, int tipoUsuario, List<Coordenador> listCoord) {
        super(usuario, senha, nome, tipoUsuario);
        this.listCoord = listCoord;
    }

    public List<Coordenador> getListCoord() {
        return listCoord;
    }

    public void setListCoord(List<Coordenador> listCoord) {
        this.listCoord = listCoord;
    }
}
