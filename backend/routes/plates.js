const { Router } = require('express')
const faker = require('faker')

const Plates = require('../models/Plates');
const router = Router();

router.get('/', async (req, res) => {
    const plates = await Plates.find();

    res.render('index', {data: plates});
});

router.post('/', async (req, res) =>{

    const {name, info, price, imgPath} = req.body;
    const newPlate = new Plates({name, info, price, imgPath});
    
    await newPlate.save();

    res.send({msg: 'Plate Saved', newPlate})
});

router.put('/:id', async (req, res)=>{

    await Plates.findByIdAndUpdate(req.params.id, req.body);

    res.send({msg: 'Plate has been Updated'})
});

router.delete('/:id', async (req, res) => {
    const plate = await Plates.findByIdAndDelete(req.params.id);
    console.log(plate)
    res.send({msg: 'Plate Deleted', plate: plate})
});


router.get('/generate-data', async (req, res) => {

    for(i=0; i<10; i++){
        const name = faker.commerce.productName();
        const info = faker.commerce.productMaterial();
        const price = faker.commerce.price();
        const imgPath = faker.image.imageUrl();

        const newPlate = new Plates({name, info, price, imgPath});

        await newPlate.save();

        console.log(newPlate);
         console.log(faker.image.imageUrl());

    }
    res.send({msg: 'Fill Data is Success'})
});





module.exports = router;