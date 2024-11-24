package PIN3.src;

import PIN3.src.model.Admin;
import PIN3.src.model.Usuario;
import PIN3.src.repository.AdmRepository;
import PIN3.src.repository.UserRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class DefaultDataInitializer {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private AdmRepository admRepository;

    @PostConstruct
    public void initializeDefaultData() {
        String defaultAdmin = "Marcelo";
        if (userRepository.findByNome(defaultAdmin)==null) {
            Admin admDefault = new Admin();
            admDefault.setNome("Marcelo");
            admDefault.setTipoUsuario(1);
            admDefault.setSenha("1234");
            admRepository.save(admDefault);
            System.out.println("Adminsitrador padrão criado com sucesso.");
        } else {
            System.out.println("Adminsitrador padrão já existe.");
        }
    }
}