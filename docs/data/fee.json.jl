using Pkg
Pkg.activate(@__DIR__)
Pkg.instantiate()

using JSON, HTTP, Dates

local_file = "/home/vikas/Documents/Infura_API_key.json"
key = ""

if isfile(local_file)
    key = JSON.parsefile(local_file)
    key = key["API_key"]
else
    if haskey(ENV, "INFURA_KEY")
        key = ENV["INFURA_KEY"]
    else
        error("API key for Infura has not been provided!")
    end
end

const URL = "https://mainnet.infura.io/v3/$(key)"

include("helpers.jl")

# 1500 blocks = 5 hours of historical data (12 seconds per block)
fee_dict = get_basefee_all(1500)

JSON.print(stdout, fee_dict)