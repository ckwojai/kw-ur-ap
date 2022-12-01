package com.kap.restapi.service

import com.kap.restapi.model.Airport
import com.kap.restapi.model.CountryCount
import com.kap.restapi.repository.AirportRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.lang.RuntimeException

@Service
class AirportService( @Autowired val airportRepository:AirportRepository) {
    fun getAirportByElevationRange(min:Double, max:Double): List<Airport> = airportRepository.findByElevationRange(min, max)

    fun getAirportByName(name:String):Airport=airportRepository.findByName(name).
    orElseThrow{ throw RuntimeException("Cannot find Airport by Name") }

    fun getAirportCountryCount():List<CountryCount> = airportRepository.aggregateByCountryCount()

    fun getNearestAirports(lat:Double, log:Double, limit:Int):List<Airport>
            = airportRepository.findNearestAirports(lat, log, limit)
    fun addAirport(airport:Airport):Airport=airportRepository.insert(airport)

    fun updateAirport(airport:Airport){
        val savedAirport:Airport = airportRepository
            .findById(airport.id)
            .orElseThrow { throw RuntimeException("Cannot find Airport by ID") }
        savedAirport.name=airport.name
        airportRepository.save(savedAirport)
    }

    fun getAllAirport(): List<Airport> = airportRepository.findAll()

    fun deleteAirport(id:String)=airportRepository.deleteById(id)

}