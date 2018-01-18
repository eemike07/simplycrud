package com.example.workerapp.controller;

import javax.validation.Valid;
import com.example.workerapp.model.Worker;
import com.example.workerapp.repository.WorkerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class WorkerController {

    @Autowired
    WorkerRepository workerRepository;

    @GetMapping("/workers")
    public List<Worker> getAllWorkers() {
        Sort sortByCreatedAtDesc = new Sort(Sort.Direction.DESC, "createdAt");
        return workerRepository.findAll(sortByCreatedAtDesc);
    }

    @PostMapping("/workers")
    public Worker createWorker(@Valid @RequestBody Worker worker) {
        worker.setActive(true);
        return workerRepository.save(worker);
    }

    @GetMapping(value="/workers/{id}")
    public ResponseEntity<Worker> getWorkerById(@PathVariable("id") String id) {
        Worker worker = workerRepository.findOne(id);
        if(worker == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(worker, HttpStatus.OK);
        }
    }

    @GetMapping(value="/workers/find/{last}")
    public ResponseEntity<Worker> getWorkerByLastName(@PathVariable("last") String lastName) {
        Worker worker = workerRepository.findByLastNameContainingIgnoreCase(lastName);
        if(worker == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(worker, HttpStatus.OK);
        }
    }

    @PutMapping(value="/workers/{id}")
    public ResponseEntity<Worker> updateWorker(@PathVariable("id") String id,
                                           @Valid @RequestBody Worker worker) {
        Worker workerData = workerRepository.findOne(id);
        if(workerData == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        workerData.setFirstName(worker.getFirstName());
        workerData.setLastName(worker.getLastName());
        workerData.setMiddleInitial(worker.getMiddleInitial());
        workerData.setEmail(worker.getEmail());
        workerData.setPhoneNumber(worker.getPhoneNumber());
        workerData.setPositionCategory(worker.getPositionCategory());
        workerData.setDateHired(worker.getDateHired());
        workerData.setAddressOne(worker.getAddressOne());
        workerData.setAddressTwo(worker.getAddressTwo());
        workerData.setCity(worker.getCity());
        workerData.setState(worker.getState());
        workerData.setZipcode(worker.getZipcode());
        workerData.setActive(worker.isActive());

        Worker updatedWorker = workerRepository.save(workerData);
        return new ResponseEntity<>(updatedWorker, HttpStatus.OK);
    }

    @DeleteMapping(value="/workers/{id}")
    public void deleteWorker(@PathVariable("id") String id) {
        workerRepository.delete(id);
    }


}
