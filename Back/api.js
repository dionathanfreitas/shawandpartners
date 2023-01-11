const axios = require("axios");

module.exports ={
    async findUsersGitHub(req, res){
        const { name } = req?.params;
        await axios.get("https://api.github.com/users/"+name).then((response)=>{
            return res.json(response.data);

        }).catch((err)=>{
            res.json({msg: "User not found! "+err})
        })
    },
    async listUsersGitHub(req, res){
        await axios.get("https://api.github.com/users").then((response)=>{
            return res.json(response.data);

        }).catch((err)=>{
            res.json({msg: "User not found! "+err})
        })
    }
};