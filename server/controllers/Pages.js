

exports.home = async (req, res) => {
    try {
    
        res.render('index', {title: 'Home page'});

    } catch (error) {

        res.status(500).send({message: error.message || "Error Occured"});
    }
}

exports.contact = async (req, res)=>{
    try {
    
        res.render('contact', {title: 'Contact-Us'});

    } catch (error) {

        res.status(500).send({message: error.message || "Error Occured"});
    }
}

exports.about = async (req, res)=>{
    try {
    
        res.render('about', {title: 'About-Us'});

    } catch (error) {

        res.status(500).send({message: error.message || "Error Occured"});
    }
}