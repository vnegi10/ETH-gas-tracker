#!/usr/bin/env julia

using Pkg
Pkg.activate(@__DIR__)
Pkg.instantiate()

using JSON, HTTP, Dates

include("helpers.jl")

key = JSON.parsefile("/home/vikas/Documents/Infura_API_key.json")
const URL = "https://mainnet.infura.io/v3/$(key["API_key"])"

fee_dict = get_basefee_all(10)

JSON.print(stdout, fee_dict)