package com.kap.restapi.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.index.Indexed
import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.data.mongodb.core.mapping.Field
import org.springframework.stereotype.Component
import java.math.BigDecimal
import java.math.BigInteger

@Document("airports")
data class Airport(
    @Id
    val id:String,
    @Indexed(unique=true)
    var name:String,
    var ident:String,
    var type:String,
    var latitude_deg:BigDecimal,
    var longitude_deg:BigDecimal,
    var elevation_ft:BigInteger?,
    var continent:String,
    var iso_country:String,
    var iso_region:String,
    var municipality:String,
    var scheduled_service:String,
    var gps_code:String,
    var iata_code:String,
    var local_code:String,
    var home_link:String,
    var wikipedia_link:String,
    var keywords:String
)