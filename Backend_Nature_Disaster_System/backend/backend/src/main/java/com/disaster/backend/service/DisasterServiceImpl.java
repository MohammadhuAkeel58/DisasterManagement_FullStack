package com.disaster.backend.service;

import com.disaster.backend.model.Disaster;
import com.disaster.backend.repository.DisasterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DisasterServiceImpl implements DisasterService{

    @Autowired
    private DisasterRepository disasterRepository;

    @Override
    public Disaster saveDisaster(Disaster disaster) {
        return disasterRepository.save(disaster);
    }

    @Override
    public List<Disaster> getAllTrips() {
        return disasterRepository.findAll();
    }

    public void deleteDisasterById(int id){
        disasterRepository.deleteById(id);
    }
}
