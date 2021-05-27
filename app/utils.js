export const parseRequestUrl = () =>{
    const url = document.location.hash.toLowerCase();
    url.href;
    console.log(url);
    //"/termek/:id": ezt kell feldarabolni
    const request = url.split("/");
    return{
     //   hostname: request[0],
        resource: request[1], //termek/"
        id: request[2], //termék idje "/:id":
        action: request[3],
    };
};