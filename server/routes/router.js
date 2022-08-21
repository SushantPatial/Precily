const router = require('express').Router();
const Panel = require('../models/Panel');

router.get("/getData", async function(req, res) {
    Panel.findOne({ id: 1 }, async function(err, found) {
        if (err) {
            console.log(err);
        } else {
            if (found) {
                res.status(201).json(found);
            } else {
                res.status(201).json();
            }
        }
    })
})

router.post('/add', async function(req, res) {
    const { panel1, panel2, panel3 } = req.body;
    
    if (!panel1 && !panel2 && !panel3) {
        res.status(400).json({
            "status": false,
            "message": "Please input some text to add"
        })
    } else {

        Panel.findOne({ id: 1 }, async function(err, found) {
            if (err) {
                console.log(err);
            } else {
                if (found) {
                    const updatedPanel = await Panel.updateOne({ _id: found._id }, {
                        panel1: panel1,
                        panel2: panel2,
                        panel3: panel3,
                        count: found.count + 1
                    });

                    res.status(201).json(updatedPanel);
                } else {
                    const newPanel = new Panel({
                        id: 1,
                        panel1: panel1,
                        panel2: panel2,
                        panel3: panel3,
                        count: 1
                    });

                    const savedPanel = await newPanel.save();

                    res.status(201).json(savedPanel);
                }
            }
        })
    }
});

router.patch('/update', async function(req, res) {
    let { panel1, panel2, panel3 } = req.body;

    if (!panel1 && !panel2 && !panel3) {
        res.status(400).json({
            "status": false,
            "message": "Please input some text to update"
        })
    } else {

        Panel.findOne({ id: 1 }, async function(err, found) {
            if (err) {
                console.log(err);
            } else {
                if (found) {
                    const updatedPanel = await Panel.updateOne({ _id : found._id }, {
                        panel1: panel1 !== "" ? panel1 : found.panel1,
                        panel2: panel2 !== "" ? panel2 : found.panel2,
                        panel3: panel3 !== "" ? panel3 : found.panel3,
                        count: found.count + 1
                    })

                    res.status(201).json(updatedPanel);
                } else {
                    res.status(404).json({
                        "status": false,
                        "message": "Please add data first before updating"
                    });
                }
            }
        });
    }
});

router.get("/count", async function(req, res) {
    Panel.findOne({ id: 1 }, async function(err, found) {
        if (err) {
            console.log(err);
        } else {
            if (found) {
                res.status(200).json(found.count);
            } else {
                res.status(200).json(0);
            }
        }
    })
})

module.exports = router;