import mongoose from 'mongoose';
import { PlayerSchema} from '../models/playerModel';

const Player = mongoose.model('Player', PlayerSchema);

export const addNewPlayer = async (req, res) => {
    let newPlayer = new Player(req.body);
    try {
        const player = await newPlayer.save({});
        res.json(player);
    } catch (err) {
        res.send(err)
    }
}

export const getPlayers = async (req, res) => {
    try {
        const player = await Player.find({});
        res.json(player);
    } catch (err) {
        res.send(err)
    }
}

export const getPlayerWithID = async (req, res) => {
    try {
        const player = await Player.findById(req.params.PlayerId);
        res.json(player);
    } catch (err) {
        res.send(err)
    }
}

export const updatePlayer = async (req, res) => {
    try {
        const player = await Player.findOneAndUpdate({_id: req.params.PlayerId}, req.body, {new:true});
        res.json(player);
    } catch (err) {
        res.send(err)
    }
}

export const deletePlayer = async (req, res) => {
    try {
        const player = await Player.findOneAndRemove({_id: req.params.PlayerId}, req.body, {new:true});
        res.json({message: "Success"});
    } catch (err) {
        res.send(err)
    }
}