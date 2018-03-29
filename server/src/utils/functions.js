import isEmpty from 'lodash/isEmpty';

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
    var token = req.body.token || req.query.token || req.headers["x-access-token"] || req.cookies.token;
    if(token){
        jwt.verify(token, config.superSecret, function(err, decoded){
            if(err){
                console.log(err)
                return res.status(403).send({success:false, message:"Failed to authenticate token"});
            }else{
                req.session = decoded;
                next();
            }
        })
    }else{
        return res.status(403).send({
            sucess: false,
            message: "No token provided"
        })
    }
}