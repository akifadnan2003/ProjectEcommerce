/* 
* GET /
* Homepage
*/
exports.homepage = async (req, res) => {
    const locals = {
        title: 'Home Page',
        description: 'This is the home page'
    }
    
    res.render('index.ejs', locals);
}

