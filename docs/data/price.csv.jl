using Pkg
Pkg.activate(@__DIR__)
Pkg.instantiate()

using CoinbaseProExchange, CSV

# Get historical data for every minute
# df_candles, closest_match = show_historical_data(pair, interval)
df_price, _ = show_historical_data("ETH-EUR", 60)

# Select data for last 120 minutes
CSV.write(stdout, df_price[end-120+1:end, :])