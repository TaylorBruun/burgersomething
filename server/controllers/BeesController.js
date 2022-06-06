import { beesService } from "../services/BeesService"
import BaseController from "../utils/BaseController"



export class BeesController extends BaseController{
    constructor(){
        super('api/bees')
        this.router
            .get('', this.getBees)
            .post('', this.createBee)
            .delete('/:name', this.deleteBee)
            .put('', this.updateBee)
            // .patch('/:name', this.patchBee)
    }
    // async patchBee(req, res, next) {
    //     try {
    //         let beePiece = await beesService.patchBee(req.params.name, req.body)
    //         return res.send(beePiece)
    //     } catch (error) {
    //         next(error)
    //     }
    // }
    async updateBee(req, res, next) {
        try {
            let bee = await beesService.updateBee(req.body)
            return res.send(bee)
        } catch (error) {
            next(error)
        }
    }
    async deleteBee(req, res, next) {
        try {
            let message = await beesService.deleteBee(req.params.name)
            return res.send(message)
        } catch (error) {
            next(error)
        }
    }
    async createBee(req, res, next) {
        try {
            let bee = await beesService.createBee(req.body)
            return res.send(bee)
        } catch (error) {
            next(error)
        }
    }
   async getBees(req, res, next) {
     try {
         let bees = await beesService.getBees()
         return res.send(bees)
     } catch (error) {
         next(error)
     }
}
}