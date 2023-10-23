const express = require('express');
const PosterGeneratorService = require('./PosterGeneratorService')


class PosterGeneratorController {

    constructor(){
        this.app = express();
        this.app.get('/poster/generate' , this.generatePoster.bind(this))
    }

    async generatePoster(req , res){
        try{
          const scale = parseFloat(req.query.scale) || 1;
          const posterGenerator = new PosterGeneratorService(scale)
          const screenshot = await posterGenerator.generatePoster();

          res.set('Content-Type', 'image/png');
          
          res.send(screenshot)

        }catch(err){
           throw new Error('Error generating poster' + err.message)
        }
    }


    startServer(port) { 
        this.app.listen(port , () => {
            console.log("Server Start");
        })
    }
}


module.exports = PosterGeneratorController