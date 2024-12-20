const Verify = async (req, res, next) => {
    return res.status(200).json({message: 'Verify Account route working fine'});

}

export default Verify;