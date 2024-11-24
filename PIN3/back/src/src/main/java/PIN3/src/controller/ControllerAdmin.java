package PIN3.src.controller;


import PIN3.src.model.Admin;
import PIN3.src.repository.AdmRepository;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
/*DROP SCHEMA public CASCADE;
CREATE SCHEMA public;*/
@RestController
@RequestMapping("/admin")
@CrossOrigin
public class ControllerAdmin {
    @Autowired
    private AdmRepository admRepository;

    @PostMapping("/novoAdmin")
    public ResponseEntity<Admin> createAdmin(@Valid @RequestBody Admin admin){
        Admin savedAdmin = admRepository.save(admin);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedAdmin.getUser_id())
                .toUri();
        return ResponseEntity.created(location).build();
    }


}
