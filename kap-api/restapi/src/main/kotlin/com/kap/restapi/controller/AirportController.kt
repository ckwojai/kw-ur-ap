package com.kap.restapi.controller

import com.kap.restapi.model.Airport
import com.kap.restapi.model.CountryCount
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
    @GetMapping("/elevation")
    fun getAirportByElevationRange(@RequestParam min:Double, @RequestParam max:Double) : ResponseEntity<List<Airport>>
            = ResponseEntity.ok(airportService.getAirportByElevationRange(min, max))

    @GetMapping("/country_count")
    fun getCountryCount(): ResponseEntity<List<CountryCount>>
            = ResponseEntity.ok(airportService.getAirportCountryCount())

    @GetMapping("/nearest")
    fun getAirportByElevationRange(@RequestParam lat:Double, @RequestParam log:Double, @RequestParam(defaultValue="10") limit:Int) : ResponseEntity<List<Airport>>
            = ResponseEntity.ok(airportService.getNearestAirports(log, lat, limit))

    @GetMapping("/{name}")
    fun getAirportByName(@PathVariable name:String) : ResponseEntity<Airport>
            = ResponseEntity.ok(airportService.getAirportByName(name))

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
    @DeleteMapping("/{id}")
    fun deleteAirport(@PathVariable id:String):ResponseEntity<String> {
        airportService.deleteAirport(id)
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build()
    }


}
