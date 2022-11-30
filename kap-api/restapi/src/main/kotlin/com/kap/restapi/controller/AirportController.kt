package com.kap.restapi.controller

import com.kap.restapi.model.Airport
import com.kap.restapi.service.AirportService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@CrossOrigin
@RestController
@RequestMapping("/api/airport")
class AirportController(@Autowired
                        val airportService: AirportService) {
    @PostMapping
    fun addAirport(@RequestBody airport:Airport) : ResponseEntity<String>{
        airportService.addAirport(airport)
        return ResponseEntity.status(HttpStatus.CREATED).build()
    }
    @PatchMapping
    fun updateAirport(@RequestBody airport:Airport): ResponseEntity<String>{
        airportService.updateAirport(airport)
        return ResponseEntity.ok().build()
    }
    @GetMapping
    fun getAllAirport():ResponseEntity<List<Airport>> {
        return ResponseEntity.ok(airportService.getAllAirport())
    }

    @GetMapping("/{name}")
    fun getAirportByName(@PathVariable name:String) : ResponseEntity<Airport>
            = ResponseEntity.ok(airportService.getAirportByName(name))

    @GetMapping("/elevation")
    fun getAirportByName(@RequestParam min:Double, @RequestParam max:Double) : ResponseEntity<List<Airport>>
            = ResponseEntity.ok(airportService.getAirportByElevationRange(min, max))

    @DeleteMapping("/{id}")
    fun deleteAirport(@PathVariable id:String):ResponseEntity<String> {
        airportService.deleteAirport(id)
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build()
    }
}
