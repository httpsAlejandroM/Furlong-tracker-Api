import app from "./app";
import { sequelize } from "./db";

const port = process.env.PORT || 3000

sequelize.sync({force:true}).then(()=>{
    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
        
    })
})
