package PIN3.src.controller;

import PIN3.src.model.Admin;
import PIN3.src.model.Aluno;
import PIN3.src.model.Coordenador;
import PIN3.src.model.Usuario;
import PIN3.src.repository.AdmRepository;
import PIN3.src.repository.AlunoRepository;
import PIN3.src.repository.CoordRepository;
import PIN3.src.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class ControllerUsuario {

    @Autowired
    private AlunoRepository alunoRepository;
    @Autowired
    private CoordRepository coordRepository;
    @Autowired
    private AdmRepository admRepository;
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/nome/{username}")
    public Usuario getUserByName(@PathVariable String username) throws Exception{
        Usuario usuario = userRepository.findByNome(username);
        if (usuario.getTipoUsuario()==1){
            Admin admTemp = admRepository.findById(usuario.getUser_id()).get();
            admTemp.setListCoord(null);
            return admTemp;
        }
        if (usuario.getTipoUsuario()==2){
            Coordenador ctemp = coordRepository.findById(usuario.getUser_id()).get();
            ctemp.setProjetos(null);
            return ctemp;
        }
        if (usuario.getTipoUsuario()==3){
            Aluno alunotemp= alunoRepository.findById(usuario.getUser_id()).get();
            alunotemp.setProjetosAluno(null);
            alunotemp.setTarefas(null);
            return alunotemp;
        }
        if(usuario!=null)
            return usuario;
        else
            throw new Exception("Usuario não foi encontrado");

    }

}
