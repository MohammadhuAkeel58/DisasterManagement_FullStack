package com.disaster.backend.controller;

import com.disaster.backend.model.Disaster;
import com.disaster.backend.service.DisasterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/disaster")
public class DisasterController {
    @Autowired
    private DisasterService disasterService;
    @PostMapping("/add")
    public String add(@RequestBody Disaster disaster){
        disasterService.saveDisaster(disaster);
        return "New Disaster is added";

    }
    @DeleteMapping("/deleteDisaster/{id}")
    public String deleteDisasterById(@PathVariable int id){
        disasterService.deleteDisasterById(id);
        return "Delete With ID "+ id+"has been deleted.";
    }

    @GetMapping("/getAll")
    public List<Disaster> getAllTrips(){
        return disasterService.getAllTrips();
    }



}
