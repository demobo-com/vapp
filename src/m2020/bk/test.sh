curl -X POST 'https://api-stg.syf.com/oauth2/v1/token' -d 'grant_type=client_credentials&client_id=tG7IIcGGiYz6fRLArCHUvkfjZfqBKOkl&client_secret=EzYzsVqUtwh3YRwP'

curl -X GET -H "Authorization: Bearer D3GODaLu0SPfWop7KU6VQe9L6r1Z" "https://api-stg.syf.com/m2020/credit/customers/1/transactions"


{
    "retailer": {
        "type": "string",
        "description": "The name of the retailer a customer has an account with and has made a purchase from"
    },
    "date": {
        "type": "string",
        "description": "The date the customer made the transaction on"
    },
    "amount": {
        "type": "string",
        "description": "The amount of the transaction on the customer's account"
    },
    "itemType": {
        "type": "string",
        "description": "The item a customer has purchased with their card or a charge on their account such as interest and late fees. Also tracks credits on the customer's account such as payments"
    },
    "links": {
        "href": {
            "type": "string",
            "description": "A link to the next retailer/card the customer has on their account"
        },
        "rel": {
            "type": "string",
            "description": "The next transaction"
        },
        "method": {
            "type": "string",
            "description": "Method is always GET"
        }
    }
}
