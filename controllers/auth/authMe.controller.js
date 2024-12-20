const AuthMe = async (req, res, next) => {
    return res.status(200).json({message: 'Check Auth route working fine'});
}

export default AuthMe;