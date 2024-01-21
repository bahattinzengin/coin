import axios from "axios"

axios

export default class MainPageModel {
    static async getCoins (page){
        const params={
            offset:(page-1)*15,
            limit:15
        }

        try{

const res=await axios.get('https://api.coincap.io/v2/assets', {params})

// console.log(res);

return res.data.data

        }
        catch{
            console.log(err)
        }
    }
}