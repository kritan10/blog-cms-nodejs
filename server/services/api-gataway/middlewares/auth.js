import jwt from 'jsonwebtoken'
import connection from "../../../db/connection.js";

const protect = async (req, res, next) => {

    let token;
    const jwtsecret = 'asdfgh'

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        // Token from bearer authorization header
        token = req.headers.authorization.split(' ')[1];

    } else if (req.headers.cookie) {
        // Token from cookies
        token = req.headers.cookie.loginToken;
    }

    else {
        return next(res.send("token error"))
    }

    if (!token) {
        return next(
            res.send('no access')
        )
    }

    try {
        // Verify token 
        const decoded = jwt.verify(token, jwtsecret);
        const [rows] = await connection.promise().query('SELECT * FROM users WHERE id = ?', [decoded.id]);
        if (rows.length === 0) {
            return next(
                res.send('Access Denied. User not found.')
            );
        }
        req.user = rows[0];
        next()
    } catch (err) {
        return next(
            res.status(500).send(`Assess Denied. eroor verify ${err}`)
        )
    }
}


// const authorization = (...roles) => {

//     return (req, res, next) => {
//         if (!roles.includes(req?.user?.role)) {

//             return next(
//                 res.send(`Unauthorized.`)
//             )
//         }
//         next();
//     }
// }


const adminAuthorization = async (req ,res, next) => {


    let token;
    const jwtsecret = 'asdfgh'

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        // Token from bearer authorization header
        token = req.headers.authorization.split(' ')[1];

    } else if (req.headers.cookie) {
        // Token from cookies
        token = req.headers.cookie.loginToken;
    }

    else {
        return next(res.send("token error"))
    }

    if (!token) {
        return next(
            res.send('no access')
        )
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, jwtsecret);
        const [rows] = await connection.promise().query('SELECT * FROM users WHERE id = ?', [decoded.id]);
        if (rows[0].role =='admin' ) {
            return next()
        }
    }
    catch (err) {
     return next(
        res.status(400).send(err)
     )    }
}


const userAuthorization = async (req ,res, next) => {


    let token;
    const jwtsecret = 'asdfgh'

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        // Token from bearer authorization header
        token = req.headers.authorization.split(' ')[1];

    } else if (req.headers.cookie) {
        // Token from cookies
        token = req.headers.cookie.loginToken;
    }

    else {
        return next(res.send("token error"))
    }

    if (!token) {
        return next(
            res.send('no access')
        )
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, jwtsecret);
        const [rows] = await connection.promise().query('SELECT * FROM users WHERE id = ?', [decoded.id]);
        if (rows[0].role) {
            return next()
        }
    }
    catch (err) {
     return next(
        res.status(400).send(err)
     )    }
}


export { protect, adminAuthorization, userAuthorization }