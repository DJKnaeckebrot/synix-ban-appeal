import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";

class Success extends Component {
    render() {
        return (
            <Grid item>
                <h1 style={{textAlign: "center", color: "#00e676"}}>Das hat geklappt! Dein Antrag wird nun von den Mods überprüft!</h1>
                <h4>Bitte gib uns Zeit deinen Antrag zu überprüfen. Das Ausnutzen dieses Systems führt zu einem perma-ban.</h4>
            </Grid>
        );
    }
}

export default Success;