const testimonials = require('../models/testimonialModel');

exports.addTestimonialController = async(req,res) => {
    const {name , email , message} = req.body;
    try{
        console.log(name , email , message );
        const newTestimonial = new testimonials({
            name,email,message
        });
        await newTestimonial.save();
        res.status(200).json(newTestimonial);
    }catch(error){
        res.status(500).json(error)
    }
}

exports.getAllTestimonials = async(req,res) => {
    try{
        const allTestimonials = await testimonials.find()
        res.status(200).json(allTestimonials)
    }catch(error){
        res.status(500).json(error)
    }
}

exports.updateTestimonialController = async(req,res) =>{
    const {id } = req.params;
    const {status } = req.body;
    console.log(id, status)
    try{
        const findTestimonial = await testimonials.find({_id:id})
        console.log(findTestimonial)
        if(findTestimonial){
            const update = await testimonials.findByIdAndUpdate({_id:id},{
                email:findTestimonial.email,
                name:findTestimonial.name,
                message:findTestimonial.message,
                status,
            },{new:true});
            res.status(200).json(update)
        }else{
            res.status(401).json('Something went wrong')
        }

    }catch(error){
        res.status(500).json(error)
    }
}

exports.getAllApprovedTestimonials = async(req,res) => {
    try{
        const allApprovedTestimonials = await testimonials.find({status:'approved'})
        res.status(200).json(allApprovedTestimonials);
    }catch(error){
        res.status(500).json(error)
    }
}