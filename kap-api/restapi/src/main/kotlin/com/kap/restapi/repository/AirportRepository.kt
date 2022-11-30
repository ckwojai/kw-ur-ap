package com.kap.restapi.repository

import com.kap.restapi.model.Airport
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.mongodb.repository.Query
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface AirportRepository: MongoRepository<Airport,String> {
    @Query("{'name':?0}")
    fun findByName(name:String): Optional<Airport>
    @Query("{elevation_ft: {\$gt : ?0, \$lt : ?1}}")
    fun findByElevationRange(min:Double, max:Double): List<Airport>
}