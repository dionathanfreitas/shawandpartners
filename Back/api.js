const axios = require("axios");
const token = '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';
module.exports ={
    async findUsersGitHub(req, res){
        const { name } = req?.params;
        await axios.get(`https://api.github.com/users/${name}?${token}`).then((response)=>{
            return res.json(response.data);

        }).catch((err)=>{
            res.json({msg: "User not found! "+err})
        })
    },
    async listUsersGitHub(rqst, rsps){
        await axios.get(`https://api.github.com/users?token=${token}`).then((response)=>{
            return rsps.json(response.data);

        }).catch((err)=>{
            rsps.json({msg: "Users not found! "+err})
        })
    }
};