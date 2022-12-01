package com.kap.restapi.model


import org.springframework.data.annotation.Id

data class CountryCount(
    @Id
    val id:String,
    var count:Int,
)
