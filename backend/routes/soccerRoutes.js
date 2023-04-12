import { addNewPlayer, getPlayers, getPlayerWithID, updatePlayer, deletePlayer } from '../controllers/playerControllers';

const routes = (app) => {
    app.route('/players')
    //GET endpoint
    .get(getPlayers)
    //POST endpoint
        .post(addNewPlayer);

    app.route('/player/:PlayerId')
        //GET specific player
        .get(getPlayerWithID)

        //UPDATE specific player
        .put(updatePlayer)
        
        // Delete player
        .delete(deletePlayer)

}

export default routes;