import { Request } from "./model/Request"
import { RequestBearerAuth } from "./model/RequestBearerAuth"

let req = new Request('GET')
req.send('yandex')
 
req = new RequestBearerAuth(new Request('POST'))
req.send('youtube')

