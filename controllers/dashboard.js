const Notes = require("../models/Notes");
const Note = require("../models/Notes");
const mongoose = require("mongoose");

//DASHBOARD
exports.dashboard = async (req, res) => {
  try {
    const locals = {
      title: "Dashboard",
      description: "Notes User Dashboard",
    };

    let perPage = 12;
    let page = req.query.page || 1;

    const notes = await Notes.aggregate([
        {
            $sort: {
                updatedAt: -1,
            }
        },
        { $match: { user: new mongoose.Types.ObjectId(req.user.id) }},
        {
            $project: {
                title: { $substr: ['$title', 0, 30]},
                body: { $substr: ['$body', 0, 100]},
            }
        }
    ])
    .skip(perPage * page - perPage)
    .limit(perPage)
    .exec();

    const count = await Note.countDocuments().exec();

    res.render("dashboard/index", {
        userName: req.user.firstName,
        locals,
        notes,
        layout: "../views/layouts/dashboard",
        current: page,
        pages: Math.ceil(count / perPage)
      });

  } catch (error) {
    console.log(error);
  }
};

//View Specific Note
exports.dashboardViewNote = async (req, res) => {
    const note = await Note.findById({ _id: req.params.id })
      .where({ user: req.user.id })
      .lean();
  
    if (note) {
      res.render("dashboard/view-note", {
        noteID: req.params.id,
        note,
        layout: "../views/layouts/dashboard",
      });
    } else {
      res.send("Something went wrong.");
    }
  };

//Update Specific Notes
exports.dashboardUpdateNote = async (req,res) => {
    try {
        await Note.findOneAndUpdate(
            { _id: req.params.id},
            { title: req.body.title, body: req.body.body, updatedAt: Date.now() }
        ).where({ user: req.user.id });

        res.redirect('/dashboard');
    } catch (error) {
        console.log(error);
    }
}

//Delete Specific Note
exports.dashboardDeleteNote = async (req,res) => {
    try {
        await Note.deleteOne({ _id: req.params.id}).where({user: req.user.id});
        res.redirect('/dashboard');
    } catch (error) {
        console.log(error);
    }
}

//View Add NotePage
exports.dashboardAddNotePage = async (req,res) => {
    res.render('dashboard/add', {
        layout: '../views/layouts/dashboard'
    });
}

// Add Notes 
exports.dashboardAddNote = async (req, res) => {
  try {
    req.body.user = req.user.id;
    await Note.create(req.body);
    res.redirect("/dashboard");
  } catch (error) {
    console.log(error);
  }
};

//Get Search PAge
exports.dashboardSearch = async (req, res) => {
  try {
    res.render('dashboard/search', {
      searchResults: '',
      layout: '../views/layouts/dashboard'
    })
  } catch (error) {
    console.log(error);
  }
};

exports.dashboardGetSearch = async (req, res) => {
  try {
    let searchTerm = req.body.searchTerm;
    const searchNoSpecialChars = searchTerm.replace(/[^a-zA-Z0-9]/g, "");

    const searchResults = await Note.find({
      $or: [
        { title: { $regex: new RegExp(searchNoSpecialChars, 'i') }},
        { body: { $regex: new RegExp(searchNoSpecialChars, 'i') }},
      ]
    }).where({ user: req.user.id })

    res.render('dashboard/search', {
      searchResults,
      layout: '../views/layouts/dashboard'
    })

  } catch (error) {
    console.log(error);
  }
};