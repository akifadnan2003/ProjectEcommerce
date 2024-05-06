const homepage = async (req, res) => {
    const locals = {
        title: 'Home Page',
        description: 'This is the home page'
    }
    res.render('index');
}

const register = async (req, res) => {
    const locals = {
        title: 'Register',
        description: 'This is the registration page'
    }
    res.render('register.ejs', locals);
}

export {homepage, register}