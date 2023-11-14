const http =  require('http')   // require 3ibara 3ala import lel module http elli bch nasn3ou bih el server

const server = http.createServer((req,res)=>{
    //res.statusCode=404  hathi bch ngoul lel client raw el page hathi ma3endich error 404
    //res.statusCode=200     // hathi ma3naha e server jawbek man8ir 7atta mochkel w kol chay yemchi mrigl
    // res.setHeader('content-type','text/html')         //hathi heya nawa3 el erje3 (content type : html, taswira, JSON )

    // res.write('Welcome \n')
    // res.write('welcome to the server of baha\n')
    // res.write('Tunisia')
    // res.end() // hathi ma3naha aya ab3eth tawa XD w marra barka nektboha

    if(req.url=='/home'){
        res.statusCode=200
        res.write('welcome from home')
    }else if(req.url=='/contact'){
        res.statusCode=200
        res.write('welcome from contact')
    }else if(req.url=='/about'){
        res.statusCode=200
        res.write('welcome from about')
    }else{
        res.statusCode=404
        res.write('not found')
    }


    res.end()




})    // http howa object metkawen mn des fonctions mn da5el

server.listen(3500,()=>{console.log('server is running with port 3500')}) // hna tnadi fel server b esmah elli howa  localhost:3500 el port mta3ah