package com.disaster.backend.service;

import com.disaster.backend.model.Disaster;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface DisasterService {
    public Disaster saveDisaster(Disaster disaster);
    public List<Disaster> getAllTrips();

    void deleteDisasterById(int id);
}
