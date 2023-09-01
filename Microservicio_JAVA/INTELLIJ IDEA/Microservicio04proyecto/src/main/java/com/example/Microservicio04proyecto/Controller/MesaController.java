package com.example.Microservicio04proyecto.Controller;
import org.springframework.ui.Model;
import com.example.Microservicio04proyecto.Model.Mesa;
import com.example.Microservicio04proyecto.Repository.TodoRepositoryMesa;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"*"})

public class MesaController {
    @Autowired
    private TodoRepositoryMesa todoRepository;
    @GetMapping(value = "/")
    public String holaMundo(){
        return "HOLA MUNDO!!";
    }

    //MESA
    @GetMapping(value = "/mesas")
    public List<Mesa> getMesas(){
        return todoRepository.findAll();
    }


    @PostMapping(value = "/savemesa")
    public String saveMesa(@RequestBody Mesa mesa){
        todoRepository.save(mesa);
        return "Saved mesa";
    }

    @PutMapping(value = "/updateMesa/{id}")
    public String updateMesas(@PathVariable long id,@RequestBody Mesa mesa){
        Mesa updateMesa=todoRepository.findById(id).get();
        updateMesa.setZONA_MESA(mesa.getZONA_MESA());
        updateMesa.setNUM_MESA(mesa.getNUM_MESA());
        todoRepository.save(updateMesa);
        return "Update Mesa";
    }
    @DeleteMapping(value = "/deleteMesa/{id}")
    public String deleteMesa(@PathVariable long id){
        Mesa deleteMesa=todoRepository.findById(id).get();
        todoRepository.delete(deleteMesa);
        return "Delete Mesa";
    }
}
