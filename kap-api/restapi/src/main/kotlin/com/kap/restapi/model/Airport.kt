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
//{
//    _id: ObjectId("6376f3e975d542b311f2925c"),
//    id: 6523,
//    ident: '00A',
//    type: 'heliport',
//    name: 'Total Rf Heliport',
//    latitude_deg: 40.07080078125,
//    longitude_deg: -74.93360137939453,
//    elevation_ft: 11,
//    continent: 'NA',
//    iso_country: 'US',
//    iso_region: 'US-PA',
//    municipality: 'Bensalem',
//    scheduled_service: 'no',
//    gps_code: '00A',
//    iata_code: '',
//    local_code: '00A',
//    home_link: '',
//    wikipedia_link: '',
//    keywords: ''
//}

