const axios = require("axios");
const token = "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";
module.exports ={
    async findUsersGitHub(req, res){
        const name = req?.params;
        
        const url = `https://api.github.com/search/users?q=${name.login}&api_key=${token}`;

        await axios.get(url).then((response)=>{
        return res.json(response.data);

        }).catch((err)=>{
            res.json({msg: "User not found! "+err})
        })
    },
    async usersDetailsGitHub(req, res){
        const name = req?.params;
        
        const url = `https://api.github.com/users/${name.login}?api_key=${token}`;

        await axios.get(url).then((response)=>{
        return res.json(response.data);

        }).catch((err)=>{
            res.json({msg: "User not found! "+err})
        })
    }, async usersReposGitHub(req, res){
        const name = req?.params;
        
        const url = `https://api.github.com/users/${name.login}/repos?api_key=${token}`;

        await axios.get(url).then((response)=>{
        return res.json(response.data);

        }).catch((err)=>{
            res.json({msg: "User not found! "+err})
        })
    },
    async listUsersGitHub(rqst, rsps){
        await axios.get(`https://api.github.com/users?api_key=${token}`).then((response)=>{
            return rsps.json(response.data);

        }).catch((err)=>{
            rsps.json({msg: "Users not found! "+err})
        })
    }
};