import User from "../models/user.model";

export const signup  = async(req, res) => {
   try{
    const {fullName , username , email , password} = req.body;

    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!emailRegex.test(email)) {
        return res.status(400).json({error : "Invalid email format"});
    }

    const exsitingUser = await User.findOne({username});
    if(exsitingUser){
        return res.status(400).json({error : "Username is already is taken"});
    }

    const exsitingEmail = await User.findOne({email});
    if(email){
        return res.status(400).json({error : "Email is already is taken"});
    }






   }catch(error){

   }
};
export const login = async(req, res) => {
    res.json({
        data : "you hit the login page",
    });
};
export const logout  = async(req  ,res) => {
    res.json({
        data : "you hit the logout page",
    });
};

