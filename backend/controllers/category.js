
import Category from '../models/category';
import fs from 'fs';
import { request } from 'http';
import _ from 'lodash';
import { body, validationResult } from 'express-validator';


export const create = async(req, res) => {
    
    await body('name').trim().notEmpty().withMessage('Name error').run(req);
    await body('content').trim().notEmpty().withMessage('Content error').run(req);
    await body('description').trim().notEmpty().withMessage('Description error').run(req);

    const check = validationResult(req);
    if(check.isEmpty()){
        const category = new Category(req.body);
        category.save((err, data) => {
            if(err){
                res.sendStatus(400);
            }
            res.json({ data, message: "Add new category ok"});
        })
    }else res.sendStatus(404)
}

export const categoryById = (req, res, next, id) => {
    Category.findById(id).exec((err, category) => {
        if(err || !category){
            res.sendStatus(400);
        }
        req.category = category;
        next();
    })
}

export const read = (req, res) =>{
    return res.json(req.category)
}

export const  remove = (req, res) => {
    let category = req.category;
    category.remove((err, deleteCategory) => {
        if(err){
            res.sendStatus(400);
        }
        res.json({
            deleteCategory,
            message: "Xoa danh muc thanh cong"
        })
    })
}
export const list = (req, res)  => {
    Category.find((err, data) => {
        if(err){
            res.sendStatus(400);
        }
        res.json(data)
    })
}

export const update = (req, res) => {
    let category = req.category;
    category = _.assignIn(category, req.body);
    console.log(category);
    category.save((err, data) => {
        if(err){
            console.log(err.message);
            return res.status(400).json({ message: 'error'})
        }
        return res.json({ data, message: 'update category OK'})
    })   
}