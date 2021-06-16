module.exports = (req, res, next) => {
    //Destructure body
    const { name, password,email } = req.body

    const validEmail = (userEmail) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
    }

    if (req.path === '/login') {
        if (![name, password].every(Boolean)) {
            return res.status(401).json("Missing Credentials1");
        }
    }
    else if (req.path ==='/register'){
        console.log(email);
        if (![email, name, password].every(Boolean)) {
           
            return res.status(401).json("Missing Credentials");
        } else if (!validEmail(email)) {
            return res.status(401).json("Invalid Email");
        }
    }
    next()
}