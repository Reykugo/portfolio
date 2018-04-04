import isEmpty from 'lodash/isEmpty';
import jwt from 'jsonwebtoken';
import config from './config'
/**
 check all value in json and return true if one of this values is empty or undefined
* @param {JSON} params json with all params to check
* @return {boolean}
**/
export function isParamsAreEmptyOrUndefined(params){
    for(i in params){
        if (isEmpty(params[i])){
            return true;
        }
    }
    return false;
}

export function isAuthenticate(req, res, next){
    var token = req.body.token || req.query.token || req.headers["x-access-token"]  || req.headers["authorization"] || req.cookies.token;
    if(token){
        token = token.split(" ")[1]
        jwt.verify(token, config.superSecret, function(err, decoded){
            if(err){
                console.log(err)
                return res.status(403).send({success:false, error:"Failed to authenticate token"});
            }else{
                req.session = decoded;
                next();
            }
        })
    }else{
        return res.status(403).send({
            sucess: false,
            error: "No token provided"
        })
    }
}