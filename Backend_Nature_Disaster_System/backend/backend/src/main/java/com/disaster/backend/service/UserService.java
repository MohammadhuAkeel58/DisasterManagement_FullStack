package com.disaster.backend.service;
import com.disaster.backend.DTO.LoginDTO;
import com.disaster.backend.DTO.UserDTO;
import com.disaster.backend.Response.LoginResponse;


public interface UserService {
        String addUser(UserDTO userDTO);

        LoginResponse loginUser(LoginDTO loginDTO);

    }

