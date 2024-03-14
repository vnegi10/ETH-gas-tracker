using Pkg
Pkg.activate(@__DIR__)
Pkg.instantiate()

using JSON, HTTP, Dates

key = JSON.parsefile("/home/vikas/Documents/Infura_API_key.json")
const URL = "https://mainnet.infura.io/v3/$(key["API_key"])"

include("helpers.jl")

fee_dict = get_basefee_all(500)

JSON.print(stdout, fee_dict)