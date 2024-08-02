const isAuthenticated = (req, res, next) => {
    
}

const isAdmin = (req, res, next) => {
    if(!req.body.role.toLowerCase() !== 'admin') next();    
}

module.exports = {
    isAuthenticated, isAdmin
}