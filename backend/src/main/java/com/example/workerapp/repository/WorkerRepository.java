package com.example.workerapp.repository;


import com.example.workerapp.model.Worker;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface WorkerRepository extends MongoRepository<Worker, String> {
    Worker findByLastNameContainingIgnoreCase(String lastName);
}
