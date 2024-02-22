function generate_body(RPC_name::String, params)

    body_dict = Dict("method"  => RPC_name,
                     "params"  => params,
                     "id"      => 1,
                     "jsonrpc" => "2.0")
    
    body = JSON.json(body_dict)

    return body
end

function post_request(RPC_name::String; params)

    url = URL

    body = generate_body(RPC_name, params)
    headers = ["Content-Type" => "application/json"]

    response = HTTP.request(
        "POST",
        url,
        headers,
        body;
        verbose = 0,
        retries = 2
    )

    response_dict = String(response.body) |> JSON.parse

    return response_dict
end

function show_latest_block()

    params = []
    response_dict = post_request("eth_blockNumber", params = params)

    result = response_dict["result"]

    return parse(Int, result[3:end], base = 16)
end

function show_block_data(block_number::Int64)

    # https://ethereum.org/en/developers/docs/apis/json-rpc/#conventions
    # Encode as hex, prefix with "0x"
    block = "0x" * string(block_number; base = 16)

    params = [block, false]

    response_dict = post_request("eth_getBlockByNumber", params = params)

    return response_dict["result"]
end

function get_basefee_all(num_blocks::Int64)

    block_latest = show_latest_block()
    block_start = block_latest - num_blocks

    fee_dict = Dict[]

    for i_block in block_start:block_latest

        result = show_block_data(i_block)

        # 1 gwei = 10^9 wei
        fee_gwei = parse(Int, result["baseFeePerGas"][3:end], base = 16)/10^9

        block_time = result["timestamp"]
        unix_time = parse(Int, block_time[3:end], base = 16)

        push!(fee_dict, Dict("fee" => fee_gwei,
                             "time" => unix2datetime(unix_time)))

    end

    return fee_dict
end