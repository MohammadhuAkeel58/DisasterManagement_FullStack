package com.disaster.backend.service;

import com.disaster.backend.DTO.LoginDTO;
import com.disaster.backend.DTO.UserDTO;
import com.disaster.backend.Response.LoginResponse;
import com.disaster.backend.model.User;
import com.disaster.backend.repository.UserRepo;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserImpl implements UserService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public String addUser(UserDTO userDTO) {
        User user = new User(
                userDTO.getUserid(),
                userDTO.getUsername(),
                userDTO.getEmail(),
                passwordEncoder.encode(userDTO.getPassword())
        );

        userRepo.save(user);

        return user.getUsername(); // Assuming you want to return the username
    }

    @Override
    public LoginResponse loginUser(LoginDTO loginDTO) {
        String msg = "";
        User user = userRepo.findByEmail(loginDTO.getEmail());
        if (user != null) {
            String password = loginDTO.getPassword();
            String encodedPassword = user.getPassword();
            boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<User> foundUser = userRepo.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
                return foundUser.isPresent() ?
                        new LoginResponse("Login Success", true) :
                        new LoginResponse("Login Failed", false);
            } else {
                return new LoginResponse("Password Not Match", false);
            }
        } else {
            return new LoginResponse("Email does not exist", false);
        }
    }
}
