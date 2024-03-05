import { json } from 'express'
import { db } from '../firebase.js'

export const getProducts = async (req, res) => {
    const querySnapshot = await db.collection('productos').get()

    const products = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))

    res.json(products);
    console.log(products)
}

export const getProduct = async (req, res) => {
    const {id} = req.params

    const doc = await db.collection('productos').doc(id).get()

    res.json(doc.data());
}

export const postProduct = async (req, res) => {
    const { id, description, name, price, url } = req.body

    await db.collection('productos').doc(id).set({
        description, 
        name, 
        price, 
        url
    })

    res.send('Nuevo producto creado')
}

export const updateProduct = async (req, res) => {
    const {id} = req.params

    const doc = await db.collection('productos').doc(id).update(req.body)

    res.send('Producto actualizado')
}

export const deleteProduct = async (req, res) => {
    const {id} = req.params

    await db.collection('productos').doc(id).delete()

    res.send('Producto eliminado')
}