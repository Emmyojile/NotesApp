exports.homePage = async (req, res) => {
    try {
        const locals = {
            title: 'Notes App',
            description: 'A Nodejs Notes App'
        }
    
        res.render('index', {locals, layout: '../views/layouts/home'});
    } catch (error) {
        console.log(error);
    }
}


exports.aboutPage = async (req, res) => {
    try {
        const locals = {
            title: 'About Page Of Notes App',
            description: 'A Nodejs Notes App'
        }
    
        res.render('about', locals,);
    } catch (error) {
        console.log(error);
    }
}