import app from "./app";
import { sequelize } from "./db";


sequelize.sync({force:true}).then(()=>{
    app.listen(3000, () => {
        console.log(`Listening on port 3000`);
        
    })
})
