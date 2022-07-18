const router = require('express').Router();
const Category = require('../models/Category');

// CREATE NEW CATEGORY
router.post('/', async (req, res) => {
  const newCat = new Category(req.body);
  try {
    const savedCat = await newCat.save();
    res.status(200).json(savedCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* // UPDATE CATEGORY
router.put('/:id', async (req, res) => {
  try {
    const cats = await Category.findOne(req.params.subject);
    if (cats.subject === req.body.subject) {
      try {
        const updatedCat = await Category.findOneAndUpdate(
          req.params.subject,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedCat);
      } catch (err) {
        res.status(500).json(err);
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE CATEGORY
router.delete('/', async (req, res) => {
  try {
    const cat = await Category.findOneAndDelete(req.params.subject);
    if (cat.subject === req.body.subject) {
      try {
        await cat.delete();
        res.status(200).json('Category has been deleted...');
      } catch (err) {
        res.status(500).json(err);
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET CATEGORY
router.get('/', async (req, res) => {
  try {
    const cat = await Category.findOne(req.params.subject);
    res.status(200).json(cat);
  } catch (err) {
    res.status(500).json(err);
  }
}); */

// GET CATEGORY
router.get('/', async (req, res) => {
  try {
    const cats = await Category.find();
    res.status(200).json(cats);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
