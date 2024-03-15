using Pkg
Pkg.activate(@__DIR__)
Pkg.instantiate()

using CoinbaseProExchange, CSV

# Get historical data for every minute
df_price = show_historical_data("ETH-EUR", 60)

# Select data for last 100 minutes
CSV.write(stdout, last(df_price, 100)[1])